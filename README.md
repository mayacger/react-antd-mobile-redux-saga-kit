# react-antd-mobile-redux-roadhog-kit
react-antd-mobile-redux-roadhog-kit


## 说明

react antd-mobile

roadhog构建服务


参考：https://github.com/sorrycc/roadhog
roadhog 资源文件必须在src、public。默认没有说明；
### 安装
Clone this repo
```bash
$ npm i roadhog -g
$ npm i
```

### 使用

本地开发

```bash
$ roadhog server
```

打包发布

```bash
$ roadhog build
```
### 采用Redux-saga

redux-saga 是一个用于管理 Redux 应用异步操作的中间件，又成异步 action，可以用来代替 redux-thunk 中间件

*Reducers 负责处理 action 的 state 更新。

*Sagas 负责协调那些复杂或异步的操作。

Sagas 不同于 Thunks，Thunks 是在 action 被创建时调用，而 Sagas 只会在应用启动时调用（但初始启动的 Sagas 可能会动态调用其他 Sagas）。 Sagas 可以被看作是在后台运行的进程。Sagas 监听发起的 action，然后决定基于这个 action 来做什么：是发起一个异步调用（比如一个 Ajax 请求），还是发起其他的 action 到 Store，甚至是调用其他的 Sagas。
