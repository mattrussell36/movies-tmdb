import React, { Component } from 'react';
import './App.css';
import { TMDB_GENRES_URL, TMDB_NOW_PLAYING } from '../../constants';
import Controls from '../../components/Controls/Controls';
import List from '../../components/List/List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rating: 3,
      matchAll: false,
      selectedGenres: [],
      genres: [],
      movies: [],
      error: false,
    };
  }

  handleChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
  }

  handleGenreChange(e) {
    const genres = this.state.genres.map(g => {
      if (e.target.name === g.name) {
        g.checked = !g.checked;
      }

      return g;
    });

    const selectedGenres = genres
      .filter(g => g.checked)
      .map(g => g.id);

    this.setState({ 
      selectedGenres,
      genres,
    });
  }

  componentDidMount() {
    // TODO: Get image paths from the configuration Api
    Promise.all([
      fetch(TMDB_GENRES_URL).then(res => res.json()),
      fetch(TMDB_NOW_PLAYING).then(res => res.json()),
    ])
      .then(data => {
        const genres = data[0].genres.map(genre => Object.assign(genre, { checked: false }));
        const movies = data[1].results;

        this.setState({ 
          genres,
          movies,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    const errorMessage = this.state.error ?
      <div className="App-error">Oops! Something went wrong.</div> :
      null;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zone TMDB</h1>
        </header>
        <div className="App-wrapper">
          <aside className="App-controls">
            <Controls 
              {...this.state} 
              handleChange={e => this.handleChange(e)} 
              handleGenreChange={e => this.handleGenreChange(e)} 
            />
          </aside>
          <main className="App-main">
            {errorMessage}
            <List {...this.state} />
          </main>
        </div>
        <footer className="App-footer">
          Zone TMDB
        </footer>
      </div>
    );
  }
}

export default App;
