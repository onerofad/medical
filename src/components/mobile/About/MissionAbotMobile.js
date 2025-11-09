import { Header } from "semantic-ui-react"

const MissionAboutMobile = () => {
    return(
        <div style={{margin: 0, padding: '50px 20px', background: '#F8F9FA'}}>
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
                 Our Mission 
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
                }}
            >
To save lives by connecting blood donors with those in need, ensuring timely access to safe blood, and we're committed to making blood donation effortless and accessible to all.
            </Header>

                 <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    marginTop: 100
                }}
            >
                Our Vision
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
                }}
            >
                To  create a world where every individual has timely access to safe life through a unified network of voluntary donors, ensuring no life is lost due to blood shortages.    
            </Header>
         
        </div>
    )
}
export default MissionAboutMobile