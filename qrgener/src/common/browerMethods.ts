import Browser from 'webextension-polyfill'
import { STORE_NAME } from './constants'

const syncRef = Browser.storage.sync
const localRef = Browser.storage.local

async function setSyncStorage(data: any) {
  await syncRef.set({ [STORE_NAME]: data })
}

async function getSyncStorage() {
  const data = await syncRef.get()
  return data[STORE_NAME]
}

async function setLocalStorage(data: any) {
  await localRef.set({ [STORE_NAME]: data })
}

async function getLocalStorage() {
  const data = await localRef.get()

  return data[STORE_NAME]
}

// used to send message from popup and options popup to content script and background script
async function tabMesage(data: any) {
  const tabsData: any = await Browser.tabs.query({ active: true })
  return await Browser.tabs.sendMessage(tabsData[0].id, { ...data })
}

// send message for any other scenerio except the above one
async function runTimeMessage(data: any) {
  return await Browser.runtime.sendMessage(data)
}

async function updateCurrentPageUrl(url: string) {
  const tabsData: any = await Browser.tabs.query({ active: true })
  Browser.tabs.update(tabsData[0].id, { url: url })
}

export {
  setSyncStorage,
  getSyncStorage,
  setLocalStorage,
  getLocalStorage,
  tabMesage,
  runTimeMessage,
  updateCurrentPageUrl,
}
