import Navbar from '../NavBar'
import DonorNear from './DonorNear'
import Map from './Map'
import NotificationRecipient from './NotificationRecipient'
import ResultNear from './ResultNear'
import Footer from '../Footer'

const HomeRecipient = () => {
    return(
        <>        
            <Navbar link_value={"Recipient"} />
            <DonorNear />
            <Map />
            <ResultNear />
            <NotificationRecipient />
            <Footer />

        </>
    )
}
export default HomeRecipient