import { Card, CardContent, Grid, GridColumn, Header, HeaderContent, HeaderSubheader, Image, Segment } from "semantic-ui-react"
import center1 from '../../assets/images/center1.jpg'
import center2 from '../../assets/images/center2.jpg'
import center3 from '../../assets/images/center3.jpg'
import center4 from '../../assets/images/center4.jpg'
import center5 from '../../assets/images/center5.jpg'
import center6 from '../../assets/images/center6.jpg'

import '../../css/style.css'


const DonationCenter = () => {
    return(
            <div style={{margin: 0, padding: '50px 100px', background: '#F8F9FA'}}>
                <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    fontFamily: 'Inter',
                    fontSize: '32px',
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
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '30px',
                    padding: '0px 240px'
                }}
            >
                Explore some of the donation centers through photos right on the app! Find the nearest location, check out the facilities, and schedule your lifesaving appointment with ease.
            </Header>
            <Grid columns={3} style={{marginTop: 40}}>
                <GridColumn>
                    <Image style={{borderRadius: 15, height: 290}} fluid src={center1} />
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
                </GridColumn>
                <GridColumn>
                    <Image style={{borderRadius: 15, height: 290}} fluid src={center2} />
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
                <GridColumn>
                    <Image style={{borderRadius: 15, height: 290}} fluid src={center3} />
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
            </Grid>
            <Grid columns={3} style={{marginTop: 40}}>
                <GridColumn>
                    <Image style={{borderRadius: 15, height: 290}} fluid src={center4} />
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
                <GridColumn>
                    <Image style={{borderRadius: 15, height: 290}} fluid src={center5} />
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
                <GridColumn>
                    <Image style={{borderRadius: 15, height: 290}} fluid src={center6} />
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
                </GridColumn>
            </Grid>


        </div>
    )
}
export default DonationCenter
