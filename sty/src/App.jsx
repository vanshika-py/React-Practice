import Header from "./component/Header";


const App = () => {
  return (
    <div>
      <Header/>
      <div className="max-w-[55rem] m-auto text-center py-[6rem]">
        <h1 className="text-6xl font-serif font-bold">The Best way to <span className="bg-orange-300 rounded-2xl px-2">Review</span>Creative Assets</h1>
      </div>
      <p className="text-center m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque ducimus inventore sapiente quia. Eius laborum perspiciatis nesciunt nisi repudiandae!</p>
      
    </div>
  )
}

export default App
