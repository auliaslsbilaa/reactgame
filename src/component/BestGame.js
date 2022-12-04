import { Container, Row, Col, Card, Image} from "react-bootstrap";
import back4bloodImage from "../asset/best/back4blood.jpg"
import crysis3Image from "../asset/best/crysis3.jpg"
import residentEvil2Image from "../asset/best/residentEvil2.jpg"
import theWalkingDeadImage from "../asset/best/theWalkingDead.jpg"
import thiefImage from "../asset/best/thief.jpg"
import untilDawnImage from "../asset/best/untilDawn.jpg"

const BestGame= () => {
    return(
    <div>
       <Container>
           <br/>
           <h1 className="text-white text-center" id="trending">TRENDING GAMES</h1>
           <br/>
           <Row>
               <Col md={4}>
                   <Card className="gameImage">
                       <Image src={back4bloodImage} alt="Minecraft Game" className="images"/>
                       <div className="bg-dark">
                           <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">A</Card.Title>
                           <Card.Text className="text-left">
                               This is wider card with natural lead-in to additional content
                           </Card.Text>
                           <Card.Text className="text-left">
                           Last updated 3 mins ago
                           </Card.Text>
                           </div>
                       </div>
                   </Card>
               </Col>
               <Col md={4}>
                   <Card className="gameImage">
                       <Image src={crysis3Image} alt="Minecraft Game" className="images"/>
                       <div className="bg-dark">
                           <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">A</Card.Title>
                           <Card.Text className="text-left">
                               This is wider card with natural lead-in to additional content
                           </Card.Text>
                           <Card.Text className="text-left">
                           Last updated 3 mins ago
                           </Card.Text>
                           </div>
                       </div>
                   </Card>
               </Col>
               <Col md={4}>
                   <Card className="gameImage">
                       <Image src={residentEvil2Image} alt="Minecraft Game" className="images"/>
                       <div className="bg-dark">
                           <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">A</Card.Title>
                           <Card.Text className="text-left">
                               This is wider card with natural lead-in to additional content
                           </Card.Text>
                           <Card.Text className="text-left">
                           Last updated 3 mins ago
                           </Card.Text>
                           </div>
                       </div>
                   </Card>
               </Col>
               <Col md={4}>
                   <Card className="gameImage">
                       <Image src={theWalkingDeadImage} alt="Minecraft Game" className="images"/>
                       <div className="bg-dark">
                           <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">A</Card.Title>
                           <Card.Text className="text-left">
                               This is wider card with natural lead-in to additional content
                           </Card.Text>
                           <Card.Text className="text-left">
                           Last updated 3 mins ago
                           </Card.Text>
                           </div>
                       </div>
                   </Card>
               </Col>
               <Col md={4}>
                   <Card className="gameImage">
                       <Image src={thiefImage} alt="Minecraft Game" className="images"/>
                       <div className="bg-dark">
                           <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">A</Card.Title>
                           <Card.Text className="text-left">
                               This is wider card with natural lead-in to additional content
                           </Card.Text>
                           <Card.Text className="text-left">
                           Last updated 3 mins ago
                           </Card.Text>
                           </div>
                       </div>
                   </Card>
               </Col>
               <Col md={4}>
                   <Card className="gameImage">
                       <Image src={untilDawnImage} alt="Minecraft Game" className="images"/>
                       <div className="bg-dark">
                           <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">A</Card.Title>
                           <Card.Text className="text-left">
                               This is wider card with natural lead-in to additional content
                           </Card.Text>
                           <Card.Text className="text-left">
                           Last updated 3 mins ago
                           </Card.Text>
                           </div>
                       </div>
                   </Card>
               </Col>
               
           </Row>
       </Container>
    </div>
    )
}
export default BestGame;