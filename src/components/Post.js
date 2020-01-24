import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Post = (props) => (
    <div className="p-3">
        <Card >
            <Card.Img variant="top" src="plane.jpeg" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.excerpt}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>    
    </div>
    
);

export default Post;



// define( 'DB_NAME', "admin_mmoves_dev1" );

// define( 'DB_USER', "mmoves_dev1" );

// define( 'DB_PASSWORD', "*71mTm2d" );

// define( 'DB_HOST', "localhost" );