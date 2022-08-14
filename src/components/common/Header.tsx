import React, { useState } from 'react';
import { Link, Route, BrowserRouter } from "react-router-dom";



/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';


import Button from '@mui/material/Button';






interface MenuListProps {
  isExpanded: boolean;
}




const Header = () => {

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded)
  };

  // <Test>1</Test>
  return ( 
    <>
      <div></div>
      <Container>
        <Wrapper>
          <BrandWrapper>
            <Brand to="/">
              <Logo>
                <LogoImg
                  src="/images/common/logo_MIM.png"
                  alt="MIM logo img"
                />
              <LogoName>MIM</LogoName>
              </Logo>
            </Brand>
          </BrandWrapper>
          

          <Navigate>

            <PageLink to="/article">영화</PageLink>
            <PageLink to="/about">추천</PageLink>
            <PageLink to="/users/sign_in">시네마컵</PageLink>
            <PageLink to="/users/login">로그인</PageLink>
            <Button variant="contained">문의하기</Button>


          </Navigate>
          <MenuButton isExpanded={isExpanded} onClick={handleMenuClick} >
            <MenuIcon className="fa-solid fa-bars"></MenuIcon>
          </MenuButton>

          
        </Wrapper>

          <NavMobile isExpanded={isExpanded}>
            <PageLinkMobile to="/article">영화</PageLinkMobile>
            <PageLinkMobile to="/about">추천</PageLinkMobile>
            <PageLinkMobile to="/users/sign_in">시네마컵</PageLinkMobile>
            <PageLinkMobile to="/users/login">로그인</PageLinkMobile>
            <Button variant="contained">문의하기</Button>
        </NavMobile>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.header`
  position: stiky;
  align-self: center;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  // padding:150px 0;
  background-color: #13192f;
`;

const Wrapper = styled.div`
  position: static;
  padding: 10px;
  height: inherit;
  // top: 0;
  // left: 0;
  // text-align: center;
  // align-self: center;
  // width: 100%;
  // padding:px 3px;
  // background-color: #13192f;
  // z-index: 3;
  display: flex;
  // justify-content: space-between;
  align-self: center;
`;

const BrandWrapper = styled.div`
  // position: relative;
  // margin: 100px 100px
  align-items: center;
  display: flex;
  // align-text: center;
  align-self: center;
`;

const Brand = styled(Link)`
  // position: absolute;
  // display: flex;
  text-decoration: none;
`;

const Logo = styled.div`
  // position: absolute; 
  display: flex;
`;

const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  // margin: 0 auto;
  margin-left: 20px;
  margin-right: 10px;
`;

const LogoName = styled.span`
  margin-left: 6px;
  // padding-top: 1px;
  font-size: 20px;
  font-weight: 700;
  // align-items: center;
  // align-self: center;
  display: flex;
  color: #fff;
  
  &:hover {
    color: #fff;
  }

`;

const Navigate = styled.nav`
  position: static;
  display: flex;
  // float: right;
  // margin-left: 300px;
  margin-left: auto;
  

  @media (max-width: 500px) {
    display: none;
  }
`;

const NavMobile = styled.div<MenuListProps>`
  position: fixed;
  display: block;
  top: 59px;
  right: 0;
  padding: 80px 10px;
  width: 100%;
  height: 100vh;
  background-color: #111823;
  opacity: 0.98;
  transition: 0.5s;
  transform: translateX(100%)

  ${(props) =>
    props.isExpanded &&
  css`
    transition: 0.5s;
    transform: translateX(0%)
  `}
`;


const PageLinkMobile = styled(Link)`

  // padding: 4px 8px;
  // font-size: 16px;
  // font-weight: 500;
  // line-height: 1.6;
  // color: #b2c0cc;
  // text-decoration: none;
  // transition: color 0.08s ease-in-out;

  // &:hover {
  //   color: #fff;
  // }

  
  display: block;
  margin: auto;
  margin-bottom: 8px;
  padding: 12px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  // align-self: center;
  font-weight: 600;

  &:hover {
    color: #fff;
  }
  


`;



const PageLink = styled(Link)`

  // padding: 4px 8px;
  // font-size: 16px;
  // font-weight: 500;
  // line-height: 1.6;
  // color: #b2c0cc;
  // text-decoration: none;
  // transition: color 0.08s ease-in-out;

  // &:hover {
  //   color: #fff;
  // }


  display: block;
  color: #ffffff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
  align-self: center;
  font-weight: 600;

  &:hover {
    color: #fff;
  }
  


`;


const MenuButton = styled.button<MenuListProps>`
  // display: block;
  // position: absolute;
  // right: 12px;
  // top: 8px;
  // width: 40px;
  // height: 40px;
  // border-radius: 8px;
  border: none;
  background-color: transparent;
  align-self: center;
  display: flex;
  margin-left: auto;
  margin-right: 10px;
  // margin-right: ${(props) => (props.isExpanded ? '100px' : '10px')};

  // max-height: ${(props) => (props.isExpanded ? '100vh' : '0')};
  

  @media (min-width: 500px) {
    display: none; 
  }
  

`;

const MenuIcon = styled.i`

  // display: block;
  // position: relative;
  color: #ffffff;
  // margin: 0 auto;
  // margin-top: 10px;
  no-repeat center;
  font-size: 20px;
  // align-self: center;
  background-size: contain;
  


`;







const Test = styled.p`
  // padding: 20px 20px;
  height: 30px;
  // text-align: center;
  font-size: 30px;
  color: #fff;
  align-self: center;

  // font-weight: 500;
  // line-height: 1.6;
  // color: #ff0000;
  // text-decoration: none;
  // transition: color 0.08s ease-in-out;
  // align-self: flex-start;
  // align-items: center;
  // &:hover {
  //   color: #fff;
  // }

  // @media (max-width: 991px) {
  //   padding: 0;
  //   font-size: 15px;
  //   line-height: 1.4669;
  // }
`;


const AccountMenuList = styled.ul<MenuListProps>`
  display: flex;

  @media (max-width: 991px) {
    overflow-y: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isExpanded ? '100vh' : '0')};
    box-sizing: border-box;
    background-color: #0d161c;
    transition: all 0.35s ease;
  }
`;
