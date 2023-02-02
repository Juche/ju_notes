# pnpm

## pnpm monorepo 使用

- 常用命令

```sh
# -F, --filter <package_name> 可以指定目标 package 执行任务
# pnpm --filter <package_selector> <command>
# pnpm i -F <package_name> <node_package>
pnpm -F @packages/components add lodash

# 这个命令表示在@packages/components安装@packages/utils
# 其中的@*表示默认同步最新版本，省去每次都要同步最新版本的问题
pnpm -F @packages/components add @packages/utils@*
```

- `pnpm-workspace.yaml` 配置

```yaml
packages:
  - 'packages/*'
  - 'projects/*'
```

- `package.json` 配置

```json
// 为防止使用其他的包管理器运行 npm install 或 yarn
// 可以将下面的这个 preinstall 脚本添加到您的 package.json：
// 运行 npm install 或 yarn，就会发生错误并且不会继续安装
"scripts": {
  "preinstall": "npx only-allow pnpm"
}

// type 字段指定使用ESModule模块化规范
"type": "module",

// 除了一些全局生效的命令之外，像我们可以按需求配置执行 project 的启动和打包
// root pkg.json
"script": {
    "dev:demo": "pnpm -F demo dev",
    "build:demo": "pnpm -F demo build"
}

// demo pkg.json
"scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
}

```
