import styled from 'styled-components';
export const  Apps = styled.div`
  flex: auto;
  flex-direction: row;
  display: inline-flex;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  justify-content: flex-end;
  align-items: center;
  gap: 3.23631rem;
  background: white;
  width: auto;
  height: screen;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`; 
 
export const Rectangle = styled.div`
width: 42.4375rem;
height: 44.0625rem;
flex-shrink: 0;
border-radius: 0.75rem;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
position: relative;

@media (max-width: 768px) {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.16);
}
`;

export const Rectangle1 = styled.div`
width: 32.5rem;
height: 20.6875rem;
flex-shrink: 0;
margin-top: 4.69rem;
margin-bottom: 12.69rem;
margin-left: 6.94rem;
margin-right: 7rem;
position: relative;

@media (max-width: 768px) {
  width: 100%;
  height: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 0.1rem;
}
`;

export const Rectangle2 = styled.div`
position: relative;

@media (max-width: 768px) {
  position: relative;
}
`;

export const Rectangle3 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768) {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
`;

export const Rectangle4 = styled.div`
display: flex;
align-content: center;
align-items: center;
margin-bottom: 20px;

@media (max-width: 768) {
  display: flex;
  align-items: center;
  align-content: center;

  margin-bottom: 10px;
}
`;

export const Rectangle5 = styled.div`
display: flex;
      align-items: center;
     
      margin-left : 5.2rem;
      margin-bottom : 10px;
      justify-content: flex-end
      width: 42.5rem;
  height: 3.5rem;
  @media(max-width:768) {
    width:100%;
    height:auto;
    margin-left : 3rem;
  }
`;

export const RectangleRemember = styled.div`
width: 1rem;
height: 1rem;
border-radius: 0.25rem;
border: 1px solid #737b86;
align-items: center;
@media (max-width: 768) {
  width: 0.75rem;
  height: 0.75rem;
  border: 1px solid #555555;
}
`;

export const RectangleRememberFlex = styled.div`
display: flex;
align-items: center;
align-content: center;
margin-bottom: 20px;
margin-top: 20px;
@media (max-width:768) {
  .RectangleRememberFlex {
    display: flex;
    align-items: center;
    align-content: center;
    margin-bottom: 10px;
  }
}
`;