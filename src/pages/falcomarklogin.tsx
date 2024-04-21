

import React, { useState } from 'react';
import {IonImg,IonAlert,IonButton,IonItem,IonLabel,IonInput, IonContent, IonHeader, IonButtons, IonPage, IonTitle, IonToolbar ,IonBackButton, IonBackdrop} from '@ionic/react';

import './falcomarketplace.css';



var texto = "Bienvenido a Falco marketplace";


const falcomarklogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
const handleLogin = () => {
  // Aquí puedes implementar la lógica de autenticación vea app
  if (email === 'admin@admin.com' && password === 'admin') {
    setLoginMessage('Login correcto');

    
  }
    else {
        setLoginMessage('Usuario o contraseña incorrectos');
    }
    setShowAlert(true);


};
const handleLoginn = () => {
    window.location.href = "/crearcuenta";
    return;
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>Falco marketplace</IonTitle>
        </IonToolbar>
      </IonHeader  >
      <IonContent    >
      <h1 className='texto'>{texto}  </h1>
      
      <div className="login-container">
      <IonImg src="public/logom.png
          " class='custom-imgg' /> <br></br>
        <IonItem className="login-input">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem className="login-input">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <a  href="/olvidolacuentafm" className='atexto'>¿Olvidaste tu contraseña?</a><br></br><br></br>
        <IonButton expand="block" onClick={handleLogin} className="login-button">Login</IonButton>
        <IonButton expand="block" onClick={handleLoginn} className="login-button">Crear cuenta</IonButton>
      </div>
      
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Mensaje'}
        message={loginMessage}
        buttons={['OK']}
      />
      </IonContent >
    </IonPage>
  );
};

export default falcomarklogin;
