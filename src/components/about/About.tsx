import { NavLink } from 'react-router-dom';
import { EPages } from '../../data/types';
import { useAnimation } from '../../hooks';
import { TEXT } from '../../data/text';
import styles from './About.module.scss';

export const AboutInfo = () => {
  const animation = useAnimation(200);

  return (
    <>
      <section className={styles.section}>
        <div className={animation ? styles.block : styles.block + ' ' + styles.active__text}> 
          <h4>Time to Type!</h4>
          <NavLink to={EPages.TEST}>
            <button className={styles.button}>Let's Go</button>
          </NavLink>
        </div>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/6329/6329420.png" 
          alt="keyboard"
          className={animation ? styles.image : styles.image + ' ' + styles.active__image} 
        />
      </section>
      <div className={styles.quote__container}>
        <section className={styles.quote}>
          <p className={styles.quote__text}>{TEXT.ABOUT.QUOTE}</p>
          <p className={styles.quote__author}>{TEXT.ABOUT.QUOTE_AUTHOR}</p>
        </section>
      </div>
      <section className={styles.section}>
        <img 
          src="/React-icon.png"
          alt="react-orange"
          className={animation ? styles.image : styles.image + ' ' + styles.active__image}
        />
        <div className={animation ? styles.block : styles.block + ' ' + styles.active__text}>
          <h4>Stack</h4>
          <ul>
            <li>React</li>
            <li>Redux + RTK</li>
            <li>TypeScript</li>
            <li>SCSS</li>
          </ul>
          <a href="https://github.com/kkolite">
            <button className={styles.button}>Github</button>
          </a>
        </div>
      </section>
    </>
  )
};
