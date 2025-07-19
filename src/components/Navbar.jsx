import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const primaryBlue = '#2196F3'; // Main brand blue
const darkerBlue = '#1976D2'; // Darker shade for gradients
const lighterBlue = '#64B5F6'; // Lighter shade for accents
const accentYellow = '#FFC107'; // Accent color for highlights
// No backgroundLight, backgroundCard, textDark, textMedium, textLight, borderColor, errorColor needed here directly

const Nav = styled.nav`
  background: linear-gradient(90deg, ${darkerBlue}, ${primaryBlue});
  padding: 1rem 2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff; /* White for logo */
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  transition: color 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);

  &:hover {
    color: ${accentYellow};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${lighterBlue}; /* Lighter blue for links */
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  padding-bottom: 5px; /* Added for underline spacing */

  &:hover {
    color: ${accentYellow};
  }

  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 0;
    background-color: ${accentYellow};
    transition: width 0.3s ease;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${accentYellow};
    &::after {
      width: 100%;
    }
  }
`;

const BackButton = styled(Link)`
  color: ${accentYellow};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.15); /* Slightly transparent white background */
  padding: 0.6rem 1.2rem;
  border-radius: 25px; /* Pill shape */
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 28px;
    height: 3px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 2px;
  }
`;

const MobileMenu = styled.div`
  display: ${props => (props.menuOpen ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${primaryBlue}; /* Matching the primary blue */
  flex-direction: column;
  padding: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Below hamburger, above content */

  ${NavLink} {
    padding: 1rem 2rem;
    width: 100%;
    text-align: left;
    color: #ffffff; /* White text for mobile links */
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: ${accentYellow};
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.menuOpen ? 'flex' : 'none')};
  }
`;

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">AlgoViz Pro</Logo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
        </NavLinks>

        <HamburgerMenu onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerMenu>

        {/* Mobile menu controlled by menuOpen prop */}
        <MobileMenu menuOpen={menuOpen}> 
          <NavLink to="/" onClick={toggleMenu} className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/resources" onClick={toggleMenu} className={location.pathname === '/resources' ? 'active' : ''}>Resources</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
        </MobileMenu>

        {!isHome && (
          <BackButton to="/">
            ← Back to Home
          </BackButton>
        )}
      </NavContainer>
    </Nav>
  );
}

export default Navbar;