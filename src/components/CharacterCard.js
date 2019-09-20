import React from "react";
import axios from 'axios';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {
  console.log(props);
return (
    <Card>
      <CardImg top width="100%" src={props.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>Name:{props.name}</CardTitle>
        <CardSubtitle>status:{props.status}</CardSubtitle>
        <CardText>gender:{props.gender}</CardText>
        {/* <Button>Button</Button> */}
      </CardBody>
    </Card>
);
};