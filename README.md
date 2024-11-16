# mm-interacts-evm
Margin Trading Exchanger of Meme on EVM

#### Download

```shell
git clone git@github.com:xiaoyu1998/mm-interacts-evm.git --recursive
```
#### Installation And Compile

```shell
cd mm-interacts-evm
npm install
```
#### Load Accounts And Sepolia Rpc
```shell
export ACCOUNT_KEY="privateKey1,privateKey2"
export SEPOLIA_URL=https://arb-sepolia.g.alchemy.com/v2/your_api_key

```
#### Create and Supply Pools
```shell
npx hardhat run scripts/00create.ts --network arbitrumSepolia
npx hardhat run scripts/01liquidity.ts --network arbitrumSepolia
```
#### Long and Short
```shell
npx hardhat run scripts/08long.ts --network arbitrumSepolia
npx hardhat run scripts/09short.ts --network arbitrumSepolia

```
#### Close Position
```shell
npx hardhat run scripts/10close.ts --network arbitrumSepolia

```