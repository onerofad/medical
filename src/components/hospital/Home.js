import NavBar from '../NavBar'
import Commission from './Commission'
import TransferHistory from './TransferHistory'
import RecipientRequest from './RecipientRequest'
import ScheduledDonorRequest from './ScheduledDonorRequest'
import CompleteTransfusion from './CompleteTransfusion'
import Footer from '../Footer'


const HomeHospital = () => {
    return(
        <>
            <NavBar link_value={"Hospital"} />
            <Commission />
            <TransferHistory />
            <RecipientRequest />
            <ScheduledDonorRequest />
            <CompleteTransfusion />
            <Footer />
        </>
    )
}
export default HomeHospital