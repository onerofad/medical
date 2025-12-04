import { Grid, GridColumn, Header, Image, Search } from "semantic-ui-react"
import mapImage from '../../../assets/images/map.png'

import '../../../css/style.css'


const FindDonationMobile = () => {
    return(
        <div style={{margin: 0, padding: '50px 0px', background: '#F8F9FA'}}>
            <Header
                 style={{
                    color: '#333',
                    textAlign: 'center',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal'
                }}
            >
                 Find Donation center
            </Header>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '30px',
                    padding: '0px 20px'
                }}
            >
                Locate the nearest blood donation center with just a few clicks. Our easy-to-use map and search tool help you schedule an appointment and join the lifesaving mission today.
            </Header>
            <div style={{margin: 0, padding: '0px 0px', background: '#F8F9FA'}}>
                <p style={{textAlign: "center"}}>
                    <Search  size="big" placeholder="Use Location" style={{margin: '20px auto', textAlign: 'center'}} />
                    <Image size="medium" centered style={{marginTop: 30}} src={mapImage} />
                </p>
            </div>
        </div>     
    )
}
export default FindDonationMobile
