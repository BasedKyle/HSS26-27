import { useState, useRef } from 'react';
import Playground from './components/Playground/Playground';
import Button from './components/Button/Button';
import Input from './components/input/Input';

const FIELD_SIZE = 400;
const CELL_SIZE = 20;
const MAX_POS = FIELD_SIZE - CELL_SIZE; // 380

function getRandomCoinPosition(excludePos) {
  const positions = [];
  for (let x = 0; x <= MAX_POS; x += CELL_SIZE) {
    for (let y = 0; y <= MAX_POS; y += CELL_SIZE) {
      if (x !== excludePos.x || y !== excludePos.y) {
        positions.push({ x, y });
      }
    }
  }
  return positions[Math.floor(Math.random() * positions.length)];
}

export default function App() {
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [coinPos, setCoinPos] = useState(() =>
    getRandomCoinPosition({ x: 0, y: 0 })
  );
  const [statusText, setStatusText] = useState('старт!!');
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');

  const audioRef = useRef(null);

  const playCatSound = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const handleMove = (dx, dy) => {
    const nextX = playerPos.x + dx;
    const nextY = playerPos.y + dy;

    if (nextX < 0 || nextX > MAX_POS || nextY < 0 || nextY > MAX_POS) {
      setStatusText('стоять!!');
      return;
    }

    const newPos = { x: nextX, y: nextY };
    setPlayerPos(newPos);
    setStatusText('мяу');

    if (newPos.x === coinPos.x && newPos.y === coinPos.y) {
      setScore((prev) => prev + 1);
      setCoinPos(getRandomCoinPosition(newPos));
    }
  };

  return (
    <div>
      <Input
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Имя кота..."
      />

      <Playground
        playerPos={playerPos}
        coinPos={coinPos}
        onPlaySound={playCatSound}
      />

      <div className="text">
        <p className="meow">{statusText}</p>
      </div>

      <p className="score">
        {playerName ? `${playerName} - ` : ''}Монет собрано:{' '}
        <span id="coin-count">{score}</span>
      </p>

      <div className="controls">
        <Button id="button-top" onClick={() => handleMove(0, -CELL_SIZE)}>
          ↑
        </Button>
        <Button id="button-down" onClick={() => handleMove(0, CELL_SIZE)}>
          ↓
        </Button>
        <Button id="button-left" onClick={() => handleMove(-CELL_SIZE, 0)}>
          ←
        </Button>
        <Button id="button-right" onClick={() => handleMove(CELL_SIZE, 0)}>
          →
        </Button>
      </div>

      <audio ref={audioRef} src="/Cat_idle2_1.mp3" id="cat-sound" />
    </div>
  );
}