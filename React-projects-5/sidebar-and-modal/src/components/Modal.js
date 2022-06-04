export default function Modal({ setShowModal, showModal }) {
  return (
    <div className='modal-box flex'>
      <h1>This is a modal</h1>
      <button type='button' onClick={() => setShowModal(!showModal)}>
        ❌
      </button>
    </div>
  );
}
