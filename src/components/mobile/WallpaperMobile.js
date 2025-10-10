import { Button, Header } from "semantic-ui-react"
import '../../css/style.css'

const WallPaperMobile = () => {
    return(
        <div className="wallpaper" style={{margin: 0, padding: 0}}>
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
                One Donation Countless Lives Saved
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
                Every drop counts! Your blood donation can help accident victims, surgical<br/> patients, and those battling life-threatening conditions. 
           </Header>
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
        </div>
    )
}
export default WallPaperMobile