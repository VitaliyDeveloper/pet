import {
  ContainerNav,
  NavList,
  NavItems,
  NavLinkStyle,
  Logo,
} from './Navigation.styled.js';

const Navigation = () => {
  return (
    <ContainerNav>
      <Logo></Logo>
      <NavList>
        <NavItems>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </NavItems>
        <NavItems>
          <NavLinkStyle to="/contacts">Contacts</NavLinkStyle>
        </NavItems>
        <NavItems>
          <NavLinkStyle to="/funny">Funny</NavLinkStyle>
        </NavItems>
      </NavList>
      <div>
        <p>log</p>
      </div>
    </ContainerNav>
  );
};

export default Navigation;
