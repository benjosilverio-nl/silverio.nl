import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-row w-full h-screen items-center justify-center">
        <div className="flex flex-col">
          <img alt="Silverio.NL" className="mx-auto w-auto" src="/logo.svg" />
        </div>

        <div className="flex flex-row justify-center items-center h-full bg-gray-950">
          <div className="w-2/3 h-fit">
            <h1 className="text-left text-white font-bold text-5xl pb-8">We're coming soon!</h1>
            <p className="text-left pb-5 text-gray-300 font-medium">Your visit means a lot — Silverio.nl is being rebuilt from the ground up into a space that reflects the work, ideas, and projects I’m proud to share. I’m taking the time to craft something thoughtful, fast, and genuinely useful, rather than rushing out another placeholder.</p>
            <p className="text-left text-gray-300 font-medium">Behind the scenes, I’m shaping a home for the things I build, explore, and experiment with. Whether you’re here for tech, creativity, or curiosity, the new site will offer a clearer look into what I do and why I do it. Stay tuned — the good stuff is on the way.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
