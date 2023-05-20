import { getLocalStorage, getSyncStorage, setLocalStorage, setSyncStorage } from './browerMethods'
import { STATUS_TIMES, STATUS_TYPES } from './constants'
const addSyncData = async (data: any) => {
  const syncData = await getSyncStorage()
  const updatedData = [...syncData, data]
  await setSyncStorage(updatedData)
  return
}

const updateSyncData = async () => {
  const syncData = await getSyncStorage()
  let newTime = syncData.time - 30000
  let status = syncData.status
  if (newTime <= 0) {
    if (syncData.status == STATUS_TYPES.REST) {
      status = STATUS_TYPES.WORK
      newTime = STATUS_TIMES.WORK
    } else {
      status = STATUS_TYPES.REST
      newTime = STATUS_TIMES.REST
    }
  }

  const newData = {
    ...syncData,
    status,
    time: newTime,
  }
  await setSyncStorage(newData)
}

const updateLocalData = async () => {
  const localData = await getLocalStorage()
  const timeNow = new Date().getTime()

  let status = localData.status
  let time = localData.time
  if (localData.status == STATUS_TYPES.REST) {
    if (timeNow > time + STATUS_TIMES.REST) {
      status = STATUS_TYPES.WORK
      time = timeNow
    }
  } else {
    if (timeNow > time + STATUS_TIMES.WORK) {
      status = STATUS_TYPES.REST
      time = timeNow
    }
  }

  const newData = {
    ...localData,
    status,
    time: time,
  }
  await setLocalStorage(newData)
}
export {
  addSyncData,
  updateSyncData,
  updateLocalData,
  getSyncStorage,
  setSyncStorage,
  getLocalStorage,
  setLocalStorage,
}
