import styled from "styled-components";

interface StyledContainerProps {
  scrolled: boolean;
}

export const StyledContainer = styled.header<StyledContainerProps>`
  nav.navbar {
    padding: 18px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    transition: 0.32s ease-in-out;
  }
  nav.navbar.scrolled {
    padding: 0px 0;
    background-color: #121212;
  }
  nav.navbar a.navbar-brand {
    width: 9%;
  }
  nav.navbar .navbar-nav .nav-link.navbar-link {
    font-weight: 400;
    color: #fff !important;
    letter-spacing: 0.8px;
    padding: 0 25px;
    font-size: 18px;
    opacity: 0.75;
  }
  nav.navbar .navbar-nav a.nav-link.navbar-link:hover,
  nav.navbar .navbar-nav a.nav-link.navbar-link.active {
    opacity: 1;
  }
  span.navbar-text {
    display: flex;
    align-items: center;
  }
  .social-icon {
    display: inline-block;
    margin-left: 14px;
  }
  .social-icon a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  .social-icon a::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
  .social-icon a:hover::before {
    transform: scale(1);
  }
  .social-icon a img {
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
  }
  .social-icon a:hover img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%)
      hue-rotate(346deg) brightness(95%) contrast(86%);
  }
  .navbar-text button {
    font-weight: 700;
    color: #fff;
    border: 1px solid #fff;
    padding: 18px 34px;
    font-size: 18px;
    margin-left: 18px;
    position: relative;
    background-color: transparent;
    transition: 0.3s ease-in-out;
  }
  .navbar-text button span {
    z-index: 1;
  }
  .navbar-text button::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  .navbar-text button:hover {
    color: #121212;
  }
  .navbar-text button:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
  }
  nav.navbar .navbar-toggler:active,
  nav.navbar .navbar-toggler:focus {
    outline: none;
    box-shadow: none;
  }
  nav.navbar .navbar-toggler-icon {
    width: 24px;
    height: 17px;
    background-image: none;
    position: relative;
    border-bottom: 2px solid #fff;
    transition: all 300ms linear;
    top: -2px;
  }
  nav.navbar .navbar-toggler-icon:focus {
    border-bottom: 2px solid #fff;
  }
  nav.navbar .navbar-toggler-icon:after,
  nav.navbar .navbar-toggler-icon:before {
    width: 24px;
    position: absolute;
    height: 2px;
    background-color: #fff;
    top: 0;
    left: 0;
    content: "";
    z-index: 2;
    transition: all 300ms linear;
  }
  nav.navbar .navbar-toggler-icon:after {
    top: 8px;
  }
  nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
    transform: rotate(45deg);
    background-color: #fff;
    height: 2px;
  }
  nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
    transform: translateY(8px) rotate(-45deg);
    background-color: #fff;
    height: 2px;
  }
  nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    border-color: transparent;
  }
`;
