/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-03-13 10:38:15
 * @modify date 2018-03-13 10:38:15
 * @desc [menu services]
 */

import { app, Menu } from 'electron'

function getTemplate () {
  const template = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      role: 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }]
    }
  ]
  // 需要根据平台做一些区分
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services', submenu: [] },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    })
  } else {
    template.unshift({
      label: app.getName(),
      submenu: [{ role: 'quit' }]
    })
  }

  return template
}

export function init () {
  const menu = Menu.buildFromTemplate(getTemplate())
  Menu.setApplicationMenu(menu)
}
