import { ContainerCallAction, ContentCallAction, ContentText } from "./styled";
import { Button, TextRegular, TitleText } from "../../../../components";
import AOS from "aos";
import { useEffect } from "react";

export const CallAction = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ContainerCallAction>
      <ContentCallAction data-aos="zoom-in" data-aos-duration="1000">
        <ContentText>
          <TitleText size="l" color="white">
            Não perca a chance de otimizar suas entregas com nossa excelência!
          </TitleText>
          <TextRegular color="white">
            Entre em contato conosco hoje e descubra como nossa transportadora,
            com serviços de alta qualidade e atendimento excepcional, pode
            transformar suas operações logísticas. O momento de aprimorar suas
            entregas é agora!
          </TextRegular>
          <Button btnLarge bgColor="white">
            <a href="https://wa.me/5522999515222?text=" target="_blank">
              Faça o seu Pedido!
            </a>
          </Button>
        </ContentText>
      </ContentCallAction>
    </ContainerCallAction>
  );
};
