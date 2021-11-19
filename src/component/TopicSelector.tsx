import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TrendingTopicList from "./TrendingTopicList";

const TopicSelector = () => (
    <Container>
        <Row>
            <Col>
                <h1>Trending Topics</h1>
                <TrendingTopicList />
            </Col>
        </Row>
    </Container>
);

export default TopicSelector;
