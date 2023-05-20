import { getLocalStorage, getSyncStorage, setLocalStorage, setSyncStorage } from './browerMethods'

const addSyncData = async (data: any) => {
  const syncData = await getSyncStorage()

  const updatedData = [...syncData, data]

  await setSyncStorage(updatedData)
  return
}

const updateSyncData = async (data: any) => {
  const prevData = await getSyncStorage()

  const newData = {
    ...prevData,
    data,
  }
  await setSyncStorage(newData)
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
