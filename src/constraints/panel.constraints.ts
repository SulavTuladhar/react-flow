import { CardIconInterface } from "../utils/interface";
import { Icons } from "../components/common/Icons.component";
export const DndConstraints: CardIconInterface[] = [
  {
    title: "Send a message",
    description: "With no response required from visitor",
    icon: Icons.MessageIcon,
    className: "bg-red-500 text-red-500",
    type: "message",
  },
  {
    title: "Send a message",
    description: "With no response required from visitor",
    icon: Icons.QuestionMark,
    className: "bg-yellow-500 text-yellow-500",
    type: "question",
  },
];
