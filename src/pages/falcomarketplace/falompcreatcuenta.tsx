import React,{} from "react";
import {IonBackButton,IonContent,IonButtons,IonTitle, IonToolbar ,IonInput, IonButton, IonLabel, IonSelect , IonSelectOption,IonHeader, IonApp} from '@ionic/react';
import './fmcrearcuenta.css';
import Crearcuenta from "../../components/crearcuenta";

const  falompcreatcuenta: React.FC = () => {
    



    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/falcomarklogin"></IonBackButton>
          </IonButtons>
          <IonTitle>Login  Falcomarkeplace</IonTitle>
        </IonToolbar>
      </IonHeader >
      
      <IonContent className="contentcrearcuenta">
        <Crearcuenta />
      </IonContent >
      
</IonApp>
            

    );
}

export default falompcreatcuenta;