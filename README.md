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
#### Load Accounts
```shell
export ACCOUNT_KEY="privateKey1,privateKey2"

```
#### Create and Supply Pools
```shell
npx hardhat run scripts/01create.ts --network arbitrumGoerli
npx hardhat run scripts/01liquidity.ts --network arbitrumGoerli
```
#### Long and Short
```shell
npx hardhat run scripts/08long.ts --network arbitrumGoerli
npx hardhat run scripts/09short.ts --network arbitrumGoerli

```
#### Close Position
```shell
npx hardhat run scripts/10close.ts --network arbitrumGoerli

```