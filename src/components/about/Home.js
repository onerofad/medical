import NavBar from "../NavBar"
import Footer from "../Footer"
import WallPaperAbout from "./WallPaper"
import MissionAbout from "./Mission"
import Partners from "./Partners"
import BloodDonationAbout from "./BloodDonationAbout"
import Transparency from "./Transparency"

const HomeAbout = () => {
    return(
        <>
        <NavBar link_value={"About"} />
        <WallPaperAbout />
        <MissionAbout />
        <Partners />
        <BloodDonationAbout />
        <Transparency />
        <Footer />
        </>
    )
}
export default HomeAbout