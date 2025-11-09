import { Button, Header } from "semantic-ui-react"
import '../../../css/style.css'

const WallPaperAboutMobile = () => {
    return(
        <div className="wallpaper2" style={{margin: 0, padding: 0}}>
           <Header
            textAlign="center"
            style={{
                color: '#F8F9FA',
                fontFamily: 'Inter',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 700,
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
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
            }}
           
           >
               DonorConnect, is an innovation platform design to bridges the gap between blood dation and <br/>does urgent  need. Ensuring timely access to lifesaving donations.
           </Header>
           <div style={{width: '420px', margin: '0px auto'}}>
           <Button style={{
                width: '190px',
                height: '46px',
                padding: '3px',
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
           <Button
                style={{
                    width: '190px',
                    height: '46px',
                    padding: '3px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    flexShrink: 0,
                    borderRadius: '15px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#D10000',
                    backgroundColor: '#F8F9FA',
                    margin: '40px auto',
                    color: '#D10000',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '36px'
                }}
            >
                Find Donor
            </Button>
            </div>
        </div>
    )
}
export default WallPaperAboutMobile