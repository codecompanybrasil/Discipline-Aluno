import styles from './Modal.module.css'

type ModalProps = {
    content: any
}

function Modal({content: ContentModal}: ModalProps) {
    return (
        <div className={styles.modal_centralizer}>
            <div className={styles.modal}>
                <ContentModal />
            </div>
        </div>
    )
}

export default Modal