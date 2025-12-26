import { Button, Form, FormField, FormInput, FormSelect, Grid, GridColumn, Header, Image, Segment } from "semantic-ui-react"
import map from '../../../assets/images/map.png'


const MapMobile = () => {
    return(
        <div style={{margin: '20px 0px', padding: '0px 0px'}}>

            <Grid columns={1} centered>
                <GridColumn style={{padding: 0}}>
                    <Segment vertical textAlign="center" color="red" inverted>
                        <Header as="h2">Map</Header>
                    </Segment>
                </GridColumn>
                {/*<GridColumn style={{backgroundColor: '#F8F9FA', padding: '100px 50px'}}>
                    <Form>
                        <FormField>
                            <label style={{fontWeight: 400, fontStyle: 'normal', fontSize: 18, fontFamily: 'Inter'}}>Blood Group</label>
                            <FormSelect
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#D10000',
                                    borderStyle: 'solid'
                                }}
                            />
                        </FormField>

                         <FormField>
                            <label style={{fontWeight: 400, fontStyle: 'normal', fontSize: 18, fontFamily: 'Inter'}}>Genotype</label>
                            <FormSelect
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#D10000',
                                    borderStyle: 'solid'
                                }}
                            />
                        </FormField>

                         <FormField>
                             <label style={{fontWeight: 400, fontStyle: 'normal', fontSize: 18, fontFamily: 'Inter'}}>Urgency Level</label>
                            <FormInput
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#D10000',
                                    borderStyle: 'solid'
                                }}
                            />
                        </FormField>

                         <FormField>
                            <label style={{fontWeight: 400, fontStyle: 'normal', fontSize: 18, fontFamily: 'Inter'}}>Hospital NAme</label>
                            <FormInput
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#D10000',
                                    borderStyle: 'solid'
                                }}
                            />
                        </FormField>

                         <FormField>
                            <label style={{fontWeight: 400, fontStyle: 'normal', fontSize: 18, fontFamily: 'Inter'}}>Quality Required</label>
                            <FormInput
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#D10000',
                                    borderStyle: 'solid'
                                }}
                            />
                        </FormField>

                         <FormField>
                            <label style={{fontWeight: 400, fontStyle: 'normal', fontSize: 18, fontFamily: 'Inter'}}>City</label>
                            <FormInput
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#D10000',
                                    borderStyle: 'solid'
                                }}
                            />
                        </FormField>

                         <FormField>
                            <label style={{fontWeight: 400, fontStyle: 'normal', fontSize: 18, fontFamily: 'Inter'}}>Hospital Address</label>
                            <FormInput
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#D10000',
                                    borderStyle: 'solid'
                                }}
                            />
                        </FormField>

                          <FormField>
                            <Button
                                style={{
                                    backgroundColor: '#D10000',
                                    color: '#fff'
                                }}
                                fluid
                            >
                                Next
                            </Button>
                        </FormField>
                    </Form>

                </GridColumn>*/}
                <GridColumn style={{padding: 0}}>
                    <Image src={map} centered style={{}} />
                </GridColumn>
            </Grid>
        </div>
    )
}
export default MapMobile