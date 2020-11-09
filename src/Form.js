import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onchange(e) {
    this.setState({ [e.target.title]: e.target.value });
    this.setState({ [e.target.poster]: e.target.value });
    this.setState({ [e.target.comment]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`The movie ${res.title} has been saved !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout de votre commentaire : ${e.message}`);
      });
  }

  render() {
    return (
      <div className='CommentMovie'>
        <h1>Comment your movie</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>title</legend>
            <div className='movie-title'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className='movie-poster'>
              <label htmlFor='poster'>poster</label>
              <input
                type='text'
                id='poster'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className='movie-comment'>
              <label htmlFor='comment'>Comment</label>
              <input
                type='textarea'
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className='comment-movie'>
              <input type='submit' value='Envoyer' />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
