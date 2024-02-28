import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

//Styles
import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

export const Layout = () => {
  return (
    <main className={cx('Root')}>
      <Header />
      <Outlet />
    </main>
  );
};
