import { Grid, GridColumn, Header, Image, Segment } from "semantic-ui-react"
import fav1 from '../assets/images/healthicons_inpatient.svg'
import fav2 from '../assets/images/game-icons_archive-register.svg'
import fav3 from '../assets/images/mdi_blood-bag.svg'
import fav4 from '../assets/images/icon-park-solid_hospital-two.svg'

const Achievement = () => {
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
                Achievement
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
                Every drop of blood donated through our platform has helped rewrite someone’s story. Here’s the impact you made possible:
            </Header>

            <Segment raised style={{
                marginTop: '60px',
                borderRadius: '30px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#D10000',
                background: '#F7F2F3'
            }}>
                <Grid divided columns={4}>
                    <GridColumn>
                        <Image centered src={fav1} />
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Patients Helped
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            20+
                        </Header>
                    </GridColumn>
                     <GridColumn>
                        <Image centered src={fav2} />
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Registered Donors
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            10+
                        </Header>
                    </GridColumn> 
                    <GridColumn>
                        <Image centered src={fav3} />
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Pints Collected
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            20+
                        </Header>
                    </GridColumn> 
                    <GridColumn>
                        <Image centered src={fav4} />
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Hospitals
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            5+
                        </Header>
                    </GridColumn>
                </Grid>
            </Segment>
        </div>
    )
}
export default Achievement