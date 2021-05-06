
import React from 'react'
import { Image } from 'react-bootstrap'

const BasculaIMC = ({bascula}) =>{
    return (
        <article>
            <Image src={bascula} alt="logo" style = {{with:"60%"}} fluid/>
        </article>
    )
}

export default BasculaIMC
