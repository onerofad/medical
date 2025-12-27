import { Grid, GridRow, GridColumn, Header, Segment} from "semantic-ui-react"


const CompleteTransfusionMobile = () => {
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
                    Complete Transfusion
                </Header> 
             <Grid style={{marginTop: 40}} columns={6}>
                <GridRow style={{ padding: '20px 10px'}}>
                    <GridColumn><Header id="big-text2" color="red"  content="Donor Name" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Blood Type" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red" content="Scheduled Time" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Date" /></GridColumn>
                    {/*<GridColumn><Header id="big-text2" color="red"  content="Status" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Action" /></GridColumn>*/}

                </GridRow>
                
                

                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">Aminu Abu</p></GridColumn>
                    <GridColumn><p id="small_text2">O+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 25</p></GridColumn>
                    <GridColumn><p id="small_text2">11:03 AM</p></GridColumn>
                    {/*<GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#fff',
                            color: 'red'
                            }}
                        >
                            Completed
                        </Button>
                    </GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#fff'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}>Confirmed </span>
                        </Button>
                    </GridColumn>*/}
                </GridRow>

                 <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">Aminu Abu</p></GridColumn>
                    <GridColumn><p id="small_text2">B+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 25</p></GridColumn>
                    <GridColumn><p id="small_text2">11:03 AM</p></GridColumn>
                    {/*<GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#F7F2F3',
                            color: 'black',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red'
                            }}
                        >
                            Pending
                        </Button>
                    </GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#000'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}>Confirm </span>
                        </Button>
                    </GridColumn>*/}
                </GridRow>


                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 10px'}} basic>
                    <GridColumn><p id="small_text2">Chi Chi Ugo</p></GridColumn>
                    <GridColumn><p id="small_text2">AB+</p></GridColumn>
                    <GridColumn><p id="small_text2">25/03 25</p></GridColumn>
                    <GridColumn><p id="small_text2">11:03 AM</p></GridColumn>
                    {/*<GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: '#F7F2F3',
                            color: 'black',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'red'
                            }}
                        >
                            Pending
                        </Button>
                    </GridColumn>
                   <GridColumn>
                         <Button style={{
                            width: 120, 
                            borderRadius: 15, 
                            backgroundColor: 'red',
                            color: '#000'
                            }}
                        >
                           <span id="big_text" style={{color: '#fff'}}>Confirm </span>
                        </Button>
                    </GridColumn>*/}
                </GridRow>
            </Grid>
        </div>

    )
}
export default CompleteTransfusionMobile