import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Contador/CounterSlice'
export default configureStore({
  reducer: {
    counter: CounterSlice
  }
})