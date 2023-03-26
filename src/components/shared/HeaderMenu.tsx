import React from 'react';
import { LISTS } from '../layout/Header';
import classNames from 'classnames';

type HeaderMenuProps = {
  className: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'fixed z-[101] w-full left-0 z-100 transition-all bottom-0 flex justify-center items-center bg-[#edf2f7f2]',
        className
      )}
    >
      <ul className="text-center">
        {LISTS.map(list => (
          <li key={list.href} className="mb-2 text-lg">
            <a href={list.href} className="relative uppercase font-semibold">
              {list.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
