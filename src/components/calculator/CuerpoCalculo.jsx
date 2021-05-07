import React, { Component } from 'react'
import Formulario from './FormularioCalculo'
import VerIMC from './VerCalculoIMC'
import Bascula from './BasculaIMC'
import { Card, Col, Row } from 'react-bootstrap'
class CuerpoCalculo extends Component {

  constructor(){
    super()
    this.state = {
      estatura: 1.6,
      peso: 50
    }
  }

  modificarDatosIMC = (campo, valor) => {
    this.setState({[campo] : parseFloat(valor)})
  }

  verDatoIMC = (campo) => this.state[campo] 


  render () {
    return (
      <>
        <Card.Body>
          <Row>
            <Col>
              <Formulario modificarDatosIMC = {this.modificarDatosIMC} verDatoIMC = {this.verDatoIMC}/>
            </Col>
            <Col>
              <VerIMC estatura={this.state.estatura} peso={this.state.peso} />
            </Col>
            <Col>
              <Bascula bascula={this.props.bascula} />
            </Col>
          </Row>
        </Card.Body>
      </>
    )
  }
}

export default CuerpoCalculo