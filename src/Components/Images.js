import styled from 'styled-components';

export const GroupImage = styled.img`
width: 23.95119rem;
height: 39.60006rem;
@media (max-width: 768) {
  width: 10%;
  height: 10rem;
}
`;

export const EyeImg = styled.img`
width: 1.5rem;
height: 1.5rem;
position: absolute;
${"" /* margin-top:1rem; */}
top: 50%;
transform: translateY(-50%);
margin-left: 31rem;
@media (max-width: 768px) {
  margin-left: -3rem;
}
`;