import React, { useState} from "react";
import {Form, Button, Checkbox, Icon, Input} from 'semantic-ui-react';
import { personAdd, clipboard, documentLock, arrowUpCircle } from 'ionicons/icons';
import 'semantic-ui-css/semantic.min.css'
import axios  from "axios";
import { useHistory } from "react-router-dom";


export default function Create(){

    let history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState([]);

    const aux = "https://cors-anywhere.herokuapp.com/";
    const myip = "http://40.75.120.104/apiweb/";
    
    const sendDataToApi = ()=> {
        axios.get(aux+myip, {
            params: {
              user: user,
              pass: password,
            },
          })
          .then(function (response) {
            console.log(response);
            setLogin(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            history.push("/validate")
          });
    }

    login.map((data) => {
        console.log("DATA INFO "+data.record);
        localStorage.setItem('RECORD', data.record);
        localStorage.setItem('ID', data.id);
        localStorage.setItem('NAME', data.names);
        localStorage.setItem('LASTNAME', data.lastnames);
        if(data.record == 0){
          alert('¡Valide Usuario!');
        }
    })

    return(
        <div>
          <Form>
            <Form.Field>
              <label>Usuario *</label>
              <Input name="user"
                onChange={(e) => setUser(e.target.value)} 
                placeholder='Usuario' />
            </Form.Field>
            <Form.Field>
              <label>Clave *</label>
              <Input name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Clave'/>
            </Form.Field>
            <center>    
                <Button type='submit' color="linkedin" onClick={sendDataToApi}>
                    Ingresar
                </Button>
            </center>
          </Form>
         
        </div>
    )
}