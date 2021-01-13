## Visual Studio Code git初始化过程

- 安装git软件
- 在settings.json中配置git安装目录信息

```json
{
    //...
    "git.path": "C:/Program Files/Git/bin/git.exe",
    "terminal.integrated.shell.windows": "C:/Program Files/Git/bin/bash.exe",
    "git.autofetch": true
}
```

- 初始化项目：在项目目录执行`git init`初始化项目
- 设置全局用户信息

```shell
git config --global user.email "you@example.com"
git config --global user.password "your password"
```

- 添加变动到仓库

```shell
git add .
```

- 添加首次提交信息

```
git commint -m "first commint"
```

- 这是远程仓库地址

```shell
git remote add origin "https://github.com/AiguangLi/JavaScriptBeginner.git"
```

- 推送到分支（创建分支)

```shell
git push --set-upstream origin master
```

- 切换分支

```shell
git checkout main
```

- `git merge master`提示*refusing to merge unrelated histories*的解决办法

原因是两个仓库没有关联，可以在需要合并的分支（main)上拉取master分支代码，并允许历史不关联。

```shell
git pull origin master --allow-unrelated-histories
```

之后就可以合并代码了。
