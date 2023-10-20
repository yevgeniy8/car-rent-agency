import React, { useEffect } from 'react';

import { Backdrop, ModalWrapper } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = evt => {
        console.log(evt.code);
        if (evt.code === 'Escape') {
            toggleModal();
        }
    };

    const handleClickBackDrop = evt => {
        if (evt.target === evt.currentTarget) {
            toggleModal();
        }
    };

    return createPortal(
        <Backdrop onClick={handleClickBackDrop}>
            <ModalWrapper>{children}</ModalWrapper>
        </Backdrop>,
        modalRoot
    );
};

export default Modal;
