import React from "react";
import styled from "styled-components";
// import AgricultureRoundedIcon from '@mui/icons-material
function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" alt="" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg src="https://cdn.pixabay.com/photo/2021/12/01/14/10/cat-eyes-6838073_1280.jpg"></UserImg>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background-color: #131927;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 0.9;
  margin-left: 100px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }
    span {
      cursor: pointer;
      font-size: 13px;
      letter-spacing: 1.42px;

      &:after {
        margin-top: 1px;
        content: "";
        display: block;
        height: 2px;
        background-color: #ffffff;
        opacity: 0;
        transform-origin: left;
        transform: scaleX(0);
        transition: all 0.4s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1500;
`;

export default Header;
