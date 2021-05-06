//import React, {Component} from 'react'

import React from 'react'
import { Card } from 'react-bootstrap'
import CabeceraCalculo from './CabeceraCalculo'
import CuerpoCalculo from './CuerpoCalculo'
class CalculadorApp extends React.Component {
    constructor() {
        super()
        this.state = {
            paciente: "Pedro"
        }
    }

    obtenerNombre() {
        return this.nombre
    }

    render() {
        console.log(this.state.paciente)
        return (
            <>
                <Card>
                    <CabeceraCalculo />
                    <CuerpoCalculo bascula={this.props.bascula} />
                </Card>
            </>
        )
    }
}

export default CalculadorApp