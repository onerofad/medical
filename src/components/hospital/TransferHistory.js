import { Grid, GridRow, GridColumn, Header, Segment, Button} from "semantic-ui-react"


const TransferHistory = () => {
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
                    Transfer History
                </Header> 
             <Grid style={{marginTop: 40}} columns={6}>
                <GridRow style={{ padding: '20px 40px'}}>
                    <GridColumn><Header id="big-text2" color="red"  content="Date" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Donor Name" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red" content="Blood Type" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Amount" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Status" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Date Paid" /></GridColumn>
                </GridRow>
                
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">Serah Johnson</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn><p id="big_text">2000</p></GridColumn>
                    <GridColumn>
                        <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red'
                            }}
                        >
                            Pending
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="small_text2">Not Paid</p></GridColumn>
                </GridRow> 
                  <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">Aminu Abu</p></GridColumn>
                    <GridColumn><p id="small_text2">B+</p></GridColumn>
                    <GridColumn><p id="big_text">2000</p></GridColumn>
                    <GridColumn>
                        <Button 
                            style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >                     
                            Paid
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="small_text2">27/03 2025</p></GridColumn>
                </GridRow> 
                  <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">Chi Chi Ugo</p></GridColumn>
                    <GridColumn><p id="small_text2">AB+</p></GridColumn>
                    <GridColumn><p id="big_text">2000</p></GridColumn>
                    <GridColumn>
                        <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            Paid
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="small_text2">27/03 2025</p></GridColumn>
                </GridRow> 
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">Joy Friday</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn><p id="big_text">2000</p></GridColumn>
                    <GridColumn>
                        <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            Paid
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="small_text2">27/03 2025</p></GridColumn>
                </GridRow> 
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn><p id="small_text2">25/03 2025</p></GridColumn>
                    <GridColumn><p id="small_text2">Aminu Zaki</p></GridColumn>
                    <GridColumn><p id="small_text2">B+</p></GridColumn>
                    <GridColumn><p id="big_text">2000</p></GridColumn>
                    <GridColumn>
                        <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red',
                            color: 'red'
                            }}
                        >
                            Paid
                        </Button>
                    </GridColumn>
                    <GridColumn><p id="small_text2">27/03 2025</p></GridColumn>
                </GridRow> 
                </Grid>
        </div>

    )
}
export default TransferHistory