import NavBarMobile from "../NavbarMobile"
import FooterMobile from '../FooterMobile'
import DonorNearMobile from './DonorNearMobile'
import MapMobile from './MapMobile'
import ResultNearMobile from './ResultNearMobile'
import NotificationRecipientMobile from './NotificationRecipientMobile'


const HomeMobileRecipient = () => {
    return(
        <>
        <NavBarMobile />
        <DonorNearMobile />
        {/*<MapMobile />
        <ResultNearMobile />*/}
        <NotificationRecipientMobile />
        <FooterMobile />
        </>

    )
}
export default HomeMobileRecipient