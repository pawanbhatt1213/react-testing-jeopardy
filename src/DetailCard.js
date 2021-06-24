import React, { useState } from 'react';
import { Card, ListGroup } from "react-bootstrap";

export default function DetailCard({row}) {
    const [show, setShow] = useState(false)
    return (
            <Card className="my-5 text-center" style={{borderWidth: "medium"}}>
                <ListGroup variant="flush">
                    <ListGroup.Item><h5>Points: {row.value || "Unknown"}</h5></ListGroup.Item>
                    <ListGroup.Item onClick={() => setShow(() => !show)}><b>Q. </b> {row.question}</ListGroup.Item>
                    {
                        show && <ListGroup.Item><b>Ans: </b> {row.answer}</ListGroup.Item>
                    }   
                </ListGroup>
            </Card>
    )
}
