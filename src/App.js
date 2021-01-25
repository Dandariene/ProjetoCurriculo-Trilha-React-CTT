import React, { useState } from 'react';
import "./App.css"
import Header from "./components/Header";
import Button from "./components/Button";
import Formacao from "./components/Formacao";
import Experiencia from "./components/Experiencia";


function App() {

  const fakeAPI =
  {
    nome: 'Dandariene Braz',
    ocupacao: 'Estudante de ADS e Desenvolvimento Web',
    resumo: 'Tenho disposição para encarar novos desafios e desenvolver meus talentos. Busco ingressar na área de tecnologia com o propósito de colocar em prática o aprendizado da minha graduação e dos cursos extracurriculares realizados. ',


    contatos: [
      {
        id: 1,
        tipo: 'Celular: ',
        contato: '11 98665-9382'
      },
      {
        id: 2,
        tipo: 'Email: ',
        contato: 'dandariene@hotmail.com'
      }
    ],

    educacao: [
      {
        id: 1,
        instituicao: 'Unicesumar',
        curso: 'Análise e Desenvolvimento de Sistemas'
      },

    ],

    experiencia: [
      {
        id: 1,
        cargo: 'Scrum Foundations Professional Certificate',
        periodo: 'Junho/2020',
        empresa: 'Assistente de Programador',
        local: 'Unicesumar - Jul/2020',
        conteudo: 'Espanhol Básico'
      },

    ]
  }
  const [resposta] = useState(fakeAPI)
  return (
    < main >

      < Header resposta={resposta} />
      
      < aside >
       
      < Button resposta={resposta} />
       
      < Formacao resposta={resposta} />
      
      </ aside >
     
      < Experiencia resposta={resposta} />
    
    </ main >
  );
}

export default App;