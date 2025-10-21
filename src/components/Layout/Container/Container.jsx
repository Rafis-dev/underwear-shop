import cn from 'classnames';
import style from './Container.module.scss';

export const Container = ({ children, className }) => {
  return <div className={cn(style.container, className)}>{children}</div>;
};
