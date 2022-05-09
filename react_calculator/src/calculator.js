import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Calculator = () => {
    // Results stores the current results of the calculator
    const [results, setResults] = useState(0);
    
    // Operand stores the current operand
    const [operand, setOperand] = useState(null);
    
    // Term store the users term input
    const [inputTerm, setInputTerm] = useState(null);
    
    // showNumber determines which number should be seen,
    //  if true show results
    //  if false show inputTerm
    const [showNumber, setShowNumber] = useState(true);
    
    
    
    
    
    
    
    // Return object
    return(
        <Card>
            <Container>
                <Row>
                    <Card text="0">
                        <Card.Body id="results">{showNumber ? results : inputTerm}</Card.Body>
                    </Card>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="2"><Button size="lg" value="9" onClick={numberPress}>9</Button></Col>
                    <Col xs="2"><Button size="lg" value="8" onClick={numberPress}>8</Button></Col>
                    <Col xs="2"><Button size="lg" value="7" onClick={numberPress}>7</Button></Col>
                    <Col xs="2"><Button size="lg">-</Button></Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col xs="2"><Button size="lg" value="4" onClick={numberPress}>4</Button></Col>
                    <Col xs="2"><Button size="lg" value="5" onClick={numberPress}>5</Button></Col>
                    <Col xs="2"><Button size="lg" value="6" onClick={numberPress}>6</Button></Col>
                    <Col xs="2"><Button size="lg">+</Button></Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col xs="2"><Button size="lg" value="1" onClick={numberPress}>1</Button></Col>
                    <Col xs="2"><Button size="lg" value="2" onClick={numberPress}>2</Button></Col>
                    <Col xs="2"><Button size="lg" value="3" onClick={numberPress}>3</Button></Col>
                    <Col xs="2"><Button size="lg">x</Button></Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col xs="2"><Button size="lg">C</Button></Col>
                    <Col xs="2"><Button size="lg" value="0" onClick={numberPress}>0</Button></Col>
                    <Col xs="2"><Button size="lg">=</Button></Col>
                    <Col xs="2"><Button size="lg">/</Button></Col>
                </Row>
            </Container>
        </Card>    
    );
};

export default Calculator;
