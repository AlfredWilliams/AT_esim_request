import React from 'react';
import '../../assets/atlogo.png';
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="../../assets/atlogo"
    alt="AT Logo"
    className={className}
  />
);

export default Logo;
