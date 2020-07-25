//TODO: add form to modal
//TODO: add a heading to the page
//TODO: Fix image sizes and re-upload into assets
//TODO: get correct image to show when modal toggled.
//TODO: build form on modal
//TODO: uniform card sizes

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import { MENUITEMS } from '../shared/menuitems';


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
        });
    }

    render() {
        const menu = this.props.menuitems.map(menuitem => {
            return(
                        <div key={menuitem.id} className="col-md-4">
                            <Card>
                                <CardImg src={menuitem.image} alt={menuitem.name} width="200" height="200"/>
                                <CardBody>
                                    <CardTitle>
                                        <h2>{menuitem.name}</h2>
                                    </CardTitle>
                                    <CardText>
                                        <p>{menuitem.description}</p>
                                        <h3>{menuitem.cost}</h3> 
                                    </CardText>
                                    <Button onClick={this.toggleModal}>Order Now</Button>
                                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                        <ModalHeader toggle={this.toggleModal}>Customize</ModalHeader>
                                        <ModalBody>
                                        <img src={menuitem.image} alt={menuitem.name} width="200" height="200" /> 
                                    </ModalBody>                        
                                    </Modal>
                                </CardBody>
                            </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;