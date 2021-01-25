import React from 'react'
import fotoCurriculo from '../imagem/fotoCurriculo.jpg'

function Header(props) {
    const { nome, ocupacao, resumo } = props.resposta
    return (
        <>
            <div className="perfil">
                <img src={fotoCurriculo} alt="Perfil" />
            </div>

            <div className="biografia">

                <h1>{nome}</h1>

                <div className="ocupacao">{ocupacao}</div>
                <p>Cursando Análise e desenvolvimento de Sistemas e iniciando estudos em Desenvolvimento Web com React</p>
            </div>

            <div className="titulo">
                Perfil<br /> Profissional
            </div>

            <div className="perfil-profissional">

                <p>{resumo}</p>

            </div>
        </>)

}
export default Header