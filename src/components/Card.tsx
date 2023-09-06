'use client'
import { Conjugation } from "@/types";
import { useState } from "react";

interface Props {
  tense: string;
  verb: string;
  conjugations: Conjugation;
}

const Card: React.FC<Props> = ({ tense, verb, conjugations }) => {
  console.log("conjugations", conjugations)
  const [conjugationsValue, setConjugationsValue] = useState({
    io: '',
    tu: '',
    lui: '',
    noi: '',
    voi: '',
    loro: ''
  });
  const [isCheck, setIsCheck] = useState(false);

  const conjugationEntries = Object.entries(conjugationsValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, conjugation: string) => {
    const { value } = event.target;
    setConjugationsValue(prevState => ({
      ...prevState,
      [conjugation]: value
    }));
  };

  return (
    <div className="grid gap-6 bg-stone-600 px-20 py-10 rounded-lg drop-shadow-md border-2 border-opacity-40 border-stone-500">
      <div className="grid gap-2">
        <h2 className="text-lg text-center">{tense}</h2>
        <h1 className="font-bold uppercase text-center text-xl">{verb}</h1>
      </div>
      <div className="grid gap-2">
        {conjugationEntries.map(([conjugation, value]) => (
          <div key={conjugation} className="flex gap-4 justify-between">
            <h3 className="underline">{conjugation}</h3>
            <div className="flex gap-2">
              <input
                className="text-black px-2 rounded-md"
                onChange={(e) => handleInputChange(e, conjugation)}
                value={value}
                type="text"
              />
              {
                //@ts-ignore
                isCheck ? (conjugationsValue[conjugation] === conjugations[conjugation] ? <span>✅</span> : <span>❌</span>) : <span>👀</span>
              }
            </div>
          </div>
        ))}
      </div>
      <button className="bg-stone-500 rounded-md drop-shadow-sm" onClick={() => setIsCheck(true)}>Check</button>
    </div>
  );
}

export default Card;
