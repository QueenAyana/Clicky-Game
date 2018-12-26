<h1 align="center"><strong>:space_invader:Clicky Game</strong></h1>

### Overview

`Clicky Game` is a simple (and server-less) mobile-responsive memory game built with React. The app was developed by breaking up the application's UI into components, managing component state, and constructing functionality to respond to user events.  

The app renders sixteen different images of Hermits from the Hermitcraft minecraft server, which all listen and respond to click events. A user's score is incremented by one point on click of their first Hermit image, and thereafter on each correct guess. The Hermits will automatically shuffle after every guess, and if the user clicks on a Hermit more than once, their current score will reset to zero and the game will restart. The top-score counter will maintain the user's highest previous score.


## Demo the App

*Clicky Game* is deployed on Heroku. Demo the application [here](https://git.heroku.com/gentle-chamber-82271.git
).

## Installation

To install the application locally:
1. Clone this repository to your local machine:
      https://github.com/QueenAyana/Clicky-Game      
2. `cd` into the repository and execute the following in the bash terminal to install the required packages/dependencies:
    - `yarn install`
    - `yarn start`
            
3. The application will now be available to view in the browser at  `http://localhost:3000/`            

<h4 align="center">Enjoy!!</h4>


## Built With

- React ~ JavaScript library for building user interfaces
    * Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- ES6 ~ EcmaScript 6 standardized scripting language
- Bootstrap CDN ~ Front-end framework
- CSS ~ Custom stylesheet
- Normalize ~ CSS reset


## Credits

Full-Stack Flex Coding Bootcamp @ UCLA Extension
