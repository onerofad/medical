import { Grid, GridColumn, Header, HeaderContent, HeaderSubheader, Icon, Image, Segment } from "semantic-ui-react"
import blood_drive1 from '../../../assets/images/blood_drive1.png'
import blood_drive2 from '../../../assets/images/blood_drive2.png'

const BloodDriveMobile = () => {
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
                    Upcoming Blood Drives            
            </Header>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '26px',
                    padding: '0px 20px'
                }}
            >
                Stay updated on local blood drives, community events, and special campaigns, coming up soon.           
            </Header>
            <Grid style={{marginTop: 40}}>
                <GridColumn style={{marginTop: 20}} width={16}>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image style={{}} fluid src={blood_drive1} />
                    <Header style={{padding: '0px 20px'}}>
                        <Icon style={{display: 'inline'}} name="calendar alternate outline"/>
                        <span style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                        }}>
                            14 feb 2025
                        </span>
                    </Header>
                    <Header 
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        <HeaderContent>Blood Donation Drives</HeaderContent>
                        <HeaderSubheader
                             style={{
                            color: '#333',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
                            Stay updated on local blood drives, community events, and special campaigns, coming up soon.
                        </HeaderSubheader>
                    </Header>
                    <Header
                        style={{
                            color: '#D10000',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '26px',
                            padding: '0px 20px'
                        }}
                    >
                        Read more
                    </Header>
                    </Segment>
                </GridColumn>
                <GridColumn style={{marginTop: 20}} width={16}>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_drive1} />
                    <Header style={{padding: '0px 20px'}}>
                        <Icon style={{display: 'inline'}} name="calendar alternate outline"/>
                        <span style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}>
                         20 feb 2025
                        </span>
                    </Header>
                    <Header
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        <HeaderContent>World blood donor day</HeaderContent>
                        <HeaderSubheader
                            style={{
                            color: '#333',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
                            On this special day, we honour the heroes who donate blood and the teams that make it possible. 
                        </HeaderSubheader>
                    </Header>
                    <Header
                        style={{
                            color: '#D10000',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '26px',
                            padding: '0px 20px'
                        }}
                    >
                        Read more
                    </Header>
                    </Segment>
                </GridColumn>
                <GridColumn style={{marginTop: 20}} width={16}>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_drive2} />
                     <Header style={{padding: '0px 20px'}}>
                        <Icon style={{display: 'inline'}} name="calendar alternate outline"/>
                        <span style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}>
                         28 feb 2025
                        </span>
                    </Header>
                    <Header
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            padding: '0px 20px'
                        }}
                    >
                        <HeaderContent>Your Blood Matters</HeaderContent>
                        <HeaderSubheader
                             style={{
                            color: '#333',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
                            Every donation you make can save lives, providing hope to any patients in emergencies, and surgeries.                        </HeaderSubheader>
                    </Header>
                    <Header
                        style={{
                            color: '#D10000',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '26px',
                            padding: '0px 20px'
                        }}
                    >
                        Read more
                    </Header>
                    </Segment>
                </GridColumn>
            </Grid>

        </div>
    )
}
export default BloodDriveMobile