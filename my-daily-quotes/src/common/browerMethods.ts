import Browser from 'webextension-polyfill'

const STORE_NAME = 'quote_generator'

const syncRef = Browser.storage.sync

async function setSyncStorage(data: any) {
  await syncRef.set({ [STORE_NAME]: data })
}

async function getSyncStorage() {
  const data = await syncRef.get()
  return data[STORE_NAME]
}

export { setSyncStorage, getSyncStorage }
