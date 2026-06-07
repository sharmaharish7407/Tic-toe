import { createContext, useState } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

export const Theme = createContext()

function Root() {
  const [theme, setTheme] = useState("light")

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <App />
    </Theme.Provider>
  )
}

createRoot(document.getElementById("root")).render(<Root />)