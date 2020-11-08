import React from 'react';

type Types = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  type: Types;
  className?: string;
}

const elements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const Heading: React.FC<HeadingProps> = ({ children, type, ...props }) =>
  React.createElement(elements[type] || elements.h1, props, children);

export default Heading;
