import { Grid, GridColumn, Header, Segment } from "semantic-ui-react"

const BloodDonationAboutMobile = () => {
    return(
        <div style={{margin: 0, padding: '50px 20px', background: '#F8F9FA'}}>
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
                Why Blood Donation Matters
            </Header>
                <Grid stackable columns={3}>
                    <GridColumn>
                        <Segment raised style={{
                            marginTop: '60px',
                            borderRadius: '30px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: '#D10000',
                            background: '#FFF',
                            padding: '50px 0px'
                        }}>
                              <Header
                            style={{
                                color: '#D10000',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            2 Sec
                        </Header>
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px',
                                padding: '0px 30px'
                            }}
                        >
                            Every 2 seconds someone needs blood
                        </Header>
                        </Segment>
                    </GridColumn>
                    <GridColumn>
                        <Segment raised style={{
                            marginTop: '60px',
                            borderRadius: '30px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: '#D10000',
                            background: '#FFF',
                            padding: '50px 0px'
                        }}>
                              <Header
                            style={{
                                color: '#D10000',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            38%
                        </Header>
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px',
                                padding: '0px 30px'
                            }}
                        >
                           Only 38% 0f the population is eligible to donate blood
                        </Header>
                        </Segment>
                    </GridColumn>
                    <GridColumn>
                        <Segment raised style={{
                            marginTop: '60px',
                            borderRadius: '30px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: '#D10000',
                            background: '#FFF',
                            padding: '50px 0px'
                        }}>
                              <Header
                            style={{
                                color: '#D10000',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            3 lives
                        </Header>
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px',
                                padding: '0px 30px'
                            }}
                        >
                            A single  donation can save up to 3 lives                        
                        </Header>
                        </Segment>
                    </GridColumn>
                   
                </Grid>
        </div>
    )
}
export default BloodDonationAboutMobile