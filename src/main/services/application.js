/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-03-13 10:25:24
 * @modify date 2018-03-13 10:25:24
 * @desc [app service]
*/

import { createWin, getPath } from './window'

export function init () {
  let options = { width: 1200, height: 800 } // 默认模式
  const win = createWin(options)
  win.loadURL(getPath())
}
