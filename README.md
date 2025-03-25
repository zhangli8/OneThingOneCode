# OneThingOneCode
项目描述：
通过扫描衣服上的二维码，从而验证衣服是否是正品，以及可以浏览该产品的详细信息。
产品没有绑定学生信息的时候，默认第一次扫描的人拥有绑定和解绑的功能
产品绑定后，则除了绑定用户本人之外，所有其他扫描该码则都只能查看学生的信息。

uni-app version: 3.0.0
node version: 22.14.0
vue version: 3.4.21
typescript version: 4.9.5
postcss version: 8.5.3
tailwindcss


开发环境搭建：
1. docker pull node:22.14.0
2. docker run -it node:22.14.0 bash
3. npm install -g pnpm 
4. pnpm --version 
5. docker ps -a
6. docker commit xxxxxxx mynode:22.14
7. windows： docker run -it --network=host -p 3000:3000 -v ${PWD}:/app mynode:22.14 bash
8. mac： docker run -it --network=host -p 3000:3000 -v $(pwd)/:/app my-node:22.14.0 bash


框架：uni-app
包管理器：pnpm

运行步骤：
1. pnpm install
2. pnpm run dev:mp-weixin

发布流程：
1. pnpm run build:mp-weixin
2. 通过微信开发者工具上传


