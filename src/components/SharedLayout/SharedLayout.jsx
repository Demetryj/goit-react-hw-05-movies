import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import { Navigation, NavLinkItem } from 'components/SharedLayout';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Box
          maxWidth={1200}
          px={[4]}
          py={[3]}
          boxShadow="third"
          my={[0]}
          mx="auto"
          bg="backgroundHeader"
          as="div"
        >
          <Navigation>
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="movies">Movies</NavLinkItem>
          </Navigation>
        </Box>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
