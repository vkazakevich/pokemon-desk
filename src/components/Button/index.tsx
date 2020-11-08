import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent) => void;
  theme?: 'yellow' | 'blue';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'medium', theme = 'green', fullWidth = false }) => {
  return (
    <button
      type="button"
      className={cn(
        // @todo Узнать на ревью, можно ли использовать что-то вроде s[theme]
        s.root,
        { [s.small]: size === 'small' },
        { [s.yellow]: theme === 'yellow' },
        { [s.fullWidth]: fullWidth },
        { [s.fullWidth]: fullWidth },
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
