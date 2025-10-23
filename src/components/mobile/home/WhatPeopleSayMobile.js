import { Grid, GridColumn, GridRow, Header, Segment, Image } from "semantic-ui-react"
import people1 from '../../../assets/images/people1.svg'
import people2 from '../../../assets/images/people2.svg'
import people3 from '../../../assets/images/people3.svg'
import people4 from '../../../assets/images/people4.svg'

const WhatPeopleSayMobile = () => {
    return(
        <div style={{margin: 0, padding: '100px 20px', background: '#F8F9FA'}}>
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
                What People Say About Us            
            </Header>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '22px',
                }}
            >
                    At DonorConnect, we take pride in creating a positive and impactful experience for every donor.Here’s what some of our amazing user have to say:            
            </Header>
            <Grid style={{marginTop: 40}}>
                    <GridColumn width={16}>
                        <Segment raised 
                            style={{
                               borderRadius: '30px',
                               borderWidth: '1px',
                               borderStyle: 'solid',
                               borderColor: '#D10000',
                               background: '#FFF'
                            }}
                        >
                            <Grid columns={2}>
                                <GridColumn width={3}>
                                    <Image fluid src={people1} />
                                </GridColumn>
                                <GridColumn width={13}>
                                    <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '36px'
                                        }}
                                    >
                                        David  Peter
                                     </Header>
                                     <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '26px'
                                        }}
                                     >
                                        This app made donating  so easy! I could schedule my appointment 
                                        in minutes, find the nearest donation center, and even track my donation history . it a big lifesaver!
                                     </Header>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                    <GridColumn width={16}>
                        <Segment raised 
                            style={{
                               borderRadius: '30px',
                               borderWidth: '1px',
                               borderStyle: 'solid',
                               borderColor: '#D10000',
                               background: '#FFF'
                            }}
                        >
                            <Grid columns={2}>
                                <GridColumn width={3}>
                                    <Image fluid src={people2} />
                                </GridColumn>
                                <GridColumn width={13}>
                                    <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '36px'
                                        }}
                                    >
                                        David  Peter
                                     </Header>
                                     <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '26px'
                                        }}
                                     >
                                        Thanks to the world donation app, I found donors when I needed it most. The kindness of strangers who donated gave me second chance to life. Donors you all are heroes  </Header>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
               
                    <GridColumn width={16}>
                        <Segment raised 
                            style={{
                               borderRadius: '30px',
                               borderWidth: '1px',
                               borderStyle: 'solid',
                               borderColor: '#D10000',
                               background: '#FFF'
                            }}
                        >
                            <Grid columns={2}>
                                <GridColumn width={3}>
                                    <Image fluid src={people3} />
                                </GridColumn>
                                <GridColumn width={13}>
                                    <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '36px'
                                        }}
                                    >
                                        David  Peter
                                     </Header>
                                     <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '26px'
                                        }}
                                     >
                                       I love how user- friendly and intuitive the app is .The reminders for
                                        upcoming appointments and urgent donation requests keep me 
                                        engaged and motivated to donate regular. 
                                    </Header>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                    <GridColumn width={16}>
                        <Segment raised 
                            style={{
                               borderRadius: '30px',
                               borderWidth: '1px',
                               borderStyle: 'solid',
                               borderColor: '#D10000',
                               background: '#FFF'
                            }}
                        >
                            <Grid columns={2}>
                                <GridColumn width={3}>
                                    <Image fluid src={people4} />
                                </GridColumn>
                                <GridColumn width={13}>
                                    <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '36px'
                                        }}
                                    >
                                        David  Peter
                                     </Header>
                                     <Header
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '26px'
                                        }}
                                     >
                                        The app streamlined the entire process from the booking to post 
                                        donation updates. it clear, convenient , neat, easy to use and truly
                                        designed with user in mind. 
                                    </Header>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
            </Grid>
        </div>
    )
}
export default WhatPeopleSayMobile