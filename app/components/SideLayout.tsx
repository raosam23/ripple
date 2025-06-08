'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Navbar from './Navbar';
const SideLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const hideNavbarRoutes = ['/signup', '/login', '/signout'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main className={shouldHideNavbar ? 'p-6' : 'ml-36 lg:ml-64 p-6'}>{children}</main>
    </>
  );
};

export default SideLayout;
