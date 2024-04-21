import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { getPlatforms } from '@ionic/react';

getPlatforms(); // returns ["iphone", "ios", "mobile", "mobileweb"] from an iPhone
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class='home-toolbar' color={'tertiary'}>
          
          <IonImg src="public/logoft.png
          "  class='customimg' />
          
        </IonToolbar>
      </IonHeader>
      <IonContent >
        
     
        <ExploreContainer title="My Title" description="My Description" image="path/to/image" />
        
        
      </IonContent>
    </IonPage>
  );
};

export default Home;

