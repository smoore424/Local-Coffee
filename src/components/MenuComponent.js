import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ModalHeader, ModalBody, Button} from 'reactstrap';
import { MENUITEMS } from '../shared/menuitems';

class Menu extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            menuitems: MENUITEMS,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    // render() {
    //     return (
    //         <Modal>
    //             <ModalHeader>Customize</ModalHeader>
    //             <ModalBody>
                    
    //             </ModalBody>
    //         </Modal>
    //     );
    // }

    render() {
        const menu = this.props.menuitems.map(menuitem => {
            return(
                <div key={menuitem.id} className="col-md-4">
                    <Card>
                        {/* need to fix image sizes and re-upload into assets*/}
                    <CardImg src={menuitem.image} alt={menuitem.name} width="200" height="200"/>
                    <CardBody>
                        <CardTitle>
                            <h2>{menuitem.name}</h2>
                        </CardTitle>
                        <CardText>
                            <p>{menuitem.description}</p>
                            <h3>{menuitem.cost}</h3> 
                        </CardText>
                    {/* button below needs to launch modal. */}
                    <Button>Order Now</Button>
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