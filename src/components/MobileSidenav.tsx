import React from 'react';
import Logo from './Logo';
import ProfilePhoto from './ProfilePhoto';
import { NavItem, NavItemContainer } from './NavItem';
import { RxDashboard, RxActivityLog, RxAvatar, RxGear } from 'react-icons/rx';
import { SlWallet } from 'react-icons/sl';
import { RiLogoutCircleRLine, RiCloseLine } from 'react-icons/ri';

const navItems = [
  {
    label: 'Dashboard',
    path: 'dashboard',
    icon: <RxDashboard />,
    allowedRoles: ['user', 'admin'],
  },
  {
    label: 'Leaderboard',
    path: 'dashboard/leaderboard',
    icon: <RxActivityLog />,
    allowedRoles: ['user', 'admin'],
  },
  {
    label: 'Profile',
    path: 'dashboard/profile',
    icon: <RxAvatar />,
    allowedRoles: ['admin'],
  },
  {
    label: 'Wallet',
    path: 'dashboard/wallet',
    icon: <SlWallet />,
    allowedRoles: ['user', 'admin'],
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

const MobileSidenav = ({ handleToggle, toggle }: any) => {
  return (
    <div
      className={`h-screen w-full fixed left-0 top-0 right-0 z-10 transition ease-in-out duration-800 bg-gradient-to-r from-secondary to-transparent transform sm:translate-x-[-100rem] translate-x-${
        toggle ? `0` : `[-100rem]`
      }`}
    >
      <div
        className={`bg-primary h-screen w-78 border-r border-gray-600 transform translate-x-0 sm:relative absolute left-0 transition ease-in-out delay-1000 duration-1000 scroll-y-auto`}
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
                className="px-2 cursor-pointer flex mx-auto sm:px-6 justify-center sm:justify-start sm:mt-20 mt-10 items-center text-gray-400 hover:text-main transform hover:translate-x-1 transition ease-in-out duration-100"
              >
                <div className="mr-2 sm:mr-4">
                  <RiLogoutCircleRLine />
                </div>
                <span className="">Log out</span>
              </button>
            </NavItemContainer>
          </div>
        </div>
      </div>
      <RiCloseLine
        onClick={handleToggle}
        className="text-white fixed right-2 top-5 text-4xl cursor-pointer"
      />
    </div>
  );
};

export default MobileSidenav;
