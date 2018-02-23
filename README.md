


# React Native: Native File Selector (Android & iOS)

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-file-selector"><img src="http://img.shields.io/npm/v/react-native-file-selector.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-file-selector/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-file-selector#License"><img src="https://img.shields.io/npm/l/react-native-file-selector.svg?style=flat" /></a>
</p>

This library is a ReactNative Bridge around native [MaterialFilePicker](https://github.com/nbsp-team/MaterialFilePicker) file picker. It allows you to natively select/pick file from device file system. 


- Android: [MaterialFilePicker](https://github.com/nbsp-team/MaterialFilePicker)

> **Note**: It allows you to pick file without using Intent/Third Party Software

![](https://i.imgur.com/mjxs05n.png)


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
}
```

- Add below color attributes in your app `res/color.xml`. You can provide your own color codes

```
    <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#FF4081</color>
```

> **Note**: Android library works `compileSdkVersion > 25`


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
`Working In Progress`


## Props


| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`       | `string`     |         | Title on the toolbar
| `closeMenu`      | `string`     |   true      | Color of tint
| `hiddenFiles`       | `bool`     |  false       | If true it shows hidden files as well                                                            |
| `rootPath`     | `string` |         | Root path of device storage                                                      |
| `path` | `string` |         | Path of directory                                                   |  |
| `filter`    | `string`     |         | Filter to sort the files                                        |  |
| `filterDirectories`      | `bool`     |         | Filter should be applied on directories or not 
| `onDone`      | `func`     |         | Function called when file is selected       |  |
| `onCancel`      | `func`     |         | Function called when file selector is closed without selecting any file | |


## TO DO
- iOS Support


## Credits

- Android: [MaterialFilePicker](https://github.com/nbsp-team/MaterialFilePicker)

## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License
This library is provided under the MIT License.

RNFileSelector @ Pranav Raj Singh Chauhan



## Other Contributions
- React Native - Spruce: [react-native-spruce](https://github.com/prscX/react-native-spruce)

![Screenshots](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif)

- React Native - App Tour Library: [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)

![Screenshots](https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif)
![Screenshots](https://github.com/aromajoin/material-showcase-ios/raw/master/art/material-showcase.gif?raw=true)

- React Native - Bottom Action Sheet: [react-native-bottom-action-sheet](https://github.com/prscX/react-native-bottom-action-sheet)

![](https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif)


- React Native - Tooltips: [react-native-tooltips](https://github.com/prscX/react-native-tooltips)

![](https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966)

- React Native - Shine Button: [react-native-shine-button](https://github.com/prscX/react-native-shine-button)

![Screenshots](https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif)

- React Native Iconic: [react-native-iconic](https://github.com/prscX/react-native-iconic)
![Screenshots](https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966)

- React Native Download Button: [react-native-download-button](https://github.com/prscX/react-native-download-button)

![](https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif)

- React Native Siri Wave View: [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)

![](https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif)

- React Native Material Shadows: [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)

![](
https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png
)

- React Native Gradient Blur View: [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)

![](
https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png
)

- React Native About Libraries: [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)

![](
https://github.com/prscX/react-native-about-libraries/raw/master/hero.png
)

- Visual Code Essential Plugins: [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)

![Screenshots](https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg)

- Prettier Pack: [prettier-pack](https://github.com/prscX/prettier-pack)

![Screenshots](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)

