import { Card } from "react-bootstrap";
import { StyledCardImage } from "./styling";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
return (
    <Card>
        <StyledCardImage variant="top" height="200px" src={imgUrl}/>
        <Card.Body className="d-flex flex-column">

        </Card.Body>
    </Card>
)
}

export default StoreItem;