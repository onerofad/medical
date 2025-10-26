import { Button, Grid, GridColumn, GridRow, Header, Image, Segment } from "semantic-ui-react"
import redcross from '../../assets/images/redcross.png'
import save from '../../assets/images/save.png'
import transfussion from '../../assets/images/bloodtransfusion.png'
import worldhealth from '../../assets/images/worldhealth.png'
import unicef from '../../assets/images/unicef.png'
import gbf from '../../assets/images/gbf.jpg'
const Partners = () => {
    return(
        <div style={{margin: 0, padding: '50px 150px', background: '#fff'}}>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                }}
            >
                 Our Partners 
            </Header>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '36px',
                    marginBottom: '40px'
                }}
            >
                We collaborate with hospitals, NGOs, and corporations to ensure a seamless blood donationprocess.            
            </Header>
            <Segment>
            <Grid relaxed>
                <GridRow>
                    <GridColumn width={2} verticalAlign="middle">
                        <Image size="large" src={redcross} />
                    </GridColumn>
                    <GridColumn width={4} verticalAlign="middle">
                        <Image size="large" src={save} />
                    </GridColumn>
                    <GridColumn width={2} verticalAlign="middle">
                        <Image size="large" src={transfussion} />
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                        <Image src={worldhealth} />
                    </GridColumn>
                    <GridColumn width={2} verticalAlign="middle">
                        <Image src={unicef} />
                    </GridColumn>
                    <GridColumn width={3} verticalAlign="middle">
                        <Image src={gbf} />
                    </GridColumn>
                </GridRow>
            </Grid>
         </Segment>
        </div>
    )
}
export default Partners