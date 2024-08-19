import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  SegmentValue,
} from "@ionic/react";
import "./TasksTab.css";
import { add, arrowUp } from "ionicons/icons";
import { DUMMY_TASKS, Task } from "../models/Task";
import TaskItem from "../components/TaskItem";
import { useEffect, useRef, useState } from "react";
import CreateTaskModal from "../components/CreateTaskModal";

const TasksTab: React.FC = () => {
  const [currentSegment, setCurrentSegment] = useState<SegmentValue>("pending");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskDetailsModal, setCurrentTaskDetailsModal] =
    useState<string>("");
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  const page = useRef(null);

  useEffect(() => {
    setTasks(DUMMY_TASKS);
    setPresentingElement(page.current);
  }, []);

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aufgaben</IonTitle>
          <IonButtons slot="end">
            <IonButton id="create-task-modal">
              <IonIcon slot="icon-only" icon={add}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <div className="headerContainer">
            <div className="pointsOverviewContainer">
              <div className="detailContainer">
                <h1>1000</h1>
                <IonNote>Goals</IonNote>
              </div>
              <div className="detailContainer">
                <h1>430</h1>
                <IonNote>Points</IonNote>
              </div>
              <div className="detailContainer">
                <IonIcon icon={arrowUp} size="large"></IonIcon>
                <IonNote>Trend</IonNote>
              </div>
            </div>
            <IonSegment
              onIonChange={(e) =>
                setCurrentSegment(e.detail.value ?? "pending")
              }
              value={currentSegment}
            >
              <IonSegmentButton value="pending">
                <IonLabel>Offen</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="completed">
                <IonLabel>Beendet</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="tasksContent">
        <IonList lines="none">
          {currentSegment === "pending" && (
            <>
              {DUMMY_TASKS.filter((task) => task.status === "pending").map(
                (task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    updateTasks={() => setTasks([...tasks, task])}
                    isSelected={currentTaskDetailsModal === task.id}
                    handleModal={setCurrentTaskDetailsModal}
                  />
                )
              )}
            </>
          )}
          {currentSegment === "completed" && (
            <>
              {DUMMY_TASKS.filter((task) => task.status != "pending").map(
                (task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    updateTasks={() => setTasks([...tasks, task])}
                    isSelected={currentTaskDetailsModal === task.id}
                    handleModal={setCurrentTaskDetailsModal}
                  />
                )
              )}
            </>
          )}
        </IonList>
        <CreateTaskModal presentingElement={presentingElement} />
      </IonContent>
    </IonPage>
  );
};

export default TasksTab;
