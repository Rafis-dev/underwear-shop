import style from './Footer.module.scss';

export const FooterDev = () => {
  return (
    <div className={style.development}>
      <ul className={style.developmentList}>
        <li>
          Designer:{' '}
          <a className={style.link} href="https://t.me/Mrshmallowww">
            Anastasia Ilina
          </a>
        </li>
        <li>Developer: </li>
      </ul>
    </div>
  );
};
