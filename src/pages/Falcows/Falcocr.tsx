import React, { useState } from 'react';
import { IonContent, IonApp, IonHeader,IonToolbar, IonButtons,IonBackButton ,IonTitle} from '@ionic/react';

import Crearcuentafw from "../../components/Crearfuentaform";
import './falcocr.css';
const Falcocr = () => {
    return (
        <IonApp>
        <IonHeader>
          <IonToolbar color={'primary'}>
            <IonButtons slot="start">
            <IonBackButton defaultHref="/falcoflexworksolutions"></IonBackButton>
            </IonButtons>
            <IonTitle>Login  Falco flex work solutions</IonTitle>
          </IonToolbar>
        </IonHeader >
        
        <IonContent className='content'>
          <Crearcuentafw />
        </IonContent>
        
  </IonApp>  
);
}

export default Falcocr;