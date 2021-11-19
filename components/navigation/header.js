import Headroom from 'react-headroom';
import MobileNav from './mobileNav';
import MainNav from './mainNav';

export default function Header(props) {

    return (

        <Headroom>
            <header className="container">
                <nav className="flex justify-center">
                    {MainNav(enabledNavItems, currentNavItem)}
                    {MobileNav(enabledNavItems)}
                </nav>
            </header>
        </Headroom>
    );
}