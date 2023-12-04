import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal';
import { openModal, closeModal } from '../../slices/counter/counterSlice';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 30
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};
const ModalComponent = () => {
  let subtitle;
  const open = useSelector(state => state.counter.modal.isOpen)
  const dispatch = useDispatch()

  function openModalFn() {
    dispatch(openModal())
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModalFn() {
    dispatch(closeModal())
  }
  return (
    <div><button onClick={openModalFn}>Open Modal</button>
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalFn}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModalFn}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal></div>
  )
}

export default ModalComponent
