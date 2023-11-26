import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

interface Conjugation {
  io: string;
  tu: string;
  lui: string;
  noi: string;
  voi: string;
  loro: string;
}

interface Props {
  tense: string;
  verb: string;
  conjugations: Conjugation;
  translation: string;
}

const Card: React.FC<Props> = ({ tense, verb, conjugations, translation }) => {
  const [conjugationsValue, setConjugationsValue] = useState<Conjugation>({
    io: '',
    tu: '',
    lui: '',
    noi: '',
    voi: '',
    loro: ''
  });
  const [isCheck, setIsCheck] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, conjugation: keyof Conjugation) => {
    const { value } = event.target;
    setConjugationsValue(prevState => ({
      ...prevState,
      [conjugation]: value
    }));
  };

  return (
    <div className="grid gap-6 p-16 rounded-lg drop-shadow-md border-2 border-opacity-40 border-stone-500">
      <div className="flex items-center justify-center gap-2">
        <h3 className="font-bold uppercase text-center text-xl">{verb}</h3>
        <Tooltip title={translation}>
          <svg className="h-4 w-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
    viewBox="0 0 32 32" enable-background="new 0 0 32 32">
          <rect x="15" y="14" width="2" height="8"/>
          <rect x="15" y="10" width="2" height="2"/>
          <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="12"/>
          </svg>
        </Tooltip>
      </div>
      <div className="grid gap-2 place-items-center">
        <div className="grid gap-2">

        {Object.keys(conjugationsValue).map((conjugation) => (
          <div key={conjugation} className="flex gap-2">
            <h3 className="underline w-8">{conjugation}</h3>
            <div className="flex gap-2">
              <input
                className="text-black px-2 rounded-md w-[150px]"
                onChange={(e) => handleInputChange(e, conjugation as keyof Conjugation)}
                value={(conjugationsValue as any)[conjugation]}
                type="text"
              />
              {
                isCheck ? ((conjugationsValue as any)[conjugation].toLowerCase() === conjugations[conjugation as keyof Conjugation] ? <span>✅</span> : <div className="flex text-sm items-center whitespace-nowrap"><span>❌</span><p>{conjugations[conjugation as keyof Conjugation]}</p></div>) : <span>👀</span>
              }
            </div>
          </div>
        ))}
        </div>

      </div>
      <button className="border-[1px] border-stone-500 rounded-md drop-shadow-sm" onClick={() => setIsCheck(true)}>Check</button>
    </div>
  );
}

export default Card;
