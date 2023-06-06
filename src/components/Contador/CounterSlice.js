import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  user:""
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const taskIndex = state.value.findIndex(
        (task) => task.producto.IdProducto === action.payload.IdProducto
      );
      if (taskIndex >= 0) {
        state.value[taskIndex].cantidad = state.value[taskIndex].cantidad + 1;
      } else {
        const newproducto = {
          cantidad: 1,
          producto: action.payload
        }
        state.value.push(newproducto)
      }
    },
    decrement: (state, action) => {
      const taskIndex = state.value.findIndex(
        (task) => task.producto.IdProducto === action.payload.producto.IdProducto
      );
      state.value.splice(taskIndex, 1)
    },
    incrementCantidad:(state,action)=>{
      const taskIndex = state.value.findIndex(
        (task) => task.producto.IdProducto === action.payload.producto.IdProducto
      );
      state.value[taskIndex].cantidad = state.value[taskIndex].cantidad + 1;
    },
    decrementarCantidad:(state,action)=>{
      const taskIndex = state.value.findIndex(
        (task) => task.producto.IdProducto === action.payload.producto.IdProducto
      )
      if(state.value[taskIndex].cantidad > 0)
      state.value[taskIndex].cantidad = state.value[taskIndex].cantidad - 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    vaciar:(state) =>{
      state.value = []
    },
    userGlob:(state,action) => {
        state.user = action.payload
    }
  }
})
export const { increment, decrement, incrementByAmount,incrementCantidad,decrementarCantidad,vaciar,userGlob } = counterSlice.actions

export default counterSlice.reducer