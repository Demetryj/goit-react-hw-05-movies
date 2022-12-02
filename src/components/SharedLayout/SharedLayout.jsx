import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContainerHeader,
  Navigation,
  NavLinkItem,
} from 'components/SharedLayout';

const SharedLayout = () => {
  return (
    <>
      <header>
        <ContainerHeader>
          <Navigation>
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="movies">Movies</NavLinkItem>
          </Navigation>
        </ContainerHeader>
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
