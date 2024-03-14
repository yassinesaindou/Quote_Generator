import { useEffect, useState } from "react";

export default function App() {
  const [fact, setFact] = useState('')
  useEffect(function () {
    async function getFact() {
      const res = await fetch('https://meowfacts.herokuapp.com/');
      const data =await res.json();
      setFact(data.data[0])
    } getFact();
  }, []);

  async function handleClick() {
    const res = await fetch("https://meowfacts.herokuapp.com/");
    const data = await res.json();
    setFact(data.data[0]);
    // setFact(data)
  }
  return (
    <div className=" max-w-[900px] mx-auto rounded-sm border border-red-400 bg-yellow-300 mt-[2.4rem] px-6 py-4 text-yellow-900 rounded-lg">
      <p className="text-3xl font-bold py-3 px-4 ">{fact}</p>
      <button onClick={handleClick} className="mt-3 px-[2.4rem] py-2 rounded-[30px] text-[1.2rem] font-medium border-red-950 bg-emerald-600 text-emerald-100">Generate a Cat Fact</button>
    </div>
  );
}
