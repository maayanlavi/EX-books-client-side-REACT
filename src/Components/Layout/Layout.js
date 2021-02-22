import React from 'react';
import Search from '../Search';
import header from '../../assets/css/img/ReadBooks/header.png';


const Layout = ({ title, children }) => {
    return (
        <div style={{ position: 'relative' }}>
            <img src={header} style={{ width: '100%', position: 'absolute', left: '0%', right: '0%', top: '-12%', bottom: '80%' }} alt="header" />
            <h2
                style={{ color: 'white', fontFamily: 'Tahoma', position: 'absolute', left: '0', right: '0', textAlign: 'center', top: '50px' }}>
                {title}
            </h2>
            <Search />
            <>
                {children}
            </>

        </div>

    )
}


export default Layout;