import { Grid, GridRow, GridColumn, Header, Segment, Button} from "semantic-ui-react"


const ScheduledDonorRequest = () => {
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
                        lineHeight: 'normal',
                    }}
                >
                    Scheduled Donor Request
                </Header> 
             <Grid style={{marginTop: 40}} columns={7}>
                <GridRow style={{ padding: '20px 40px'}}>
                    <GridColumn><Header id="big-text2" color="red"  content="Donor Name" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Blood Type" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red" content="Date" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Time" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Status" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Recipient ID" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Action" /></GridColumn>

                </GridRow>
                
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">Sarah Johnson</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 25</p></GridColumn>
                    <GridColumn><p id="small_text2">11:03 AM</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Scheduled
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">R464564</p></GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}> Log Arrival </span>
                        </Button>
                    </GridColumn>
                </GridRow>

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">Aminu Abu</p></GridColumn>
                    <GridColumn><p id="small_text2">B+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">12:03 AM</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Scheduled
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">R464566</p></GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}> Log Arrival </span>
                        </Button>
                    </GridColumn>
                </GridRow>

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">Chi Chi ugo</p></GridColumn>
                    <GridColumn><p id="small_text2">AB+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">1:03 AM</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Scheduled
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">R464560</p></GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}> Log Arrival </span>
                        </Button>
                    </GridColumn>
                </GridRow>

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">Friday Johnson</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">2:03 AM</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Scheduled
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">R464562</p></GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}> Log Arrival </span>
                        </Button>
                    </GridColumn>
                </GridRow>

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">Amina Zaki</p></GridColumn>
                    <GridColumn><p id="small_text2">B+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">2:43 AM</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Scheduled
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">R464568</p></GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}> Log Arrival </span>
                        </Button>
                    </GridColumn>
                </GridRow>

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">Babu kachi</p></GridColumn>
                    <GridColumn><p id="small_text2">AB+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">3:03 PM</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Scheduled
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">R464561</p></GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}> Log Arrival </span>
                        </Button>
                    </GridColumn>
                </GridRow>

                 <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">Lade Tunde</p></GridColumn>
                    <GridColumn><p id="small_text2">AB+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">4:03 PM</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Scheduled
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">R464561</p></GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}> Log Arrival </span>
                        </Button>
                    </GridColumn>
                </GridRow>
                
                
                
                </Grid>
        </div>

    )
}
export default ScheduledDonorRequest