import React from 'react';
import './style.css';
import * as Avatar from '@radix-ui/react-avatar';

const Avatar = ({ src, alt, fallback }) => {
  return (
    <Avatar.Root className='AvatarRoot'>
      <Avatar.Image className='AvatarImage' src={src} alt={alt} />
      <Avatar.Fallback className='AvatarFallback' delayMs={600}>
        {fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default Avatar;
