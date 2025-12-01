import { Header, Button, Grid, GridColumn, GridRow, Segment, Icon } from "semantic-ui-react"
import '../../css/style.css'

const Notifications = () => {
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
                 Notifications
            </Header>
            <Grid>
                <GridRow>
                <GridColumn>
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
                    All
                </Button> 
                <Button
                    style={{
                        width: '190px',
                        height: '46px',
                        padding: '3px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '15px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#D10000',
                        backgroundColor: '#FFF',
                        margin: '40px 10px',
                        color: '#000',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '36px'
                    }}
                    >
                        Appointment
                    </Button> 
                    <Button
                    style={{
                        width: '190px',
                        height: '46px',
                        padding: '3px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '15px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#D10000',
                        backgroundColor: '#FFF',
                        margin: '40px 10px',
                        color: '#000',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '36px'
                    }}
                    >
                        Urgent
                    </Button> 
                    <Button
                    style={{
                        width: '190px',
                        height: '46px',
                        padding: '3px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '15px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#D10000',
                        backgroundColor: '#FFF',
                        margin: '40px 10px',
                        color: '#000',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '36px'
                    }}
                    >
                        Mark all as read
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
                            Urgent: Blood type 0+ Needed
                        </Header>
                        <p id="small_text4">
                            Register no 484567 send a request as the blood matches with yours. please consider donating soon save life with your donation
                        </p>
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                         <Button size="tiny" circular basic color="red" style={{color: '#333' }}>
                            Accept
                        </Button>
                        <Button size="tiny" circular basic color="red" style={{color: '#333', margin: '0px 5px' }}>
                            Reject
                        </Button>
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="big" color="red" name="calendar outline" />
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
                         <Button size="tiny" circular basic color="red" style={{color: '#333' }}>
                            Confirm
                        </Button>
                        <Button size="tiny" circular basic color="red" style={{color: '#333', margin: '0px 5px' }}>
                            Reschedule
                        </Button>
                    </GridColumn>
                </GridRow>


                 <GridRow>
                    <Header color="red">
                        Last Week
                    </Header>
                </GridRow>
                <GridRow raised as={Segment} style={{borderRadius: 15, backgroundColor: '#FFF'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="big" color="red" name="user" />
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
                         <Button size="tiny" circular basic color="red" style={{color: '#333' }}>
                            Accept
                        </Button>
                        <Button size="tiny" circular basic color="red" style={{color: '#333', margin: '0px 5px' }}>
                            Reject
                        </Button>
                    </GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#FFF'}} basic>
                    <GridColumn width={1} verticalAlign="middle">
                        <Icon size="big" color="red" name="heart" />
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
                        <Icon size="big" color="red" name="calendar outline" />
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
        </div>
    )
}
export default Notifications