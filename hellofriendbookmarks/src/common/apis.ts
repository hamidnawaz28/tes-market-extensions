import { getLocalStorage, getSyncStorage, setLocalStorage, setSyncStorage } from './browerMethods'

const addSyncData = async (data: any) => {
  const syncData = await getSyncStorage()

  const updatedData = [...syncData, data]

  await setSyncStorage(updatedData)
  return
}

const updateSyncData = async (data: any) => {
  const syncData = await getSyncStorage()

  const filterestData = syncData.filter(
    (item: any) => !(item.url == data.url && item.label == data.label),
  )
  await setSyncStorage(filterestData)
  return
}
export {
  addSyncData,
  updateSyncData,
  getSyncStorage,
  setSyncStorage,
  getLocalStorage,
  setLocalStorage,
}
