import { Grid, GridRow, GridColumn, Header, Segment, Button} from "semantic-ui-react"


const RecipientRequestHistoryMobile = () => {
    return(
  <div style={{margin: 0, padding: '50px 10px', background: '#F8F9FA'}}>
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
                        lineHeight: 'normal',
                    }}
                >
                    Recipient Request
                </Header> 
             <Grid style={{marginTop: 40}} columns={4}>
                <GridRow style={{ padding: '20px 10px'}}>
                    <GridColumn><Header id="big-text2" color="red"  content="Request ID" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Blood Type" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red" content="Urgency" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Time" /></GridColumn>
                    {/*<GridColumn><Header id="big-text2" color="red"  content="Date" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Unit" /></GridColumn>*/}
                </GridRow>
                
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464563</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            High
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">10:33 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">2</p></GridColumn>*/}
                </GridRow> 
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464675</p></GridColumn>
                    <GridColumn><p id="small_text2">A-</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            Low
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">10:55 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">1</p></GridColumn>*/}
                </GridRow> 

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464505</p></GridColumn>
                    <GridColumn><p id="small_text2">B+</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            High
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">11:00 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">2</p></GridColumn>*/}
                </GridRow> 

                  <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464578</p></GridColumn>
                    <GridColumn><p id="small_text2">AB+</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            Low
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">11:04 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">2</p></GridColumn>*/}
                </GridRow> 

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R364563</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            High
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">11:33 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">2</p></GridColumn>*/}
                </GridRow> 

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464622</p></GridColumn>
                    <GridColumn><p id="small_text2">A-</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            High
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">11:55 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">1</p></GridColumn>*/}
                </GridRow> 

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464555</p></GridColumn>
                    <GridColumn><p id="small_text2">B+</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            Low
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">1:00 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">2</p></GridColumn>*/}
                </GridRow> 

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464590</p></GridColumn>
                    <GridColumn><p id="small_text2">AB+</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            High
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">12:00 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">2</p></GridColumn>*/}
                </GridRow> 

                 <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464523</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            High
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">12:10 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">2</p></GridColumn>*/}
                </GridRow> 

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">R464543</p></GridColumn>
                    <GridColumn><p id="small_text2">A-</p></GridColumn>
                    <GridColumn>
                         <Button style={{
                            width: 70, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            Low
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="big_text">12:40 AM</p></GridColumn>
                    {/*<GridColumn>
                        <p id="small_text2">25/03 2025</p>
                    </GridColumn>
                    <GridColumn><p id="small_text2">1</p></GridColumn>*/}
                </GridRow>
                
                </Grid>
        </div>
    )
}
export default RecipientRequestHistoryMobile