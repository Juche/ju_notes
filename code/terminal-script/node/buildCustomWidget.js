const path = require('path');
const {
    exec
} = require('child_process');
const fs = require('fs');
const viewsUrl = './src/views/_customWidget';
const getConfig = () => {
    let params = {};
    process.argv
        .filter(e => e.startsWith("--"))
        .forEach(e => {
            const f = e.replace(/^--/, "");
            const parts = f.split("=");
            params[params[0]] = parts.slice(1).join("=");
            if (parts.length && parts[0]) {
                params[parts[0]] = parts.slice(1).join("=");
            }
        });
    return params;
};
let page = getConfig().page;


const execCmd = function (cmd, cwd) {
    return new Promise((res, rej) => {
        const process = exec(cmd, {
            encoding: "utf8",
            cwd
        }, async (error, stdout, stderr) => {
            error ? rej(error) : res({
                error,
                stdout,
                stderr
            })
        });
        process.stderr.on('data', data => console.log(data));
        process.stdout.on('data', data => console.log(data));
        process.stdout.on('close', data => {
            console.log(data);
            res(data);
        });
    });
};

const readdir = (file) => {
    return new Promise((resolve, reject) => {
        fs.readdir(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
const stat = (file) => {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

(async () => {
    let seed = []
    if (page) {
        if (!/\.vue$/.test(page)) {
            page = page + '.vue';
        }
        seed = [{
            p: viewsUrl,
            f: path.join(viewsUrl,page)
        }]
    } else {
        const srcViews = await readdir(viewsUrl);
        seed = srcViews.map((item) => {
            return {
                p: viewsUrl,
                f: path.join(viewsUrl, item)
            }
        })

    }

    let pages = [];
    let i = -1, item;
    while (item = seed[++i]) {
        if ((await stat(item.f)).isDirectory()) {
            let dir = await readdir(item.f);
            let dirFile = dir.map((sub) => {
                return {
                    p: item.f,
                    f: path.join(item.f, sub)
                }
            })
            seed = [...seed, ...dirFile];
        } else if (fs.existsSync(item.f)) {
            if (/\.vue/.test(item.f)) {
                pages.push(item.f);
            }
        }
    }

    pages = pages.map(item => {
        return item.replace(/\\+/g, '/')
    })
    pages = pages.filter(i=>i.indexOf('.def')==-1)
    console.log(pages);
    const promises = pages.length && pages.map((page) => {
        page = page.replace('src/views/_customWidget/', '').replace(/\.vue$/, '');
        let moduleName = 'v2-component-'+page.split('/')[page.split('/').length-1];
        //node ./node_modules/@vue/cli-service/bin/vue-cli-service.js build --target lib --dest src/v2CustomWidget/_panel/panel2 --name v2-component-panel2 ./src/views/_customWidget/_panel/panel2.vue
   
 console.log(moduleName);
        return execCmd(`node ./node_modules/@vue/cli-service/bin/vue-cli-service.js build --target lib --dest src/v2CustomWidget/${page} --name ${moduleName} ./src/views/_customWidget/${page}.vue`, process.cwd())
     })

    await Promise.all(promises)
})()


