import {
  IonActionSheet,
  IonBadge,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonNote,
  IonText,
} from "@ionic/react";
import { checkmark, close, timerOutline } from "ionicons/icons";
import { Task } from "../models/Task";
import "./TaskItem.css";
import { useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import TaskDetailsModal from "./TaskDetailsModal";

interface TaskItemProps {
  task: Task;
  updateTasks: (task: Task) => void;
  handleModal: (taskId: string) => void;
  isSelected: boolean;
}

const getTaskIcon = (status: string) => {
  if (status === "pending") return;
  return (
    <IonIcon
      aria-hidden="true"
      slot="start"
      icon={status === "failed" ? close : checkmark}
      color={status === "failed" ? "primary" : "success"}
    ></IonIcon>
  );
};

const initialActionSheetState = { completed: false, failed: false };

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  updateTasks,
  handleModal,
  isSelected,
}: TaskItemProps) => {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  if (!isSelected) {
    dismiss();
  }

  const [isActionSheetOpen, setIsActionSheetOpen] = useState(
    initialActionSheetState
  );

  const handleUpdateTask = (detail: OverlayEventDetail) => {
    if (detail.data && detail.data.action != "cancel") {
      console.log(detail.data.status);
      task.status = detail.data.status;
      updateTasks(task);
      if (isSelected) {
        dismiss();
      }
    }
    setIsActionSheetOpen(initialActionSheetState);
  };

  return (
    <>
      <IonItemSliding>
        <IonItem id={task.id} button={true} className="taskItem">
          {getTaskIcon(task.status)}
          <IonLabel className="task-item-label">
            <IonText className="text-ellipsis">
              <b>{task.description}</b>
            </IonText>
            <div className="task-item-details">
              <IonNote className="dueDate-group">
                <IonIcon icon={timerOutline}></IonIcon>
                <small>{task.dueDate}</small>
              </IonNote>
              <IonNote color={task.difficulty === "hard" ? "primary" : ""}>
                <small>
                  <b>{task.difficulty}</b>
                </small>
              </IonNote>
            </div>
          </IonLabel>
          <IonBadge className="badge" color="secondary">
            {task.points}
          </IonBadge>
        </IonItem>
        {task.status === "pending" && (
          <>
            <IonItemOptions
              onIonSwipe={() =>
                setIsActionSheetOpen({ completed: true, failed: false })
              }
              side="start"
            >
              <IonItemOption
                onClick={() =>
                  setIsActionSheetOpen({ completed: true, failed: false })
                }
                type="button"
                color="success"
                expandable
              >
                <IonIcon slot="icon-only" icon={checkmark}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
            <IonItemOptions
              onIonSwipe={() =>
                setIsActionSheetOpen({ completed: false, failed: true })
              }
              side="end"
            >
              <IonItemOption
                onClick={() =>
                  setIsActionSheetOpen({ completed: false, failed: true })
                }
                type="button"
                color="primary"
                expandable
              >
                <IonIcon slot="icon-only" icon={close}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </>
        )}
      </IonItemSliding>
      <TaskDetailsModal
        ref={modal}
        task={task}
        openActionSheet={setIsActionSheetOpen}
        handleModal={handleModal}
        dismiss={dismiss}
      />
      <IonActionSheet
        isOpen={isActionSheetOpen.completed}
        header="Als abgeschlossen markieren?"
        buttons={[
          {
            text: "Abgeschlossen",
            data: {
              action: "markAsCompleted",
              status: "completed",
            },
          },
          {
            text: "Abbrechen",
            role: "cancel",
            data: {
              action: "cancel",
            },
          },
        ]}
        onDidDismiss={({ detail }) => handleUpdateTask(detail)}
      ></IonActionSheet>
      <IonActionSheet
        isOpen={isActionSheetOpen.failed}
        header="Als fehlgeschlagen markieren?"
        buttons={[
          {
            text: "Fehlgeschlagen",
            role: "destructive",
            data: {
              action: "markAsFailed",
              status: "failed",
            },
          },
          {
            text: "Abbrechen",
            role: "cancel",
            data: {
              action: "cancel",
            },
          },
        ]}
        onDidDismiss={({ detail }) => handleUpdateTask(detail)}
      ></IonActionSheet>
    </>
  );
};

export default TaskItem;
