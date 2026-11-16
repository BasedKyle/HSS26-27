import Player from '../Player/Player';
import styles from './Playground.module.scss';

export default function Playground({ playerPos, coinPos, onPlaySound }) {
  return (
    <div id="playground" className={styles.playground}>
      <Player position={playerPos} onPlaySound={onPlaySound} />
      <div
        className={styles.coin}
        style={{ left: `${coinPos.x}px`, top: `${coinPos.y}px` }}
      >
        <img src="/coin.png" alt="coin" />
      </div>
    </div>
  );
}