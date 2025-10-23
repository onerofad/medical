import { Button, Header } from "semantic-ui-react"

const AboutMobile = () => {
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
                About us
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
                Our platform connects willing blood donors with patients
                in need, ensuring that lifesaving blood reaches those in
                who need it most. Through innovation technology, we
                provide real- time donor recipient matching, appointment
                scheduling, and awareness campaigns to encourage more peaple to donate
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
                    fontWeight: 700,
                    lineHeight: '36px'
                }}
            >
                Donate
            </Button>

        </div>
    )
}
export default AboutMobile