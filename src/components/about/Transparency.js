import { Button, Grid, GridColumn, Header, HeaderSubheader, Icon } from "semantic-ui-react"

const Transparency = () => {
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
                Transparency & Trust
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
                    marginBottom: '50px'
                }}
            >
                Your safety and privacy are our top priorities. we adhere to the highest standards of protection medical ethics. 
            </Header>
            <Grid columns={3} textAlign="center">
                <GridColumn>
                    <Header as="h1">
                        <Icon size="large" color="black"  circular name="lock" />
                    </Header>
                    <Header
                        style={{
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '26px'
                            }}
                    >
                        Data Privacy
                        <HeaderSubheader
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
                             All information is encrypted and securely stored.
                        </HeaderSubheader>
                    </Header>
                </GridColumn>
                <GridColumn>
                     <Header as="h1">
                        <Icon color="red" circular size="large" name="check" />
                    </Header>
                    <Header
                     style={{
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '26px'
                    }}
                    >
                        Health Compliance
                        <HeaderSubheader
                         style={{
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
                            Fully compliant with national health regulations                         
                        </HeaderSubheader>
                    </Header>

                </GridColumn>
                <GridColumn>
                     <Header as="h1">
                        <Icon circular size="large" name="users" />
                    </Header>
                    <Header
                     style={{
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '26px'
                    }}
                    >
                        Verified User
                        <HeaderSubheader
                         style={{
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '26px'
                        }}
                        >
                            All donor and recipient undergoes a verification process
                        </HeaderSubheader>
                    </Header>

                </GridColumn>
            </Grid>
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
export default Transparency