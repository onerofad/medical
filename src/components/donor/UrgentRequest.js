import { Button, Grid, GridColumn, GridRow, Header, Segment } from "semantic-ui-react"
import '../../css/style.css'


const UrgentRequest = () => {
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
                 Urgent Request
            </Header>
            <Grid columns={6} style={{marginTop: 40}}>
                <GridRow>
                    <GridColumn><Header id="big-text2" color="red"  content="ID Number" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Hospital Name" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red" content="Address" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Date Needed" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Purpose" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Action" /></GridColumn>

                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn><Header size="tiny" id="small_text2" content="235678" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Gifted hand hospital" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="3 Atere Junction, Off Omole Phase 2, Ikosi Isheri, Lagos" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="23 March 2025" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Medium" /></GridColumn>
                    <GridColumn>
                         <Button size="tiny" circular color="red" style={{}}>
                            Accept
                        </Button>
                          <Button size="tiny" circular basic color="red" style={{color: '#333' }}>
                            Reject
                        </Button>
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn><Header size="tiny" id="small_text2" content="335675" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Freehand Hospital" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="No 56 olowara street ojudu berger " /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="25 March 2025" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Low" /></GridColumn>
                    <GridColumn>
                         <Button size="tiny" circular color="red" style={{}}>
                            Accept
                        </Button>
                          <Button size="tiny" circular basic color="red" style={{color: '#333' }}>
                            Reject
                        </Button>
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn><Header size="tiny" id="small_text2" content="235678" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Gifted hand hospital" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="3 Atere Junction, Off Omole Phase 2, Ikosi Isheri, Lagos" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="23 March 2025" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="High" /></GridColumn>
                    <GridColumn>
                         <Button size="tiny" circular color="red" style={{}}>
                            Accept
                        </Button>
                          <Button size="tiny" circular basic color="red" style={{color: '#333' }}>
                            Reject
                        </Button>
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn><Header size="tiny" id="small_text2" content="235678" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Gifted hand hospital" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="3 Atere Junction, Off Omole Phase 2, Ikosi Isheri, Lagos" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="24 March 2025" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Low" /></GridColumn>
                    <GridColumn>
                         <Button size="tiny" circular color="red" style={{}}>
                            Accept
                        </Button>
                          <Button size="tiny" circular basic color="red" style={{color: '#333' }}>
                            Reject
                        </Button>
                    </GridColumn>
                </GridRow>

            </Grid>
        </div>

    )
}
export default UrgentRequest