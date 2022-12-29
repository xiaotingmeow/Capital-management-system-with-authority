//创建一个 Express 应用程序。该函数是模块express()导出的顶级函数。
const express = require("express");
const app = express();

//指定端口为环境变量PORT中的任何内容，如果没有，则为5000
const port = process.env.PORT || 5000;

//Mongoose为模型提供了一种直接的，基于schema结构去定义你的数据模型。它内置数据验证， 查询构建，业务逻辑钩子等，开箱即用。
const mongoose = require("mongoose");

//引入body-parser,bodyparser是一类处理request的body的中间件函数,对传入的请求体进行解析
const bodyParser = require("body-parser");

const passport = require("passport");

//引入登录和路由模块
const users = require("./routes/api/users");

const profiles = require("./routes/api/profiles");

const { mongoURI } = require("./config/keys");

//引入数据库地址
const db = require("./config/keys").mongoURI;

require("./config/passport")(passport);

//返回只解析url被编码过的请求体,而且只查看content-type请求头与type选项匹配的请求,并允许选择使用querystring库解析url编码
app.use(bodyParser.urlencoded({ extended: false }));
//返回只解析JSON且只查看Content-Type请求头与type选项匹配的请求
app.use(bodyParser.json());

// passport 初始化
app.use(passport.initialize());

//在指定的路径上挂载指定的中间件函数:当请求的路径的基础部分与路径匹配时，中间件函数将执行。
app.use("/api/users", users);

app.use("/api/profiles", profiles);

//在升级到mongoose7前处理终端提示用，删除也不影响使用
mongoose.set('strictQuery', true);

//使用 mongoose.connect() 方法连接 MongoDB,然后输出"连接成功",出现异常时输出错误
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

//绑定并监听指定主机和端口上的连接。此方法与 Node 的http.Server.listen()相同。
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

//使用指定的回调函数将 HTTP GET 请求路由到指定路径。
app.get("/", (req, res) => {
  res.send("hello world");
});
