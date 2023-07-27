import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
// import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main style={{ minHeight: '100vh' }}>
        <Outlet />
      </Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
