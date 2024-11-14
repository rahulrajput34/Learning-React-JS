import React from 'react'


// function Card(porops) {    this is where we give props.username
// We can also pass some default value like click please I passed over here, if in case anthing you forgat to pass the value of button in App  directory that time it gonna use defalut value
function Card({username, buttonText = "Click Please"}) {   // we caan also directly pass username over here
    // In this props, what we gave to card in App directory is gonna store over here
    // console.log(porops);
    // so we can give 
    // let name  = porops.username;
    // console.log(name);
    console.log(username);
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {buttonText} →
          </button>
        </div>
      </div>
    )
}

export default Card
