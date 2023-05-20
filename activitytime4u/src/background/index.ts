import Browser from 'webextension-polyfill'
import { setLocalStorage } from '../common/apis'

import { APP_URL_ONLOAD, INIT_DATA } from '../common/constants'

Browser.runtime.onInstalled.addListener(async () => {
  Browser.tabs.create({ url: APP_URL_ONLOAD })
  await setLocalStorage(INIT_DATA)
})
