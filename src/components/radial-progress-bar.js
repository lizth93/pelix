import styled from "styled-components";

const RadialProgressBar = (props) => {
  const value = Number(props.value);

  return (
    <div className={props.className}>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ "--value": value }}
      ></div>
    </div>
  );
};
export default styled(RadialProgressBar)`
  @property --pgPercentage {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
  }

  div[role="progressbar"] {
    --size: 4rem;
    --fg: #15aabf;
    --bg: #c5f6fa;
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
    font-size: calc(var(--size) / 3);
    color: var(--fg);
  }

  div[role="progressbar"]::before {
    counter-reset: percentage var(--value);
    content: counter(percentage) "%";
  }
`;
