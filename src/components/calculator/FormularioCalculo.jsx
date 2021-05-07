import { Button } from 'react-bootstrap'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Loading from './../pages/Loading'

export default class FormularioCalculo extends Component {

    constructor({modificarDatosIMC,verDatoIMC}) {
        super()
        this.state = {
            loading : false
        }

        this.modificarDatosIMC = modificarDatosIMC
        this.verDatoIMC = verDatoIMC
        this.eventoClick = this.eventoClick.bind(this)
    }

    eventoClick(e){
        e.preventDefault()
        this.props.modificarDatosIMC("peso", document.querySelector("#peso").value)
        this.props.modificarDatosIMC("estatura", document.querySelector("#estatura").value)
    }

    /*eventClick = e => {
        e.preventDefault()
        //this.setState({ estatura: 1.8, peso: 70 })
        this.eventClick.modificarDatosIMC("peso", this.verDatoIMC("peso"))
        this.eventClick.modificarDatosIMC("estatura", this.verDatoIMC("estatura")
        //console.log("Holi");
    }*/

    UNSAFE_componentWillMount() {
        console.log("No se ha modificado el componente")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Se está modificando el estado, shouldComponentUpdate")
        //console.log(this.props, this.state);
        //console.log(nextProps, nextState);

        /*let respuesta = nextState.peso >= 500 ? false : true
        
        if(nextState.peso >= 500){
            return false
        }else{
            return true
        }*/
        //return nextState.peso >= 500 ? false : true
        return true
    }

    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log("Se está modificando el estado, UNSAFE_componentWillUpdate")
        //console.log(this.props, this.state);
        //console.log(nextProps, nextState);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Ya se modificó el estado, componentDidUpdate")
        //console.log(this.props, this.state);
        //console.log(prevProps, prevState);
    }

    componentWillReceiveProps(nextProps){
        console.log("Se inicio el proceso de modificacion del estado, componentWillReceiveProps") 
      }

    componentDidMount(){
        console.log("Se está modificando el estado, componentDidMount")
        //document.querySelector("#peso").value = 90
        //this.setState({peso: 90})
    }

    render() {
        console.log("Se está renderizando el componente, render");
        return (
            <article>
                <Form>
                    <Form.Group controlId="peso">
                        <Form.Label>Peso <small>(kilos)</small></Form.Label>
                        <Form.Control type="number" placeholder="Peso" onKeyUp={(e) => {
                            this.props.modificarDatosIMC("peso",e.target.value)
                            //this.setState({ peso: parseFloat(e.target.value) })
                        }} defaultValue={this.props.verDatoIMC("peso")}
                        />
                    </Form.Group>
                    <Form.Group controlId="estatura" className="mb-2">
                        <Form.Label>Estatura <small>(m2)</small></Form.Label>
                        <Form.Control type="number" placeholder="1.45" onKeyUp={(e) => {
                            this.props.modificarDatosIMC("estatura",e.target.value)
                            //this.setState({ estatura: parseFloat(e.target.value) })
                        }} defaultValue={this.props.verDatoIMC("estatura")}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.eventoClick}>
                        Calcular
                    </Button>
                </Form>
                <Loading visible = {this.state.loading}/>
            </article>
        )
    }
}
