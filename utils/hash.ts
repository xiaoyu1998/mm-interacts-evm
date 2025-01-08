
const { AbiCoder, keccak256, toUtf8Bytes } = ethers;

export function hashData(dataTypes, dataValues) {
  const bytes = AbiCoder.defaultAbiCoder().encode(dataTypes, dataValues);
  const hash = keccak256(bytes);

  return hash;
}

export function hashString(string) {
  return hashData(["string"], [string]);
}

export function keccakString(string) {
  return keccak256(toUtf8Bytes(string));
}


// export function hashData(dataTypes: string[], dataValues: any[]): string {
//   // Create an instance of AbiCoder
//   const abiCoder = new AbiCoder();
  
//   // Encode the data
//   const encodedData = abiCoder.encode(dataTypes, dataValues);
  
//   // Hash the encoded data
//   const hash = keccak256(encodedData);

//   return hash;
// }

export function poolKey(token0: string, token1: string):string{
  const POOL = hashString("POOL");
  [token0, token1] = token0.toLowerCase() < token1.toLowerCase()
    ?[token0, token1]
    :[token1, token0];
  return hashData(
    ["bytes32", "address", "address"], 
    [POOL, token0, token1]
  );
}