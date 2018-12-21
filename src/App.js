import React, { Component } from "react";
import HermitsCard from "./components/HermitCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import hermits from "./Hermits.json"
import "./App.css"

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hermits: hermits,
         outcome: "Click an image to begin!",
         currentScore: 0,
         topScore: 0
      }
      this.ifClicked = this.ifClicked.bind(this);
   }

   ifClicked(id) {
      let clickedImg = this.state.hermits.filter(hrmt => hrmt.id === id)[0];
      let imgCopy = this.state.hermits.slice().sort(function(a,b){return 0.5 - Math.random()});
      // If card has not been clicked, set its clicked state to true
      if (!clickedImg.clicked) {
         clickedImg.clicked = true;
         imgCopy[imgCopy.findIndex((hrmt) => hrmt.id === id)] = clickedImg;

         // Set the state and imcrement the counter
         this.setState({
            hermits: imgCopy,
            outcome: "You guessed correctly!",
            currentScore: this.state.currentScore + 1,
            topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore)
         })
      }
      // If a card has been clicked already, then set its click to false and reset the game
      else {
         let resetImgCopy = imgCopy.map((hrmt) => {
            return {
              id: hrmt.id,
              image: hrmt.image,
              clicked: false,
            }
          });
          this.setState({
            hermits: resetImgCopy,
            outcome: "You guessed incorrectly!",
            currentScore: 0,
          });
      }
   }
  

   render() {
      return (
         <>
            <Nav 
               brand="Clicky Game"
               outcome={this.state.outcome}
               currentScore={this.state.currentScore}
               topScore={this.state.topScore}
            />
            <Jumbotron>
                  Click on an image to earn points, but don't click on any more than once!
            </Jumbotron>

            <Wrapper>
            {this.state.hermits.map(hrmt => (
               <HermitsCard
                  ifClicked={this.ifClicked}   
                  id={hrmt.id}
                  key={hrmt.id}
                  image={hrmt.image}
               />
            ))}
            </Wrapper>
            <Footer>Clicky Game</Footer>
         </>
      )
   }
}

export default App;
