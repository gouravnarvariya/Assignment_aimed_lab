import styled from "styled-components";

export const H1 = styled.h1`
color: var(--text-color, #04072f);
text-align: center;
font-family: Poppins;
font-size: 3rem;
font-style: normal;
font-weight: 700;
line-height: 110%;
@media (max-width: 768px) {
}
`;

export const H1R = styled.h1`
  margin-left: 6px;
  color: var(--light-color-1, #737b86);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 12%;
  ${"" /* text-align:left;float:left; */}
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const H2R = styled.h1`
  text-align: right;
  color: var(--light-color-1, #737b86);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  ${"" /* ext-align:right;float:right; */}
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HDont = styled.h1`
  color: #04072f;
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;