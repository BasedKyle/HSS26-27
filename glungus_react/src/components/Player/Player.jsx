import styles from './Player.module.scss';

export default function Player({ position, onPlaySound }) {
  return (
    <div
      id="player"
      className={styles.player}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <span className={styles.soundTrigger} onClick={onPlaySound}>
        <img src="/images.jpg" alt="cat" />
      </span>
    </div>
  );
}