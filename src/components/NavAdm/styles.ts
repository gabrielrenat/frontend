import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Nav = styled.nav`
  border: 0.5rem solid ${colors.black};
  border-top-width: 0;
  display: flex;
  background-color:red;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      padding: 2rem;
      text-align: center;
      &:hover {
        background-color: ${colors.white};
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: ${colors.black};
      }
    }
  }
  input#menu-toggle {
    display: none;
  }
  @media (max-width: 425px) {
    ul {
      display: none;
    }
    ul li {
      text-align: left;
    }
    label[for="menu-toggle"] {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
    label[for="menu-toggle"] div.menu-hamburger {
      border: 1px solid ${colors.white};
      width: 35px;
      height: 15px;
      margin: 15px 2px 5px 5px;
      cursor: pointer;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger {
      position: relative;
      display: block;
      background-color: ${colors.black};
      width: 30px;
      height: 2px;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before,
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      position: absolute;
      display: block;
      background-color: ${colors.black};
      width: 100%;
      height: 100%;
      content: "";
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before {
      top: -10px;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      bottom: -10px;
    }
    input:checked ~ ul {
      display: block;
      animation: fade-in 1s;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger {
      transform: rotate(45deg);
      transition: 0.5s;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:before,
      input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:after {
      transform: rotate(90deg);
      transition: 0.5s;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:before {
      top: 0px;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:after {
      bottom: 0px;
    }
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`

export const LoginReg = styled.div`
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      padding: 2rem;
      text-align: center;
      &:hover {
        background-color: ${colors.white};
        cursor: pointer;
      }
      button {
        background-color: transparent;
        border: 0;
        font-size: 1rem;
        color: ${colors.black};
        cursor: pointer;
      }
    }
  }
`