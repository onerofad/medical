import { Button, Grid, GridColumn, Header, Segment } from "semantic-ui-react"
import '../../../css/style.css'

const BloodCompatibilityMobile = () => {
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
                Blood Compatibility
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
                Blood compatibility refers to the careful matching of blood types between a donor and a recipient to ensure a safe and effective blood transfusion
            </Header>   
            <Button style={{
                display: 'flex',
                width: '190px',
                height: '46px',
                padding: '10px',
                background: '#D10000',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '15px',
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                margin: '40px auto',
           }}>
                Schedule
           </Button>       
           <Grid>
                <GridColumn>
                    <Segment basic style={{margin: '8px 0px'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 16,
                                    fontStyle: 'bold',
                                    fontWeight: 700,
                                    fontFamily: 'Inter'
                                }}>
                                    Donor Blood  Type
                                </Header>
                            </GridColumn>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 16,
                                    fontStyle: 'bold',
                                    fontWeight: 700,
                                    fontFamily: 'Inter'
                                }}>
                                    Can Donate TO
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    O-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    All blood types
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    O+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    0+, A+, B+, AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                      <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    A-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    A-, A+, AB-, AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    A+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    A+,  AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    B-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    B-,  B+,  AB+,  AB-
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                    <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    B+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    B+,  AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                       <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    AB-
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    AB-,  AB+
                                </Header>
                            </GridColumn>

                        </Grid>
                    </Segment>
                      <Segment basic style={{margin: '8px 0px', backgroundColor: '#F7F2F3'}}>
                        <Grid relaxed>
                            <GridColumn width={8}>
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
                                    AB+
                                </Header>
                            </GridColumn>
                            <GridColumn width={8} textAlign="right">
                                <Header style={{
                                    fontWeight: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontFamily: 'Inter'
                                }}>
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