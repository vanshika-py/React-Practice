import React from "react"


function App() {

  return (
     <>
     <div className="py-5 bg-blue-200">
     <header className="max-w-[70rem] m-auto flex justify-between = text-xl text-black/80 items-center" >
       <h1><span className="font-extrabold text-[tomato]" >B</span>rand </h1>

       <div className="flex gap-20">
       <a href="Features">Features</a>
       <a href="Usecases">UseCases</a>
       <a href="Integration">Integration</a>
       <a href="Portofolio">Portfolio</a>
       </div>

       <button className="bg-orange-300 rounded-lg px-4 py-2">
        SignIn
        </button>
      </header>
      </div>
    </>
  )
}

export default App

