import { Container } from '../Layout/Container/Container';
import style from './Footer.module.scss';
import { FooterCategory } from './FooterCategory';
import { FooterContacts } from './FooterContacts';
import { FooterCopyrights } from './FooterCopyrights';
import { FooterDev } from './FooterDev';
import { FooterSocial } from './FooterSocial';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={style.container}>
          <FooterCategory />

          <FooterSocial />

          <FooterContacts />

          <FooterCopyrights />

          <FooterDev />
        </div>
      </Container>
    </footer>
  );
};
