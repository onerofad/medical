import { Card, CardContent, Grid, GridColumn, Header, HeaderContent, HeaderSubheader, Image, Segment } from "semantic-ui-react"
import blood_img1 from '../../assets/images/blood_donate1.png'
import blood_img2 from '../../assets/images/blood_donate2.png'
import blood_img3 from '../../assets/images/blood_donate3.png'

const BloodDonation = () => {
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
                Blood Donation Process
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
                Donating blood is a simple, life-saving act that takes about 45 minutes to 1 hour (including registration and recovery). Here’s what to expect:
            </Header>
            <Grid columns={3} style={{marginTop: 40}}>
                <GridColumn>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_img1} />
                    <Header 
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        <HeaderContent>Book appointment</HeaderContent>
                        <HeaderSubheader
                             style={{
                            color: '#333',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px',

                        }}
                        >
                            Start by choosing a convenient date, time, and convenient donation center. 

                        </HeaderSubheader>
                    </Header>
                    </Segment>
                </GridColumn>
                <GridColumn>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_img2} />
                    <Header
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        <HeaderContent>Health check</HeaderContent>
                        <HeaderSubheader
                             style={{
                            color: '#333',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
                            Before donating, a brief screening of your vitals, and hemoglobin levels.
                        </HeaderSubheader>
                    </Header>
                    </Segment>
                </GridColumn>
                <GridColumn>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_img3} />
                    <Header
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        <HeaderContent>Blood Donation</HeaderContent>
                        <HeaderSubheader
                             style={{
                            color: '#333',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
A                           sterile needle collects about 1 pint of blood from your arm in just 8-10 minutes.
                        </HeaderSubheader>
                    </Header>
                    </Segment>
                </GridColumn>
            </Grid>

        </div>
    )
}
export default BloodDonation
