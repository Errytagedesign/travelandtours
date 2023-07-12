'use client';

import React, { useState } from 'react';

// icons
import { BsChevronDown } from 'react-icons/bs';
import Logo from '../../public/assets/DestinyLogo.png';
// styles
import styles from './NavBar.module.scss';

// images

import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  const [navbar, setNavbar] = useState(true);

  const [dropDownExplore, setDropDownExplore] = useState(true);

  const handleExploreDropdown = () => {
    setDropDownExplore((current) => !current);
  };

  const handleNav = () => {
    setNavbar(!navbar);
  };

  const NavLinks = [
    {
      explore: [
        { name: 'Mint NFT', url: '/mintnft' },
        { name: 'Ivory Savings', url: '/ivorysavings' },
        {
          name: 'Crypto Gift Card',

          url: '/cryptocard',
        },
        { name: ' NFC Saving Promo', url: '/nfcsaving' },
        {
          name: 'Defi Calendar',

          url: '/deficalendar',
        },
        { name: 'Dox.me', url: '/doxme' },
        { name: 'Music NFT', url: '/musicnft' },
      ],
    },
  ];

  // console.log(NavLinks[0].explore);

  return (
    <div>
      <section className={styles.navContainer}>
        <nav className='d-flex container flex-row align-items-center justify-content-between pt-3'>
          {/* Logo */}
          <Link
            href='/'
            className={`col-8 col-md-3 d-flex flex-row align-items-center ${styles.logo}`}
          >
            <figure className='col-6'>
              <Image src={Logo} alt=' Destiny Travels and tours Logo' />
            </figure>
          </Link>
          <div
            className={` col-12 col-lg-9 d-flex flex-column flex-lg-row justify-content-between ${
              navbar ? styles.displayNav : styles.navMove
            }`}
          >
            <aside className='col-12  d-flex flex-column flex-lg-row justify-content-lg-end '>
              {/* nav Links */}
              <ul
                className={`${styles.navUl} col-12 col-lg-7 d-flex flex-column flex-lg-row justify-content-between`}
              >
                {/* explore */}
                <li className={` ${styles.navItems} `}>
                  {' '}
                  <Link href='/'> Home </Link>
                </li>
                <li>
                  <ul className={` ${styles.navItems}  d-flex flex-column `}>
                    <p onClick={handleExploreDropdown}>
                      Explore <BsChevronDown className='icon' />
                    </p>
                    <li
                      className={` ${styles.dropdownLists} ${
                        dropDownExplore
                          ? styles.showDropdownLists
                          : styles.hideDropdownLists
                      }`}
                    >
                      {NavLinks[0].explore.map((item, idx) => (
                        <Link
                          key={idx}
                          onClick={handleNav}
                          className={`${styles.dropdownListItems}`}
                          href={item.url}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </li>
                  </ul>
                </li>

                <li className={` ${styles.navItems} `}>
                  {' '}
                  <Link href='/'> About us </Link>
                </li>
                <li className={` ${styles.navItems} `}>
                  {' '}
                  <Link href='/'> Contact us </Link>
                </li>
              </ul>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={handleNav}
            className={navbar ? styles.ham : styles.open}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;