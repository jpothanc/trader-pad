import { Badge } from "react-bootstrap";

const SummaryBar = () => {
  return (
    <>
      <div className="summary">
        <div className="summary__item">
          <div className="summary__item__value">10</div>
          <div className="summary__item__header">
            <Badge pill bg="danger">
              <span className="summary__item__header__badge">tickets</span>
            </Badge>
          </div>
        </div>

        <div className="summary__item">
          <div className="summary__item__value">1000</div>
          <div className="summary__item__header">
            <Badge pill bg="danger">
              <span className="summary__item__header__badge">size</span>
            </Badge>
          </div>
        </div>

        <div className="summary__item">
          <div className="summary__item__value">15,000 HKD</div>
          <div className="summary__item__header">
            <Badge pill bg="danger">
              <span className="summary__item__header__badge">notional</span>
            </Badge>
          </div>
        </div>
        <div className="summary__item">
          <div className="summary__item__value">1200</div>
          <div className="summary__item__header">
            <Badge pill bg="danger">
              <span className="summary__item__header__badge">usd notional</span>
            </Badge>
          </div>
        </div>

        <div className="summary__item">
          <div className="summary__item__value">45.18</div>
          <div className="summary__item__header">
            <Badge pill bg="success">
              <span className="summary__item__header__badge">vwap</span>
            </Badge>
          </div>
        </div>

        <div className="summary__item">
          <div className="summary__item__value">volume</div>
          <div className="summary__item__header">
            <Badge pill bg="success">
              <span className="summary__item__header__badge">volume</span>
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryBar;
