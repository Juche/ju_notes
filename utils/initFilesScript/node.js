// node web 服务

import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const hostname = '127.0.0.1'
const port = 8081
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/plain')
  res.end('Hello World\n')
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// 读取文件
fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})

// 读取目录
fs.readdir(path.join(__dirname, 'public'), (err, files) => {
  if (err) {
    console.log(err)
  } else {
    console.log(files)
  }
})

// 创建目录
fs.mkdir(path.join(__dirname, 'test'), err => {
  if (err) {
    console.log(err)
  } else {
    console.log('目录创建成功')
  }
})

// 创建文件
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello World', err => {
  if (err) {
    console.log(err)
  } else {
    console.log('文件创建成功')
  }
})

// 删除文件
fs.unlink(path.join(__dirname, 'test', 'test.txt'), err => {
  if (err) {
    console.log(err)
  } else {
    console.log('文件删除成功')
  }
})

// 删除目录
fs.rmdir(path.join(__dirname, 'test'), err => {
  if (err) {
    console.log(err)
  } else {
    console.log('目录删除成功')
  }
})

// 监听文件变化
fs.watch(path.join(__dirname, 'index.html'), (event, filename) => {
  console.log(event, filename)
})

// 监听目录变化
fs.watch(path.join(__dirname, 'public'), (event, filename) => {
  console.log(event, filename)
})

// 复制文件
fs.copyFile(
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'test', 'index.html'),
  err => {
    if (err) {
      console.log(err)
    } else {
      console.log('文件复制成功')
    }
  },
)

// 复制目录
fs.copy(
  path.join(__dirname, 'public'),
  path.join(__dirname, 'test', 'public'),
  err => {
    if (err) {
      console.log(err)
    } else {
      console.log('目录复制成功')
    }
  },
)
