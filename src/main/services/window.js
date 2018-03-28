/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-03-13 10:26:06
 * @modify date 2018-03-13 10:26:06
 * @desc [window service]
 */

import path from 'path'
import url from 'url'
import is from 'electron-is'
import { BrowserWindow } from 'electron'

let count = 0

export function createWin (options) {
  count += 1
  let win = new BrowserWindow(options)
  win.on('close', () => {
    count -= 1
    win = null
  })
  return win
}

export function getCount () {
  return count
}

export function getPath () {
  let urlOpts = {
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }
  if (is.dev()) {
    urlOpts = {
      pathname: 'localhost:9080', // 端口由renderer决定
      protocol: 'http:',
      slashes: true
    }
  }
  let filePath = url.format(urlOpts)
  return filePath
}
