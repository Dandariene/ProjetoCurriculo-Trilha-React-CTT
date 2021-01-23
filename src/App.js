import React, { useState } from 'react';
import "./style.css"
import Header from './components/Header'
import PostList from './components/PostList'
function App() {

  const minhaAPIFalsa = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rodrigo França',
          avatar: 'https://randomuser.me/api/portraits/men/58.jpg'
        },
        date: '05 Mar 2020',
        content: 'Data para novo curso?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Douglas Silva',
              avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            content: 'Ainda não foi definido.'
          },
          {
            id: 2,
            author: {
              name: 'Fernando Costa',
              avatar: 'https://randomuser.me/api/portraits/men/37.jpg'
            },
            content: 'Provavelmente em Agosto.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Bianca Rodrigues',
          avatar: 'https://randomuser.me/api/portraits/women/58.jpg'
        },
        date: '04 Mar 2020',
        content: 'Pessoal, alguém já usou React Native?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rafael Maia',
              avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
            },
            content: 'Sim! Recomendo bastante!'
          }
        ]
      }
    ]
  }

  const [resposta] = useState(minhaAPIFalsa)

  return (
    <>
      <Header />
      <PostList resposta={resposta} />
    </>
  );
}

export default App;
