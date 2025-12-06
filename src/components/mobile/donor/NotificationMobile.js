import { Header, Button, Grid, GridColumn, GridRow, Segment, Icon } from "semantic-ui-react"
import '../../../css/style.css'

const NotificationMobile = () => {
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
                 Notifications
            </Header>
            <p>
                <Grid>
                <GridRow>
                    <Header>
                        Today
                    </Header>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="large" color="red" name="map marker" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="small_text4">
                            Urgent: Blood type 0+ Needed
                        </Header>
                        <p id="small_text4">
                            Register no 484567 send a request as the blood matches with yours. please consider donating soon save life with your donation
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="large" color="red" name="calendar outline" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="big_text4">
                            Appointment Reminder:
                        </Header>
                        <p id="small_text2">
                            Tomorrow at 2:30 PM your donation appointment is scheduled for tomorrow at Gifted Hand Hospital, 12 Main street.Please remember to be hydrated 
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                    </GridColumn>
                </GridRow>


                 <GridRow>
                    <Header color="red">
                        Last Week
                    </Header>
                </GridRow>
                <GridRow raised as={Segment} style={{borderRadius: 15, backgroundColor: '#FFF'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="large" color="red" name="user" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="small_text4">
                            Profile Picture Updated Successfully
                        </Header>
                        <p id="small_text4">
                           Your profile picture as been successfully updated.
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#FFF'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="large" color="red" name="heart" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="big_text4">
                           Successful Transfusion
                        </Header>
                        <p id="small_text2">
                            We are thrilled to inform you that your generous blood donation has been successfully transferred to a patient in urgent need.Your selfless act has given him  a second chance at life.                        </p>
                    </GridColumn>
                    
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#FFF'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="large" color="red" name="calendar outline" />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Header id="big_text4">
                            Community Blood Drive Next Week
                        </Header>
                        <p id="small_text2">
                            Join us at Ikeja for our community Blood Drive from 10 AM to 4 PM on Saturday 
                         </p>
                    </GridColumn>
                    
                </GridRow>
                </Grid>
            </p> 
        </div>
    )
}
export default NotificationMobile