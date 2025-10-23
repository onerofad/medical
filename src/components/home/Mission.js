import { Button, Header } from "semantic-ui-react"

const Mission = () => {
    return(
        <div style={{margin: 0, padding: '100px 150px', background: '#F7F2F3'}}>
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
                Join Our Mission Today
            </Header>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '36px',
                }}
            >
                    Becoming a part of Donor Connect means joining a movement dedicated to making a tangible difference in people's lives. Together, we can create a future where safe and sufficient blood supplies are always available for those in need.

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
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '36px'
                }}
            >
                Sign Up
            </Button>
        </div>
    )
}
export default Mission