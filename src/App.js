import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
    constructor() {
      super()
      this.state = {
        breed: 'husky',
        images: []
      }
    }

    handleChange = e => {
      this.setState({
        breed: e.target.value
      })
    }

    componentDidMount() {
      this.fetchDogImages()
    }
    
    componentDidUpdate(prevProps, prevState) {
      if(prevState.breed !== this.state.breed) {
        // this.setState({
        //   images:[]
        // })
        this.fetchDogImages()
      }
    }

    fetchDogImages =() => {
      axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
      .then(res => {
        this.setState({images: res.data.message})
      } )
      .catch(error => {
          console.log('error', error)
      })
    }


  render() {
    return (
      <>
      
        <h1>The Dog Website</h1>

          <select value={this.state.breed} onChange={this.handleChange}>
            <option value='husky'>Husky</option>
            <option value='beagle'>Beagle</option>
            <option value='corgi'>Corgi</option>
          </select>

          <div>
          {this.state.images.map((image, index) => (
            <img src={image} alt='Dog' key='index' />
          ))}
          </div>
          </>
      
    );
  }

}

export default App;
