import NavBar from "../NavBar"
import Footer from "../Footer"
import BloodCompatibility from "./BloodCompatibility"
import DonationCenter from "./DonationCenter"
import FindDonation from "./FindDonation"
import Clinics from "./Clinics"
import ScheduleCalendar from "./ScheduleCalendar"
import UrgentRequest from "./UrgentRequest"
import Notifications from "./Notifications"
import TotalDonations from "./TotalDonation"
import DurationHistory from "./DurationHistory"

const HomeDonor = () => {
    return(
        <>
        <NavBar link_value={"Donor"} />
        <BloodCompatibility />
        <DonationCenter />
        <FindDonation />
        <Clinics />
        <ScheduleCalendar />
        <UrgentRequest />
        <Notifications />
        <DurationHistory />
        <TotalDonations />
        <Footer />
        </>
    )
}
export default HomeDonor