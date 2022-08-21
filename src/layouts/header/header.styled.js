import styled from "styled-components";
import Header from "./header";

export default styled(Header)`
  background-color: #212529;
  width: 100%;
  color: #fff;
  font-size: 2rem;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
    margin-left: 3rem;
    line-height: 0.5;
    padding-bottom: 0.8rem;
  }

  .logo-name {
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    color: #99e9f2;
    font-size: 3rem;
    padding: 0;
    margin: 0;
  }

  a {
    color: #e3fafc;
    text-decoration: none;
  }
  .nav-link:focus,
  .nav-link:hover {
    color: #99e9f2;
  }

  .form-control {
    background: #212529;
  }
  .form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
  }

  .form-control:focus {
    color: #c5f6fa;

    border-color: #c5f6fa;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
  .navbar-nav {
    --bs-nav-link-padding-x: 1;
  }
  .navbar {
    --bs-navbar-padding-x: 1;
  }

  .container-fluid {
    padding: 0;
  }
  #nav-dropdown-dark-example {
    padding: 0;
  }
  .btn-outline-success {
    --bs-btn-color: #99e9f2;
    --bs-btn-border-color: #99e9f2;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #99e9f2;
    --bs-btn-hover-border-color: #99e9f2;
    --bs-btn-focus-shadow-rgb: 25, 135, 84;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #99e9f2;
    --bs-btn-active-border-color: #99e9f2;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #99e9f2;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #99e9f2;
    --bs-gradient: none;
    color: #0b7285;
  }

  .btn:hover {
    color: #0b7285;
  }

  .btn-check:active + .btn,
  .btn-check:checked + .btn,
  .btn.active,
  .btn.show,
  .btn:active {
    color: #0b7285;

    border-color: #15aabf;
  }

  .navbar-expand .navbar-nav .dropdown-menu {
    font-size: 1.4rem;
  }
`;
