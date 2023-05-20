import { getLocalStorage, getSyncStorage, setLocalStorage, setSyncStorage } from './browerMethods'
import { STATUS_TYPES } from './constants'
const addSyncData = async (data: any) => {
  const syncData = await getSyncStorage()

  const updatedData = [...syncData, data]

  await setSyncStorage(updatedData)
  return
}

const updateSyncData = async () => {
  const syncData = await getSyncStorage()
  let newTime = syncData.time - 1000
  let status = syncData.status
  if (newTime <= 0) {
    if (syncData.status == STATUS_TYPES.REST) {
      status = STATUS_TYPES.WORK
      newTime = 7200000
    } else {
      status = STATUS_TYPES.REST
      newTime = 900000
    }
  }

  const newData = {
    ...syncData,
    status,
    time: newTime,
  }
  await setSyncStorage(newData)
}

export {
  addSyncData,
  updateSyncData,
  getSyncStorage,
  setSyncStorage,
  getLocalStorage,
  setLocalStorage,
}
