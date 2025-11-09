import { Button, Grid, GridColumn, Header } from "semantic-ui-react"
import '../../../css/style.css'

const WallPaperAboutMobile = () => {
    return(
        <div className="wallpaper2" style={{margin: 0, padding: 0}}>
           <Header
            textAlign="center"
            style={{
                color: '#F8F9FA',
                fontFamily: 'Inter',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 900,
                lineHeight: 'normal',
                paddingTop: 280
            }}
           >
                About Us
           </Header>
           <Header 
            textAlign="center"
             style={{
                color: '#fff',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
            }}
           
           >
               DonorConnect, is an innovation platform design to bridges the gap between blood dation and <br/>does urgent  need. Ensuring timely access to lifesaving donations.
           </Header>
           <Grid>
            <GridColumn textAlign="center" style={{marginTop: 60}}>
           <Button style={{
                display: 'flex',
                width: '190px',
                height: '46px',
                padding: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#D10000',
                borderRadius: '15px',
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '36px',
                margin: '60px auto',
           }}>
                Donate
           </Button>
          
            </GridColumn>
            </Grid>
        </div>
    )
}
export default WallPaperAboutMobile