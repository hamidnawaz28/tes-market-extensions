import Browser from 'webextension-polyfill'

import { APP_URL_ONLOAD } from '../common/constants'

Browser.runtime.onInstalled.addListener(async () => {
  Browser.tabs.create({ url: APP_URL_ONLOAD })
})
