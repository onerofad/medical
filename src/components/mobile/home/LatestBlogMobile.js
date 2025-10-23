import { Grid, GridColumn, Header, HeaderContent, HeaderSubheader, Image, Segment } from "semantic-ui-react"
import minister from '../../../assets/images/min.png'

const LatestBlogMobile = () => {
    return(
<div style={{margin: 0, padding: '20px 20px', background: '#F8F9FA'}}>
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
                Latest Blog
            </Header>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    padding: '0px 0px'
                }}
            >
                we keep you updated on the news around you see below           
            </Header>

            <Segment raised style={{
                marginTop: '60px',
                borderRadius: '30px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#D10000',
                background: '#fff',
                padding: '40px 30px'

            }}>
                <Grid columns={1}>
                     <GridColumn verticalAlign="middle">
                         <Header
                            style={{
                                color: '#333',
                                fontFamily: 'Inter',
                                fontSize: '30px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        >
                            <HeaderContent>Minister of Health Speaks</HeaderContent>
                            <HeaderSubheader
                            style={{
                                color: '#333',
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '30px'

                            }}
                        >
                            Blood donation is a lifesaving act of compassion. Every drop counts. As Minister of Health, I urge all eligible Nigerians to donate. Together, we can ensure no life is lost due to blood shortages.
                        </HeaderSubheader>
                        </Header>
                        
                        <Header
                            style={{
                                color: '#333',
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        >
                            Professor Muhammad Ali pate
                        </Header>
                        <Image fluid src={minister} />
                    </GridColumn> 
                </Grid>
            </Segment>
        </div>
    )
}
export default LatestBlogMobile