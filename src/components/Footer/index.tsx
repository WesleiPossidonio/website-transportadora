import { CaretRight, Envelope, FacebookLogo, InstagramLogo, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import Logo from "../../assets/logo.png";
import LogoCriard from "../../assets/criard_logo.png";
import { TextRegular, TitleText } from "../typografy";
import {
  ContainerFooter,
  ContentContact,
  ContentLinkContact,
  ContentLinkIcons,
  ContentLinkLogo,
  ContentLinkSite,
  ContentLogo,
  IconsContent,
  ImgLogo,
  LinkSite,
  TitleLinks,
} from "./styled";

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
            <a href="https://www.criard.com.br/" target="_blank">
              <img id="company-img" src={LogoCriard} alt="" />
            </a>
          </TextRegular>
        </ContentLinkLogo>

        <ContentLinkIcons>
          <IconsContent>
            <InstagramLogo size={32} weight="regular" />
          </IconsContent>

          <IconsContent>
            <FacebookLogo size={32} weight="regular"/>
          </IconsContent>
        </ContentLinkIcons>
      </ContentLogo>

      <ContentLinkSite>
        <TitleText color="text">Links Rápidos</TitleText>
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
          <TextRegular color="text" weight={600}>
          <a href="#">Política de Privacidade</a>
          </TextRegular>
        </LinkSite>
      </ContentLinkSite>

      <ContentContact>
        <TitleText color="text">Contatos</TitleText>

        <TitleLinks>
          <ContentLinkContact>
            <TextRegular weight={600}>
              <WhatsappLogo size={28} color="#000" />
              Whatsapp:
            </TextRegular>
            <a href="https://wa.me/5522997740161?text=" target="_blank">
              <CaretRight size={20} weight="bold" />
              (22) 99774-0161
            </a>
            <a href="https://wa.me/552299985-2325?text=" target="_blank">
              <CaretRight size={20} weight="bold" />
              (22) 99985-2325
            </a>
            {/* <a href="https://wa.me/552299951-5222?text=" target="_blank">
              <CaretRight size={20} weight="bold" />
              (22) 99951-5222
            </a> */}
          </ContentLinkContact>
        </TitleLinks>

        <TitleLinks>

          <ContentLinkContact>
            <TextRegular weight={600}>
              <Envelope size={28} color="#000" />
              Email:
            </TextRegular>
            <TextRegular size="sm" color="text">
              <CaretRight size={20} weight="bold" />
              <a href="mailto:comercial@gaspartransportes.com.br">
                comercial@gaspartransportes.com.br
              </a>
            </TextRegular>
          </ContentLinkContact>
        </TitleLinks>

        <TitleLinks>
          <ContentLinkContact>
            <TextRegular weight={600}>
              <MapPin size={28} color="#000" />
              Mapa:
            </TextRegular>
            <TextRegular size="sm" color="text">
              <CaretRight size={20} weight="bold" />
              Avenida Lacerda Agostinho, 2000, sala 06, <br />
              Botafogo, Macaé-RJ 27.947-285
            </TextRegular>
          </ContentLinkContact>
        </TitleLinks>
      </ContentContact>

    </ContainerFooter>
  );
};
