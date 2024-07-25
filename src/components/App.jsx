import React from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1rem;
  position: absolute;
  top: 0;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 30px;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }

  &:hover {
    color: orange; /* Exemplu de schimbare a culorii textului la hover */
    text-decoration: underline; /* Exemplu de subliniere a textului la hover */
  }
`;

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="about">About</StyledLink>
        <StyledLink to="products">Products</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
