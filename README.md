

<h1 align="center">

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-file-selector"><img src="http://img.shields.io/npm/v/react-native-file-selector.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-file-selector/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-file-selector#License"><img src="https://img.shields.io/npm/l/react-native-file-selector.svg?style=flat" /></a>
</p>

    ReactNative: Native File Selector (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>

This library is a ReactNative Bridge around native libraries. It allows you to natively select/pick file from device file system:


| **Android: [nbsp-team/MaterialFilePicker/](https://github.com/nbsp-team/MaterialFilePicker)**             |
| ----------------- |
| <img src="https://i.imgur.com/mjxs05n.png" />                  |


> **Note**: It allows you to pick file without using Intent/Third Party Software

| **iOS: [marmelroy/FileBrowser](https://github.com/marmelroy/FileBrowser)**             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/5ea19d119a5426eeca3edbe750c280617f804aa0/687474703a2f2f692e67697068792e636f6d2f336f3667615936794c516b686a696f6b35572e676966" />                  |


> **Note**: It allows you to select only local files associate to app sandbox.


## 📖 Getting started
`$ npm install react-native-file-selector --save`

## **RN60 >= RNFS V1 >**

> RN60 above please use `react-native-file-selector` V1 and above

- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

	- Add the following to your `Podfile` -> `ios/Podfile` and run pod update:


```
  use_native_modules!

  pod 'RNFileSelector', :path => '../node_modules/react-native-file-selector/ios'

  use_frameworks!

  pod 'FileBrowser', :git => 'https://github.com/prscX/FileBrowser'
```

- **Android**

- Add below snippet in your app `build.gradle` file

```
allprojects {
    repositories {
        maven {
            url  "http://dl.bintray.com/lukaville/maven"
        }
        ...
    }
}
```

- Add below color attributes in your app `res/color.xml`. You can provide your own color codes

```
    <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#FF4081</color>
```

## **RN60 < RNFS V1 <**

> RN60 below please use `react-native-file-selector` V.0.*

`$ react-native link react-native-file-selector`

#### **Android**

- Add below snippet in your app `build.gradle` file

```
repositories {
    maven {
        url  "http://dl.bintray.com/lukaville/maven"
    }
    maven { url "https://maven.google.com" }
    ...
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven { url "https://maven.google.com" }
        ...
    }
}
```

> **Note:** This library is supported Android 27 > above


- Add below color attributes in your app `res/color.xml`. You can provide your own color codes

```
    <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#FF4081</color>
```

#### **iOS**

- After `react-native link react-native-file-selector`, please verify `node_modules/react-native-file-selector/ios/` contains `Pods` folder. If does not exist please execute `pod install` command on `node_modules/react-native-file-selector/ios/`, if any error => try `pod repo update` then `pod install`
- After verification, open your project and create a folder 'RNFileSelector' under Libraries.
- Drag `node_modules/react-native-file-selector/ios/pods/Pods.xcodeproject` into RNFileSelector, as well as the RNFileSelector.xcodeproject if it does not exist.
- Add the `FileBrowser.framework` into your project's `Embedded Binaries` and make sure the framework is also in linked libraries.
- Go to your project's `Build Settings -> Frameworks Search Path` and add `${BUILT_PRODUCTS_DIR}/FileBrowser` non-recursive.


- Add below snippet in your app `AppDelegate.m`. This basically adds navigation controller in order to push list of files screen

```
  UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:rootViewController];
  navigationController.navigationBar.hidden = YES;

  self.window.rootViewController = navigationController;

//  self.window.rootViewController = rootViewController;

```

- Now build your iOS app through Xcode

<img src="./assets/setup.png" />

- 

## 💻 Usage

`import RNFileSelector from 'react-native-file-selector';`

- API Way

```javascript
RNFileSelector.Show(
    {
        title: 'Select File',
        onDone: (path) => {
            console.log('file selected: ' + path)
        },
        onCancel: () => {
            console.log('cancelled')
        }
    }
)
```

- React Way

```javascript
<RNFileSelector title={"Select File"} visible={this.state.visible} onDone={() => {
    console.log("file selected: " + path);
}} onCancel={() => {
    console.log("cancelled");
}}/>
```


## 💡 Props


| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`       | `string`     |         | Title on the toolbar
| `closeMenu`      | `string`     |   true      | Color of tint
| `hiddenFiles: Android`       | `bool`     |  false       | If true it shows hidden files as well                                                            |
| `path` | `string` |         | Path of directory                                                   |  |
| `filter`    | `string`     |         | Filter to sort the files                                        |  |
| `filterDirectories: Android`      | `bool`     |         | Filter should be applied on directories or not 
| `onDone`      | `func`     |         | Function called when file is selected       |  |
| `onCancel`      | `func`     |         | Function called when file selector is closed without selecting any file | |
| `visible`      | `bool`     |    false     | To invoke file selector | |


> **Note**
> - **Filter**
>    - **Android:** Please find [regex/Pattern](https://developer.android.com/reference/java/util/regex/Pattern.html) for defining filter
>    - **iOS:** Array of file extension needs to be ignore


## ✨ Credits

- Android: [nbsp-team/MaterialFilePicker/](https://github.com/nbsp-team/MaterialFilePicker)
- iOS: [marmelroy/FileBrowser](https://github.com/marmelroy/FileBrowser)

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-file-selector/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache License.

RNFileSelector @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >