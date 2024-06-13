import { useState } from 'react'

import styles from "./App.module.css"
import { HomePage } from './Page/Homepage/Homepage'
import { Usecasepage } from './Page/Usecasepage/Usecasepage'
import { Featurepage } from './Page/Featurepage/Featurepage'
import { Partnerpage } from './Page/Partnerpage/Partnerpage'

function App() {
  const [count, setCount] = useState(0)

  let Component

  switch (window.location.pathname) {
    case "/":
    case "/home":
      Component = HomePage
      break
    
    case "/usecases":
      Component = Usecasepage
      break

    case "/features":
      Component = Featurepage
      break

    case "/partner":
      Component = Partnerpage
      break

}

return (
  <div className={styles.App}>
    <Component/>
  </div>
)
}

export default App
