import React from 'react'

function Formacao(props) {
    const { educacao } = props.resposta

    return (
        <>
            <div className="sidebar">
                <h3>Educação</h3>
                <div className="lista-de-formacao">

                    {

                        educacao.map(form =>
                        (<li key={form.id}>
                            <h4>{form.instituicao}</h4>
                            <p>{form.curso}</p>
                        </li>

                        ))}

                </div>
            </div>
        </>
    )
}
export default Formacao