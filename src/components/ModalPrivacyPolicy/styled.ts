import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
`;

export const Content = styled(Dialog.Content)`
  z-index: 9999;
  width: 85%;
  max-height: max-content;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 0.5rem;

  border-radius: 18px;
  padding: 1.5rem;
  background: #f2f3ee;

  position: fixed;
  bottom: -10%;
  left: 50%;

  transform: translate(-50%, -50%);
`;


export const Button = styled.button`
  width: 6.5rem;
  height: 2.7rem;

  padding: 0.5rem;
  border: none;
  border-radius: 8px;

  font-size: ${({ theme }) => theme.FontSizes["text-regular-m"]};
  font-weight: 500;
  color: ${({ theme }) =>
    theme.colors["base-white"]};
  background-color: ${({ theme }) =>
    theme.colors[`base-bg`]};
  z-index: 1;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;