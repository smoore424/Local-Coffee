//TODO: add form to modal
//TODO: add a heading to the page
//TODO: get correct image to show when modal toggled.
//TODO: uniform card sizes

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardGroup, Modal, ModalHeader, ModalBody, Button, CardFooter, Form, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { MENUITEMS } from '../shared/menuitems';

function RenderMenuItem({menuitem}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={menuitem.image} alt={menuitem.name} width="200" height="200" /> 
                </div>
                <div className="col">
                    <Form>
                        <FormGroup row>
                            <label htmlFor="size">Size</label>
                            <Input
                                type="select"
                                name="size"
                                id="size"
                            >
                                <option>Tall</option>
                                <option>Grande</option>
                                <option>Venti</option>
                            </Input>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="creamSugar"
                                id="cream">
                            </Input>
                            <Label check htmlFor="cream">cream</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="creamSugar"
                                id="sugar">
                            </Input>
                            <Label check htmlFor="sugar">sugar</Label>
                        </FormGroup>
                        <FormGroup check inline className="mt-4">
                            <Input
                                type="checkbox"
                                name="flavor"
                                id="carmel">
                            </Input>
                            <Label check htmlFor="carmel">carmel</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="flavor"
                                id="cinnamon">
                            </Input>
                            <Label check htmlFor="cinnamon">cinnamon</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="flavor"
                                id="raspberry">
                            </Input>
                            <Label check htmlFor="raspberry">raspberry</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="flavor"
                                id="orange">
                            </Input>
                            <Label check htmlFor="orange">orange</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="flavor"
                                id="toffee">
                            </Input>
                            <Label check htmlFor="toffee">toffee</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="flavor"
                                id="vanilla">
                            </Input>
                            <Label check htmlFor="vanilla">vanilla</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input
                                type="checkbox"
                                name="flavor"
                                id="sugar">
                            </Input>
                            <Label check htmlFor="sugar">sugar</Label>
                        </FormGroup>
                        <FormGroup row className="mt-4">
                            <label htmlFor="qty">Quanity</label>
                            <Input
                                type="select"
                                name="qty"
                                id="qty"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Input>
                        </FormGroup>
                        <FormGroup row className="mt-4">
                            <Button type="submit" color="primary">Add to Order</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        

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
                        <Card className="h-100">
                            <CardImg src={menuitem.image} alt={menuitem.name} />
                            <CardBody>
                                <CardTitle>
                                    <h2>{menuitem.name}</h2>
                                </CardTitle>
                                <CardText>
                                    <p>{menuitem.description}</p>
                                    <h3>{menuitem.cost}</h3> 
                                </CardText>
                                <Button className="stretched-link" onClick={this.toggleModal} color="primary">Order Now</Button>
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