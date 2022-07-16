# data-processor

## Description

BFF层数据处理，对应的 micro service 在：https://github.com/FE-star/activity-micro-service

## 还有啥可优化的？

* 支持 HTTP or HTTPS
* 为了避免暴露可直接根据Activity ID获取商品列表的接口，可以怎么设计，避免爬虫通过该接口爬去商品信息？
* 通过配置文件管理接口合并与裁剪
* 通过可视化配置管理接口
* 错误处理


## 演示地址

> http://localhost:3001/activity/query?activitys[0]=321&activitys[1]=123


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```