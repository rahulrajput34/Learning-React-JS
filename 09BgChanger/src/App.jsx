import { useEffect, useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');   // we can pass const over here because it an array we can change array

  // Let's learn useEffect hook
  // useEffect hook
  // useEffect(() => {
  //   // Your side effect code here

  //   return () => {
  //     // Cleanup code here (optional)
  //   };
  // }, [dependencies]);

  // useEffect get one callback function 
  // this is where we perform all the effects we want to give to our webpage, this effects includes data fetching, DOM manipulation, setting up subscriptions, timers, etc.
  // it get one return function to clean up the code if we want.
  // it also take Dependencies Array whatever is changing we give inside this array.
  useEffect(() => {           // to give effect we use this useEffect hook
    document.body.style.backgroundColor = color;
  }, [color]);

  // Important Note: 
  //We give whole function over here insted of giving the setColor('red') directly because if we give direct then it execute the code imedetely
  // if we pass like below that it return the value and when we click it that time only it changes the color because when it not execute automatically
  // This is what we learn in JS playlist as well , the the topic is named closer
  return (
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-10 shadow-lg bg-white px-3 py-2 rounded-3xl text-white'>
        <button onClick={() => setColor('red')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'red'}}>Red</button>  {/*When we want pass the css we pass it like this in two curely braces {{}} becuase its a Syantax */}
        <button onClick={() => setColor('green')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'green'}}>Green</button>
        <button onClick={() => setColor('pink')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'pink'}}>Pink</button>
        <button onClick={() => setColor('blue')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'blue'}}>Blue</button>
        <button onClick={() => setColor('gray')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'gray'}}>Gray</button>
        <button onClick={() => setColor('yellow')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'yellow'}}>Yellow</button>
        <button onClick={() => setColor('orange')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'orange'}}>Orange</button>
        <button onClick={() => setColor('purple')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'purple'}}>Purple</button>
        <button onClick={() => setColor('black')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'black'}}>Black</button>
        <button onClick={() => setColor('yellowgreen')} className='px-3 py-2 rounded-3xl' style={{backgroundColor : 'yellowgreen'}}>Yellow Green</button>
        </div>
      </div>
  );
}

export default App;
