import React from 'react';
import './style.css';
import * as Tooltip from '@radix-ui/react-tooltip';

const Tooltip = ({ tooltip, content }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{tooltip}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className='TooltipContent' sideOffset={5}>
            {content}
            <Tooltip.Arrow className='TooltipArrow' />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Tooltip;
