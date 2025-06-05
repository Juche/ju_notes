# ju-log 重构

## 项目初始化

1. 新建项目仓库
2. 新建 vue3 + ts + vite 项目模板 `yarn create vite`
3. 将初始项目提交到远程仓库

```sh
git init
git remote add origin 远程仓库地址
# git push -u origin master
git add .
git commit -m 'xxx'
# 这里忘了先同步远程仓库代码
# 先撤销提交,合并远程代码再提交
git reset --soft HEAD~
git fetch  # 拉取仓库代码并解决冲突
# hint: Updates were rejected because the tip of your current branch is behind
# fatal: git pull origin master --allow-unrelated-histories
# 出现这个问题的最主要原因还是在于本地仓库和远程仓库实际上是独立的两个仓库
git pull origin master --allow-unrelated-histories
# 处理冲突然后重新提交
git add .
git commit -m 'xxx'
git push
# The current branch master has no upstream branch.
# To push the current branch and set the remote as upstream, use `git push --set-upstream origin master`
# 第一次提交要新建上传流
git push -u origin master
```
