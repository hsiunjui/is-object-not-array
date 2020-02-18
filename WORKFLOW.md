# 目标
测试npm包的发布流程
# 创建工程
- 在git仓库创建一个项目(本例选择在github上)
- 也可以在本地先创建一个git项目再提交到远程
```
git init
echo "# title" >> README.md
git add .
git commit -m"comment"
git remote add origin [仓库地址]
git push -u origin master
```
- 初始化package.json
```
npm init
fill some infomations
```
- create folders
```
src // 源代码
test // 测试
release // 发布结果
doc // 文档
example // 使用示例
```
# 构建工具
  ```
  npm i @babel/core @babel/preset-env babel-loader webpack webpack-cli --save-dev
  ```
- 创建webpack.config.js
```js
module.exports = {
    entry: '',
    output: {},
    module: {
        rules:  []
    }
}
```
- 创建.bablerc
```json
{
    "presets": ["@babel-preset-env"],
    "plugins": []
}
```
# 编译
- 全局安装webpack(已安装请忽略)
```
npm install –g webpack
npm install –g webpack-cli
```
- 配置package.json
```
    "release": "webpack",
```
- 运行编译命令
```
npm run release
```
# 测试
- 安装jest
```
npm install --save-dev jest
```
- 配置package.json
```
    "test": "jest"
```
- 运行测试用例
```
npm run test
```
# 示例
- 运行示例
```
npm run example
```
- 浏览器浏览
```
http://localhost:9090/example/index.html
```

# 文档发布
- 参见github pages流程
- 使用gitbook创建文档
```
npm i gitbook-cli gitbook -g
创建SUMMARY.md
gitbook init
gitbook build
```

# npm 发布
- 打tag
```
git tag -a tagName -m"comment"
git push origni tagName
```
- npm adduser
- npm login
- npm publish .