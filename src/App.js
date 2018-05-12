import React from 'react';
import ScoreCard from "./components/ScoreCard";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
//import './App.css';

class App extends React.Component {

  state = {
    characters: characters,
    notClicked: characters,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  }

  shuffle = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  return cards;
  };

  onClick = id => {
    const findId = this.state.notClicked.find(character => character.id === id);

    if(findId === undefined) {
        this.setState({
            characters: characters,
            notClicked: characters,
            score: 0,
            topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
            message: "Incorrect 🙁"
        });
    }
    else {
        this.setState({ 
            characters: characters,
            notClicked: this.state.notClicked.filter(character => character.id !== id),
            score: this.state.score + 1,
            message: "Correct! 😀"
        });
    }
    this.shuffle(characters);
  }

  render() {
    return (
      <div>
      <ScoreCard
        score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}
      />
      <Wrapper>
        {this.state.characters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            onClick={this.onClick}
          />
        ))}
      </Wrapper> 
      </div>
    )
  }
}

export default App;
