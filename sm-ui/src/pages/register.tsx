import {
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonRippleEffect,
  IonRouterLink,
  IonText,
} from "@ionic/react";
import "./login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();

  const fetchData = () => {
    setTimeout(() => {
      console.log("logged in");
      history.replace("/tabs/overview");
    }, 500);
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <IonPage className="background">
      <IonContent scrollY={false}>
        <div className="center">
          <IonText>
            <h1>SM</h1>
          </IonText>
          <IonInput
            onIonChange={(e) => {
              if (e.detail.value === undefined || e.detail.value === null)
                return;
              setFields({ ...fields, username: e.detail.value });
            }}
            mode="md"
            fill="outline"
            label="Nutzername"
            labelPlacement="stacked"
          ></IonInput>
          <IonInput
            onIonChange={(e) => {
              if (e.detail.value === undefined || e.detail.value === null)
                return;
              setFields({ ...fields, email: e.detail.value });
            }}
            mode="md"
            fill="outline"
            type="email"
            label="Email-Adresse"
            labelPlacement="stacked"
          ></IonInput>
          <IonInput
            onIonChange={(e) => {
              if (e.detail.value === undefined || e.detail.value === null)
                return;
              setFields({ ...fields, password: e.detail.value });
            }}
            mode="md"
            fill="outline"
            type="password"
            label="Passwort"
            labelPlacement="stacked"
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
          <IonInput
            onIonChange={(e) => {
              if (e.detail.value === undefined || e.detail.value === null)
                return;
              setFields({ ...fields, confirmPassword: e.detail.value });
            }}
            mode="md"
            fill="outline"
            type="password"
            label="Passwort bestätigen"
            labelPlacement="stacked"
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
          <div onClick={handleSubmit} className="ion-activatable ripple-parent">
            Registrieren
            <IonRippleEffect></IonRippleEffect>
          </div>
          <p>Du hast bereits einen Account?</p>
          <IonRouterLink routerDirection="root" routerLink="/login">
            Anmelden
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
