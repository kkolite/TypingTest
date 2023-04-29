import classes from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
      <p className={classes.text}>Wait...</p>
    </div>
  );
};
