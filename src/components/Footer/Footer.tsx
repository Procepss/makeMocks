//Styles
import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

export const Footer = () => {
  return <footer className={cx('Root')}>{'футер'}</footer>;
};
