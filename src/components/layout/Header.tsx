import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import HeaderMenu from '../shared/HeaderMenu';
import classNames from 'classnames';
import styles from './Header.module.css';

export const LISTS = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '#about',
    title: 'About',
  },
  {
    href: '#projects',
    title: 'Projects',
  },
  {
    href: '#contact',
    title: 'Contact',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-[102] top-0 absolute flex justify-center items-center left-0 w-full px-6 py-4">
      <div className="max-w-5xl mx-0 flex justify-between items-center w-full">
        <a href="#" className="z-10 text-3xl" aria-label="Benjo Quilario - BMQ">
          BM<span className="text-4xl">Q </span>
          {' />'}
        </a>
        <div className="flex justify-between items-center h-12">
          <nav aria-label="primary">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden absolute top-7 right-6 flex flex-col justify-center items-center bg-transition z-[999]"
            >
              {isOpen ? (
                <IoMdClose className="h-7 w-7" />
              ) : (
                <IoMdMenu className="h-7 w-7" />
              )}
            </button>
          </nav>
          <HeaderMenu
            className={classNames(
              isOpen
                ? 'opacity-100 top-0 right-0 visible'
                : '-top-4 opacity-0 -right-[1000px] invisible '
            )}
          />
          <div className="hidden md:block relative">
            <ul className="flex gap-3">
              {LISTS.map(list => (
                <li key={list.href}>
                  <a
                    href={list.href}
                    className={classNames(styles.header__link)}
                  >
                    {list.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
