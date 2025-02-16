import React from 'react';
import { useState, useEffect } from 'react';
import { useThemeSetting } from '../context/ThemeProvider';
import { Switch } from 'tamagui';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeSetting();

  return (
    <Switch size="$4"
      checked={theme === 'dark'}
      onCheckedChange={toggleTheme} >
      <Switch.Thumb animation="bouncy" />
    </Switch>
  )
}

export default ThemeSwitch;