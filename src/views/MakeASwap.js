import React from 'react';
import green from '../assets/css/img/ReadBooks/green.png';
import down from '../assets/css/img/ReadBooks/Ellipse2.png';
import blue from '../assets/css/img/ReadBooks/Ellipse7.png';
import swap from '../assets/css/img/ReadBooks/swap.png';
import arrow from '../assets/css/img/ReadBooks/Group2.png';
import points from '../assets/css/img/ReadBooks/Group5.png';
import { NavLink } from 'react-router-dom';

export default function MakeASwap() {

    return (
        <div style={{ backgroundColor: 'rgba(240, 244, 253, 1)', position: 'relative', height: '810px' }}>
            <img src={green} style={{ position: 'absolute', left: '74%', right: '17%', top: '16%', bottom: '80%' }} alt="orange" />
            <img src={blue} style={{ position: 'absolute', left: '10%', right: '66%', top: '-1%', bottom: '92%' }} alt="blue" />
            <img src={swap} style={{ position: 'absolute', width: '50%', left: '25%', right: '25%', justifyContent: 'center', alignItems: 'center', top: '25%' }} alt="book" />
            <h2 style={{ fontFamily: 'Tahoma', fontSize: '32px', textAlign: 'center', color: 'rgba(56, 79, 125, 1)', position: 'absolute', left: '0%', right: '0%', top: '48%', bottom: '49%' }}>Make a Swap</h2>
            <p style={{ fontFamily: 'Tahoma', fontSize: '14px', textAlign: 'center', color: 'rgba(56, 79, 125, 1)', position: 'relative', display: 'inline-block', left: '0%', right: '0%', top: '55%' }}>Create your account to get started. After that, you can share books and make friends.</p>
            <NavLink to="/SignIn"><p style={{ fontFamily: 'Tahoma', fontSize: '16px', textAlign: 'center', color: 'rgba(56, 79, 125, 1)', position: 'relative', display: 'inline-block', left: '40%', right: '40%', top: '80%', textAlign: 'center' }}><b>Skip Intro</b></p></NavLink>
            <img src={points} style={{ position: 'absolute', left: '60px', top: '70%' }} alt="book" />
            <NavLink to="/SignIn"> <img src={arrow} style={{ position: 'absolute', left: '260px', top: '68%' }} alt="book" /></NavLink>
            <img src={down} style={{ position: 'absolute', left: '-50px', right: '40%', top: '86%' }} alt="book" />

        </div>
    );
}