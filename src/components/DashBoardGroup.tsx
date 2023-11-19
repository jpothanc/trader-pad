import { Badge, Card } from "react-bootstrap";

import { getIconByName, openExternalLink } from "../utils/helper";
import { useNavigate } from "react-router";
import { DashGroup } from "../models/DashItem";

type Props = {
  dashGroup: DashGroup;
};

const DashBoardGroup = ({ dashGroup }: Props) => {
  const variant = "Primary";
  const navigate = useNavigate();

  const routePage = (route: string, type: string) => {
    if (type === "internal") navigate(route);
    else openExternalLink(route);
  };

  return (
    <>
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "15rem" }}
        className="mb-2"
      >
        <Card.Header>
          <div className="dash-header">
            <div className="dash-icon">
              {getIconByName(dashGroup.groupIcon, "20px")}
            </div>
            <div className="dash-text">{dashGroup.group}</div>
          </div>
        </Card.Header>
        <Card.Body className="dash-group">
          {dashGroup?.items.map((dashItem) => (
            <div className="dash-item">
              <span
                onClick={() =>
                  routePage(
                    dashItem?.route || "/",
                    dashItem?.routeType || "internal"
                  )
                }
              >
                {dashItem.title}
              </span>
              <Badge bg="success">
                <span className="dash-badge">{dashItem.description}</span>
              </Badge>
            </div>
          ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default DashBoardGroup;
