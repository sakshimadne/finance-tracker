


import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCI0zWkB99aMl8vSyN56NV359r67QwMRGc',
  authDomain: 'react-4407d.firebaseapp.com',
  databaseURL: 'https://react-4407d-default-rtdb.firebaseio.com',
  projectId: 'react-4407d',
  storageBucket: 'react-4407d.firebasestorage.app',
  messagingSenderId: '105237712285',
  appId: '1:105237712285:web:11fbfdeed872fa442a3374',
  measurementId: 'G-DLZX4GFRYP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export database for use in the app
const database = getDatabase(app)

export default database
