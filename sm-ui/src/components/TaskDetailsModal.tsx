import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonNote,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Task } from "../models/Task";
import { forwardRef } from "react";
import { checkmark, close } from "ionicons/icons";

type ActionSheetState = { completed: boolean; failed: boolean };

interface TaskDetailsModalProps {
  task: Task;
  openActionSheet: (state: ActionSheetState) => void;
  handleModal: (taskId: string) => void;
  dismiss: () => void;
}

const TaskDetailsModal = forwardRef<HTMLIonModalElement, TaskDetailsModalProps>(
  (
    { task, openActionSheet, handleModal, dismiss }: TaskDetailsModalProps,
    refModal
  ) => {
    return (
      <IonModal
        ref={refModal}
        trigger={task.id}
        initialBreakpoint={0.5}
        breakpoints={[0.5, 0.75]}
        backdropDismiss={false}
        backdropBreakpoint={0.5}
        handleBehavior="cycle"
        onIonModalWillPresent={() => handleModal(task.id)}
      >
        <IonHeader>
          <IonToolbar>
            {task.status === "pending" && (
              <>
                <IonButtons slot="start">
                  <IonButton
                    id={"edit-task-" + task.id}
                    onClick={() => dismiss()}
                  >
                    Bearbeiten
                  </IonButton>
                </IonButtons>
                <IonTitle>
                  <IonButton
                    color="none"
                    onClick={() =>
                      openActionSheet({ completed: true, failed: false })
                    }
                  >
                    <IonIcon
                      size="large"
                      color="success"
                      slot="icon-only"
                      icon={checkmark}
                    ></IonIcon>
                  </IonButton>
                  <IonButton
                    color="none"
                    onClick={() =>
                      openActionSheet({ completed: false, failed: true })
                    }
                  >
                    <IonIcon
                      size="large"
                      color="primary"
                      slot="icon-only"
                      icon={close}
                    ></IonIcon>
                  </IonButton>
                </IonTitle>
              </>
            )}
            {task.status != "pending" && (
              <IonButtons slot="start">
                <IonButton onClick={() => dismiss()}>Bearbeiten</IonButton>
              </IonButtons>
            )}
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Schließen</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText>
            <b>{task.description}</b>
          </IonText>
          <br />
          <IonNote>Zu erledigen bis: {task.dueDate}</IonNote>
          <br />
          <IonBadge>{task.points}</IonBadge>
        </IonContent>
      </IonModal>
    );
  }
);

export default TaskDetailsModal;
