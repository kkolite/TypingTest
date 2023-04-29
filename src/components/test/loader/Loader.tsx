import { TEXT } from '../../../data/text';
import classes from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
      <p className={classes.text}>{TEXT.TEST.LOAD}</p>
    </div>
  );
};
