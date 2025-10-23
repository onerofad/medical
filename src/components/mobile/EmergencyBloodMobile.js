import { Button, Header } from "semantic-ui-react"

const EmergencyBloodMobile = () => {
    return(
       <div style={{margin: 0, padding: '50px', background: '#D10000'}}>
            <Header
                style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    lineWrap: '20px'
                    
                }}
            >
                Emergency Blood 
            </Header>
            <Header
                style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '30px',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    display: 'block'
                }}


            >
                Are you or a loved one in critical need of a blood transfusion?Every second counts—find a lifesaving donor near you now.

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
                    margin: '0px auto',
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
    )
}
export default EmergencyBloodMobile