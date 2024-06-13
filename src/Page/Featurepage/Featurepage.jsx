import { Footer } from "../../Components/Footer/Footer"
import { Home2 } from "../../Components/Home2/Home2"
import { Navbar } from "../../Components/Navbar/Navbar"
import { Start } from "../../Components/Start/Start"
import { Team } from "../../Components/Team/Team"
import { Trust } from "../../Components/Trust/Trust"





export const Featurepage = () => {
    return(
        <>
        <div>
            <Navbar/>
            <Home2/>
            <Trust/>
            <Team/>
            <Start/>
            <Footer/>
        </div>
        </>
    )
}