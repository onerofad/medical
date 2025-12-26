import { Header, Button, Grid, GridColumn, GridRow, Segment, Icon } from "semantic-ui-react"
import '../../../css/style.css'

const NotificationRecipientMobile = () => {
    return(
        <div style={{margin: 0, padding: '40px 20px', background: '#F8F9FA'}}>
             <Header
                style={{
                    color: '#333',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    textAlign: 'center',
                    marginTop: 40
                }}
            >
                Notifications
            </Header>  

            <Grid>
                <GridRow>
                <GridColumn>
                <Button style={{
                    width: '150px',
                    height: '46px',
                    padding: '3px',
                    background: '#D10000',
                    borderRadius: '15px',
                    color: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '36px',
                    margin: '40px auto',
                }}>
                    All
                </Button> 
                </GridColumn>
                </GridRow>
                <GridRow>
                    <Header>
                        Today
                    </Header>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="big" color="red" name="map marker" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="small_text4">
                           Request 
                        </Header>
                        <p id="small_text4">
                            Request sent successfully  to donor
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                       <Header>5 min ago</Header>
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                       
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="big_text4">
                            Profile Picture Updated 
                        </Header>
                        <p id="small_text2">
                            Your profile picture as been successfully updated.                        
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                         <Header>5 days ago</Header>
                    </GridColumn>
                </GridRow>


                 <GridRow>
                    <Header color="red">
                        Last Week
                    </Header>
                </GridRow>
                <GridRow raised as={Segment} style={{borderRadius: 15, backgroundColor: '#FFF'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="big" color="red" name="rejected" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="small_text4">
                            Request Rejected
                        </Header>
                        <p id="small_text4">
                         Sorry to inform you the donor is unavailable for your request
 
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                        <Header>2 months ago</Header>
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#FFF'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="big" color="red" name="heart" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="big_text4">
                           Gift Hand Hospital
                        </Header>
                        <p id="small_text2">
                            We are happy to inform you that the donor blood has been received! This brings us one step closer to your recovery and well-being. 
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                        <Header>1 months ago</Header>
                    </GridColumn>
                </GridRow>
            </Grid> 
        </div>
    )
}
export default NotificationRecipientMobile