import { Button, Container, Grid, GridColumn, GridRow, Icon, Image, Menu, Segment, Sidebar, SidebarPushable, SidebarPusher } from "semantic-ui-react"
import logo from '../../assets/images/logo.svg'
import { useState } from "react"
const NavBarMobile = () => {

    const [visible, setVisible] = useState(false)

    return(
        <div style={{margin: 0, padding: 0}}>
                <Menu
                    secondary
                    pointing
                    style={{height: '50px', marginBottom: '0px', paddingBottom: '0px'}}
                >
                    <Menu.Item>
                        <Image style={{ display: 'inline', width: '30.98px', height: '30.118px'}} src={logo} />
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Icon color="red" onClick={() => setVisible(!visible)} link size="large" name= {visible ? "close" : "sidebar"} />
                    </Menu.Item>
                </Menu>
           
                    <Sidebar 
                        as={Menu}
                        visible={visible}
                        vertical
                        secondary
                        width="very wide"
                        style={{background: '#F8F9FA', maxHeight: 500}}
                        onHide={() => setVisible(false)}
                        animation="overlay"
                        direction="top" 
                    >
                    <Container>
                    <Menu.Item position="right">
                        <Icon color="red" onClick={() => setVisible(!visible)} link size="large" name="close" />
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            color: '#D10000',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 900,
                            lineHeight: 'normal'
                        }}
                        as="a"
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}
                    >
                        About Us
                    </Menu.Item>
                    <Menu.Item
                    style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}
                        as="a"

                    >
                        Donor
                    </Menu.Item>
                    <Menu.Item
                    style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}
                        as="a"

                    >
                        Recepient
                    </Menu.Item>
                    <Menu.Item
                    style={{
                            color: '#333',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}
                        as="a"

                    >
                        Hospital
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Button
                            style={{
                                borderRadius: '12px',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: '#D10000',
                                background: '#FFF',
                                display: 'flex',
                                width: '117px',
                                height: '35px',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#D10000',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '36px'
                            }}
                            as="a"

                        >
                            Sign in
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button
                        style={{
                            borderRadius: '12px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: '#D10000',
                            display: 'flex',
                            width: '117px',
                            height: '35px',
                            padding: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#D10000',
                            color: '#FFF',
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: '36px'

                        }}

                        >
                            Sign up
                        </Button>
                    </Menu.Item>
                    </Container>
                </Sidebar>
        </div>
    )
}
export default NavBarMobile