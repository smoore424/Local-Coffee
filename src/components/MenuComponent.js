//TODO: add form to modal
//TODO: add a heading to the page
//TODO: get correct image to show when modal toggled.
//TODO: uniform card sizes

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardGroup, Modal, ModalHeader, ModalBody, Button, CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import { MENUITEMS } from '../shared/menuitems';
import { render } from '@testing-library/react';

function RenderMenuItem({menuitem}) {
    return (
            <img src={menuitem.image} alt={menuitem.name} width="200" height="200" /> 
    );
}

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
                        <CardImg src={menuitem.image} alt={menuitem.name} />
                        <CardBody>
                            <CardTitle>
                                <h2>{menuitem.name}</h2>
                            </CardTitle>
                            <CardText>
                                <p>{menuitem.description}</p>
                                <h3>{menuitem.cost}</h3> 
                            </CardText>
                            <Button onClick={this.toggleModal} color="primary">Order Now</Button>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Customize</ModalHeader>
                            <ModalBody>
                                <RenderMenuItem menuitem={menuitem} />
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
                    <div className="col m-4">
                        <h2 className="text-center">Explore Our Menu</h2>
                    </div>
                </div>
                <div className="row">

                    {menu}
                </div>
            </div>
        );
    }

}


export default Menu;