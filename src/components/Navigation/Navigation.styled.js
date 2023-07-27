import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.png';

export const ContainerNav = styled.div`
  display: flex;
  background-color: var(--bg-color);
  justify-content: space-between;
  padding: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  /* position: fixed; */
`;

export const NavItems = styled.li`
  margin-right: 20px;
  color: #fff;
  padding-right: 20px;
  text-align: center;
  vertical-align: middle;

  &:not(:last-child) {
    border-right: solid #fff;
    border-width: thin;
  }
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--some-white-color);

  &:hover,
  :focus {
    color: var(--second-color);
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 80px;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0;
  margin: 0;
  padding: 0;
`;
