import { ethers } from "ethers";
import { abi, contractAddress } from "./constants";

let contract;
let signer;
if (typeof window.ethereum !== `undefined`) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  // contract is created the following way => new ethers.Contract(contrAddr, abi, signer)
  contract = new ethers.Contract(contractAddress, abi, signer);
}

export const withdraw = async (e) => {
  const wdAmount = (
    (await checkBalanceValue()) * 1000000000000000000
  ).toString();
  console.log(`Withdrawing... ${wdAmount / 1000000000000000000} ETH`);
  if (wdAmount != 0) {
    const transactionResponse = await contract.withdraw();
  }
};

export const fundme = async (ethAmount) => {
  try {
    const ethamount = document.getElementById(`ethamount`).value.toString();
    console.log(`Funding with ${ethamount}`);

    const transactionResponse = await contract.fund({
      value: ethers.utils.parseEther(ethamount),
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const checkBalanceValue = async () => {
  let contract;
  let signer;
  let balance;
  if (typeof window.ethereum !== `undefined`) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    // contract is created the following way => new ethers.Contract(contrAddr, abi, signer)
    contract = new ethers.Contract(contractAddress, abi, signer);
    balance = provider.getBalance(contractAddress);
  }
  const bal = await balance;
  const num = Number(bal) / 1000000000000000000;
  console.log(num);
  return num;
};

export const listenForTransactionMine = (transactionResponse, provider) => {};
