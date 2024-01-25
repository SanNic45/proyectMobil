import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard,  IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonInput,
  IonButton, IonIcon} from '@ionic/react';

import './Tab2.css';
import { call, cloudUploadOutline, documentOutline, handLeft, mail, person, save } from 'ionicons/icons';

import {loadingController} from '@ionic/core';
import { ChangeEvent } from 'react';
import Create from '../components/create/create';

const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
            <IonTitle>Register</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="" className="ion-padding">
      <IonCard>
        <IonCardHeader>
          <center>
            <IonCardSubtitle>Registro de Asistencia Estudiantil</IonCardSubtitle>
          </center>
        </IonCardHeader>
        <IonCardContent>
          <Create />
        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
