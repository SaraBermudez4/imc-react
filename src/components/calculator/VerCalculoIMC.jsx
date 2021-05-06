import React from 'react'

const VerCalculoIMC = ({ estatura, peso }) => {
    return (
        <article className="text-center">
            <h1>IMC</h1>
            <h3>
                <span>
                    <b>{peso / estatura}</b>
                </span>
            </h3>
        </article>
    )
}

export default VerCalculoIMC