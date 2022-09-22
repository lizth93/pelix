import styled from "styled-components";
import Collections from "core/main/collections/collections.component";

export default styled(Collections)`
  background-color: #343a40;
  color: #fff;
  .section-popular {
    margin: 3rem;
    font-size: 2.5rem;
  }
  .container-top-rated {
    margin-bottom: 5rem;
    max-height: 45rem;
  }
  .section-top-rated,
  .section-advances {
    background-color: #0b7285;
    border-radius: 2rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0 auto;
    padding: 2rem;
    display: flex;

    gap: 2rem;
    flex-wrap: nowrap;
    overflow: hidden;
    max-width: 95vw;
    overflow-x: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    scrollbar-width: thin;
  }

  .section-top-rated {
    &::-webkit-scrollbar {
      height: 10px;
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: #0b7285;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
  }

  .film-top {
    background-color: #212529;
    border-radius: 2rem;
    display: flex;
    align-items: stretch;
    position: relative;

    h1 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-weight: 500;
      line-height: 0.8;
      white-space: nowrap;

      overflow: hidden;
      text-overflow: ellipsis;
      text-align: -webkit-center;
    }

    .text-description {
      font-size: 1.4rem;
    }

    .collection__title {
      max-width: 16rem;
      background-color: #212529;
      padding: 0 1rem;
      border-bottom-left-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }

    .collection__img {
      max-width: 16rem;
      min-height: 24rem;
    }

    figure {
      margin: 0 0 0.4rem;
    }
    .radial-bar {
      left: -1rem;
      top: -1rem;
      position: absolute;
    }

    .icons {
      padding: 0 1rem 1rem 1rem;
      justify-content: flex-end;
    }

    /* justify-content: flex-end; */
  }
`;
