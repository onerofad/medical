import NavBarMobile from "../NavbarMobile"
import BloodCompatibilityMobile from './BloodCompatibilityMobile'
import DonationCenterMobile from './DonationCenterMobile'
import FindDonationMobile from "./FindDonationMobile"
import FooterMobile from '../FooterMobile'
import ClinicMobile from "./ClinicMobile"
import ScheduleCalendarMobile from "./ScheduleCalendarMobile"
import UrgentRequestMobile from "./UrgentRequestMobile"
import NotificationMobile from "./NotificationMobile"

const HomeMobileDonor = () => {
    return(
        <>
        <NavBarMobile />
        <BloodCompatibilityMobile />
        <DonationCenterMobile />
        <FindDonationMobile />
        <ClinicMobile />
        <ScheduleCalendarMobile />
        <UrgentRequestMobile />
        <NotificationMobile />
        <FooterMobile />
        </>

    )
}
export default HomeMobileDonor