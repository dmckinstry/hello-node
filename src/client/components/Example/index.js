import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export const Example = () => {
    const [clicks, setClicks] = useState(0);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Just small component</Card.Title>
                <Card.Text>
                    Rerender will reset the counter
                </Card.Text>
                <Card.Text>
                    Currently: {clicks} clicks
                </Card.Text>
                <Button data-testid="button" variant="info" onClick={() => setClicks(clicks + 1)}>Click to increase</Button>
            </Card.Body>
        </Card>
    );
}
