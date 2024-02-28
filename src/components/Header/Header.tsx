//Styles
import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

import { useState } from 'react';
import { Container, Group, Burger, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

const links = [
  { link: '/contacts', label: 'Контакты' },
  { link: '/info', label: 'Инфо' },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx('link')}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={cx('Root')}>
      <Container className={cx('inner')} fluid pt={10}>
        <Text
          size="xl"
          variant="gradient"
          fz={35}
          fw={900}
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          Make Mocks
        </Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Drawer opened={opened} onClose={toggle} position="right" />
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" />
      </Container>
    </header>
  );
};
