import { Button, Header } from "semantic-ui-react"

const About = () => {
    return(
        <div style={{margin: 0, padding: '100px 250px', background: '#F7F2F3'}}>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    lineWrap: '20px'
                }}
            >
                About Us
            </Header>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '30px',
                    display: 'block'
                }}
            >
                Our platform connects willing blood donors with patients in need, ensuring that lifesaving blood reaches those who need it most. Through innovative technology, we provide real-time donor-recipient matching, appointment scheduling, and awareness campaigns to encourage more people to donate. 

            </Header>
            <Button
                style={{
                    display: 'flex',
                    width: '190px',
                    height: '46px',
                    padding: '10px',
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
                Learn More About Us
            </Button>
        </div>
    )
}
export default About