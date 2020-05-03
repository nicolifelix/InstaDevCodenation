import React from 'react';

import './Feed.scss';

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      avatar: "",
      username: "",
      email: "",
      submit: false,
    }
  }
  


  //atualizar os dados enquanto o usuario digita
  setName(event) { //mostra eventos/mudanças dos inputs ex onChange input 
    const { value } = event.target; //o value desestruturado é do target

    this.setState({ name: value }); //nome é o valor digitado, que vai para estado
  }

  setAvatar(event) { 
    const { value } = event.target; 

    this.setState({ avatar: value }); 
  }

  setUserName(event) { 
    const { value } = event.target; 

    this.setState({ username: value }); 
  }

  setEmail(event) { 
    const { value } = event.target; 

    this.setState({ email: value }); 
  }

  
  //submeter formulario
  cadastraUsuario(event) {
    event.preventDefault(); //ignorar evento - previne comportamento padrao de algo

    const { name, avatar, username, email } = this.state;
    const postObject = JSON.stringify ({ //enviar arquivo  em formato de string 
      name, 
      avatar, 
      username,
      email,
    }); 

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', { //fetch é promise
      method: 'POST', //enviar dados para servidor
      
      headers: {
        'Content-Type' : 'application/json' //enviando
      },

      body: postObject //arquivo em formato json

    }).then ((res) => res.json())
      .then(() => this.setState( {submit: true } ))
    //entao retorna uma resposta (), o estado submit muda para true, enviado
  }




  render() {

    const { name, username, avatar, submit } = this.state; //outra forma seria=> const meuNome = this.state.name
    //na forma acima, é possível desestrututar varios values, economizando em linhas
   
    return (
      <div className="container">
        <section className="feed">
          <article className="post new-user">
            <header className="post__header">
              <h1>Novo usuário: </h1>
            </header>

            {submit && window.alert('Cadastrado com sucesso!') //short circuit

            }

            <div className="user">
              <div className="user__thumb">
                { avatar.length > 0 
                  ? <img src={avatar} alt="" />
                  : <img src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" />
                }
              </div>




              {/* reagindo ao estado this.state.name */}
                <p className="user__name">
                  {name} - @{username}
                </p>  
            </div>

            <div className="post__form">
              <label>Nome</label>
              <input type="text" placeholder="fulano da silva" 
                     onChange={ (event) => this.setName(event)} //retorna callback e this.setName event como parametro
                      //callback informa q this é o elemento window.event e nao a classe NewUser, senao é undefined
                      //arrowfunction ignoram valor de this
              />

              <label>Usuário</label>
              <input type="text" placeholder="fulano-da-silva" 
                     onChange={ (event) => this.setUserName(event)} 
              />


              <label>E-mail</label>
              <input type="text" placeholder="fulano@fulano.com" 
                     onChange={ (event) => this.setEmail(event)} 
              />


              <label>URL da imagem</label>
              <input type="text" placeholder="http://..." 
                      onChange={ (event) => this.setAvatar(event)} 
              />


              <button type="button" 
                      onClick= { (event)=> this.cadastraUsuario(event) }>
                Cadastrar
              </button>
              {/* pega os dados preenchidos do estado, az fetch no servidor, indica metodo e passa objeto convertido em 
              string como body */}

            </div>
          </article>

        </section>
      </div>
    );
  }
}

export default NewUser;
