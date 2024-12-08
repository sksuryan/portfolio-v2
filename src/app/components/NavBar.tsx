import React from 'react';

const NavBar = () => {
  return (
    <div className={'w-dvw z-10 backdrop-blur-xl fixed top-0'}>
      <div className={'xl:mx-auto max-w-[1080px] px-8 h-[8vh] flex flex-col justify-center'}>
        <h3 className={'text-gray-950 dark:text-gray-100 font-bold'}>@sksuryan</h3>
      </div>
    </div>
  );
};

export default NavBar;
