import React from 'react';
import Modal from 'react-modal'

const AddEvt = (props) =>{
    return (
    <Modal 
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
        contentLabel="Ajout Rdv"
        className="modal"
    >
        <form onSubmit={props.onSubmit}>
            <input type="text" name="title" placeholder="Titre"/>
            <input type="text" name="description" placeholder="description"/>
            <input type="date" name="start"/>
            <input type="date" name="end"/>
            <button>Add</button>
        </form>
    </Modal>
    )
}

export default AddEvt;
