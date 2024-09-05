
// swiper Banner
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

// import icons 
import IconImage from '../../../../assets/IconTest.svg'
import ChapasIcon from '../../../../assets/ChapasIcon.svg'
import VigasIcon from '../../../../assets/VigasIcon.svg'
import TarugosIcon from '../../../../assets/TarugosIcon.svg'
import TelasTelconIcons from '../../../../assets/TelasIcon.svg'
import TubosIcon from '../../../../assets/TubosIcon.svg'
import CantoneiraIcon from '../../../../assets/CantoneiraIcon.svg'

// Components
import { Button, TextRegular, TitleText } from '../../../../components'
import { CardSwiper, ContainerSectionServices, ContentTextCard, Header, Icon } from './styled'


export const SectionServices = () => {

  return (
    <ContainerSectionServices id='services'>
      <Header>
        <TitleText size='l'>Nossos Serviços</TitleText>
        <TextRegular weight={500} color='text'>
          Mais do que fornecer aço, entregamos soluções sob medida que
          transformam suas necessidades em realidade. Confiabilidade e
          precisão em cada serviço.
        </TextRegular>
        <Button bgColor='bg' btnLarge >Saiba Mais!</Button>
      </Header>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          980: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <CardSwiper>
          <Icon src={IconImage} />

          <ContentTextCard>
            <TitleText>Transporte de cargas offshore nos principais portos</TitleText>
            <TextRegular size='s'>Estrutura sólida começa com as nossas barras de alta qualidade.</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={CantoneiraIcon} />

          <ContentTextCard>
            <TitleText>Transporte estadual e interestadual </TitleText>
            <TextRegular>Cantoneiras que garantem o ângulo perfeito e a resistência que sua obra precisa.</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={ChapasIcon} />

          <ContentTextCard>
            <TitleText>Movimentação de carga</TitleText>
            <TextRegular>Versatilidade e força em cada chapa para suas soluções estruturais.</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={VigasIcon} />

          <ContentTextCard>
            <TitleText>Locação de equipamentos, guindastes e caminhão munck</TitleText>
            <TextRegular>Vigas robustas que sustentam grandes ideias e projetos grandiosos.</TextRegular>
          </ContentTextCard>

        </CardSwiper>

        <CardSwiper>
          <Icon src={TarugosIcon} />

          <ContentTextCard>
            <TitleText>Transporte de cargas especiais</TitleText>
            <TextRegular>Tarugos de precisão para resultados impecáveis e duradouros.</TextRegular>
          </ContentTextCard>

        </CardSwiper>

        <CardSwiper>
          <Icon src={TelasTelconIcons} />

          <ContentTextCard>
            <TitleText>Transporte de cargas de pequeno porte</TitleText>
            <TextRegular>Proteção e segurança com as telas Telcon que você pode confiar.</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={TubosIcon} />

          <ContentTextCard>
            <TitleText> Embarque em aeroportos</TitleText>
            <TextRegular>Tubos versáteis e resistentes para conduzir seus projetos ao sucesso</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={TubosIcon} />

          <ContentTextCard>
            <TitleText> Armazém geral </TitleText>
            <TextRegular>Tubos versáteis e resistentes para conduzir seus projetos ao sucesso</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={TubosIcon} />

          <ContentTextCard>
            <TitleText> Logística de materiais com acompanhamento da carga ate sua entrega </TitleText>
            <TextRegular>Tubos versáteis e resistentes para conduzir seus projetos ao sucesso</TextRegular>
          </ContentTextCard>
        </CardSwiper>

      </Swiper>
    </ContainerSectionServices>
  )
}


