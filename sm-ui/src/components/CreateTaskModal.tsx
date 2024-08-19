import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonNote,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonPopover,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useRef, useState } from "react";
import "./CreateTaskModal.css";
import { informationCircleOutline } from "ionicons/icons";

interface TaskDetailsModalProps {
  presentingElement: HTMLElement | null;
}

type TaskFormData = {
  description: string;
  points: string;
  hard: boolean;
  date: string | string[];
};

const initialFormValues = {
  description: "",
  points: "50",
  hard: false,
  date: "",
};

const CreateTaskModal: React.FC<TaskDetailsModalProps> = ({
  presentingElement,
}: TaskDetailsModalProps) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const picker = useRef<HTMLIonModalElement>(null);
  const [formValues, setFormValues] = useState<TaskFormData>(initialFormValues);

  function dismiss() {
    modal.current?.dismiss();
  }

  const isSubmitDisabled = () => {
    if (formValues.description === "" || formValues.date === "") {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    console.log("create task here");
    dismiss();
  };

  return (
    <IonModal
      className="create-task-modal"
      ref={modal}
      trigger="create-task-modal"
      presentingElement={presentingElement!}
      onIonModalDidDismiss={() => setFormValues(initialFormValues)}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={dismiss}>Abbrechen</IonButton>
          </IonButtons>
          <IonTitle>Neue Aufgabe</IonTitle>
          <IonButtons slot="end">
            <IonButton disabled={isSubmitDisabled()} onClick={handleSubmit}>
              Hinzufügen
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset={true} className="inset-list">
          <IonItem color="tertiary">
            <IonTextarea
              spellcheck
              placeholder="Beschreibung"
              autoGrow={true}
              autoFocus
              rows={3}
              onIonInput={(e) =>
                setFormValues({
                  ...formValues,
                  description: e.detail.value || "",
                })
              }
            ></IonTextarea>
          </IonItem>
        </IonList>
        <IonList inset={true} className="inset-list">
          <IonItem color="tertiary">
            <IonLabel>Punkte</IonLabel>
            <IonButton id="points-picker" color="dark">
              {formValues.points}
            </IonButton>
            <IonModal
              className="picker-modal"
              ref={picker}
              trigger="points-picker"
              isOpen={false}
              onDidDismiss={({ detail }) => {}}
            >
              <IonToolbar>
                <IonButtons>
                  <IonButton
                    onClick={() => picker.current!.dismiss(null, "cancel")}
                  >
                    Abbrechen
                  </IonButton>
                </IonButtons>
                <IonButtons slot="end">
                  <IonButton
                    onClick={() =>
                      picker.current!.dismiss(formValues.points, "confirm")
                    }
                  >
                    Bestätigen
                  </IonButton>
                </IonButtons>
              </IonToolbar>
              <IonPicker>
                <IonPickerColumn
                  className="picker"
                  onIonChange={({ detail }) =>
                    setFormValues({
                      ...formValues,
                      points: detail.value?.toString() || "",
                    })
                  }
                >
                  {Array.from({ length: 20 }, (_, index) => (
                    <IonPickerColumnOption key={index} value={(index + 1) * 50}>
                      {(index + 1) * 50}
                    </IonPickerColumnOption>
                  ))}
                </IonPickerColumn>
              </IonPicker>
            </IonModal>
          </IonItem>
          <IonItem color="tertiary">
            <IonIcon
              id="difficulty-popover"
              aria-hidden="true"
              icon={informationCircleOutline}
              slot="start"
            ></IonIcon>
            <IonPopover
              className="info-popover"
              color="secondary"
              trigger="difficulty-popover"
              triggerAction="click"
            >
              <IonContent class="ion-padding">
                Der schwere Modus bestraft einen Fehlschlag stärker
              </IonContent>
            </IonPopover>
            <IonToggle
              color="dark"
              onIonChange={(e) =>
                setFormValues({ ...formValues, hard: e.detail.value })
              }
            >
              Schwerer Modus
            </IonToggle>
          </IonItem>
        </IonList>
        <IonNote>Zu erledigen bis:</IonNote>
        <IonList inset={true} className="inset-list">
          <IonDatetime
            onIonChange={(e) =>
              setFormValues({ ...formValues, date: e.detail.value || "" })
            }
            name="dueDate"
            color="primary"
            min="2024-08-18T00:00:00"
          >
            <div slot="time-label">Uhrzeit</div>
          </IonDatetime>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default CreateTaskModal;
