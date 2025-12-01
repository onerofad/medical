import { Button, Grid, GridColumn, Header, Segment } from "semantic-ui-react"
import '../../../css/style.css'

const BloodCompatibilityMobile = () => {
    return(
        <div style={{margin: 0, padding: '50px 0px', background: '#F8F9FA'}}>
            <Grid>
                <GridColumn textAlign="center">
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
                Blood Compatibility
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
                    padding: '0px 20px'
                }}
            >
                Blood compatibility refers to the careful matching of blood types between a donor and a recipient to ensure a safe and effective blood transfusion
            </Header>   
            <Button style={{
                width: '190px',
                height: '46px',
                padding: '3px',
                background: '#D10000',
                borderRadius: '15px',
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '36px',
                margin: '40px auto',
           }}>
                Schedule
           </Button>       
            </GridColumn>
            </Grid>
            <Grid>
                <GridColumn>
                    <Segment basic style={{margin: '8px 10px'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="big_text">
                                    Donor Blood  Type
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="big_text">
                                    Can Donate TO
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    O-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    All blood types
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    O+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    0+, A+, B+, AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                      <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    A-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    A-, A+, AB-, AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    A+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    A+,  AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    B-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    B-,  B+,  AB+,  AB-
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    B+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    B+,  AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                       <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    AB-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    AB-,  AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                      <Segment basic style={{margin: '8px 10px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header id="small_text">
                                    AB+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header id="small_text">
                                    AB+ Only
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>

                    
                </GridColumn>
            </Grid>
           

        </div>
    )
}
export default BloodCompatibilityMobile