import { Button, Container, Image, Menu } from "semantic-ui-react"
import logo from '../assets/images/logo.svg'
const NavBar = () => {
    return(
        <div style={{margin: 0, padding: 0}}>
             <Menu
            secondary
            style={{height: '68px'}}
        >
            <Container>
            <Menu.Item as='a'>
             
                <Image style={{ display: 'inline', width: '30.98px', height: '30.118px'}} src={logo} />
                
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
        </Menu>
        </div>
    )
}
export default NavBar