import React from "react";
import { Button, Card } from "react-bootstrap";
import website from "../images/website.jpg";

const Projectscreen = () => {
  return (
    <div className="project">
      <div className="expscreen">
        <h6 className="know">Explore My Recent</h6>
        <h1>
          <strong>Projects</strong>
        </h1>
      </div>
      <div className="crd">
        <div>
          <Card style={{ width: "18rem", padding: "5%", backgroundColor:"wheat"}}>
            <Card.Img variant="top" src={website} />
            <Card.Body>
              <Card.Title>Proshop</Card.Title>
              <Card.Text>
                A fully functional E-Commerce website build using React, Redux,
                MangoDB and ExpressJS
              </Card.Text>
              <div className="demobut">
              <Button variant="secondary" size="sm"><a  style={{textDecoration:"none",color:"black"}}href="https://github.com/Nithishkuumar/Shoop">Github</a></Button>
                <Button variant="secondary" size="sm"><a style={{textDecoration:"none",color:"black"}}href="https://shoop-t94i.onrender.com/">Demo</a></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projectscreen;
