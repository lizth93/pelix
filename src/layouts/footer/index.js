import styled from "styled-components";
import Footer from "layouts/footer/footer.component";

export default styled(Footer)`
  background-color: #212529;
  color: #fff;
  margin-top: auto;
  padding: 3rem;
  bottom: 0;
  width: 100%;
  height: 20rem;

  @media (max-width: 37.5em) {
    //600px
    padding: 2rem;
  }

  @media (max-width: 68.75em) {
    //1100px
    height: 100%;
  }
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

    @media (max-width: 68.75em) {
      //1100px
      grid-column: 1 /-1;
    }
  }

  .grid--4-cols {
    display: grid;
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 68.75em) {
      //1100px
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
    }

    @media (max-width: 37.5em) {
      //600px
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
  .title-section {
    @media (max-width: 37.5em) {
      //600px
      text-align: center;
      line-height: 0.5rem;
    }
  }
  .about {
    @media (max-width: 37.5em) {
      //600px
      justify-self: center;
    }
  }
  .contact-me {
    @media (max-width: 68.75em) {
      //1100px

      justify-self: center;
    }
  }

  .services {
    @media (max-width: 68.75em) {
      //1100px
      justify-self: center;
    }
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

    @media (max-width: 37.5em) {
      //600px
      text-align: center;
    }
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
