import styled from "styled-components";

export const ContainerAbout = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 2rem 4rem;

  margin: 0 auto;

  @media (max-width: 767px) {
    height: max-content;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    padding: 1.5rem;
    margin-top: 3rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;

  @media (max-width: 767px) {
    margin-top: -5rem;
  }
`;

export const ContentImageOne = styled.div`
  width: 14rem;
  position: relative;

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`;

export const LineImg = styled.span`
  width: 8rem;
  height: 10rem;

  position: absolute;
  top: 9.8rem;
  left: -1.1rem;

  border-top: 5px solid ${({ theme }) => theme.colors["base-secundary-bg"]};
  border-left: 5px solid ${({ theme }) => theme.colors["base-secundary-bg"]};
`;

export const ImgAbout = styled.img`
  width: 14rem;
  height: 23rem;
  object-fit: cover;
  border: none;

  margin-top: 11rem;

  @media (max-width: 768px) {
    height: 19rem;
  }

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`;

export const ContentImageTwo = styled.div`
  width: 14rem;
  position: relative;

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`;

export const LineImgBotton = styled(LineImg)`
  width: 6rem;
  border-top: 0;
  border-left: 0;

  border-right: 5px solid ${({ theme }) => theme.colors["base-secundary-bg"]};
  border-bottom: 5px solid ${({ theme }) => theme.colors["base-secundary-bg"]};

  position: absolute;
  top: 14rem;
  left: 9.1rem;

  @media (max-width: 768px) {
    top: 10.2rem;
  }

  @media (max-width: 600px) {
    left: 8rem;
  }

  @media (max-width: 600px) {
    left: 8rem;
  }

  @media (max-width: 374px) {
    left: 6rem;
  }
`;

export const ImgAboutBotton = styled.img`
  width: 14rem;
  height: 23rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 19rem;
  }

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`;

export const ContainerTextAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  p,
  h1 {
    max-width: 75%;
  }

  .TextAbout {
    margin-top: 1.2rem;
  }

  button {
    margin-top: 1rem;
  }

  @media (max-width: 767px) {
    width: 100%;

    p,
    h1 {
      max-width: 100%;
    }
  }
`;
