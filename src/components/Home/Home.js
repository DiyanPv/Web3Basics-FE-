import { checkBalance, withdraw, fundme } from "../../functionality";
import "./Home.css";
export const HomePageComponents = () => {
  return (
    <div className="functionality">
      <button onClick={fundme} className="btn">
        Fund Me
      </button>
      <button onClick={withdraw} className="btn">
        Withdraw
      </button>
      <button onClick={checkBalance} className="btn">
        Contract Balance
      </button>
    </div>
  );
};
