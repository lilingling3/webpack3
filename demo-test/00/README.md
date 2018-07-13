##四个工具server  json-server, http-server, live-server, pushstate-server

1,json-server   快速“伪造”后台接口
npm install -g json-server
json-server data.json

Npm Script 一个任务执行者  package.json 文件里面使用 scripts 字段定义任务
npm run server
http://localhost:3000

2，http-server 为一个目录启动一个服务器
npm install -g http-server
cd /Users/sunflower/Documents/workspace/git_study/vue-sample
http-server

http://127.0.0.1:8080
http://192.168.0.100:8080

3，live-server  自动刷新,方便学习
npm instal -g live-server
cd /Users/sunflower/Documents/workspace/git_study/vue-sample

live-server

4,pushstate-server   本地搭建静态服务器，测试打包文件 
 npm install pushstate-server -g 
 pushstate-server dist 

## 以上网速不好，可以使用cnpm 下载



