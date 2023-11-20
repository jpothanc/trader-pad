import { Badge } from "react-bootstrap";

type Props = {
  header: string;
  value: any;
  color?: string;
};
const SummaryBarItem = ({ header, value, color = "danger" }: Props) => {
  return (
    <>
      <div className="summary__item">
        <div className="summary__item__value">{value}</div>
        <div className="summary__item__header">
          <Badge pill bg={color}>
            <span className="summary__item__header__badge">{header}</span>
          </Badge>
        </div>
      </div>
    </>
  );
};

export default SummaryBarItem;
