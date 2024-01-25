import React from 'react';
import { IonContent, IonHeader, 
  IonPage, IonTitle,  
  IonToolbar, IonCard,  
  IonCardContent, IonButton,
  IonGrid, IonRow, IonCol, 
  IonInput, IonIcon, IonAvatar, IonLabel } from '@ionic/react';
import { person, lockClosed, star, logIn, personAdd } from 'ionicons/icons';
import Report from "../components/read/report"
import Attendant from '../components/register/attendant'

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen color="medium" className="ion-padding">
        <IonCard>          
          <IonCardContent>
            <Attendant/> 
            <Report/> 
          </IonCardContent>
        </IonCard>        
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
