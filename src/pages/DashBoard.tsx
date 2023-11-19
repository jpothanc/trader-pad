import config from "../config/config.json";
import DashBoardGroup from "../components/DashBoardGroup";

const DashBoard = () => {
  return (
    <>
      <div className="dash-container">
        <div className="dash-container__body">
          {config.app.dashItems.map((dashGroup) => (
            <DashBoardGroup dashGroup={dashGroup} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
