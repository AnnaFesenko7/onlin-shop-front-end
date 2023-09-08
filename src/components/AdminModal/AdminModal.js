import React, { useState } from 'react';
import Modal from 'react-modal';
import { AdminForm } from 'components/AdminForm/AdminForm';


import { ButtonClose, ButtonOpen } from './AdminModal.styled'

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

export const AdminModal = ({ data }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const TestData = {
        productName: 'Крем',
        brand: 'Nivea',
        image: '',
        description: 'Дуже класний крем',
        category: 'make-up',
        subcategory: 'eyes',
        createdFor: ["male"],
        price: '1000',
        tags: ['крем'],
    }

    return (
        <div>
            <ButtonOpen onClick={openModal}>Редагувати товар</ButtonOpen>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}>
                <h3>Редагувати товар</h3>
                <AdminForm data={TestData} closeOnSubmit={closeModal} isEditing={true} ></AdminForm>
                <ButtonClose onClick={closeModal}>
                    x
                </ButtonClose>
            </Modal>
        </div>
    );
}