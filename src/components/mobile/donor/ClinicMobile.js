import { Divider, Grid, GridColumn, Header, Icon } from "semantic-ui-react"
import '../../../css/style.css'

const Clinics = () => {
    return(
        <div style={{margin: 0, padding: '50px 10px', background: '#FFF'}}>
            <Header id="big_text"  content="Gifted Hand Clinic" />
            <Divider style={{backgroundColor: '#D10000'}} />
            <p>
                <p>
                    <Header id="big_text2" content="ADDRESS" />
                    <p id="small_text2">
                        3 Atere Junction, Off Omole Phase 2, Ikosi Isheri, Lagos
                    </p>
                    <p id="small_text2">
                        phone number
                    </p>
                    <p id="small_text2">a
                        08148353163
                    </p>
                </p>
                <p>
                    <Grid columns={2}>
                        <GridColumn>
                            <Header id="big_text2" content="DAYS" />
                            <p id="small_text2">
                                Monday
                            </p>
                            <p id="small_text2">
                                Tuesday
                            </p>
                            <p id="small_text2">
                                Wednesday
                            </p>
                            <p id="small_text2">
                                Thursday
                            </p>
                            <p id="small_text2">
                                Friday
                            </p>
                            <p id="small_text2">
                                Saturday
                            </p>

                        </GridColumn>
                        <GridColumn>
                            <Header id="big_text2" content="HOURS" />
                            <p id="small_text2">
                                7:30 AM - 5:30 AM
                            </p>
                            <p id="small_text2">
                                7:30 AM - 6:00 AM
                            </p>
                            <p id="small_text2">
                                7:30 AM - 4:00 AM
                            </p>
                            <p id="small_text2">
                                7:30 AM - 4:00 AM
                            </p>
                            <p id="small_text2">
                                7:30 AM - 5:00 AM
                            </p>
                            <p id="small_text2">
                                7:30 AM - 5:00 AM
                            </p>

                        </GridColumn>
                    </Grid>
                   
                </p>
                <p>
                    <p id="big_text3" style={{marginTop: 40}}>
                        <Icon size="large" name="calendar outline" color="red" />
                         COLLECTION TYPE
                    </p>
                    <p id="big_text3">
                        <Icon size="large" name="calendar outline" color="red" />
                        SCHEDULE APPOINTMENT
                    </p>
                    <p id="big_text3">
                        <Icon size="large" name="calendar outline" color="red" />
                        GET DIRECTION
                    </p>
                </p>

            </p>
            
        </div>
    )
}
export default Clinics