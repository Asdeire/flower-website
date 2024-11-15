import React from 'react';

const Header = () => {
    return (
        <header className="site-header">
            <div className="logo">
                <img src='/assets/icons/logo.svg'></img>
            </div>
            <div className="auth-buttons">
                <button className="search-icon">
                    <img src='/assets/icons/search-icon.svg' />
                </button>
                <button className="user-icon">
                    <img src='/assets/icons/shopping-cart.svg'></img>
                </button>
                <button className="sign-up-btn">Sign Up</button>
                <button className="sign-in-btn">Sign In</button>
            </div>
        </header>
    );
};

export default Header;
