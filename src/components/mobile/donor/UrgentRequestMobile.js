import { Button, Grid, GridColumn, GridRow, Header, Segment } from "semantic-ui-react"
import '../../../css/style.css'


const UrgentRequestMobile = () => {
    return(
        <div style={{margin: 0, padding: '50px 10px', background: '#F8F9FA'}}>
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
            <p>
            <Grid columns={3} style={{marginTop: 40}}>\
                <GridRow columns={3}>
                    <GridColumn><Header id="big-text2" color="red"  content="ID Number" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Hospital Name" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red" content="Address" /></GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn><Header size="tiny" id="small_text2" content="235678" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Gifted hand hospital" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="3 Atere Junction, Off Omole Phase 2, Ikosi Isheri, Lagos" /></GridColumn>
                </GridRow>

                <GridRow columns={3}>
                    <GridColumn><Header id="big-text2" color="red"  content="Date Needed" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Purpose" /></GridColumn>
                    <GridColumn><Header id="big-text2" color="red"  content="Action" /></GridColumn>
                </GridRow>

                <GridRow columns={3}>
                    <GridColumn><Header size="tiny" id="small_text2" content="23 March 2025" /></GridColumn>
                    <GridColumn><Header size="tiny" id="small_text2" content="Medium" /></GridColumn>
                    <GridColumn verticalAlign="middle">
                         <Button size="mini" circular color="red" style={{}}>
                            Accept
                        </Button>
                          <Button size="mini" circular basic color="red" style={{color: '#333' }}>
                            Reject
                        </Button>
                    </GridColumn>
                </GridRow>
            </Grid>
            </p>
        </div>

    )
}
export default UrgentRequestMobile