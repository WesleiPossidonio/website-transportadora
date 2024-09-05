// Images
import { useEffect } from 'react'
import ImgABoutOne from '../../../../assets/ImgAbout.jpeg'
import ImgABoutTwo from '../../../../assets/ImgAbout1.jpg'

// Components
import { Button, TextRegular, TitleText } from "../../../../components"
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
} from "./styled"

import AOS from 'aos'

export const About = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerAbout id='about'>

      <ContainerTextAbout data-aos="fade-left" data-aos-duration="1000">
        <TitleText size="s">Sobre Nós</TitleText>
        <TitleText size='xl' color='text'>
          A força e a experiência que sustentam seus projetos
        </TitleText>

        <TextRegular size='s' className='TextAbout'>
          Nossa história é construída com aço e compromisso.
          <strong> Com anos de experiência, somos especialistas em fornecer
            as soluções certas </strong>  para tornar seus projetos mais fortes e duráveis.
          <strong> Confiança, qualidade e dedicação estão na base de tudo o que fazemos. </strong>
        </TextRegular>

        <TextRegular>
          Aqui, cada detalhe importa. <strong> Do atendimento personalizado à entrega
            pontual, </strong> estamos sempre ao seu lado, garantindo que <strong> suas expectativas
              sejam superadas em cada etapa do processo. </strong>
        </TextRegular>

        <Button bgColor='bg' btnLarge={false}>Fazer Pedido!</Button>
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
  )
}

