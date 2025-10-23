import { GridColumn, Grid, Header, HeaderContent, HeaderSubheader, Image, Segment } from "semantic-ui-react"
import blood_drive21 from '../../assets/images/blood_drive21.png'
import blood_drive22 from '../../assets/images/blood_drive22.png'
import blood_drive23 from '../../assets/images/blood_drive23.png'

const BloodDriveMobile2 = () => {
    return(
<div style={{margin: 0, padding: '50px 20px', background: '#F8F9FA'}}>
            <Grid style={{}}>
                <GridColumn style={{marginTop: 20}} width={16}>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_drive21} />
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
                        <HeaderContent>Every Drop Counts</HeaderContent>
                        <HeaderSubheader
                             style={{
                            color: '#333',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px',

                        }}
                        >
                            No matter how small, your contribution can make a huge impact. Give a live hope  today.
                        </HeaderSubheader>
                    </Header>
                    </Segment>
                </GridColumn>
                <GridColumn style={{marginTop: 20}} width={16}>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_drive22} />
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
                        <HeaderContent>Tips Before Donating</HeaderContent>
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
                            Drink plenty of water, have a healthy meal and rest, to ensure a smooth  donation experience.
                        </HeaderSubheader>
                    </Header>
                    </Segment>
                </GridColumn>
                <GridColumn style={{marginTop: 20}} width={16}>
                    <Segment vertical style={{paddingTop: 0, background: '#fff', borderRadius: 30}}>
                    <Image fluid src={blood_drive23} />
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
                        <HeaderContent>Heroes Donate Blood</HeaderContent>
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
                            Your simple act of donating blood can save lives and bring hope to those in need of blood today.
                        </HeaderSubheader>
                    </Header>
                    </Segment>
                </GridColumn>
            </Grid>

        </div>
    )
}
export default BloodDriveMobile2