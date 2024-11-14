// Js for creating basic own react app
function customRender(reactElement, container){    // this is what we created for render the element
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);  // setting href
    domElement.setAttribute('target', reactElement.props.target);  // setting targert
    container.appendChild(domElement);
    */

    // The upper code is fine but it is only for below object, if we has different props then it not gonna work
    // so we give somethign general
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children'){
            continue;
        } else{
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {    // we want to give element like this
    type: 'a',
    props: {
        href: 'https://google.com',
        target: "_blank"
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')   // this is what we targeted like react
// just like our react we make custom render
// in react we has, 
/* 

.render(
  <React.StrictMode>
  <App />
</React.StrictMode>
)

*/

// own custom render
customRender( reactElement, mainContainer)