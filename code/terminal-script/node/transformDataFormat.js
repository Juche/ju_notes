const fs= require('fs');

const contentStr=fs.readFileSync('./dataFormat/raw.js').toString();

const createFunction=(arr)=>{
    if(arr.length>2){
        const str=arr.join('\n');
        let name=str.match(/自定义函数名: ([^\n]+)/);
        let desp=str.match(/函数用途: ([^\n]+)/);


        name=name && name[1] && name[1].trim();
        desp=desp && desp[1] && desp[1].trim();


        if(name && desp){
            const path=`./dataFormat/${name}`;

            try{
                fs.mkdirSync(path);
            }catch(e){

            }

            fs.writeFileSync(`${path}/index.js`,str);
            fs.writeFileSync(`${path}/package.json`,JSON.stringify({
                "name": "@v2-format/"+name,
                "main": "index.js",
                "docs": {
                    "desp": desp,
                    "name": name,
                    "icon": "",
                    "category": "others",
                    "label": "",
                    "labelType": "front",
                    "belongTo": "function",
                    "hasReturn": true,
                    "returnValue": {
                        "name": "",
                        "desp": "",
                        "details": "",
                        "type": "string",
                        "defaultValue": ""
                    },
                    "params": []
                },
                "category": "others",
                "description": desp,
                "version": "6.0.0"
            }));
            fs.writeFileSync(`${path}/readme.md`, str);
            fs.writeFileSync(`${path}/.npmrc`,'https://npm.aui2.cn');
        }
       
    }
}

try{

    const lines=contentStr.split(/\n/);
    

    let arr=[];
    for(let i=0;i<lines.length;i++){
        let temp=lines[i];

        temp=temp && temp.toString().trim();

        if(temp){
            arr.push(temp);
        }else{
            createFunction(arr);

            arr=[];
        }
    }
    createFunction(arr);
}catch(e){
    
}


console.log(contentStr);



