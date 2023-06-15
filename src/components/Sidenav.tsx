'use client';
import React from 'react';
import Logo from './Logo';
import ProfilePhoto from './ProfilePhoto';
import { NavItem, NavItemContainer } from './NavItem';
import { RxDashboard, RxActivityLog, RxAvatar, RxGear } from 'react-icons/rx';
import { SlWallet } from 'react-icons/sl';
import { RiLogoutCircleRLine, RiCloseLine } from 'react-icons/ri';

const navItems = [
  // {
  //   label: 'Dashboard',
  //   path: 'dashboard',
  //   icon: <RxDashboard />,
  //   allowedRoles: ['user', 'admin'],
  // },
  {
    label: 'Leaderboard',
    path: 'dashboard/leaderboard',
    icon: <RxActivityLog />,
    allowedRoles: ['user', 'admin'],
  },
  {
    label: 'Wallet',
    path: 'dashboard/wallet',
    icon: <SlWallet />,
    allowedRoles: ['user', 'admin'],
  },
  {
    label: 'Profile',
    path: 'dashboard/profile',
    icon: <RxAvatar />,
    allowedRoles: ['admin'],
  },
  {
    label: 'Settings',
    path: 'dashboard/settings',
    icon: <RxGear />,
    allowedRoles: ['user', 'admin'],
  },
  // {
  //   label: 'Users',
  //   path: 'users',
  //   // icon: faDoorOpen,
  //   allowedRoles: ['admin'],
  // },
];

const Sidenav = () => {
  return (
    <div
      className={`bg-primary sm:h-screen sm:w-80 border-r border-gray-600 transform translate-x-[-17rem] sm:translate-x-0 sm:relative absolute left-0 transition ease-in-out duration-100`}
    >
      <div>
        <div className="px-10 pt-10 mx-auto">
          <Logo />
        </div>
        <div>
          <ProfilePhoto />
        </div>
        <div>
          <NavItemContainer>
            {navItems.map((items, i) => (
              <NavItem key={i} navItem={items} />
            ))}
            <button
              type="button"
              className="px-2 cursor-pointer sm:px-6 justify-center sm:justify-start mt-20 flex items-center text-gray-400 hover:text-main transform hover:translate-x-1 transition ease-in-out duration-100"
            >
              <div className="mr-0 sm:mr-4">
                <RiLogoutCircleRLine />
              </div>
              <span className="hidden sm:block">Log out</span>
            </button>
          </NavItemContainer>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
