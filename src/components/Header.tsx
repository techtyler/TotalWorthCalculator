import * as React from "react";

import {TopBar, TopBarLeft, TopBarRight } from 'react-foundation';
import {Link} from 'react-router-dom';

import './Header.css';


class Header extends React.Component {

    public render() {
        return (
            <header>
            <TopBar>
                <TopBarLeft>
                <ul className="menu">
                    <li  className="menu-text"><Link to="/">Total Worth Calculator</Link></li>
                </ul>
                {/* TODO: Figure out how to filter links based on if they are logged in */}

                </TopBarLeft>
                <TopBarRight>
                <ul className="menu">
                    <li className="menu-text"><Link to="/signin">Sign In</Link></li>
                    <li className="menu-text"><Link to="/signup">Sign Up</Link></li>
                </ul>
                </TopBarRight>
            </TopBar>
            </header>
        )
    }
}

export default Header;