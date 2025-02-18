import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { poolKey} from "../utils/hash"
import { POOL_BASE, POOL_MEME} from "../utils/constants";
import { getPools, getPositions } from "../utils/reader"

import { SwapUtils } from "../typechain-types/contracts/exchange/SwapHandler";


async function main() {
    const [owner] = await ethers.getSigners();

    const config = await getContract("Config");
    const multicallArgs = [
        config.interface.encodeFunctionData("setMarginLevelThreshold", [expandDecimals(130, 25)]),//110%
    ];
    await sendTxn(config.multicall(multicallArgs), "config.multicall");

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })