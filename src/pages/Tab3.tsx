import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonCardSubtitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import { User } from './../models/user.model' ;
import UserItem from './../components/userItem'; 
import axios from 'axios';

import Read from "../components/read/read";

const Tab3: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
          <IonTitle>Users</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br/>
        <center>
          <h3>Lista de Usuarios</h3>
        </center>
        <br/>
        <Read/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
