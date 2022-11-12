import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  border: 2px solid dodgerblue;
  border-radius: 15px;
`;

export const GenerateButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 4px;
  background-color: dodgerblue;
  color: ${({theme}) => theme.colors.background};

  transition: 300ms;

  &:hover {
    opacity: 0.7;
  }
`;

export const DataContainer = styled.div`
  margin-top: 20px;
  position: relative;
  height: 400px;
`;

export const ImageContainer = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;
