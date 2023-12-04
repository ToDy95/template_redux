import { createSlice } from '@reduxjs/toolkit'
import { fetcher } from '../../components/utilsFunctions/fetcher'
const initialState = {
  counter: {
    value: 0
  },
  modal: {
    isOpen: false,
    // modalType: '',
  },
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter.value += 1
    },
    decrement: (state) => {
      state.counter.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.counter.value += action.payload
    },
    openModal: (state, action) => {
      state.modal.isOpen = true;
      // state.modal.modalType = action.payload;
    },
    closeModal: state => {
      state.modal.isOpen = false;
      // state.modal.modalType = '';
    },
  },
})




// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, openModal,
  closeModal, } = counterSlice.actions

export default counterSlice.reducer
