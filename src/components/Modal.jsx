import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

const Modal = ({ setIsOpen, content, actionHandler }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="">
          <div className="flex justify-between items-center mb-4">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine className="text-2xl" />
            </button>
          </div>
          <div className="mb-4">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;

// App.jsx Code Snippet
//  <button className="primaryBtn" onClick={() => setIsOpen(true)}>
//    Open Modal
//  </button>;
//  {
//    isOpen && <Modal setIsOpen={setIsOpen} />;
//  }
