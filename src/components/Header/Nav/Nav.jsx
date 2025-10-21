import { Category } from './Category/Category';
import { Gender } from './Gender/Gender';

export const Nav = () => {
  return (
    <nav>
      <div className="container">
        <Gender />
        <Category />
      </div>
    </nav>
  );
};
