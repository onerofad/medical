import { Grid, GridColumn, Header, Image, Segment } from "semantic-ui-react"
import fav1 from '../../../assets/images/healthicons_inpatient.svg'
import fav2 from '../../../assets/images/game-icons_archive-register.svg'
import fav3 from '../../../assets/images/mdi_blood-bag.svg'
import fav4 from '../../../assets/images/icon-park-solid_hospital-two.svg'


const AchievementMobile = () => {
    return(
        <div style={{margin: 0, padding: '50px 20px', background: '#F8F9FA'}}>
            <Header
                style={{
                    color: '#333',
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal'
                }}
            >
                Achievement
            </Header>
            <Header
                style={{
                    color: '#333',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '22px'
                }}
            >
               Every drop of blood donated through our platform has helped rewrite someone’s story. Here’s the impact you made possible:  
            </Header>

             <Segment raised style={{
                marginTop: '60px',
                borderRadius: '30px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#D10000',
                background: '#F7F2F3'
            }}
            >
                <Image centered src={fav1} />
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Patients Helped
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            20+
                        </Header>

            </Segment>
            <Segment raised style={{
                marginTop: '60px',
                borderRadius: '30px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#D10000',
                background: '#F7F2F3'
            }}
            >
                <Image centered src={fav2} />
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Registered Donors
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            10+
                        </Header>

            </Segment>
            <Segment raised style={{
                marginTop: '60px',
                borderRadius: '30px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#D10000',
                background: '#F7F2F3'
            }}
            >
 <Image centered src={fav3} />
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Pints Collected
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            20+
                        </Header>
            </Segment>
            <Segment raised style={{
                marginTop: '60px',
                borderRadius: '30px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#D10000',
                background: '#F7F2F3'
            }}
            >
<Image centered src={fav4} />
                         <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '26px'
                            }}
                        >
                            Number of Hospitals
                        </Header>
                        <Header
                            style={{
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '26px'
                            }}
                        >
                            5+
                        </Header>
            </Segment>
        </div>
    )
}
export default AchievementMobile