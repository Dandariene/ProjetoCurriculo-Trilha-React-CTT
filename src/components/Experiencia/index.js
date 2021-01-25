import React from 'react'

function Experiencia(props) {
  const { experiencia } = props.resposta


  return (
    <>
      <div className="experience">
        <h2>Cursos e Certificações</h2>

        <div className="experience-item">
          <div>
            {

              experiencia.map(emp =>
              (<li key={emp.id}>
                <strong>{emp.cargo}</strong>
                <span>{emp.periodo}</span>
                <strong>{emp.empresa}</strong>
                <span>{emp.local}</span>
                <p>{emp.conteudo}</p>
              </li>
             
              ))}

          </div>
         <p>
           <h3>Cursos extracurriculares</h3> 
           Big Data Fundamentos 2.0- Data Science Academy - 8hs         //
          Lógica de programação - SENAI - 14hs      //
          Modern Technology - WomakersCode (Fundamentos de Cloud Computing, Cyber Security, Office 365, LGPD, Azure Functions, Power BI,Engenharia de dados e Machine Learning) - 15hs     //
          Projetos ágeis com SCRUM - Digital Innovation One - 2hs     //
          Soft Skills - WomakersCode - 7hs     //
          TOTVS Gestão Empresarial com ERP - Digita Mais Brasil - 12hs         
          </p>
       
        </div>
        <div className="experience-item">



        </div>
      </div>
    </>
  )
}
export default Experiencia