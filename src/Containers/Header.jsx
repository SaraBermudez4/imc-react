import React from 'react'

const Header = ({title}) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <a>Inicio</a>
                        <a>Calculo IMC</a>
                        <a>Paciente</a>
                    </ul>
                </nav>
                <p>{title}</p>
            </header>
        </>
    )
}
export default Header