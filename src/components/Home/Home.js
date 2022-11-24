import { withdraw, fundme } from "../../functionality";
import "./Home.css";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../constants";
import { checkBalanceValue } from "../../functionality";
export const HomePageComponents = ({ setnewvalue, value }) => {
  const onClickHandler = async () => {
    const newval = await checkBalanceValue();
    console.log(`Old value ${value}`);
    setnewvalue((oldValue) => newval);
    console.log(`New Value ${newval}`);
  };

  return (
    <div className="functionality">
      <h4>Contract funding amount</h4>
      <input id="ethamount"></input>
      <button onClick={fundme} className="btn">
        Fund Me
      </button>

      <button onClick={withdraw} className="btn">
        Withdraw
      </button>
      <button onClick={onClickHandler} className="btn">
        Contract Balance: {value ? `${value} ETH` : `None`}
      </button>
    </div>
  );
};
