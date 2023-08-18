import DisplayLanguage from "./assets/DisplayLanguage"
import LanguageContext from "./assets/LanguageContext"
import { useState } from "react"

function App() {
  const [language,setLanguage] = useState("it")
  const handleLanguageChange =((e)=>{
      const data = e.target.value
      setLanguage(data)
    })
  return (
    <div>
    <select onChange={handleLanguageChange}>
      <option value="it">ITALIANO</option>
      <option value="en">ENGLISH</option>
    </select>
    <LanguageContext.Provider value={language}>
        <DisplayLanguage/>
    </LanguageContext.Provider>
  </div>


  )
}

export default App