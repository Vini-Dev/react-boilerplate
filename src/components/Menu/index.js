import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from '~/components/Switch';
import { Creators as ThemeActions } from '~/store/ducks/theme';

import { Container, Title, ThemeMode, Label } from './styles';

const Menu = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);

  const handleChangeTheme = () => {
    dispatch(ThemeActions.toggleTheme());
  };
  return (
    <Container>
      <Title>Menu</Title>
      <ThemeMode>
        <Label>Dark mode</Label>
        <Switch
          checked={currentTheme === 'dark'}
          onChange={handleChangeTheme}
        />
      </ThemeMode>
    </Container>
  );
};

export default Menu;
