//Images
import imgBannerOne from '../../../../assets/ImgBanner.jpeg'
import imgBannerTwo from '../../../../assets/ImgBannerTwo.jpeg'
import imgBannerThree from '../../../../assets/ImgBannerThree.jpeg'

//Components
import { ContainerMain, ContentSwiper, ContentText, ImgBanner } from './styled';
import { Button, TextRegular, TitleText } from '../../../../components';

//Banner Swiper
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const BannerMain = () => {
  return (
    <ContainerMain id='home'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <ContentSwiper>
          <ImgBanner src={imgBannerOne} alt="" />
          
          <ContentText>
            <TitleText color='white' size='hero'>Transporte Rápido, Seguro e com Total Confiabilidade!</TitleText>
            <TextRegular color='white'>Oferecemos soluções logísticas completas para conectar seu negócio ao destino certo, com confiança e eficiência.</TextRegular>
            <Button bgColor='bg' btnLarge={false}><a href="https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0" target="_blank">Fazer Pedido</a></Button>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBannerTwo} alt="" />
          <ContentText className='contentTextCenter'>
            <TitleText color='white' size='hero'>Entregamos Soluções de Logística Que Vão Além da Distância!</TitleText>
            <TextRegular color='white'>Oferecemos soluções logísticas completas para conectar seu negócio ao destino certo, com confiança e eficiência.</TextRegular>
            <Button bgColor='bg' btnLarge={false}><a href="https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0" target="_blank">Fazer Pedido</a></Button>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBannerThree} alt="" />
          <ContentText>
            <TitleText color='white' size='hero'>Sua Carga, Nosso Compromisso: Chegamos Onde Você Precisa!</TitleText>
            <TextRegular color='white'>Oferecemos soluções logísticas completas para conectar seu negócio ao destino certo, com confiança e eficiência.</TextRegular>
            <Button bgColor='bg' btnLarge={false}><a href="https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0" target="_blank">Fazer Pedido</a></Button>
          </ContentText>
        </ContentSwiper>
      </Swiper>
    </ContainerMain>
  )
}
