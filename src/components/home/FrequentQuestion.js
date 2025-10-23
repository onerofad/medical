import { Grid, GridColumn, Header, Icon, List, ListContent, ListIcon, ListItem } from "semantic-ui-react"

const FrequentQuestion = () => {
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
                Frequently Asked Questions
            </Header>
            <Grid columns={2} style={{marginTop: 40}}>
                <GridColumn>
                    <List size="big" celled>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} 
                        >
                                Is blood donation safe?
                            <ListContent floated="right"><Icon name="plus" /></ListContent>
                        </ListItem>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} 
                        >
                      
                                What should I do after donating?
                             <ListContent floated="right"><Icon name="plus" /></ListContent>

                        </ListItem>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} >
                          
                                What should I eat before donating?
                            <ListContent floated="right"><Icon name="plus" /></ListContent>

                        </ListItem>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} >
                          
                            How long does it take to donate blood?
                            <ListContent floated="right"><Icon name="plus" /></ListContent>

                        </ListItem>
                    </List>
                </GridColumn>
                <GridColumn >
                    <List size="big" celled>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} >
                             How often can I donate blood?
                            <ListContent floated="right"><Icon name="plus" /></ListContent>

                        </ListItem>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} >
                            
                                Will donating blood make me weak?
                           <ListContent floated="right"><Icon name="plus" /></ListContent>

                        </ListItem>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} >
                           
                                Can I exercise after donating blood?
                           <ListContent floated="right"><Icon name="plus" /></ListContent>

                        </ListItem>
                        <ListItem style={{ color: '#333',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            padding: '20px 0px', 
                                            verticalAlign: 'middle'
                                        }} >
                         
                            Can I donate blood if I have a cold or flu?
                           <ListContent floated="right"><Icon name="plus" /></ListContent>

                        </ListItem>
                    </List>
                </GridColumn>
            </Grid>
        </div>
    )
}
export default FrequentQuestion