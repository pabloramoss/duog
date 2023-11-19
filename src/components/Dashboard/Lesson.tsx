'use client'
import { Lesson } from "@/types";
import Title from "../Title"
import Avatar from "./Avatar";
import { useRouter } from 'next/navigation'

interface Props {
  lesson: Lesson;
}

const DashboardLesson: React.FC<Props> = ({lesson}) => {
  console.log(lesson)
  const { name, description, done } = lesson;
  const router = useRouter()

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

  const handleRedirect = () => {
    router.push(`/dashboard/learning/${transformLessonName(name)}`)
  }

  return (
    <button disabled={!lesson.available} onClick={handleRedirect} className={`${lesson.available ? "cursor-pointer":"cursor-not-allowed"} flex gap-6 items-center p-6 rounded-xl ${lesson.available && "hover:bg-slate-200"}`}>
      <Avatar done={done} />
      <div>
        <Title size="sm">{name}</Title>
        <p>{description}</p>
      </div>
    </button>
  )
}

export default DashboardLesson
