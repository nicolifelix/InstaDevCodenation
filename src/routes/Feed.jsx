import React from 'react';
import './Feed.scss';
import Post from "../components/Post";
import Loading from '../components/Loading';

//lista de posts
class Feed extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      usersFetched: 0
    }
  }


  //chamando a API para apresentar os posts
  componentDidMount() {
    const usersList = fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');

    usersList
    .then((resposta) => resposta.json())//quando a requisição estiver pronta
    .then(dados => this.setState({ users: dados }));
  }

  
  
  //chamado somente e toda vez que alterar o estado, o fetch populou o array
  //o render é chamado novamente
  componentDidUpdate(){
    const { users, posts, usersFetched } = this.state;

    if (usersFetched === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)
      .then((resposta) => resposta.json())//quando a requisição estiver pronta
      .then(dados => this.setState({ 
        posts: [ ...posts, ...dados],
        usersFetched: usersFetched + 1,
        loading: false
       }));
  }



  getUserPostById(postUserId) {
    const { users } = this.state;

    return users.find(user => postUserId === user.id);
  }



  render() { //pra cada usuario existente na lista, necessario criar um novo post
    
    const { posts } = this.state;

    return (
    <div className="container">
      <section className="feed">

      { posts.length > 0 //se a qtdd de post for maior q 0,
        ? posts.map((cadaPost) => (
            <Post 
              key={cadaPost.id} //key, informa ao servidor que o id q ele esta chamdno é o de cada post, pra nao dar duplicidade com id de outros componentes
              infoPost={cadaPost}
              infoUsuario={this.getUserPostById(cadaPost.userId)}
            /> 
          )) //ele vai iterar o post com o nome de usuario
        : <Loading />

      }
      </section>
    </div> 
    );
  }
}

export default Feed;