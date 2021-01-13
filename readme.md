## Visual Studio Code git初始化过程

- 安装git软件
- 在settings.json中配置git安装目录信息

```json
{
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

- 添加变动到仓库(git add <file>也可以指定文件)

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

