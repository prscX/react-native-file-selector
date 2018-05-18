


# React Native: Native File Selector (Android & iOS)

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-file-selector"><img src="http://img.shields.io/npm/v/react-native-file-selector.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-file-selector/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-file-selector#License"><img src="https://img.shields.io/npm/l/react-native-file-selector.svg?style=flat" /></a>
</p>

This library is a ReactNative Bridge around native [nbsp-team/MaterialFilePicker/](https://github.com/nbsp-team/MaterialFilePicker) & [marmelroy/FileBrowser](https://github.com/marmelroy/FileBrowser) file picker. It allows you to natively select/pick file from device file system. 


| **Android: [nbsp-team/MaterialFilePicker/](https://github.com/nbsp-team/MaterialFilePicker)**             |
| ----------------- |
| <img src="https://i.imgur.com/mjxs05n.png" width="600" height="600" />                  |


> **Note**: It allows you to pick file without using Intent/Third Party Software

| **iOS: [marmelroy/FileBrowser](https://github.com/marmelroy/FileBrowser)**             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/5ea19d119a5426eeca3edbe750c280617f804aa0/687474703a2f2f692e67697068792e636f6d2f336f3667615936794c516b686a696f6b35572e676966" width="600" height="600" />                  |


> **Note**: It allows you to select only local files associate to app sandbox.


## Getting started
`$ npm install react-native-file-selector --save`

`$ react-native link react-native-file-selector`

#### **Android**

- Add below snippet in your app `build.gradle` file

```
repositories {
    maven {
        url  "http://dl.bintray.com/lukaville/maven"
    }
    google()
    ...
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        google()
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

> **Note**: Android library works `compileSdkVersion > 25`

#### **iOS**

- Add below snippet in your app `AppDelegate.m`. This basically adds navigation controller in order to push list of files screen

```
  UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:rootViewController];
  navigationController.navigationBar.hidden = YES;

  self.window.rootViewController = navigationController;

//  self.window.rootViewController = rootViewController;

```

- Add `FileBrowser` in Embedded Binaries & Linked Frameworks and Libraries. You can find this library from below path:

`node_modules/react-native-file-selector/ios/FileBrowser/FileBrowser.xcodeproj`

<img src="./assets/setup.png" />

- 

## Usage

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


## Props


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


## Credits

- Android: [nbsp-team/MaterialFilePicker/](https://github.com/nbsp-team/MaterialFilePicker)
- iOS: [marmelroy/FileBrowser](https://github.com/marmelroy/FileBrowser)

## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License
This library is provided under the MIT License.

RNFileSelector @ Pranav Raj Singh Chauhan




## Other Contributions

| [awesome-react-native-native-modules](https://github.com/prscX/awesome-react-native-native-modules)              |
| ----------------- |
| <img src="https://github.com/prscX/awesome-react-native-native-modules/raw/master/assets/hero.png" width="600" height="300" />                  |


| [react-native-spruce](https://github.com/prscX/react-native-spruce)              |
| ----------------- |
| <img src="https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif" width="600" height="300" />                  |


| [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)              |
| ----------------- |
| <img src="https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif" width="600" height="600" />  |


| [react-native-bottom-action-sheet](https://github.com/prscX/react-native-bottom-action-sheet)              |
| ----------------- |
| <img src="https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif" width="600" height="600" />                  |


| [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)             |
| ----------------- |
| <img src="https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png" width="600" height="300" />                  |


| [react-native-tooltips](https://github.com/prscX/react-native-tooltips)             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966" width="600" height="300" />                  |


| [react-native-shine-button](https://github.com/prscX/react-native-shine-button)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif" width="600" height="300" />                  |


| [react-native-iconic](https://github.com/prscX/react-native-iconic)             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966" width="600" height="300" />                  |


| [react-native-download-button](https://github.com/prscX/react-native-download-button)             |
| ----------------- |
| <img src="https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif" width="600" height="600" />                  |


| [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)             |
| ----------------- |
| <img src="https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif" width="600" height="300" />                  |


|  [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png" width="600" height="300" />                  |


|  [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)             |
| ----------------- |
| <img src="https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png" width="600" height="300" />                  |


|  [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)             |
| ----------------- |
| <img src="https://github.com/prscX/react-native-about-libraries/raw/master/hero.png" width="600" height="600" />                  |



|  [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)             |
| ----------------- |
| <img src="https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg" width="600" height="300" />                  |


|  [prettier-pack](https://github.com/prscX/prettier-pack)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png" width="600" height="300" />                  |
