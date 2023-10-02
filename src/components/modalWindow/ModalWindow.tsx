import React from 'react';
import "./modalWindow.scss"

type Props = {
    modalIsOpen: boolean,
    setModalIsOpen: React.Dispatch<boolean>,
    children?: React.ReactNode,
}

const ModalWindow: React.FC<Props> = ({modalIsOpen, setModalIsOpen, children}: Props) => {
    return (
        <div className={modalIsOpen ? "modalWindow active" : "modalWindow"} onClick={() => setModalIsOpen(false)}>
            <div className={modalIsOpen ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;