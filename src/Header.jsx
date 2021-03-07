import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from './logo/logo.JPG';

export default function Header() {
  return (<>
    <div className='header'>
        <img src={logo} alt='logo' />
        <p className='keep'>Notes Keep</p>
    </div>
  </>
  );
}
