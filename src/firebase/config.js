import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const config = {
  apiKey: 'AIzaSyCfQhV4OB10lwy0TADojbLgwqwifWh-Ngg',
  authDomain: 'hmpe-cc683.firebaseapp.com',
  projectId: 'hmpe-cc683',
  storageBucket: 'hmpe-cc683.appspot.com',
  messagingSenderId: '291141396918',
  appId: '1:291141396918:web:05b40ff9f34bfdf1807917',
}

const app = initializeApp(config)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
