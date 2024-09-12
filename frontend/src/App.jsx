function App() {

  return (
    <>
      <h1>Welcome to Campaign Kit!</h1>
      <ul>
        <li className="flex w-full h-12 bg-orange-800 text-white gap-4">
          <a href="/campaigns">Campaigns</a>
          <a href="/campaigns/new">New Campaign</a>
          <a href="/characters" >Characters</a>
          <a href="/characters/new" >New Character</a>
        </li>
      </ul>
    </>
  )
}

export default App
