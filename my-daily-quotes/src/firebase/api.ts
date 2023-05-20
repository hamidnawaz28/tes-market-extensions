import { getADoc } from './firestoreMethods'

const getUsersData = async () => {
  const respo = await getADoc('data', 'quotes')
  return respo.data
}

export { getUsersData }
