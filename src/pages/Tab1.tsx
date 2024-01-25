import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { lockClosed, logIn, person } from 'ionicons/icons';
import Login from "../components/login/login";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro de Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color ="" className='ion-padding'>

        <IonCard>
          <br/>
          <center>
            <img src="/assets/images/img1.jpeg" className="small-image" />
          </center>
          <br/>
          <IonCardContent>
            <Login/>
            <br/>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
