import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonAvatar,
  IonChip,
  IonNote,
  IonMenu,
  IonMenuButton,
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonThumbnail,
  IonText,
} from "@ionic/react";
import "./OverviewTab.css";
import { useEffect, useState } from "react";
import {
  albums,
  caretDownCircle,
  ellipse,
  fileTrayFull,
  library,
  lockClosed,
  logOut,
  notifications,
  personCircle,
  push,
  settings,
  close,
  caretUpCircle,
} from "ionicons/icons";

const OverviewTab: React.FC = () => {
  const [data, setData] = useState({ username: "", role: "none", points: 0 });

  useEffect(() => {
    setData({
      username: "sonke.s",
      role: "Sub",
      points: 230,
    });
  }, []);

  return (
    <>
      <IonMenu type="overlay" contentId="overview">
        <IonHeader>
          <IonToolbar>
            <IonTitle>SM</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
          <IonList lines="none" className="profileItem">
            <IonItem button={true}>
              <IonThumbnail slot="start">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </IonThumbnail>
              <IonLabel>
                <strong>username</strong>
                <br />
                <div className="roleHeader">
                  <IonIcon icon={caretUpCircle} color="medium"></IonIcon>
                  <IonText color="medium">Dom</IonText>
                </div>
              </IonLabel>
            </IonItem>
          </IonList>
          <IonList className="bottomList">
            <IonItem button={true}>
              <IonIcon aria-hidden="true" icon={library} slot="start"></IonIcon>
              <IonLabel>Lexikon</IonLabel>
            </IonItem>
            <IonItem button={true}>
              <IonIcon
                aria-hidden="true"
                icon={settings}
                slot="start"
              ></IonIcon>
              <IonLabel>Einstellungen</IonLabel>
            </IonItem>
            <IonItem button={true}>
              <IonIcon aria-hidden="true" icon={logOut} slot="start"></IonIcon>
              <IonLabel>Abmelden</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="overview">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Übersicht</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={notifications}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <div className="profileHeader ion-side-padding">
              <IonAvatar>
                <img
                  alt="profile picture"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <div className="profileDetails">
                <h2 className="usernameHeader">{data.username}</h2>
                <div className="roleHeader">
                  <IonIcon icon={caretDownCircle} color="medium"></IonIcon>
                  <IonNote className="roleHeader">{data.role}</IonNote>
                </div>
              </div>
            </div>
          </IonToolbar>
          <IonToolbar>
            <div className="statusHeader ion-side-padding">
              <IonChip>
                <IonIcon icon={ellipse} color="success"></IonIcon>
                <IonLabel>Online</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={lockClosed} color="primary"></IonIcon>
                <IonLabel>Locked</IonLabel>
              </IonChip>
            </div>
          </IonToolbar>
          <IonToolbar>
            <IonSegment value="dates" className="segmentContainer">
              <IonSegmentButton value="dates">
                <IonLabel>Dates</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="tasks">
                <IonLabel>Aufgaben</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen></IonContent>
      </IonPage>
    </>
  );
};

export default OverviewTab;
