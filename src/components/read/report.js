import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import axios from "axios";

export default function Report() {
  const [apiData, setApiData] = useState([]);
  const [record, setRecord] = useState("");

  const fetchData = (record) => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/http://40.75.120.104/apiweb/index.php/2?record=${record}`)
      .then(function (getData) {
        setApiData(getData.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setRecord(localStorage.getItem("RECORD"));
  }, []);

  useEffect(() => {
    if (record) {
      fetchData(record);
    }
  }, [record]);

  return (
    <div>
      <br />
      <center>
        <h2>Registro de Asistencia</h2>
      </center>
      <IonGrid>
        <IonRow>
          <IonCol push-sm="6">Fecha</IonCol>
          <IonCol push-sm="6">Hora</IonCol>
        </IonRow>
        {apiData.map((data) => {
          return (
            <IonRow key={data.record}>
              <IonCol push-sm="6">{data.date}</IonCol>
              <IonCol push-sm="6">{data.time}</IonCol>
            </IonRow>
          );
        })}
      </IonGrid>
    </div>
  );
}