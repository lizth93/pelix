/* eslint-disable react/style-prop-object */
import styled from "styled-components";

const RadialProgressBar = (props) => {
  console.log(props.values);
  return (
    <div className={props.className}>
      <div
        role="progressbar"
        aria-valuenow="20"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ "--value": 50 }}
      ></div>
    </div>
  );
};
export default styled(RadialProgressBar)`
  @keyframes growProgressBar {
    0%,
    33% {
      --pgPercentage: 0;
    }
    100% {
      --pgPercentage: var(--value);
    }
  }

  @property --pgPercentage {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
  }

  div[role="progressbar"] {
    --size: 12rem;
    --fg: #369;
    --bg: #def;
    --pgPercentage: var(--value);
    animation: growProgressBar 3s 1 forwards;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: radial-gradient(
        closest-side,
        white 80%,
        transparent 0 99.9%,
        white 0
      ),
      conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
    font-family: Helvetica, Arial, sans-serif;
    font-size: calc(var(--size) / 5);
    color: var(--fg);
  }

  div[role="progressbar"]::before {
    counter-reset: percentage var(--value);
    content: counter(percentage) "%";
  }

  /* demo */
  body {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;
