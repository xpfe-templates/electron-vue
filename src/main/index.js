import { app } from 'electron'
import is from 'electron-is'
import * as config from './configs/config'
import * as application from './services/application'
import * as window from './services/window'
import * as menu from './services/menu'

// 设置static文件的路径到global
if (is.dev()) {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

app.on('ready', () => {
  application.init()
  menu.init()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window.getCount() === 0) {
    application.init()
  }
})

/**
 * 自动更新设置，使用electron-updater
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

// 注册全局的services
global.configs = {
  config
}
global.services = {
  application,
  window
}
