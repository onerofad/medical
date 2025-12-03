import { Grid, GridColumn, Header, Image } from "semantic-ui-react"
import center1 from '../../../assets/images/center1.jpg'
import center2 from '../../../assets/images/center2.jpg'
import center3 from '../../../assets/images/center3.jpg'
import center4 from '../../../assets/images/center4.jpg'
import center5 from '../../../assets/images/center5.jpg'
import center6 from '../../../assets/images/center6.jpg'

import '../../../css/style.css'


const DonationCenterMobile = () => {
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
                Donation center
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
                Explore some of the donation centers through photos right on the app! Find the nearest location, check out the facilities, and schedule your lifesaving appointment with ease.
            </Header>
           <div style={{marginTop: 40}}>
                <p>
                    <Image centered size="small" style={{borderRadius: 15, height: 290,}}  src={center1} />
                    <Header 
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        Alheri Hospital
                    </Header>
                </p>
                {/*<GridColumn mobile={16}>
                    <Image centered style={{borderRadius: 15, height: 290}} fluid src={center2} />
                    <Header
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        Valley Oak Hospital
                    </Header>
                </GridColumn>
                <GridColumn mobile={16}>
                    <Image centered style={{borderRadius: 15, height: 290}} fluid src={center3} />
                    <Header
                         style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                         Solid Rock Hospital
                    </Header>
                </GridColumn>
                <GridColumn mobile={16}>
                    <Image centered style={{borderRadius: 15, height: 290}} fluid src={center4} />
                    <Header 
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        Mayo Clinic
                    </Header>
                </GridColumn>
                <GridColumn mobile={16}>
                    <Image centered style={{borderRadius: 15, height: 290}} fluid src={center5} />
                    <Header
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        Free Hand  Clinic
                    </Header>
                </GridColumn>
                <GridColumn mobile={16}>
                    <Image centered style={{borderRadius: 15, height: 290}} fluid src={center6} />
                    <Header
                         style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                         Gifted Hand  Clinic
                    </Header>
                </GridColumn>*/}
            </div>
        </div>
    )
}
export default DonationCenterMobile
