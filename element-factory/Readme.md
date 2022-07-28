# Element Factory

### 使用

1. 运行命令

> cd workspace

> vite

2. 打开 workspace/app.tpl 修改文件查看效果

### 解说

本项目看起来跟 page-transformer 很像，但目标是解决一个问题，可被序列化的文件格式转成最终代码。由于可被序列化的格式才好存储和可视化编辑，所以必须做到这一步。

可以看到 workspace/app.tpl 是个纯 xml 虽然符合 vue3 的文件格式，但他可以被序列化存储，且很容易从 xml 变成 json 供可视化界面修改。