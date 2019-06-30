# Interface API Design
我们这次开发使用的是微信小程序的云开发技术，使用的API是云开发Server API，框架提供丰富的微信原生API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。

## 初始化
wx.cloud.init
在调用云开发各 API 前，需先调用初始化方法 init 一次（全局只需一次，多次调用时只有第一次生效）
wx.cloud.init 方法的定义如下：

```
function init(options): void
```

wx.cloud.init 方法接受一个可选的 options 参数，方法没有返回值。
options 参数定义了云开发的默认配置，该配置会作为之后调用其他所有云 API 的默认配置，options 提供的可选配置如下：

|字段|数据类型|必填|默认值|说明|
|---|---|---|---|---|
|env|string/object|否|default|默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境，见下方详细定义|
|traceUser|boolean|否|false|是否在将用户访问记录到用户管理中，在控制台中可见|

当 env 传入参数为对象时，可以指定各个服务的默认环境，可选字段如下：

|字段|数据类型|必填|默认值|说明|
|---|---|---|---|---|
|database|string|否|default|数据库 API 默认环境配置|
|storage|string|否|default|存储 API 默认环境配置|
|functions|string|否|default|云函数 API 默认环境配置|

示例：

```
wx.cloud.init({
  env: 'test-x1dzi'
})
```

## 数据库API
小程序·云开发提供了丰富的数据库操作 API，数据库 API 都是懒执行的，这意味着只有真实需要网络请求的 API 调用才会发起网络请求，其余如获取数据库、集合、记录的引用、在集合上构造查询条件等都是不会触发网络请求的。触发网络请求的 API 有如下几个：

|API|说明|
|---|---|
|get|获取集合 / 记录数据|
|add|在集合上新增记录|
|update|更新集合 / 记录数据|
|set|替换更新一个记录|
|remove|删除记录|
|count|统计查询语句对应的记录条数|

获取引用的 API 有如下几个：

|API|说明|
|---|---|
|database|获取数据库引用，返回 Database 对象|
|collection|获取集合引用，返回 Collection 对象|
|doc|获取对一个记录的引用，返回 Document 对象|

在数据库 (Database) 对象上有如下字段：

|字段|说明|
|---|---|
|command|获取数据库查询及更新指令，返回 Command|
|serverDate|构造服务端时间|
|Geo|获取地理位置操作对象，返回 Geo 对象|

在集合 (Collection) 对象上有如下 API：

|API|说明|
|---|---|
|doc|获取对一个记录的引用，返回 Document 对象|
|add|在集合上新增记录|
|where|构建一个在当前集合上的查询条件，返回 Query，查询条件中可使用查询指令|
|orderBy|指定查询数据的排序方式|
|limit|指定返回数据的数量上限|
|skip|指定查询时从命中的记录列表中的第几项之后开始返回|
|field|指定返回结果中每条记录应包含的字段|

在记录 (Document) 对象上有如下 API：

|API|说明|
|---|---|
|get|获取记录数据|
|update|局部更新数据|
|set|替换更新记录|
|remove|删除记录|
|field|指定返回结果中记录应包含的字段|

Command (db.command) 对象上有如下查询指令：

|API|说明|
|---|---|
|eq|字段是否等于指定值|
|neq|字段是否不等于指定值|
|lt|字段是否小于指定值|
|lte|字段是否小于或等于指定值|
|gt|字段是否大于指定值|
|gte|字段是否大于或等于指定值|
|in|字段值是否在指定数组中|
|nin|字段值是否不在指定数组中|
|and|条件与，表示需同时满足另一个条件|
|or|条件或，表示如果满足另一个条件也匹配|

Command (db.command) 对象上有如下更新指令：

|API|说明|
|---|---|
|set|设置字段为指定值|
|remove|删除字段|
|inc|原子自增字段值|
|mul|原子自乘字段值|
|push|如字段值为数组，往数组尾部增加指定值|
|pop|如字段值为数组，从数组尾部删除一个元素|
|shift|如字段值为数组，从数组头部删除一个元素|
|unshift|如字段值为数组，往数组头部增加指定值|

## 存储API
小程序·云开发提供了一系列存储操作 API

|API|说明|
|---|---|
|uploadFile|上传文件|
|downloadFile|下载文件|
|deleteFile|删除文件|
|getTempFileURL|换取临时链接|

## 云函数
小程序提供了以下云函数调用 API：

|API|说明|
|---|---|
|callFunction|调用云函数|

## 工具类API
云开发提供了一系列工具类的 API：

|API|说明|
|---|---|
|CloudID|声明字符串为 cloudID|

## 组件支持
小程序组件支持传入云文件 ID，支持列表如下：

|组件|属性|
|---|---|
|image|src|
|video|src、poster|
|cover-image|src|

|接口|参数|
|---|---|
|getBackgroundAudioManager|src|
|createInnerAudioContext|src|
|previewImage|urls、current|

