import { Button, Grid, GridColumn, GridRow, Header, Input, Segment } from "semantic-ui-react"
import Calendar from "react-calendar"
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import '../../../css/style.css'

const ScheduleCalendarMobile = () => {
    const [value, onChange] = useState(new Date());

    return(
        <div style={{margin: 0, padding: '50px 20px', background: '#F7F2F3'}}>
            <p>
            <Grid columns={3} textAlign="center"> 
                <GridColumn>
                    <Button 
                        style={{}}
                        color="red"
                    >
                        Schedule
                </Button>       
                </GridColumn>
                <GridColumn>
                     <Button
                        style={{}}
                        color="red"
                        basic
                    >
                        Reschedule
                    </Button>

                </GridColumn>
                <GridColumn>
                    <Button
                        style={{color: '#000'}}
                        color="red"
                        basic
                    >
                        Cancel
                    </Button>

                </GridColumn>

            </Grid>
            </p>
            <p>
            <Segment size="small" basic style={{backgroundColor: '#FFF', borderRadius: 15}}>
                <Grid stackable>
                    <GridColumn>
                        <Segment basic>
                        <Header  id="big_text">Select Date</Header>
                            <div style={{width: 800}}>
                                <Calendar style={{width: '491px'}} onChange={onChange} value={value} />
                            </div>
                        </Segment>
                    </GridColumn>
                    <GridColumn>
                        <Segment basic vertical>
                            <Header id="big_text">
                                Selected Hospital
                            </Header>
                            <Input style={{
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: '#D10000',
                                    }} 
                                    fluid 
                                    placeholder="Free Land Hospital"
                                    />
                                    <Header id="big_text">
                                        Available Time Slot-Mar 2
                                    </Header>
                                    <Grid columns={3}>
                                        <GridRow>
                                            <GridColumn>
                                                <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">8:10 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                            <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">12:30 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                              <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">4:00 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                        </GridRow>
                                         <GridRow>
                                            <GridColumn>
                                                <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">8:10 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                            <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header textAlign="center">12:30 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                              <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">4:00 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                        </GridRow>
                                         <GridRow>
                                            <GridColumn>
                                                <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">8:10 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                            <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header textAlign="center">12:30 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                              <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">4:00 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                        </GridRow>
                                         <GridRow>
                                            <GridColumn>
                                                <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">8:10 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                            <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">12:30 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                              <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">4:00 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                        </GridRow>
                                         <GridRow>
                                            <GridColumn>
                                                <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">8:10 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                            <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15}}>
                                                    <Header id="small_text3" textAlign="center">12:30 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                              <GridColumn>
                                                 <Segment size="mini" basic style={{backgroundColor: '#F7F2F3', borderRadius: 15,}}>
                                                    <Header id="small_text3" textAlign="center">4:00 AM</Header>
                                                </Segment>
                                            </GridColumn>
                                        </GridRow>
                                        <GridRow>
                                            <GridColumn width={16}>
                                                <Button
                                                    floated="right"
                                                        style={{
                                                            display: 'flex',
                                                            width: '190px',
                                                            height: '46px',
                                                            padding: '10px',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            gap: '10px',
                                                            flexShrink: 0,
                                                            borderRadius: '15px',
                                                            borderWidth: '1px',
                                                            borderStyle: 'solid',
                                                            borderColor: '#D10000',
                                                            backgroundColor: '#FFF',
                                                            margin: '40px auto',
                                                            color: '#D10000',
                                                            textAlign: 'center',
                                                            fontFamily: 'Inter',
                                                            fontSize: '18px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 600,
                                                            lineHeight: '36px'
                                                        }}
                                                    >
                                                        Continue
                                                    </Button>
                                            </GridColumn>
                                        </GridRow>

                                    </Grid>
                        </Segment>
                    </GridColumn>    
                    </Grid>        
            </Segment>
            </p>
        </div>
    )

}
export default ScheduleCalendarMobile