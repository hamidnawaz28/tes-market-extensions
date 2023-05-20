import { doc, getDoc } from 'firebase/firestore'
import { firestore } from './apps'

const getADoc = async (collection: string, documentId: string) => {
  const docSnap = await getDoc(doc(firestore, collection, documentId))
  if (docSnap.exists()) {
    return { success: true, data: docSnap.data() }
  } else {
    return { success: false, data: {}, message: 'missing data!' }
  }
}
export { getADoc }
