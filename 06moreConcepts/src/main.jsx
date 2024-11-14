import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//This belown createRoot method creates DOM like structure behind the scene, it compares main DOM and its own DOM and upgrade the varibales of main DOM according to our own DOM 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//Broswer creates DOM like structor but it is different than this one, browser do not change its DOM in perticuler place, it change the whole DOM, we called it Page Reloading

//Article about React Fibre 

//But when the response come from backed that time one respone come and after two second another response come,and after 1 second one more response come
// So is there any way to wait some time and upgrade the last response we get from backend
// So, react team come on to the topic of fibre after two years of research on this topic

// The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures(because of imidiate changing multiple time when got response it is decrease the suitability for areas like animation, layout, and gestures). Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.(sara tree cover karne ki jarurat nai hai java jarurat hai vaha upgrade hoga)

// Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

//reconciliation
//The algorithm React uses to diffensiate one tree with another tree to determine which parts need to be changed is called reconciliation.

//update
//A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

//Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application(by .render), a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
// (selectivly part updrade kare and behind the scene su thay evu keva mage upper no pasage but read it)

// The key points are
//1.Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.(kuch component aise hote hai jisko comapre karne ka koi sense hi nai hai to react usko compare nai karta compeletly replace kar deta hai)
//2.Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."


// The key points about what fibre do??
// 1. In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
// 2.Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
// 3.A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.
// That is what react fiber do behind the scene


//What we can do by using fiber
// 1.pause work and come back to it later.
// 2.assign priority to different types of work.
// 3.reuse previously completed work.
// 4.abort work if it's no longer needed.

// url of Article: https://github.com/acdlite/react-fiber-architecture

                 
