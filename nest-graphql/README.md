# nest-graphql

## Description

nest graphql的DEMO，用于跟nest-swagger对比，可见，这个方案比较容易做数据合并合裁剪。

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

## 使用

* 打开：http://localhost:3000/graphql
* 查询单一activity id对应的offer列表
```
{
  activity(id: "123"){
  	nid,
    title,
    pict_url,
    icons {
    	type,
      bg_color,
      font_color,
      border_color
    },
  },
}
```
* 查询多个activity id对应的offer列表
```
{
  activitys(ids: ["123", "124"]){
  	nid,
    title,
    pict_url,
    icons {
    	type,
      bg_color,
      font_color,
      border_color
    },
  },
}
```
