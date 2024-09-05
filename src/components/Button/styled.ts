import styled from "styled-components";

interface ButtonProps {
  btnLarge: boolean
  bgColor: 'bg' | 'white'
}

export const ContainerButton = styled.button<ButtonProps>`
width: ${({btnLarge}) => btnLarge ? '15rem' : '10rem'} ;
height: 3.5rem;

padding: 0.5rem;
border: none;
border-radius: 8px;

font-size: ${({theme}) => theme.FontSizes["text-regular-m"]};
font-weight: 500;
color: ${({theme, bgColor}) => bgColor === 'white' ? theme.colors["base-text"] : theme.colors["base-white"]};
background-color: ${({ theme, bgColor }) => theme.colors[`base-${bgColor ?? 'bg'}`]};
z-index: 1;

cursor: pointer;

a {
  color: ${({theme, bgColor}) => bgColor === 'white' ? theme.colors["base-text"] : theme.colors["base-white"]};
}
`