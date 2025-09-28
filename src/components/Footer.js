import { Grid, GridColumn, GridRow, Header, Icon, Image } from "semantic-ui-react"
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'

const Footer = () => {
    return(
        <div style={{margin: 0, padding: '100px 100px', background: '#D10000'}}>
            <Grid stackable>
                    <GridColumn width={4}>
                        <Header
                            style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        
                        >
                            DonorConnect
                        </Header>
                        <Header
                            style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            At  DonorConnect, we believe every donation makes a difference. Our mission is to simplify connect donors to recipients, and save lives through innovation and community
                        </Header>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        >
                            Quick Links
                        </Header>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                        >
                            Home
                        </Header>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                        >
                            Donor
                        </Header>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                        >
                            Recipient
                        </Header>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                        >
                            Hospital
                        </Header>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                        >
                            Blogs
                        </Header>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        >
                            License
                        </Header>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                        >
                            Terms and Condition
                        </Header>
                          <Header
                          style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                          >
                            Data Privacy and Compliance                        
                          </Header>
                          <Header
                          style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize:'16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                          >
                            Privacy Policy
                          </Header>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Header
                        style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        >
                            Social Media
                        </Header>
                        <Grid stackable columns={3}>
                            <GridColumn>
                                <Icon size="big" color='red'  circular inverted name="facebook" />
                            </GridColumn>
                            <GridColumn>
                                 <Icon size="big" color='red' circular inverted name="twitter" />
                            </GridColumn>
                            <GridColumn>
                                <Icon size="big" color='red' circular inverted name="instagram" />
                            </GridColumn>

                        </Grid>

                    </GridColumn>
            </Grid>
        </div>
    )
}
export default Footer