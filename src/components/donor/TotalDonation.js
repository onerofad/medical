import { Grid, GridColumn, GridRow, Header, Segment } from "semantic-ui-react"
import '../../css/style.css'


const TotalDonations = () => {
    return(
        <div style={{margin: 0, padding: '50px 100px', background: '#F8F9FA'}}>
            <Header
                style={{
                    color: '#333',
                    textAlign: 'center',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal'
                }}
            >
                 Total Donations
            </Header>
            <Grid style={{marginTop: 40}}>
                <GridRow style={{ padding: '20px 40px'}}>
                    <GridColumn width={6}><Header id="big-text2" color="red"  content="Date" /></GridColumn>
                    <GridColumn width={6}><Header id="big-text2" color="red"  content="Location" /></GridColumn>
                    <GridColumn width={2}><Header id="big-text2" color="red" content="Volume" /></GridColumn>
                    <GridColumn width={2}><Header id="big-text2" color="red"  content="Status" /></GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn width={6}><p id="small_text2">Dec 15 2023</p></GridColumn>
                    <GridColumn width={6}><p id="small_text2">Dec 15 2023</p></GridColumn>
                    <GridColumn width={2}><p id="small_text2">Dec 15 2023</p></GridColumn>
                    <GridColumn width={2}><p id="big_text" style={{color: 'red' , fontWeight: 'bold'}}>Completed</p></GridColumn>
                </GridRow> 
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn width={6}><p id="small_text2">Jan 13 2024</p></GridColumn>
                    <GridColumn width={6}><p id="small_text2">Gifted hand hospital Lagos </p></GridColumn>
                    <GridColumn width={2}><p id="small_text2">250ml</p></GridColumn>
                    <GridColumn width={2}><p id="big_text" style={{color: '#000', fontWeight: 'bold'}}>Cancelled</p></GridColumn>
                </GridRow>
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn width={6}><p id="small_text2">May 15 2025</p></GridColumn>
                    <GridColumn width={6}><p id="small_text2">Free hand clinic Lagos </p></GridColumn>
                    <GridColumn width={2}><p id="small_text2">500ml</p></GridColumn>
                    <GridColumn width={2}><p id="big_text" style={{color: 'red', fontWeight: 'bold'}}>Completed</p></GridColumn>
                </GridRow> 
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn width={6}><p id="small_text2">Jul 30  2025</p></GridColumn>
                    <GridColumn width={6}><p id="small_text2">Alheri Hospital</p></GridColumn>
                    <GridColumn width={2}><p id="small_text2">350ml</p></GridColumn>
                    <GridColumn width={2}><p id="big_text" style={{color: 'red', fontWeight: 'bold'}}>Completed</p></GridColumn>
                </GridRow> 
                <GridRow as={Segment} style={{borderRadius: 15, backgroundColor: '#F7F2F3', padding: '20px 40px'}} basic>
                    <GridColumn width={6}><p id="small_text2">Sep 15 2025</p></GridColumn>
                    <GridColumn width={6}><p id="small_text2">Mayo clinic Lagos</p></GridColumn>
                    <GridColumn width={2}><p id="small_text2" >550ml</p></GridColumn>
                    <GridColumn width={2}><p id="big_text" style={{color: 'red', fontWeight: 'bold'}}>Completed</p></GridColumn>
                </GridRow> 

         </Grid>
        </div>

    )
}
export default TotalDonations