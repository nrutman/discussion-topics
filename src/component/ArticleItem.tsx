import {Col, Row} from "react-bootstrap";
import {BiComment, BiCommentCheck} from "react-icons/all";
import {Article} from "../lib/Article";
import {useState} from "react";

type ArticleItemProps = {
    article: Article;
};

const ArticleItem = ({article}: ArticleItemProps) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Row onClick={() => {setIsChecked(!isChecked)}}>
            <Col md="auto">
                {isChecked ? <BiCommentCheck size={30} /> : <BiComment size={30} color={"lightGray"} />}
            </Col>
            <Col>
                {article.title}
            </Col>
        </Row>
    );
};

export default ArticleItem;
