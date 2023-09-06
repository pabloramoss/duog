import { Lesson } from "@/types";
import Title from "../Title"
import Avatar from "./Avatar";
import Link from "next/link";

interface Props {
  lesson: Lesson;
}

const DashboardLesson: React.FC<Props> = ({lesson}) => {
  const { name, description, done } = lesson;

  function transformLessonName(lessonName: string) {
    const words = lessonName.toLowerCase().split(' ');
    const camelCaseName = words.reduce((result, word, index) => {
      if (index === 0) {
        return result + word;
      }
      return result + word.charAt(0).toUpperCase() + word.slice(1);
    }, '');
    return camelCaseName;
  }

  return (
    <Link href={`/dashboard/learning/${transformLessonName(name)}`} className="cursor-pointer flex gap-6 items-center p-6 rounded-xl hover:bg-slate-200">
      <Avatar done={done} />
      <div>
        <Title size="sm">{name}</Title>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default DashboardLesson
