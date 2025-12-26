import NavbarMobile from '../NavbarMobile'
import FooterMobile from '../FooterMobile'
import CommissionMobile from './CommissionMobile'
import TransferHistoryMobile from './TransferHistoryMobile'
import RecipientRequestHistoryMobile from './RecipientRequestHistoryMobile'


const HomeMobileHospital = () => {
    return(
        <>
        <NavbarMobile />
        <CommissionMobile />
        <TransferHistoryMobile />
        <RecipientRequestHistoryMobile />
        <FooterMobile />
        </>
    )
}
export default HomeMobileHospital