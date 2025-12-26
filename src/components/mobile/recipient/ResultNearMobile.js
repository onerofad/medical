import { Grid, GridColumn, Header, Segment, Image, Icon, Button } from "semantic-ui-react"
import donor6 from '../../../assets/images/donor/donor6.jpg'
import donor7 from '../../../assets/images/donor/donor7.jpg'
import donor8 from '../../../assets/images/donor/donor8.jpg'
import donor9 from '../../../assets/images/donor/donor9.jpg'

const ResultNearMobile = () => {
    return(
              <div style={{margin: '20px 0px', padding: '0px 20px', background: '#fff'}}>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    marginTop: 40
                }}
            >
                Result near you
            </Header> 
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '30px',
                    padding: '0px 20px'
                }}
            >
                See result that match with your request
            </Header>  

            <Grid columns={1}>
                <GridColumn>
                        <Segment style={{borderRadius: 15, backgroundColor: '#fff', borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                    <Image style={{width: 75, height: 75}} src={donor6} circular />
                                </GridColumn>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 20,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        Tunji kosoko
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        <Header.Content>
                                            <Icon color="red" name="map marker alternate" />
                                            5km 10min away
                                        </Header.Content>
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            B+ Compatibility
                                      
                                    </Header>
                                    <Button  basic color="red" style={{borderRadius: 15}}>
                                        Request
                                    </Button>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                    <GridColumn>
                         <Segment style={{borderRadius: 15, backgroundColor: '#fff' , borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                    <Image style={{width: 75, height: 75}} src={donor7} circular />
                                </GridColumn>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 20,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        Zainab Taku
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        <Header.Content>
                                            <Icon color="red" name="map marker alternate" />
                                            10km 20min away
                                        </Header.Content>
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            B+ Compatibility
                                      
                                    </Header>
                                    <Button  basic color="red" style={{borderRadius: 15}}>
                                        Request
                                    </Button>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                    <GridColumn>
                        <Segment style={{borderRadius: 15, backgroundColor: '#F7F2F3' , borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                    <Segment color="red" inverted style={{width: 75, height: 75}}  circular >
                                        <Header content="M" />
                                    </Segment>
                                </GridColumn>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 20,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        Musa Yaya
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        <Header.Content>
                                            <Icon color="red" name="map marker alternate" />
                                            15km 30min away
                                        </Header.Content>
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            B+ Compatibility
                                      
                                    </Header>
                                    <Button  basic color="red" style={{borderRadius: 15}}>
                                        Request
                                    </Button>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                     <GridColumn>
                         <Segment style={{borderRadius: 15, backgroundColor: '#fff' , borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                    <Image style={{width: 75, height: 75}} src={donor8} circular />
                                </GridColumn>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 20,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                       Ada uzor
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        <Header.Content>
                                            <Icon color="red" name="map marker alternate" />
                                            5km 10min away
                                        </Header.Content>
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            B+ Compatibility
                                      
                                    </Header>
                                    <Button  basic color="red" style={{borderRadius: 15}}>
                                        Request
                                    </Button>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                     <GridColumn>
                        <Segment style={{borderRadius: 15, backgroundColor: '#F7F2F3' , borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                     <Segment color="red" inverted style={{width: 75, height: 75}}  circular >
                                        <Header content="R" />
                                    </Segment>
                                </GridColumn>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 20,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        Ruth May
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        <Header.Content>
                                            <Icon color="red" name="map marker alternate" />
                                            15km 30min away
                                        </Header.Content>
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            B+ Compatibility
                                      
                                    </Header>
                                    <Button  basic color="red" style={{borderRadius: 15}}>
                                        Request
                                    </Button>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                    <GridColumn>
                        <Segment style={{borderRadius: 15, backgroundColor: '#fff' , borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                    <Image style={{width: 75, height: 75}} src={donor9} circular />
                                </GridColumn>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 20,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                       Felix Thomas
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                        <Header.Content>
                                            <Icon color="red" name="map marker alternate" />
                                            10km 20min away
                                        </Header.Content>
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            fontSize: 14,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            B+ Compatibility
                                      
                                    </Header>
                                    <Button  basic color="red" style={{borderRadius: 15}}>
                                        Request
                                    </Button>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>
                                              
            </Grid>
        </div>
    )
}
export default ResultNearMobile