import React from "react";
import Card from 'react-bootstrap/Card';

const StatisticCardComponent: React.FC = () => {
    // This component is for side Statics card for both Platform and Artist Stastics
    // so the header should be passed and also the list of stastics
    // the function should accept two things hedaers name, and array of statstics 
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Platform Statistics</Card.Title>
                    <Card.Text>Total Number of Songs: <mark>100</mark></Card.Text>
                    <Card.Text>Total Number of Artists: <mark>100</mark></Card.Text>
                    <Card.Text>Total Number of Albums: <mark>100</mark></Card.Text>
            </Card.Body>
        </Card>        
    )
}
export default StatisticCardComponent;