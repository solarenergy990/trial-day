import React from 'react';
import s from '../Modal/Modal.module.css';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => setActive(false)}
    >
      <div className={s.content} onClick={evt => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
