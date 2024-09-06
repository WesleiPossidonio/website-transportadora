import { Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react"
import Logo from '../../assets/logo.png'
import LogoCriard from '../../assets/criard_logo.png'
import { TextRegular, TitleText } from "../typografy"
import {
  ContainerFooter,
  ContentContact,
  ContentLinkLogo,
  ContentLinkSite,
  ContentLogo,
  ImgLogo,
  LinkSite,
  TitleLinks
} from "./styled"



export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentLogo>
        <ImgLogo src={Logo} />

        <ContentLinkLogo>
          <TextRegular color="text" size="s">
            Gaspar Transportes © 2024 - Todos os direitos reservados.
          </TextRegular>
          
          <TextRegular color="text" size="sm" weight={600}>
            Desenvolvido por
            <a href="https://www.criard.com.br/" target="_blank" ><img id="company-img" src={LogoCriard} alt="" /></a>
          </TextRegular>
        </ContentLinkLogo>
      </ContentLogo>

      <ContentLinkSite>
        <TitleText color="text">
          Mapa do Site
        </TitleText>
        <LinkSite>
          <TextRegular color="text" weight={600}>
            <a href="#home">Home</a>
          </TextRegular>
          <TextRegular color="text" weight={600}>
            <a href="#about"> Sobre Nós</a>
          </TextRegular>
          <TextRegular color="text" weight={600}>
            <a href="#services">Serviços</a>
          </TextRegular>
          <TextRegular color="text" weight={600}>
            <a href="#contact">Contatos</a>
          </TextRegular>
        </LinkSite>
      </ContentLinkSite>

      <ContentContact>
        <TitleText color="text">
          Contatos
        </TitleText>

        <TitleLinks>
          <WhatsappLogo size={31} color="#000" />
          <div>
            <TextRegular weight={600}>Whatsapp</TextRegular>
            <TextRegular size="sm" color="text">
              <a href="tel:+55223518-0094">(22) 3518-0094</a> | {' '} 
              <a href="tel:+552299774-0161">(22) 99774-0161</a>
            </TextRegular>
          </div>
        </TitleLinks>

        <TitleLinks>
          <Envelope size={31} color="#000" />
          <div>
            <TextRegular weight={600}>Email</TextRegular>
            <TextRegular size="sm" color="text">
             atendimentos@ganail.com
            </TextRegular>
          </div>
        </TitleLinks>

        <TitleLinks>
          <MapPin size={31} color="#000" />
          <div>
            <TextRegular weight={600}>Matrix Macaé</TextRegular>
            <TextRegular size="sm" color="text"> Granja dos Cavaleiros, Macaé - RJ, Cep: 27930-480</TextRegular>
          </div>
        </TitleLinks>

      </ContentContact>
    </ContainerFooter>
  )
}

