import { Grid, GridRow, GridColumn, Header, Segment } from "semantic-ui-react"

const Commission = () => {
    return(
         <div style={{margin: 0, padding: '50px 100px', background: '#F8F9FA'}}>
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
                            Commission
                        </Header> 
                    </GridColumn>
                </GridRow>
                <GridRow columns={4}>

                    <GridColumn>
                        <Segment style={{borderRadius: 15, backgroundColor: '#FFF', borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={1}>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 600,
                                            fontStyle: 'bold',
                                            fontSize: 24,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Free Hand Hospital
                                    </Header>
                                </GridColumn>
                                <GridColumn as={Segment} basic style={{backgroundColor: '#F7F2F3', margin: '5px 10px', padding: '10px 10px'}} >
                                      <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 16,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Commission
                                    </Header>
                                </GridColumn>

                                <GridColumn as={Segment} basic style={{backgroundColor: '#F7F2F3', margin: '5px 10px', padding: '10px 10px'}} >
                                      <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 16,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Recipient Request
                                    </Header>
                                </GridColumn>

                                <GridColumn as={Segment} basic style={{backgroundColor: '#F7F2F3', margin: '5px 10px', padding: '10px 10px'}} >
                                      <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 16,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Donor Scheduled
                                    </Header>
                                </GridColumn>

                                <GridColumn as={Segment} basic style={{backgroundColor: '#F7F2F3', margin: '5px 10px', padding: '10px 10px'}} >
                                      <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 16,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Completed Donation
                                    </Header>
                                </GridColumn>

                                <GridColumn as={Segment} basic style={{backgroundColor: '#F7F2F3', margin: '5px 10px', padding: '10px 10px'}} >
                                      <Header
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'bold',
                                            fontSize: 16,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Profile
                                    </Header>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>

                    <GridColumn verticalAlign='middle'>
                        <Segment style={{borderRadius: 15, backgroundColor: '#FFF', borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={1}>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 600,
                                            fontStyle: 'bold',
                                            fontSize: 24,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Commission Earn
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            fontSize: 18,
                                            fontFamily: 'Inter',
                                            color: '#D10000'
                                        }}
                                    >
                                        N10,000
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            fontSize: 18,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            Lifetime earnings
                                      
                                    </Header>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>

                    <GridColumn verticalAlign='middle'>
                        <Segment style={{borderRadius: 15, backgroundColor: '#FFF', borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={1}>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 600,
                                            fontStyle: 'bold',
                                            fontSize: 24,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Pending Commission
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            fontSize: 18,
                                            fontFamily: 'Inter',
                                            color: '#D10000'
                                        }}
                                    >
                                        N2,000
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            fontSize: 18,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            To be Process
                                      
                                    </Header>
                                </GridColumn>
                            </Grid>
                        </Segment>
                    </GridColumn>

                     <GridColumn verticalAlign='middle'>
                        <Segment style={{borderRadius: 15, backgroundColor: '#FFF', borderWidth: 2, borderColor: '#D10000', borderStyle: 'solid'}}>
                            <Grid columns={1}>
                                <GridColumn>
                                    <Header
                                        style={{
                                            fontWeight: 600,
                                            fontStyle: 'bold',
                                            fontSize: 24,
                                            fontFamily: 'Inter',
                                        }}
                                    >
                                        Paid Commission
                                    </Header>
                                    <Header 
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            fontSize: 18,
                                            fontFamily: 'Inter',
                                            color: '#D10000'
                                        }}
                                    >
                                        N8,000
                                    </Header>
                                     <Header 
                                        style={{
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            fontSize: 18,
                                            fontFamily: 'Inter'
                                        }}
                                    >
                                            Successfully process
                                      
                                    </Header>
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
export default Commission