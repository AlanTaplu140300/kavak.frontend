import React, {Fragment} from 'react';
import {Form, ToggleButton, ToggleButtonGroup, Image, Row, Container,Col} from 'react-bootstrap';


const Color = () => {

    return (
        <Fragment>
            <Container>
            <br/>
            <Form.Label>Color</Form.Label>
            <Row>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://biblioteca.acropolis.org/wp-content/uploads/2014/12/amarillo-1200x839.png" rounded width={50} height={30}/>
                        Amarillo
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://i.pinimg.com/474x/cc/c3/ec/ccc3ecf340e59f310244db7620d005f0.jpg" rounded width={50} height={30}/>
                        Rojo
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://biblioteca.acropolis.org/wp-content/uploads/2014/12/azul.png" rounded width={50} height={30}/>
                        Azul
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://t1.uc.ltmcdn.com/images/4/5/9/como_hacer_color_marron_43954_paso_2_600.jpg" rounded width={50} height={30}/>
                        Cafe
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://static.vecteezy.com/system/resources/previews/001/907/745/non_2x/shiny-gold-background-free-photo.jpg" rounded width={50} height={30}/>
                        Dorado
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://todosobrecolores.com/wp-content/uploads/2020/05/color-plateado.png" rounded width={50} height={30}/>
                        Plateado
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://bangbranding.com/blog/wp-content/uploads/2016/11/700x511_SliderInterior.jpg" rounded width={50} height={30}/>
                        Negro
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://www.logocrea.com/wp-content/uploads/2016/07/fondo-naranja.jpg" rounded width={50} height={30}/>
                        Naranja
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
                <Col md="1">
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton variant="light">
                        <Image src="https://i.pinimg.com/originals/1e/13/35/1e1335737de5763df58146922379f371.png" rounded width={50} height={30}/>
                        Otro
                    </ToggleButton>
                </ToggleButtonGroup>
                </Col>
            </Row>
            </Container>
        </Fragment>
    );

};

export default Color;