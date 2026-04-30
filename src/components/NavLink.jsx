import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,  className,children}) => {
  const pathname = usePathname();
    const isActive = href === pathname

    return (
        <Link href={href} className={`${isActive ? " bg-blue-400 text-white px-2 py-1 rounded-2xl" :  ""} ${className}`}>
        {children}
     </Link>
    );
};

export default NavLink;