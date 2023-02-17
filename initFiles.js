import { stdin, stdout } from 'node:process';
import { appendFile, writeFile, readFileSync } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';

/**
 * 交互式获取配置数据
 * filePath 目标文件夹
 * fileList 文件列表
 */

stdout.write(`\x1b[33m请输入批量创建文件的配置文件(目录+完整文件名): \x1b[32;4;1m\t`);
stdin.resume();
stdin.setEncoding('utf-8');
stdin.on('data', async (data) => {
  stdin.pause();
  console.log('\x1b[33;24m输入的内容是：\x1b[102;1m' + data.trim() + '\x1b[0m');

  const file = data.trim();
  try {
    const ctt = await readFile(file, { encoding: 'utf8', withFileTypes: true });
    const { filePath, fileList } = JSON.parse(ctt);

    console.log(`🚀 ~ stdin.on ~ filePath`, filePath);
    console.log(`🚀 ~ stdin.on ~ fileList`, fileList);

    try {
      const path = await mkdir(filePath, { recursive: true });

      const msg = path ? `创建文件夹 ${path}` : '目标文件夹已存在';
      console.log(msg);
    } catch (err) {
      console.error(err.message);
    }

    for (const key in fileList) {
      console.log(`🚀 ~ file ${Number(key) + 1}. ${fileList[key]}`);
      const fileName = `${key}. ${fileList[key]}.js`;
      const comment = `/**
 * @${fileList[key]}
 */`;

      appendFile(`${filePath}/${fileName}`, comment, (err) => {
        err && console.log(`🚀 ~ appendFile ~ err`, err);
      }); // 无则创建,有则追加
      // writeFile(fileName, comment, (err) => {}); // 无则创建,有则覆盖
    }
  } catch (err) {
    console.log(`🚀 ~ stdin.on ~ err`, err);
  }
});
