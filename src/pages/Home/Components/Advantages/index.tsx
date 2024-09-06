//images
import ImageBoxTwo from '../../../../assets/ImgAbout2.jpg'
import ImageBoxThree from '../../../../assets/ImgAbout1.jpg'

//icons svg
import MoneyIcon from '../../../../assets/MoneyIcon.svg'
import BoxIcon from '../../../../assets/BoxIcon.svg'
import SecurityIcon from '../../../../assets/SecurityIcon.svg'
import IconServices from '../../../../assets/IconServices.svg'

//Components and Styles
import { TextRegular, TitleText } from "../../../../components"
import {
  AdvantageBox,
  BoxImage,
  BoxNumber,
  ContainerAdvantages,
  ContentImg,
  ContentText,
  ImgOne,
  ImgTwo,
  ListAdvantages
} from "./styled"

import CountUp from 'react-countup'
import AOS from 'aos'
import { useEffect } from 'react'

export const Advantages = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerAdvantages>
      <ContentText data-aos="fade-right" data-aos-duration="1000">
          <TitleText size='l'>Nossas Vantagens</TitleText>
        <TextRegular weight={500}>
          Descubra as vantagens que fazem a diferença: <strong> Segurança, 
          Atendimento Personalizado e Logística Eficiente </strong> para tornar 
          suas entregas um sucesso garantido.
        </TextRegular>

        <ListAdvantages>
          <AdvantageBox>
            <img src={MoneyIcon} alt="" />
            <div>
              <TitleText size='s'>Preços Competitivos:</TitleText>
              <TextRegular size='sm' weight={500}>
                Trabalhamos para oferecer os melhores preços do mercado.
              </TextRegular>
            </div>

          </AdvantageBox>
          <AdvantageBox>
            <img src={BoxIcon} alt="" />
            <div>
              <TitleText size='s'>Variedade de Serviços:</TitleText>
              <TextRegular size='sm' weight={500}>
                Oferecemos uma extensa gama de soluções logísticas, 
                adaptadas às suas necessidades de transporte.
              </TextRegular>
            </div>

          </AdvantageBox>
          <AdvantageBox>
            <img src={SecurityIcon} alt="" id='securityIcon'/>
            <div>
              <TitleText size='s'>Alta Qualidade e Segurança:</TitleText>
              <TextRegular size='sm' weight={500}>
                Nossos serviços de transporte são realizados com os mais altos 
                padrões de segurança e eficiência,
              </TextRegular>
            </div>
          </AdvantageBox>
          <AdvantageBox>
          <img src={IconServices} alt="" />
            <div>
              <TitleText size='s'>Atendimento Personalizado:</TitleText>
              <TextRegular size='sm' weight={500}>
                Nossa equipe especializada está sempre disponível para ajudar 
                você a encontrar as melhores soluções logísticas.
              </TextRegular>
            </div>
          </AdvantageBox>
        </ListAdvantages>
      </ContentText>

      <ContentImg data-aos="zoom-in" data-aos-duration="1000">
        <BoxImage widthImage='imgOne'>
          <ImgOne src={ImageBoxTwo} className="imgTwo" />
        </BoxImage>

        <BoxImage widthImage='imgTwo'>
          <ImgTwo src={ImageBoxThree} className="imgThree" />
        </BoxImage>

        <BoxNumber>
          <TitleText size="xl">+<CountUp end={1000} duration={10} /></TitleText>
          <TitleText>Entregas <br /> Feitas</TitleText>
        </BoxNumber>
      </ContentImg>
    </ContainerAdvantages>
  )
}


