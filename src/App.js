import logo from './logo.svg';
import './App.css';
import Gameboard from './Gameboard';

function App() {
  return (
    <body>
      <h1 class="game-title">The Classic MeMmmm Game</h1>
      <div class="game-stats">
        <div class="game-stats__level">
          <div class="game-stats__level--label">Current Level:</div>
          <div class="game-stats__level--value">1</div>
        </div>
        <div class="game-stats__score">
          <div class="game-stats__score--label">Score:</div>
          <div class="game-stats__score--value">0</div>
        </div>
        <button class="game-stats__button" type="button">New Game</button>
      </div>
      <div class="game-timer"><div class="game-timer__bar">60s</div></div>
        <Gameboard />
    </body>
  );
}

export default App;
