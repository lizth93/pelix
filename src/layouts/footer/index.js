import styled from "styled-components";
import Footer from "./footer.component";

export default styled(Footer)`
  background-color: #212529;
  color: #fff;
  margin-top: auto;
  padding: 3rem;
  bottom: 0;
  width: 100%;
  height: 20rem;

  .logo-name {
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    gap: 1rem;
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    color: #99e9f2;
    font-size: 3rem;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
  }

  .grid--4-cols {
    display: grid;
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  ul {
    padding-left: 0rem;
  }
  .text {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  .footer-link-list {
    list-style: none;
    display: flex;
    gap: 1.2rem;
    @media (max-width: 46.875em) {
      //screen 750px
      justify-content: center;
    }
  }

  .footer-link:link,
  .footer-link:visited {
    text-decoration: none;
    font-size: 2rem;
    color: #fff;
    transition: all 0.3s;
  }
  .footer-link:hover,
  .footer-link:active {
    color: #1098ad;
  }

  .copyrigth {
    font-size: 1.2rem;
    color: #fff;
    line-height: 1.6;
    grid-column: 1 /-1;
    text-align: center;
  }
`;
