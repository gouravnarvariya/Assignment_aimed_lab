import styled from "styled-components";

export const Input = styled.input`
width: 51.5rem;
height: 3.5rem;
flex-shrink: 0;
border-radius: 0.5rem;
border: 1px solid rgba(4, 7, 47, 0.4);
color: var(--light-color-1, #737b86);
font-family: Poppins;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: 35px;
padding: 10px 40px 10px 10px;
font-color: rgba(115, 123, 134, 1);
@media (max-width: 768px) {
  width: 90%;
  font-size: 1rem;
  padding: 2px 10px 2px 2px;
}
`;