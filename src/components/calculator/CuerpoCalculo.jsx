import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import BasculaIMC from './BasculaIMC'
import FormularioCalculo from './FormularioCalculo'
import VerCalculoIMC from './VerCalculoIMC'
class CuerpoCalculo extends Component {
    render() {
        return (
            <>
                <Card.Body>
                    <Row>
                        <Col>
                            <FormularioCalculo />
                        </Col>
                        <Col>
                            <VerCalculoIMC estatura={1.60} peso={50} />
                        </Col>
                        <Col>
                            <BasculaIMC bascula={this.props.bascula} />
                        </Col>
                    </Row>
                </Card.Body>
            </>
        )
    }
}

export default CuerpoCalculo
