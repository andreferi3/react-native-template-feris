# 🤖 React Native Template Feris

<p>
  <a href="https://github.com/react-native-community/react-native-template-typescript/actions/workflows/npm-publish.yml">
    <img alt="Build Status" src="https://github.com/react-native-community/react-native-template-typescript/actions/workflows/npm-publish.yml/badge.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with TypeScript.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- React Navigation v5 (Installed & Configured)
- Support Cloud Update with Codepush (Appcenter)
- Firebase v6 (Installed & Configured)
- React Native Splashscreen (Installed & Configured)
- Fastlane (configured)

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template react-native-template-feris
```

### Usage with older versions of React Native

#### e.g. `react-native@0.64.x`
```sh
npx react-native init MyApp --template react-native-template-feris@1.0.*
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.63         | 1.0.\*   |

## ⚠️ For Macbook with Apple Processor (must read this)

For Macbook with Apple Processor there's should replace the below code in `Podfile`

```
use_flipper!
post_install do |installer|
  flipper_post_install(installer)
end
```

with this

```
use_flipper!({ 'Flipper' => '0.108.0' })
post_install do |installer|
  flipper_post_install(installer)
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings["ONLY_ACTIVE_ARCH"] = "NO"
    end
  end
end
```

> Note: if flipper with version 0.108.0 is still occured error. please try the latest version of flipper, check this : [Flipper](https://github.com/facebook/flipper)

## :warning: React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-react- native-template-typescript: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore](https://github.com/npm/npx#description) any locally installed versions of the CLI and use the latest.

Further information can be found here: https://github.com/react-native-community/cli#about

## :bookmark: License

This project is [MIT](LICENSE) licensed.
