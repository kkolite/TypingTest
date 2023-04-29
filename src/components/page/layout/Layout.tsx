import { Outlet } from 'react-router-dom'
import { Footer, Header } from "..";
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
