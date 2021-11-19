import {getLinkLocation, isCurrentNode} from './navigationHelper';

export default function MainNav(navItems, currentNavItem) {

    return (
        <ul className="hidden lg:flex flex-row items-center mx-auto">
            {navItems && navItems.length > 0 ?
                navItems.map((navItem) => (
                    <li key={navItem.id}>
                        <a href={getLinkLocation(navItem.nodeUri)}>
                            {navItem}
                            {isCurrentNode(navItem.nodeUri, currentNavItem)}
                        </a>
                    </li>
                ))
                : ""}
        </ul>
    );
}