

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

> This library is supports RN60 and above

- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

	- Add the following to your `Podfile` -> `ios/Podfile` and run pod update:


```
  use_native_modules!

  pod 'RNFileSelector', :path => '../node_modules/react-native-file-selector/ios'

  use_frameworks! :linkage => :static

  pod 'FileBrowser', :git => 'https://github.com/prscX/FileBrowser'

  # Follow [Flipper iOS Setup Guidelines](https://fbflipper.com/docs/getting-started/ios-native)
  # This is required because iOSPhotoEditor is implemented using Swift and we have to use use_frameworks! in Podfile
  $static_framework = ['FlipperKit', 'Flipper', 'Flipper-Folly',
    'CocoaAsyncSocket', 'ComponentKit', 'Flipper-DoubleConversion',
    'Flipper-Glog', 'Flipper-PeerTalk', 'Flipper-RSocket', 'Yoga', 'YogaKit',
    'CocoaLibEvent', 'OpenSSL-Universal', 'boost-for-react-native']
  
  pre_install do |installer|
    Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}
    installer.pod_targets.each do |pod|
        if $static_framework.include?(pod.name)
          def pod.build_type;
            Pod::BuildType.static_library
          end
        end
      end
  end
```

  - Please make sure [**Flipper iOS Setup Guidelines**](https://fbflipper.com/docs/getting-started/ios-native/) steps are added to Podfile, since iOSPhotoEditor is implemented using Swift and we have to use use_frameworks! in Podfile


- **Android**

- Add below color attributes in your app's `android/app/src/main/res/values/color.xml` file. You can provide your own color codes.

```
    <?xml version="1.0" encoding="utf-8"?>
    <resources>
        <color name="colorPrimary">#3F51B5</color>
        <color name="colorPrimaryDark">#303F9F</color>
        <color name="colorAccent">#FF4081</color>
    </resources>
```

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