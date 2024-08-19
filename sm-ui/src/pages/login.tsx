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
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { AuthData } from "../models/User";

const Login: React.FC = () => {
  const [fields, setFields] = useState<AuthData>({
    email: "",
    password: "",
  });
  const history = useHistory();

  const auth = useAuth();

  const handleSubmit = () => {
    auth.login(fields);
    history.replace("/tabs/overview");
  };

  return (
    <IonPage className="background">
      <IonContent>
        <div className="center">
          <IonText>
            <h1>Logo</h1>
          </IonText>
          <IonInput
            onIonChange={(e) => {
              if (e.detail.value === undefined || e.detail.value === null)
                return;
              setFields({ ...fields, email: e.detail.value });
            }}
            mode="md"
            fill="outline"
            label="Email-Adresse"
            type="email"
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
          <div onClick={handleSubmit} className="ion-activatable ripple-parent">
            Anmelden
            <IonRippleEffect></IonRippleEffect>
          </div>
          <p>Du bist neu hier?</p>
          <IonRouterLink routerDirection="root" routerLink="/register">
            Registrieren
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
