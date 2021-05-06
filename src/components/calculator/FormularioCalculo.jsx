import { Button } from 'react-bootstrap'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class FormularioCalculo extends Component {

    constructor() {
        super()
        this.state = {
            estatura: 1.6,
            peso: 50
        }
        this.eventClick = this.eventClick.bind(this)
    }

    eventClick(e){
        e.preventDefault()
        this.setState({estatura:1.8, peso:70})
        console.log("Holi");
    }

    /*eventClick = e => {
        e.preventDefault()
        this.setState({estatura:1.8, peso:70})
        console.log("Holi");
    }*/ 

    render() {
        return (
            <article>
                <Form>
                    <p>IMC = {this.state.peso/ this.state.estatura}</p>
                    <Form.Group controlId="peso">
                        <Form.Label>Peso <small>(kilos)</small></Form.Label>
                        <Form.Control type="number" placeholder="45" onKeyUp = {(e) =>{
                        console.log(e.target.value)
                        this.setState({peso: e.target.value})}} defaultValue={this.state.peso} />
                    </Form.Group>
                    <Form.Group controlId="estatura" className="mb-2">
                        <Form.Label>Estatura <small>(m2)</small></Form.Label>
                        <Form.Control type="number" placeholder="1.45" defaultValue={this.state.estatura} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.eventClick}>
                        Submit
                    </Button>
                </Form>
            </article>
        )
    }
}
