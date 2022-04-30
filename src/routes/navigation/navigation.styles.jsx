import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/react.svg';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  `
export const LogoContainer = styled(Link)`
  display: flex;
  height: 50px;
  width: 80px;
  margin: 25px;
  justify-content: left;
`

export const Logo = styled(ReactLogo)`
  height: 100%;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
