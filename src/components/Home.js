import WallPaper from "./WallPaper"
import NavBar from "./NavBar"
import About from "./About"
import Achievement from "./Achievement"
import BloodDonation from "./BloodDonation"
import EmergencyBlood from "./EmergencyBlood"
import WhatPeopleSay from "./WhatPeopleSay"
import LatestBlog from "./LatestBlog"
import BloodDrive from "./BloodDrive"
import BloodDrive2 from "./BloodDrive2"
import FrequentQuestion from "./FrequentQuestion"
import Mission from "./Mission"
import Footer from "./Footer"

const Home = ({mobile}) => {
    if(mobile){
        return(
            <div>
                Coming Soon
            </div>
        )

    }else{
    return(
        <>
        <NavBar />
        <WallPaper />
        <About />
        <Achievement />
        <BloodDonation />
        <EmergencyBlood />
        <WhatPeopleSay />
        <LatestBlog />
        <BloodDrive />
        <BloodDrive2 />
        <FrequentQuestion />
        <Mission />
        <Footer />
        </>
    )
    }
    
}
export default Home