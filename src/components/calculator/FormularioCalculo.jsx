import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import Loading from './../pages/Loading'
export default class FormularioCalculo extends Component {
    constructor({ modificarDatosIMC, verDatoIMC }) {
        super()
        this.state = {
            loading: false
        }
        this.modificarDatosIMC = modificarDatosIMC
        this.verDatoIMC = verDatoIMC
        this.eventoClik = this.eventoClik.bind(this)
    }

    eventoClik(e) {
        e.preventDefault()
        this.props.modificarDatosIMC("peso", document.querySelector("#peso").value)
        this.props.modificarDatosIMC("estatura", document.querySelector("#estatura").value)
        //document.querySelector("#valor_calculo_imc").innerHTML = this.state.peso / this.state.estatura
        ///this.setProps({nombre : "oscar"})
        //this.setState({estatura : 1.8})
    }

    UNSAFE_componentWillMount() {
        console.log('No se a montado el componente')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Se esta modificando el estado, shouldComponentUpdate")
        //console.log(this.props, this.state)
        //console.log(nextProps, nextState)

        //return nextState.peso >= 500 ? false : true
        return true
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("Se esta modificando el estado, UNSAFE_componentWillUpdate")
        //console.log(this.props, this.state)
        //console.log(nextProps, nextState)
    }

    componentDidUpdate(x, y) {
        console.log("Ya se modificando el estado, componentDidUpdate")
        //console.log(this.props, this.state)
        //console.log(x, y  )
    }

    componentWillReceiveProps(nextProps) {
        console.log("Se inicio el proceso de modificacion del estado, componentWillReceiveProps")
    }

    render() {
        console.log('Esta renderizando el componente, render')
        return (
            <article>
                <Form>
                    <Form.Group controlId='peso'>
                        <Form.Label>
                            Peso <small>(kilos)</small>
                        </Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Peso'
                            onKeyUp={(e) => {
                                this.props.modificarDatosIMC("peso", e.target.value)
                                //this.setState({peso : parseFloat(e.target.value)})
                            }}
                            defaultValue={this.props.verDatoIMC("peso")}
                        />
                    </Form.Group>
                    <Form.Group controlId='estatura' className='mb-2'>
                        <Form.Label>
                            Estatura <small>(m2)</small>
                        </Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Estatura'
                            onKeyUp={(e) => this.props.modificarDatosIMC("estatura", e.target.value)}
                            defaultValue={this.props.verDatoIMC("estatura")}
                        />
                    </Form.Group>
                    <Button
                        variant='primary'
                        type='submit'
                        onClick={this.eventoClik}
                    >
                        Calcular
          </Button>
                </Form>
                <Loading visible={this.state.loading} />
            </article>
        )
    }

    componentDidMount() {
        // this.setState({peso : 90})
        //document.querySelector("#peso").value = 90
        console.log('Ya se monto el componente en el DOM')
    }
}