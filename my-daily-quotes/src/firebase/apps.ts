import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { FIREBASE_CREDS } from '../common/constants'

const app = () => {
  if (getApps().length === 0) {
    return initializeApp(FIREBASE_CREDS)
  } else {
    getApp()
  }
}

app()

const firestore = getFirestore()

export { firestore }

export default app
