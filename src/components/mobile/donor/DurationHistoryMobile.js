import { Grid, GridColumn, Header, Segment } from "semantic-ui-react"

const DurationHistoryMobile = () => {
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
                Duration History
            </Header>
            <p>
            <Grid stackable columns={3}>
                <GridColumn style={{}}>
                    <Segment raised style={{height: 320, backgroundColor: '#fff', borderRadius: 15, padding: 20, marginTop: 40}}>
                        <Grid>
                            <GridColumn>
                                <Segment style={{backgroundColor: '#D10000', width: '90%', borderRadius: 15}}>
                                    <Grid columns={2}>
                                        <GridColumn width={12}>
                                            <Header textAlign="left" inverted color="white">Total Donation</Header>
                                        </GridColumn>
                                        <GridColumn width={4}>
                                            <Header inverted color="white" textAlign="right">5</Header>
                                        </GridColumn>
                                    </Grid>
                                </Segment>
                                <p style={{
                                    fontWeight: 400, 
                                    fontStyle: 'normal',
                                    fontFamily: 'Inter',
                                    fontSize: 18
                                }}>
                                    Thank you for your commitment!
                                </p>
                                <p style={{
                                    fontWeight: 700, 
                                    fontStyle: 'bold',
                                    fontFamily: 'Inter',
                                    fontSize: 24
                                }}>
                                    Milestone
                                </p>
                                <Grid columns={4}>
                                    <GridColumn>
                                        <Segment size="small" style={{width: 20, height: 20, backgroundColor: '#D10000'}} circular>
                                            <Header inverted color="white">5</Header>
                                        </Segment>
                                    </GridColumn>
                                    <GridColumn>
                                        <Segment size="small" style={{width: 20, height: 20, backgroundColor: '#F7F2F3'}} circular>
                                            <Header color="black">10</Header>
                                        </Segment>                                    </GridColumn>
                                    <GridColumn>
                                        <Segment size="small" style={{width: 20, height: 20, backgroundColor: '#F7F2F3'}} circular>
                                            <Header color="black">15</Header>
                                        </Segment>                                    </GridColumn>
                                    <GridColumn>
                                        <Segment size="small" style={{width: 20, height: 20, backgroundColor: '#F7F2F3'}} circular>
                                            <Header color="black">20</Header>
                                        </Segment>                                    </GridColumn>
                                </Grid>
                            </GridColumn>

                        </Grid>
                    </Segment>

                </GridColumn>
                
                 <GridColumn style={{}}>
                    <Segment raised style={{height: 320, backgroundColor: '#F7F2F3', borderRadius: 15, padding: 20, marginTop: 40}}>
                        <Grid>
                            <GridColumn>
                                <Segment style={{borderWidth: '2px', borderStyle: 'solid', borderColor: '#D10000', backgroundColor: '#FFFFFF', width: '90%', borderRadius: 15}}>
                                    <Grid columns={1}>
                                        <GridColumn>
                                            <Header textAlign="left" color="black">Donation Stats</Header>
                                        </GridColumn>
                                    </Grid>
                                </Segment>
                                <p style={{
                                    fontWeight: 400, 
                                    fontStyle: 'normal',
                                    fontFamily: 'Inter',
                                    fontSize: 18
                                }}>
                                    5.4 Liters of blood donated
                                </p>
                                <p style={{
                                    fontWeight: 400, 
                                    fontStyle: 'normal',
                                    fontFamily: 'Inter',
                                    fontSize: 18
                                }}>
                                    8 donations in the past year
                                </p>
                                <p style={{
                                    fontWeight: 400, 
                                    fontStyle: 'normal',
                                    fontFamily: 'Inter',
                                    fontSize: 18
                                }}>
                                    120 loyalty points earned
                                </p>
                            </GridColumn>
                        </Grid>
                    </Segment>
                </GridColumn>


                 <GridColumn style={{}}>
                    <Segment raised style={{height: 320, backgroundColor: '#fff', borderRadius: 15, padding: 20, marginTop: 40}}>
                        <Grid>
                            <GridColumn>
                                <Segment style={{backgroundColor: '#D10000', width: '90%', borderRadius: 15}}>
                                    <Grid columns={2}>
                                        <GridColumn width={12}>
                                            <Header textAlign="left" inverted color="white">Your Impact</Header>
                                        </GridColumn>
                                        <GridColumn width={4}>
                                            <Header inverted color="white" textAlign="right">9</Header>
                                        </GridColumn>
                                    </Grid>
                                </Segment>
                                <p style={{
                                    fontWeight: 400, 
                                    fontStyle: 'normal',
                                    fontFamily: 'Inter',
                                    fontSize: 18
                                }}>
                                    Potential lives saved through your donations Share your impact
                                </p>
                                  <p style={{
                                    fontWeight: 400, 
                                    fontStyle: 'normal',
                                    fontFamily: 'Inter',
                                    fontSize: 18
                                }}>
                                    Thank you for choosing to save llives
                                </p>
                            </GridColumn>
                        </Grid>
                    </Segment>
                </GridColumn>
            </Grid>
            </p>

        </div>
    )
}
export default DurationHistoryMobile