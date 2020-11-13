import React from 'react';

type Types = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  type: Types;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, type, ...props }) => React.createElement(type, props, children);

export default Heading;
