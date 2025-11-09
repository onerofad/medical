import { Button, Grid, GridColumn, GridRow, Header, Input, Segment } from "semantic-ui-react"
import Calendar from "react-calendar"
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import '../../css/style.css'

const ScheduleCalendar = () => {
    const [value, onChange] = useState(new Date());

    return(
        <div style={{margin: 0, padding: '50px 100px', background: '#F7F2F3'}}>
            <Grid columns={3}> 
                <GridColumn>
                    <Button 
                        fluid
                        style={{
                        width: '354px',
                        height: '58px',
                        padding: '3px',
                        background: '#D10000',
                        borderRadius: '15px',
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '32px',
                        fontStyle: 'medium',
                        fontWeight: 500,
                        lineHeight: '100%',
                }}>
                        Schedule
                </Button>       
                </GridColumn>
                <GridColumn>
                     <Button
                        fluid
                        style={{
                            width: '354px',
                            height: '58px',
                            padding: '3px',
                            alignItems: 'center',
                            borderRadius: '15px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: '#D10000',
                            backgroundColor: '#FFF',
                            color: '#333333',
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '32px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: '100%'
                        }}
                    >
                        Reschedule
                    </Button>

                </GridColumn>
                <GridColumn>
                    <Button
                        fluid
                              style={{
                            width: '354px',
                            height: '58px',
                            padding: '3px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            flexShrink: 0,
                            borderRadius: '15px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: '#D10000',
                            backgroundColor: '#FFF',
                            color: '#333333',
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '32px',
                            fontStyle: 'medium',
                            fontWeight: 500,
                            lineHeight: '100%'
                        }}
                    >
                        Cancel
                    </Button>

                </GridColumn>

            </Grid>
            <Segment basic style={{backgroundColor: '#FFF', borderRadius: 15}}>
            <Grid columns={2}>
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
        </div>
    )

}
export default ScheduleCalendar