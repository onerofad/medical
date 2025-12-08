import { Grid, GridRow, GridColumn, Header, Segment, Image, Icon, Button } from "semantic-ui-react"
import donor1 from '../../assets/images/donor/donor1.jpg'
import donor2 from '../../assets/images/donor/donor2.jpg'
import donor3 from '../../assets/images/donor/donor3.jpg'
import donor4 from '../../assets/images/donor/donor4.jpg'
import donor5 from '../../assets/images/donor/donor5.jpg'

const DonorNear = () => {
    return(
         <div style={{margin: 0, padding: '50px 100px', background: '#fff'}}>
            <Segment vertical>
            <Grid>
                <GridRow>
                    <GridColumn textAlign="center">
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
                            Donor near you
                        </Header> 
                        <Header
                        style={{
                            color: '#333',
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '30px',
                            padding: '0px 200px'
                        }}
                        >
                        See result that match with your request
                        </Header>   
                    </GridColumn>
                </GridRow>
                <GridRow columns={3}>
                    <GridColumn>
                        <Segment style={{borderRadius: 15, backgroundColor: '#F7F2F3', borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                    <Image style={{width: 75, height: 75}} src={donor1} circular />
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
                                        Amino Abu
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
                                    <Image style={{width: 75, height: 75}} src={donor2} circular />
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
                                        Faith James
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
                                        <Header content="H" />
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
                                        Habiba Bello
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
                </GridRow>
                   <GridRow columns={3}>
                    <GridColumn>
                         <Segment style={{borderRadius: 15, backgroundColor: '#fff' , borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                    <Image style={{width: 75, height: 75}} src={donor3} circular />
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
                                        Chidima Mattew
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
                                        <Header content="P" />
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
                                        Praise James
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
                                    <Image style={{width: 75, height: 75}} src={donor4} circular />
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
                                        Peter Adeyemi
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
                </GridRow>
                   <GridRow columns={3}>
                    <GridColumn>
                        <Segment style={{borderRadius: 15, backgroundColor: '#F7F2F3' , borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={2}>
                                <GridColumn>
                                     <Segment color="red" inverted style={{width: 75, height: 75}}  circular >
                                        <Header content="C" />
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
                                        Charle Williams
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
                                    <Image style={{width: 75, height: 75}} src={donor5} circular />
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
                                        Ifeanyi Chijioke
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
                                        <Header content="D" />
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
                                        Deborah Amos
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
                                            7km 20min away
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
                </GridRow>
            </Grid>
            </Segment>
        </div>
    )
}
export default DonorNear