import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbo";
import MemoryGame from "./components/MemoryGame";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

// FUNCTION: SHUFFLE THE CHARACTER ARRAY
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffleRandom(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// SETS THE STATE 
class App extends Component {
  // Setting this.state
  state = {
    characters,
    characterClicked: [],
    CorrectGuesses: 0,
    Update:"",
    HighScore: 0
    
  };

  // FUNCTION: WHEN IMAGE IS CLICKED/
  imageClick = id => {
    if (this.state.characterClicked.indexOf(id) === -1) {
      //Updates the Correct Guesses and updates Best Score if necessary
      this.handleIncrement();
      // Pushes clicked character into the characterClicked array
      this.setState({
        characterClicked: this.state.characterClicked.concat(id)
      });
      // If character was already clicked: you lose!
    } else {
      this.setState({ 
        Update:"Uh oh! You guessed that character already."
       });
      // Resets the game
      this.handleReset();
    }
  };

  // FUNCTION: UPDATING THE SCORE BOARDS
  handleIncrement = () => {
    // Updates the correct guesses by 1
    const high = this.state.CorrectGuesses + 1;
    this.setState({ 
      CorrectGuesses: high,
      Update:"You guessed correctly!"
     });
    //Conditional to determine if Best Score was achieved
    if (high >= this.state.HighScore) {
      //Updates the High Score
      this.setState({ HighScore: high });
    }
    //Conditional to determine if all characters were picked correctly
    else if (this.state.CorrectGuesses === 12) {
      alert("You win!");
    }
    //resets the game
    this.Shuffle();
  };

  // FUNCTION: RESETS THE GAME
  handleReset = () => {
    this.setState({
      CorrectGuesses: 0,
      HighScore: this.state.HighScore,
      characterClicked: []
    });
    //Shuffles the cards
    this.Shuffle();
  };

  // FUNCTION: CALLS THE SHUFFLE-RANDOM FUNCTION AND SETS STATE WITH THAT FUNCTIONS RETURN
  Shuffle = () => {
    console.log("shuffled");
    // shuffles the characters and sets the State
    let shuffledCharacters = shuffleRandom(characters);
    this.setState({ characters: shuffledCharacters });
  }

  //RENDER SECTION
  render() {

    return (
      // Always must be between divs
      <div>
        <NavBar
          // scoring section
          score={this.state.CorrectGuesses}
          HighScore={this.state.HighScore}
          Update={this.state.Update}
        />
        {/* Title */}
        <Jumbo />
        <div className="wrapper">
          {this.state.characters.map(character => (

            // Character cards
            <MemoryGame
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        
        </div>
        <Footer />

      </div>
    );
  }
};

export default App;
