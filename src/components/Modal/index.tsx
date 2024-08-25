import classNames from "classnames";

import "./index.scss";

type ModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
};

const Modal = ({ children, open, setOpen }: ModalProps) => {
    // TODO dot modal with portal inserted in App

    return (
        <div className={classNames("modal", open && "modal--active")}>
            <div className="modal__background" onClick={() => setOpen(false)} />
            <div className="modal__content">{open && children}</div>
        </div>
    );
};

export default Modal;
