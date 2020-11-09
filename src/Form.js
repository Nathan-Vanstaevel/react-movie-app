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
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du film : ${e.message}`);
      });
  };

  render() {
    return (
      <div className='FormMovie'>
        <h1>Write a comment</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='movie-name'>Movie </label>
              <input
                type='text'
                id='movieName'
                name='title'
                onChange={this.onChange}
                value={this.state.movieName}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='imageUrl'>Poster :</label>
              <input
                type='url'
                id='imageUrl'
                name='poster'
                onChange={this.onChange}
                value={this.state.imageUrl}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='movieReview'>Review :</label>
              <textarea
                id='movieReview'
                name='comment'
                onChange={this.onChange}
                value={this.state.movieReview}
                required
              />
            </div>
            <hr />
            <div className='form-data'>
              <input type='submit' value='Envoyer' />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
