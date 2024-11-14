import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componenets/Card'

function App() {
  const [count, setCount] = useState(0)

  let object  = {
    username: "Rahul",
    Passsword: "1234"
  }

  let arr = [1, 2, 4, 3]
  //here we write className in html instead of class beacue jsx has its own rules as well but is almost smiler as html
  // One more rule of jsx is we must give img in self closing tag
  // below we give in the fragment is called componenet which we got from devui.io website
  // How we make this component reuasble
  // so we created aother componenet(function) and inmport it here
  // Now we can use Card myltuiple time
  // But the name is same in all the cards
  // that is where the topic of 'porops' arrives

  // We can pass object and username like below
  // it gonna store  in the props of the Card component(Function))
  // we can also pass Array over here but thing is that we can not declare all the things over here we have to pass reference over here because as we learn in the leacture of creating over own dom , everthing gonna parse into object and object not take any operation itself it takes only references if we want to give
  // second thing is that we must give inside the curley brackets as we learn it is jsx.
  
  return (
    <>
        <Card username = "Rahul"  obj = {object} buttonText= "Click ME"/>
        <Card username= "Urvesh"  buttonText= "Click You"/>
        <Card username= "Roli" buttonText= "Click US"/>
    </>
  )
}

export default App
