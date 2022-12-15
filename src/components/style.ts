import styled from "styled-components";

export const Title = styled.div`
  @font-face {
    font-family: "GMARKETSANSTTFBOLD.TTF";
    src: url("GMARKETSANSTTFBOLD.TTF") format("truetype");
  }

  padding: 10px;
  left: 0;
  width: 50vw;
  height: 20vh;
  position: fixed;
  z-index: 10;

  h1 {
    margin: 0;
    font-family: "GMARKETSANSTTFBOLD.TTF";
    font-size: 80px;
    span {
      font-family: "GMARKETSANSTTFBOLD.TTF";
      font-size: 50px;
    }
  }
`;

export const Description = styled.div`
  @font-face {
    font-family: "GMARKETSANSTTFBOLD.TTF";
    src: url("GMARKETSANSTTFBOLD.TTF") format("truetype");
  }

  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 10px;
  right: 0;
  width: 45vw;
  height: 30vh;
  position: fixed;
  z-index: 11;
  font-family: "GMARKETSANSTTFBOLD.TTF";

  p {
    margin: 0;
    font-size: 12px;
  }

  h1 {
    margin: 0;
    font-size: 50px;
  }

  h2 {
    margin: 0;
    font-size: 30px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  position: fixed;
  z-index: 12;
  font-family: "GMARKETSANSTTFBOLD.TTF";
  font-size: 20px;

  a {
    color: #000000;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
    color: #000000;
  }
`;
