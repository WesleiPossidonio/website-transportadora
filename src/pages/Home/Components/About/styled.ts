import styled from "styled-components";

export const ContainerAbout = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem;

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
  width: 50%;
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

`

export const LineImg = styled.span`
width: 8rem;
height: 10rem;

position: absolute;
top: 9.8rem;
left: -1.1rem;

border-top: 5px solid ${({theme}) => theme.colors["base-secundary-bg"]};
border-left: 5px solid ${({theme}) => theme.colors["base-secundary-bg"]};
`

export const ImgAbout = styled.img`
  width: 14rem;
  height: 23rem;
  object-fit: cover;
  border: none;

  margin-top: 11rem;

  @media (max-width: 768px) {
    height: 19rem;
  }
`;

export const ContentImageTwo = styled.div`
  width: 14rem;
  position: relative;
`

export const LineImgBotton = styled(LineImg)`
width: 6rem;
border-top: 0;
border-left: 0;

border-right: 5px solid ${({theme}) => theme.colors["base-secundary-bg"]};
border-bottom: 5px solid ${({theme}) => theme.colors["base-secundary-bg"]};

position: absolute;
top: 14rem;
left: 9.1rem;

@media (max-width: 768px) {
  top: 10.2rem;
  }
`

export const ImgAboutBotton = styled.img`
  width: 14rem;
  height: 23rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 19rem;
  }
`;

// export const ContainerCountdown = styled.span`
// width: 13rem;
// position: absolute;

// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// gap: 0.2rem;

// bottom: 2rem;
// right: 9rem;

// padding: 1rem 2rem;
// border: 0;
// border-radius: 8px;

// text-align: center;

// background-color: ${({theme}) => theme.colors["base-white"]};
// box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
// `

export const ContainerTextAbout = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  .TextAbout {
    margin-top: 1.2rem;
  }

  button {
    margin-top: 1rem;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;



