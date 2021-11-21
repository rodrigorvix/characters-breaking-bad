import styles from './styles.module.scss'

export function Header() {

  return (
    <header className={styles.headerContent}>
      <h1>Personagens de</h1>
      <img src="/images/logo.png" alt="Logo" />
    </header>
  );
}