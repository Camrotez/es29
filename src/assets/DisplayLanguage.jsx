import { useContext } from "react"
import LanguageContext from "./LanguageContext"
function DisplayLanguage(){
  const lang = useContext(LanguageContext)
    return (
        <div>
          <h1>{lang}</h1>
        </div>
      )
    
}
export default DisplayLanguage