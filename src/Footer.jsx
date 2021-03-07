import React from "react";

const Footer=()=> {
    const year= new Date().getFullYear();
  return (
    <>
      <footer className='absolute bottom-0 left-0 right-0 text-center'>
        <p>copyright ©️ {year}</p>
      </footer>
    </>
  );
}

export default Footer;