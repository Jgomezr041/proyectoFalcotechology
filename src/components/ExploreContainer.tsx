import { IonButton, IonGrid, IonRow, IonContent ,IonAlert,IonLoading, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol } from '@ionic/react';

import { Swiper, SwiperSlide} from 'swiper/react';
import './swiper.css';
import './ExploreContainer.css';


interface ContainerProps { 
  title: string;
  description: string;
  image:string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
    
    <IonContent  className='contentoswiper' color={'secondary'}>
       <Swiper
        spaceBetween={1}
        freeMode={true}
        slidesPerView={3}
        autoplay={{ delay: 1000 }} // Avanza automáticamente cada1 segundos
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img  src="public/img/inicio.png" alt="Slide 1"/></SwiperSlide>
        <SwiperSlide><img src= "/public/img/inicio2.png" alt="Slide 2"/></SwiperSlide>
        <SwiperSlide><img src="public/img/inicio3.png" alt="Slide 3"/></SwiperSlide>
        {/* Add as many SwiperSlides as you want */}

      </Swiper>
       
      <br/> <br/>
      
          <IonCard className='card'>
            <IonCardHeader>
              <IonCardTitle className='title'>Falco Markeplace</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ color: 'black' }}>
              Falco Marketplace es una plataforma donde los usuarios pueden comprar y vender productos. Para subir productos, los vendedores deben registrarse, crear listados detallados con información y fotos, configurar precios y opciones de envío, gestionar su inventario y promocionar sus productos para aumentar su visibilidad. La plataforma ofrece herramientas para facilitar este proceso y ayudar a los vendedores a alcanzar el éxito en sus ventas en línea.
            </IonCardContent>
          </IonCard>
        
    
          <IonCard className='card'>
            <IonCardHeader>
              <IonCardTitle className='title'>Falco FlexWork Solutions</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ color: 'black' }}>
              Falco FlexWork Solutions permite a los profesionales independientes promocionar sus servicios, establecer horarios de disponibilidad, gestionar citas y comunicarse con los clientes. Además, los clientes pueden buscar y contratar fácilmente a profesionales independientes en su área, lo que les permite acceder a una amplia gama de servicios con confianza y comodidad.
            </IonCardContent>
          </IonCard>
    
    <br></br>
      <IonButton  shape='round' color="tertiary" id='present-alert-user'>Falco Marketplace </IonButton><br/>
      <IonLoading trigger="open-loading" message="Dismissing after 3 seconds..." duration={3000} />
      <IonButton shape='round' color="tertiary" id='present-alert-provedor'>Falco FlexWork Solutions</IonButton>
      <IonLoading trigger="open-loading" message="Dismissing after 3 seconds..." duration={3000} />
      <IonAlert
        trigger="present-alert-user"
        header="ESTAS SEGURO  ingresar el  falco marketplace "

        className="custom-alert"
        buttons={[
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
           
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
            handler: () => {
              window.location.href = "/falcomarklogin";
            }
          },
        ]}
      ></IonAlert>
      <IonAlert
        trigger="present-alert-provedor"
        header="ESTAS SEGURO  ingresar el falco FalexWork Solutions "
       
        className="custom-alert"
        buttons={[
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
           
              
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
            handler: () => {
              window.location.href = "/falcoflexworksolutions";
              }
          }
        ]}
      ></IonAlert> <br></br> <br></br>
    </IonContent>
  
    </>
  );
};

export default ExploreContainer;