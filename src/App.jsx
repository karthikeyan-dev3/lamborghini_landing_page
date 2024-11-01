import React, { useState, useRef, useEffect } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    { text1: "Drive ", text2: "what you love" },
    { text1: "Lamborgini", text2: "will never regret you" },
    { text1: "Feel", text2: "the real monster" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

 
 useEffect(()=>{
      setInterval(()=>
      {
        setHeroCount((count)=>{return count===2?0:count+1})

      },3000);

 },[])
  return (
    <div>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      playStatus={playStatus}
      heroData={heroData[heroCount]} // Passes the current hero data based on heroCount
      setHeroCount={setHeroCount}
      heroCount={heroCount}
      />
      <Background playStatus={playStatus} heroCount={heroCount} />
      
     
    </div>
  );
}

export default App;
