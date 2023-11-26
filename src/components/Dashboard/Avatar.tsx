interface Props {
  done: boolean;
  available: boolean;
}
const Avatar: React.FC<Props> = ({done, available}) => {
  const showLock = !done && !available;

  return (
    <div className="relative flex justify-center items-center">
      <img className={`w-20 h-20 object-cover p-1 rounded-full ring-4 ring-gray-300 dark:ring-green-500  ${!done && "grayscale"}`} src="https://pbs.twimg.com/media/FFs5EQGXsBky-VM?format=jpg&name=large" alt="Bordered avatar" />
      {done && <svg className="absolute text-green-500 -bottom-4 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>}
      {showLock && <svg className="absolute" fill="lightgray" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M17,9V7c0-2.8-2.2-5-5-5S7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M9,7c0-1.7,1.3-3,3-3s3,1.3,3,3v2H9V7z"/></svg>}
    </div>
  )
}

export default Avatar