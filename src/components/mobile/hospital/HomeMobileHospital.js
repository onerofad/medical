import NavbarMobile from '../NavbarMobile'
import FooterMobile from '../FooterMobile'
import CommissionMobile from './CommissionMobile'
import TransferHistoryMobile from './TransferHistoryMobile'
import RecipientRequestHistoryMobile from './RecipientRequestHistoryMobile'
import ScheduledDonorRequestMobile from './ScheduledDonorRequestMobile'
import CompleteTransfusionMobile from './CompleteTransfusionMobile'


const HomeMobileHospital = () => {
    return(
        <>
        <NavbarMobile />
        <CommissionMobile />
        <TransferHistoryMobile />
        <RecipientRequestHistoryMobile />
        <ScheduledDonorRequestMobile />
        <CompleteTransfusionMobile />
        <FooterMobile />
        </>
    )
}
export default HomeMobileHospital