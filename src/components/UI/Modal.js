import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ open, onClose, children }) => {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
        dialog.current.showModal();
        } else if (dialog.current.open) {
        dialog.current.close();
        }
    }, [open]);

    useEffect(() => {
        const node = dialog.current;
        node.addEventListener('close', onClose);
        return () => node.removeEventListener('close', onClose);
    }, [onClose]);

    return ReactDOM.createPortal(
        <dialog className="modal" ref={dialog}>
        {children}
        </dialog>,
        document.getElementById('modal')
    );
    };

export default Modal;