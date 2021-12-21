import React, { FC } from 'react';

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    default: {
      return null;
    }
  }
};

export default Icon;
