export interface Task {
  id: string;
  description: string;
  dueDate: string;
  status: string;
  difficulty: string;
  creatorId: string;
  assignedToId: string;
  points: number;
}

export const DUMMY_TASKS: Task[] = [
  {
    id: "1",
    description: "Trage die Halskette für 2 Stunden, ohne sie abzunehmen.",
    dueDate: "2024-08-16",
    status: "pending",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "2",
    description: "Kaufe eine neue Kerze und bringe sie nach Hause.",
    dueDate: "2024-08-17",
    status: "pending",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "3",
    description:
      "Schreibe eine Liste mit 5 Dingen, die du dir in einer Session wünschst.",
    dueDate: "2024-08-18",
    status: "pending",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "4",
    description:
      "Bereite ein Bad mit ätherischen Ölen vor und entspanne dich für 30 Minuten.",
    dueDate: "2024-08-19",
    status: "pending",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "5",
    description: "Trage an einem Tag keine Unterwäsche.",
    dueDate: "2024-08-20",
    status: "completed",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "6",
    description: "Schreibe jeden Tag eine kurze Reflexion über deine Gefühle.",
    dueDate: "2024-08-21",
    status: "completed",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "7",
    description:
      "Reinige das Schlafzimmer gründlich und richte es für die nächste Session her.",
    dueDate: "2024-08-22",
    status: "pending",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "8",
    description:
      "Trage den Tag über ein bestimmtes Kleidungsstück, das der dominante Partner gewählt hat.",
    dueDate: "2024-08-23",
    status: "pending",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "9",
    description:
      "Mache ein 5-minütiges Dankbarkeitsritual und teile es mit dem dominanten Partner.",
    dueDate: "2024-08-24",
    status: "pending",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "10",
    description: "Lerne 10 Minuten lang über ein neues Thema im Bereich SM.",
    dueDate: "2024-08-25",
    status: "completed",
    difficulty: "easy",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 50,
  },
  {
    id: "11",
    description: "Sei für eine Stunde still, außer wenn du angesprochen wirst.",
    dueDate: "2024-08-26",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "12",
    description: "Mache 10 Kniebeugen jedes Mal, wenn du einen Raum betrittst.",
    dueDate: "2024-08-27",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 120,
  },
  {
    id: "13",
    description:
      "Erstelle eine Liste von 10 Dingen, die du an deinem dominanten Partner bewunderst.",
    dueDate: "2024-08-28",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "14",
    description:
      "Verbringe 30 Minuten in einer Position deiner Wahl ohne Ablenkungen.",
    dueDate: "2024-08-29",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "15",
    description:
      "Meditiere für 20 Minuten und fokussiere dich dabei auf deine Unterwerfung.",
    dueDate: "2024-08-30",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "16",
    description:
      "Trage ein Kleidungsstück, das dich unwohl fühlen lässt, für einen halben Tag.",
    dueDate: "2024-08-31",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "17",
    description:
      "Lies ein Kapitel eines Buches über SM und fasse es schriftlich zusammen.",
    dueDate: "2024-09-01",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "18",
    description:
      "Trage eine Augenbinde für eine Stunde und folge nur den Anweisungen deines dominanten Partners.",
    dueDate: "2024-09-02",
    status: "failed",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "19",
    description:
      "Mache einen Spaziergang in einem bestimmten Outfit, das dein dominanter Partner bestimmt hat.",
    dueDate: "2024-09-03",
    status: "failed",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
  {
    id: "20",
    description:
      "Nimm ein kaltes Bad für 5 Minuten, um deine Willenskraft zu testen.",
    dueDate: "2024-09-04",
    status: "pending",
    difficulty: "hard",
    creatorId: "dom1",
    assignedToId: "sub1",
    points: 80,
  },
];
