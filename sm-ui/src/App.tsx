import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  calendarOutline,
  lockClosedOutline,
  readerOutline,
  clipboardOutline,
} from "ionicons/icons";
import OverviewTab from "./pages/OverviewTab";
import GuidesTab from "./pages/GuidesTab";
import ChastityTab from "./pages/ChastityTab";
import TasksTab from "./pages/TasksTab";
import Login from "./pages/login";

import AuthProvider from "./AuthProvider";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Register from "./pages/register";
import { useAuth } from "./AuthContext";

setupIonicReact();

const Router: React.FC = () => {
  const auth = useAuth();

  const authRouteCheck = (component: JSX.Element) => {
    return auth.isAuthenticated ? component : <Redirect to="/login" />;
  };

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/tabs" render={() => authRouteCheck(<TabRouter />)} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

const TabRouter: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/overview" />
        <Route exact path="/tabs/overview">
          <OverviewTab />
        </Route>
        <Route exact path="/tabs/guides">
          <GuidesTab />
        </Route>
        <Route exact path="/tabs/chastity">
          <ChastityTab />
        </Route>
        <Route exact path="/tabs/tasks">
          <TasksTab />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton
          aria-label="overview-tab"
          tab="overview"
          href="/tabs/overview"
        >
          <IonIcon size="large" aria-hidden="true" icon={calendarOutline} />
          <IonLabel>Übersicht</IonLabel>
        </IonTabButton>
        <IonTabButton aria-label="guides-tab" tab="guides" href="/tabs/guides">
          <IonIcon size="large" aria-hidden="true" icon={readerOutline} />
          <IonLabel>Guides</IonLabel>
        </IonTabButton>
        <IonTabButton
          aria-label="chastity-tab"
          tab="chastity"
          href="/tabs/chastity"
        >
          <IonIcon size="large" aria-hidden="true" icon={lockClosedOutline} />
          <IonLabel>Chastity</IonLabel>
        </IonTabButton>
        <IonTabButton aria-label="tasks-tab" tab="tasks" href="/tabs/tasks">
          <IonIcon size="large" aria-hidden="true" icon={clipboardOutline} />
          <IonLabel>Aufgaben</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const App: React.FC = () => {
  return (
    <IonApp>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </IonApp>
  );
};

export default App;
