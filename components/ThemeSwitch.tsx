import React from 'react';
import { useThemeSetting } from '../context/ThemeProvider';
import { Switch } from 'tamagui';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeSetting();

  return (
    <Switch size="$4" checked={theme === 'dark'} onCheckedChange={toggleTheme}>
      <Switch.Thumb animation="bouncy" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
        {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
      </Switch.Thumb>
    </Switch>
  );
};

export default ThemeSwitch;
