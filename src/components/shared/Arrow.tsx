import React from 'react';
import classNames from 'classnames';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

type ArrowProps = {
  className?: string;
  style?: any;
  onClick?: () => void;
  position?: string;
};

const Arrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  position = 'right',
}) => {
  return (
    <div
      className={classNames('text-white', className)}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
      onClick={onClick}
    >
      {position === 'left' ? (
        <MdNavigateBefore className="w-12 h-12" />
      ) : (
        <MdNavigateNext className="w-12 h-12" />
      )}
    </div>
  );
};

export default Arrow;
