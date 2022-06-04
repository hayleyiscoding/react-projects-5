import React from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [showSideBar, setShowSideBar] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShowModal(false), 5000);
    return () => clearTimeout(timeout);
  }, [showModal]);

  return (
    <div className='main-container'>
      <div className='bars'>
        <button type='button' onClick={() => setShowSideBar(!showSideBar)}>
          {" "}
          <FaBars />
        </button>
        {showSideBar && (
          <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        )}
      </div>
      <div className='modal'>
        {!showModal && (
          <button type='button' onClick={() => setShowModal(!showModal)}>
            Show Modal
          </button>
        )}
        {showModal && (
          <Modal setShowModal={setShowModal} showModal={showModal} />
        )}
      </div>
    </div>
  );
}
