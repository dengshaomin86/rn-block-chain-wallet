# remark

## 打包命令：gradlew assembleRelease

## 修改 app 名称

```xml
<!-- strings.xml -->
<resources>
    <string name="app_name">app_name</string>
</resources>

```

## 报错处理

- 1. webview 报错：net::ERR_ACCESS_DENIED

```xml
<!-- AndroidManifest.xml -->
<application
...
android:usesCleartextTraffic="true"
...
>
</application>

```

## 参考链接

- [打包](https://www.jianshu.com/p/2cd763f11004)
