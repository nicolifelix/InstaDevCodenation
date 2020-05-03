import React from 'react';

import './Post.scss';

//blocos que será repetido no feed
class Post extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      like: false,  //like ou não-like, true or false
    }
  }


  render() {
    const { like } = this.state;
    const { infoPost, infoUsuario } = this.props;

    console.log({ infoPost, infoUsuario }); 


    return (
      <article className="post">
        <header className="post__header">
          <div className="user">
            <a href="#" className="user__thumb">
              <img src={infoUsuario.avatar} alt={infoUsuario.name}/>
            </a>

            <a href="#" className="user__name">{infoUsuario.name}</a>
          </div>

          <button className="post__context">
            <i className="fas fa-ellipsis-h"/>
          </button>
        </header>

        <figure className="post__figure">
          <img src={infoPost.imageUrl} alt=""/>
        </figure>

        <nav className="post__controls">
          <button 
          className="post__control"
          //quando clico, o estado like muda para outro estado de like
          //se apenas fosse transformado pra true, não daria pra fazer o dislike
          onClick={ () => this.setState ({ like: !like  })} //setState -> muda estado, like é estado da classe

          >
          { like //this.state.like 
            ? <i className="fas fa-heart" /> //true
            : <i className="far fa-heart" /> //false
          }
          </button>

          <button className="post__control">
            <i className="far fa-comment"/>
            <span className="comments__counter">
              {infoPost.comments.length}
            </span>
          </button>

          <button className="post__control">
            <i className="far fa-bookmark"/>
          </button>
        </nav>


        {infoPost.comments.length > 0 && (
          <div className="post__status">
            <div className="user">
              <a href="#" className="user__thumb">
                <img src={infoPost.comments[0].avatar } alt=""/>
              </a>

              <span>
               comentado por <a href="#">{infoPost.comments[0].name}</a> e outra(s) <a href="#">{infoPost.comments.length - 1} pessoa(s)</a>
            </span>
            </div>
          </div>
        )}
      </article>
    );
  }
}

export default Post;