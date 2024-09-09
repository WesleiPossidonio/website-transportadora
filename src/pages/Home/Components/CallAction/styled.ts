import styled from "styled-components";

export const ContainerCallAction = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: 7.5rem;
  padding: 0 3rem;

  @media (max-width: 768px) {
    height: max-content;
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    height: max-content;
    margin-top: 9rem;
  }
`;

export const ContentCallAction = styled.div`
  height: 28rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors["base-secundary-bg"]};
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8rem;
    padding: 2rem;

    h1 {
      margin-top: 0;
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  button {
    margin-top: 1rem;
  }
`;

export const Image = styled.img`
  width: min(45rem, 43vw);
  margin-top: -6.3rem;

  @media (max-width: 768px) {
    width: min(45rem, 80vw);
  }
`;
