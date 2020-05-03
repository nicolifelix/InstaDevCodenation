import React from 'react';

import './Feed.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      avatar: "",
      username: "",
      email: "",
    }
  }
  
  componentDidMount() {
    const { pathname } = window.location; //username utilizado na rota/url em app.jsx, nao tem nada a ver com o estado username
    //console.log mostraria, /users/username, mas so queremos username
    const paramUser = pathname.split("/")[2];

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${paramUser}`)
    .then(response => response.json())
    .then (profileData => this.setState({
      name: profileData[0].name,
      avatar: profileData[0].avatar,
      username: profileData[0].username,
      email: profileData[0].email,
    }));
  }

  render() {

    const { name, username, email, avatar } = this.state; //outra forma seria=> const meuNome = this.state.name
    //na forma acima, é possível desestrututar varios values, economizando em linhas
   
    return (
      <div className="container">
        <section className="feed">
          <article className="post new-user">
             
             <div className="user">
              <div className="user__thumb">
                { avatar.length > 0 
                  ? <img src={avatar} alt="" />
                  : <img src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" />
                }
              </div>

                <p className="user__name"> {name} </p>  
                <p className="user__name"> @{username} </p>
                <p className="user__name"> {email} </p>

              </div>

           
          </article>

        </section>
      </div>
    );
  }
}

export default Profile;
