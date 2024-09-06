
// swiper Banner
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

// import icons 
import StorageIcon from '../../../../assets/StorageIcon.svg'
import CardCargasIcon from '../../../../assets/CardCargasIcon.svg'
import BoxIcon from '../../../../assets/BoxIcon.svg'
import ContainerIcon from '../../../../assets/ContainerIcon.svg'
import TruckIconSecurity from '../../../../assets/TruckIconSecurity.svg'
import TruckIcon from '../../../../assets/TruckIcon.svg'
import PlaneIcon from '../../../../assets/PlaneIcon.svg'

// Components
import { Button, TextRegular, TitleText } from '../../../../components'
import { CardSwiper, ContainerSectionServices, ContentTextCard, Header, Icon } from './styled'


export const SectionServices = () => {

  return (
    <ContainerSectionServices id='services'>
      <Header>
        <TitleText size='l'>Nossos Serviços</TitleText>
        <TextRegular weight={500} color='text'>
            Mais do que transportar mercadorias, entregamos confiança e 
            soluções personalizadas que atendem às suas necessidades. 
            Precisão e compromisso em cada entrega.
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
          <Icon src={ContainerIcon} />

          <ContentTextCard>
            <TitleText>Transporte de cargas offshore</TitleText>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={TruckIcon} />

          <ContentTextCard>
            <TitleText>Transporte estadual e interestadual</TitleText>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={CardCargasIcon} />

          <ContentTextCard>
            <TitleText>Movimentação de carga</TitleText>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={CardCargasIcon} />

          <ContentTextCard>
            <TitleText>Locação de Equipamentos, Guindastes e Caminhão Munck</TitleText>
          </ContentTextCard>

        </CardSwiper>

        <CardSwiper>
          <Icon src={TruckIconSecurity} />

          <ContentTextCard>
            <TitleText>Transporte de Cargas Especiais</TitleText>
          </ContentTextCard>

        </CardSwiper>

        <CardSwiper>
          <Icon src={TruckIcon} />

          <ContentTextCard>
            <TitleText>Transporte de Cargas de Pequeno Porte</TitleText>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={PlaneIcon} />

          <ContentTextCard>
            <TitleText> Embarque em Aeroportos</TitleText>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={StorageIcon} />

          <ContentTextCard>
            <TitleText> Armazém Geral </TitleText>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={BoxIcon} />

          <ContentTextCard>
            <TitleText>Logística de materiais com Rastreamento </TitleText>
          </ContentTextCard>
        </CardSwiper>

      </Swiper>
    </ContainerSectionServices>
  )
}


