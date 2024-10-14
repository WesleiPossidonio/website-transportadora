// Images
import { useEffect } from "react";
import ImgABoutOne from "../../../../assets/ImgAbout1.jpg";
import ImgABoutTwo from "../../../../assets/ImgAbout.jpg";

// Components
import { Button, TextRegular, TitleText } from "../../../../components";
import {
  ContainerAbout,
  ContainerImage,
  ContainerTextAbout,
  ContentImageOne,
  ContentImageTwo,
  ImgAbout,
  ImgAboutBotton,
  LineImg,
  LineImgBotton,
} from "./styled";

import AOS from "aos";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ContainerAbout id="about">
      <ContainerTextAbout data-aos="fade-right" data-aos-duration="1000">
        <TitleText size="s">Sobre Nós</TitleText>
        <TitleText color="text" id='title'>
          A força e a experiência que movem suas entregas
        </TitleText>

        <TextRegular size="s" className="TextAbout">
          Nossa história é marcada por comprometimento e excelência.
          <strong>
            Com anos de experiência, somos especialistas em oferecer as soluções
            logísticas ideais
          </strong>{' '}
          para que suas entregas sejam ágeis e seguras.
          <strong>
            Confiança, qualidade e dedicação estão no centro de tudo o que
            fazemos.
          </strong>
        </TextRegular>

        <TextRegular>
          Cuidamos de cada detalhe.
          <strong>
            Desde o atendimento personalizado até a entrega pontual
          </strong>{' '}
          estamos sempre ao seu lado, garantindo que
          <strong>
            suas expectativas sejam superadas em cada etapa do transporte.
          </strong>
        </TextRegular>

        <Button bgColor="bg" btnLarge={false}>
          <a
            href="https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            Fazer Pedido!
          </a>
        </Button>
      </ContainerTextAbout>

      <ContainerImage data-aos="zoom-in" data-aos-duration="1000">
        <ContentImageOne>
          <LineImg />
          <ImgAbout src={ImgABoutOne} />
        </ContentImageOne>

        <ContentImageTwo>
          <LineImgBotton />
          <ImgAboutBotton src={ImgABoutTwo} />
        </ContentImageTwo>
      </ContainerImage>
    </ContainerAbout>
  );
};
