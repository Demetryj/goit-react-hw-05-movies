import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation, NavLinkItem } from 'components/SharedLayout';
import { Container } from 'components/Container';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="movies">Movies</NavLinkItem>
          </Navigation>
        </Container>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
