import classes from './NavBar.module.css';
import { useState } from 'react';
import Logo from './Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
import NavLinks from './NavLinks/NavLinks';
import useWindowDimensions from './CustomHook/useWindowDimensions';

const NavBar = (props) => {
    const [isShown, setIsShown] = useState(true);
    const { height, width } = useWindowDimensions();

    const hamburgerClickHandler = () => {
        setIsShown(prevIsShown => {
            return !prevIsShown;
        })
    } 

    return (
        <header>
            <nav className={classes.nav}>
                <Logo/>
                <Hamburger onClicked={hamburgerClickHandler}/>
                <NavLinks screenSize={width} show={isShown}/>
            </nav>
        </header>
    )
}

export default NavBar;