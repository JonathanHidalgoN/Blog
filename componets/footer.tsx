import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {
      '© 2021 - ' + new Date().getFullYear()
      }
    </footer>
  );
}
