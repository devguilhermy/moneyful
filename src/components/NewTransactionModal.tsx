import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface NewTransactionModalProps {
    isOpen: boolean;
    onToggle: (state?: boolean) => void;
}

export function NewTransactionModal({
    isOpen,
    onToggle,
}: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => onToggle(false)}
            contentLabel="Demo"
            style={customStyles}
        >
            Alou
        </Modal>
    );
}
