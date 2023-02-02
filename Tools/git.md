# git

## 代码管理

### 项目 Git 设置

```sh
git config user.name "Juching"
git config user.email "azhucheng1@qq.com"
```

### 创建 git 仓库

```sh
mkdir XXX_PROJ
cd XXX_PROJ
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/juching/XXX_PROJ.git
git push -u origin "master"
```

### 已有仓库?

```sh
cd existing_git_repo
git remote add origin https://gitee.com/juching/XXX_PROJ.git
git push -u origin "master"
```

## 更改已有仓库地址

1. 删除本地仓库当前关联的无效远程地址，再为本地仓库添加新的远程仓库地址

```sh
git remote -v                       // 查看git对应的远程仓库地址
git remote rm origin                // 删除关联对应的远程仓库地址
git remote -v                       // 查看是否删除成功，如果没有任何返回结果，表示OK
git remote add origin "新的仓库地址" // 重新关联git远程仓库地址
```

1. 直接修改本地仓库所关联的远程仓库的地址

```sh
git remote                                 // 查看远程仓库名称：origin
git remote get-url origin                 // 查看远程仓库地址
git remote set-url origin "新的仓库地址"    // ( 如果未设置ssh-key，此处仓库地址为 http://... 开头)
```

1. 修改 .git/config 配置文件

```sh
cd .git      // 进入.git目录
vim config   // 修改config配置文件，快速找到remote "origin"下面的url并替换即可实现快速关联和修改
```

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
