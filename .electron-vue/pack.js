/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-01-17 09:42:57
 * @modify date 2018-01-17 09:42:57
 * @desc [打包app文件]
 */

const path = require('path')
const builder = require('electron-builder')
const Platform = builder.Platform
const env = process.env.NODE_ENV

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

let options = {
  targets: Platform[env].createTarget(),
  config: {
    appId: 'com.startdt.xiaoping',
    productName: 'Shell',
    copyright: 'Copyright © 2018 xiaoping',
    files: ["dist/electron/**/*"],
    directories: {
      output: "app"
    },
    mac: {
      target: ['dmg'],
      artifactName: '${productName}.${ext}',
      icon: resolve('../build/icons/icon.icns'),
    },
    linux: {
      target: ['AppImage'],
      artifactName: '${productName}.${ext}',
    },
    win: {
      target: ['portable'],
      artifactName: '${productName}.${ext}',
      icon: resolve('../build/icons/icon.ico'),
    },
  },
}

builder
  .build(options)
  .then((appPaths) => {
    console.log(appPaths)
  })
  .catch((err) => {
    console.log(err)
  })
