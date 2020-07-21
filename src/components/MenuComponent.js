import React, { Component } from 'react';
import { ModalHeader, ModalBody } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {
        return (
            <Modal>
                <ModalHeader>Customize</ModalHeader>
                <ModalBody>
                    
                </ModalBody>
            </Modal>
        );
    }
}