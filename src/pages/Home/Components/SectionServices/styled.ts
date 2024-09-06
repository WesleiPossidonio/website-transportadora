import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const ContainerSectionServices = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors["base-white-100"]};

  .mySwiper {
    width: 70%;
    height: 19rem;
    margin: 4.125rem;
  }

  .swiper-wrapper{
    height: 90%;
  }

  @media (max-width: 768px) {
   flex-direction: column;

   .mySwiper {
    width: 100%;
  }
  }
`;

export const Header = styled.div`
width: 30%;
position: relative;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 1rem;

button {
  margin-top: 0.8rem;
}

@media (max-width: 768px) {
  width: 100%;
   align-self: flex-start;
}

@media (max-width: 726px) {
   width: 100%;
  }
`

export const CardSwiper = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
  border: none;
  border-radius: 6px;

  position: relative;
  cursor: pointer;

  transition: 0.2s ease-in;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background: ${({ theme }) => theme.colors["base-white"]};


  &:hover {
    background-color: ${({ theme }) => theme.colors["base-secundary-bg"]};

    p, h1 {
      color: ${({ theme }) => theme.colors["base-white"]}
    }
  }

  @media (max-width: 768px) {
  width: 100%;
}
`;

export const Icon = styled.img`
  width: 6rem;
  color: red;
`;

export const ContentTextCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 0.8rem;

margin-top: 1.1rem;

a {
  font-weight: 500;
  color: ${({ theme }) => theme.colors["base-bg"]};
  margin-top: -0.2rem;
}
`
