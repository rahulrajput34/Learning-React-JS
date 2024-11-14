import { useCallback, useEffect, useState , useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  // Your JS start here
  // ++++++++++++++++++++++++++  All the state which gonna changee +++++++++++++++++++++++++++++++++
  const [lenght, setLenght] = useState(8);  // default value is 8

  // In below two we gave false there, because of we have only two option checked || unchecked
  // for box checked we gonna give true and for unchecked we gonna give false
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // For password
  const [password, setPassword] = useState("");

  // ref hook
  // kisi bhi chiz ka hame jab reference lena hota hai tab ham useRef hook use karte hai
  // we passed null over as a default value because we do not have default value
  // we do not acctualy need this one but when we copy there is something happen in UI , we can feel that we copy that is why we use this perticuler hook
  // sirf good UI effect dene we usr useRef hook here
  const passwordRef = useRef(null);

  // ++++++++++++++++++++++++++++++++++++++   For copy the password +++++++++++++++++++++++++++++++
  // Here we also used useCallback hook because it is good practice to use it
  // but it not mean every time we declare function we need to use it
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()   //   this is for give effect of select when we copy the password  
    passwordRef.current?.setSelectionRange(0, 30)  // this is how we give range for selection
    //we passed 0 to 30 it means it selcet 0 to 30 alphabets only
    // below one is used for copy the password
    window.navigator.clipboard.writeText(password);  //we can pass window over here because the react ultimately execute where there is an access of window object
    // in nextJS , we not have access of it because it runs in servers(server side rendering)
  }, [password])

  // +++++++++++++++++++++++++++++++++        useCallback hook         +++++++++++++++++++++++++++++++++
  //In React, functions are recreated on every render. This means that even if the logic inside the function not changed, the function itself is considered new by Reacton every render. When these functions are passed as props to child components, it can cause unnecessary re-renders of those child components. useCallback helps prevent this by returning a memoized version of the callback that only changes if one of the dependencies has changed.
  // so, if any dependencies has changed that time only our function change.
  // That is why we use this hook to make optimize the code
  // it takes function and dependencies

  //+++++++++++++++++++++++++++++          password generator function          +++++++++++++++++++++++++
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "~!@#$%^&*_+)({}";
    }

    for (let index = 0; index < lenght; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed]);  // in dependencies, we give only those things which is depends on it (even it is not mandaroty to give all the dependencies)

// ++++++++  Difference between useCallback dependencies array and useEffect dependencies array ++++++++ 
//in useCallback hook, jayre method run thay tyare optimize karo ena mata pass kariye chiye dependencies array ne
//in useEffect hook, agar given dependencies ma koi pan change thay to given function run kari do ena mate pass kariye ahi
// Also, it is not mandatory to use this callback hook
// we use just only for optimize code

// ++++++++++++++++++++++++++++++     One more important note     +++++++++++++++++++++++++++++++++++++++
// passwordGenerator()   -- this is how we can not call because it gives the error of too many rerenders react limits


  // to call it we use useEffect hook which also take one callback and dependencies array(we pass kis kis per depend karega)
  //the usecase of this hook is 
  useEffect(() => {passwordGenerator()}, [lenght, numberAllowed, charAllowed, passwordGenerator ])

  // +++++++++++++++++++++++++++    Summery what we write in JSX     +++++++++++++++++++++++++++++++++
  // in jsx,
  /*
  1. we crearted one h1 and div, inside the div we passed input
  2. input take password as a value
  3. 
  4. then we created another input and in this we passed type range because we want it
  5. we also provide min and max value
  6. we provide value as our lenght and we also give onchange event so that when it change that time it has new lenght value inside it
  7. then we created two inputs and give checkbox type to add numbers and characters 
  8. then we passed default value as numberAllowed which is false and charAllowed which is true
  9. then we provide the onchange event inside it to change the state when we clicked
  10. in onchange  we passed prev => !prev because we wants wheen we click on the checkbox that time the value off numberAllowed or charAllowed become true and it can consist the values number or charactor inside it(every time we click it change true to false or if there is false value then it convets to true)
   */
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-4 my-8 text-orange-500 bg-gray-700">
        {/* input and copy button */}
        <h1 className="text-black text-center my-2">Password generator</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef} 
          />
          {/* ++++++++++++++++++++++++++++  about copy password +++++++++++++++++++++++++++++++++ */}
          {/* We give all the things but upper one input and below one button is different elemenet so how we can make sure when we click on the button that time the password only would selected, not other text present would be selected. That is what we did in function copyPasswordToClipboard function and we used  passwordRef hook to give better visibility*/}
          {/* Question arrives how to use this hook then */}
          {/* To use this hook we passed reference to the input  ref={passwordRef} then we give onclick to the button and all the functionality to it via a  function */}
          {/* This is how we use this useRef hook */}
          <button onClick={copyPasswordToClipboard} className=" outline-none bg-blue-700 text-black px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          {/* input what lenght we need and its lable */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className=" cursor-pointer"
              onChange={(e) => setLenght(e.target.value)}   
            />  {/* we passed e.target.value --> it for change the value when we want different lenght password  */}
            <label> lenght: {lenght}</label>
          </div>
          {/* input of checkbox for number and its lable */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />   {/* we passed prev => !prev means it changes the value if true then make it false if false then make it true  */}
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div>
            {/* input of checkbox for charactors and its lable */}
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((previousValue) => !previousValue);
                }}
              />
               {/* we passed previousValue => !previousValue means it changes the value if true then make it false if false then make it true.  we can pass any varibale name in place of previourValue */}
              <label htmlFor="charInput"> Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
