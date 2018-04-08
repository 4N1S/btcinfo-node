# BTCinfo Nodejs 

## Synopsis

This projects helps you to make HTTP requests to the blockexplorer (testnet,mainnet).


## Installation

```sh
npm install btcinfo-node
```

```javasctipt
const btcinfo = require('btcinfo-node');
```

```javasctipt
let network="testnet"; // or null 
const client = new btcinfo();

```

## API Index
The API is available  https://blockexplorer.com/api-ref


## Methods

* [getBalance](#getBalance)
* [getUtxo](#getUtxo)
* [getFee](#getFee)
* [pushtx](#pushtx)
* [streamBalance](#streamBalance)
* [streamUtxo](#streamUtxo)


### getBalance

**Response**

```javasctipt
[ 
  { balance: 47184715 }
]
```

**Examples**
Request:
    /getBalance

    param: 
    addr:token address 


```javasctipt
  addr="1CCoepQFZhTYBAPhPqdqphzw2Kq36amjHL";
  client.getBalance(addr,function (error, data) {
    if(error) console.log("E!",error)
    console.dir(data);

  });

```


### getUtxo

**Response**

```javasctipt
[  
  ...,{ 
    address: 'mmMPaW6LmHS83NdDTgtJSRJSnZbB88FLGU',
    txid: '50dec6ab40cdd19bd7625a030581de441f8b1e19279bb07f8e226fb24d375a3a',
    vout: 0,
    scriptPubKey: '76a9144001b36558caaa021b363089233e49a8d2ed56ba88ac',
    amount: 0.0000741,
    satoshis: 7410,
    height: 1291580,
    confirmations: 379 
  },.. 
]

```

**Examples**
Request:
    /getUtxo 

    param: 
    addr:token address 


```javasctipt
  client.getUtxo(addr,function (error, data) {
    if(error) console.log("E!",error)
    console.dir(data);

  });

```

### getFee

**Response**

```javasctipt

{ 
  fastestFee: 30, 
  halfHourFee: 30, 
  hourFee: 10 
}

```

**Examples**
Request:
    /getFee 


```javasctipt
client.getFee(function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);

});

```
### pushtx

**Response**

```javasctipt

{ 
  txid: 'd8b42dcfe5f8937061110a57f337c7dceaa4b38492d4d02086b1793d6090648f' 
}

```

**Examples**
Request:
    /pushtx 

    param: 
    transaction:transaction signed (format hexa)


```javasctipt
transaction="0100000002690284e35e6517b9fc43bf40516e173572c23d888905a59168d33a1cde863adc010000006b483045022100ebe803060992ed6bc1f1b753865da0158c6bc1591bb004e0250cf1f372df34b602200272622aca18adfc760b79e8681351abe3f908a678fc66b3735efba11687ce0f012102cbd5d6a7afa18a049e2aee5dada7e5d2aac754e3c02bd4f638bda2074abd7702ffffffffe72172aad6eb59d3bfaffe5cdd5882c37ff52b71df7ef7cba978033e6597bf17000000006a47304402201a1640b372bb17c531cedf24122f06a301a61926365735278a245e180e42b9cd02203f291505e66c162a314fe80ec546908c775be45ef55d164b87d69223cccc98fa012102cbd5d6a7afa18a049e2aee5dada7e5d2aac754e3c02bd4f638bda2074abd7702ffffffff0240640100000000001976a9143e113c16394a5b3e8c9e77077e83ff6c32719e5488ac801f0100000000001976a9144001b36558caaa021b363089233e49a8d2ed56ba88ac00000000";

client.pushtx(transaction,function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);

});

```

### streamBalance

**Response**

```javasctipt
[ 
  { balance: 47184715 }
]
```

**Examples**
Request:
    /getBalance

    param: 
    addr:token address 


```javasctipt
  addr="1CCoepQFZhTYBAPhPqdqphzw2Kq36amjHL";
  client.streamBalance(addr,function (error, data) {
    if(error) console.log("E!",error)
    console.dir(data);

  });

```


### streamUtxo

**Response**

```javasctipt
[  
  ...,{ 
    address: 'mmMPaW6LmHS83NdDTgtJSRJSnZbB88FLGU',
    txid: '50dec6ab40cdd19bd7625a030581de441f8b1e19279bb07f8e226fb24d375a3a',
    vout: 0,
    scriptPubKey: '76a9144001b36558caaa021b363089233e49a8d2ed56ba88ac',
    amount: 0.0000741,
    satoshis: 7410,
    height: 1291580,
    confirmations: 379 
  },.. 
]

```

**Examples**
Request:
    /getUtxo 

    param: 
    addr:token address 


```javasctipt
  client.streamUtxo(addr,function (error, data) {
    if(error) console.log("E!",error)
    console.dir(data);

  });

```

## API Reference

https://blockexplorer.com/api-ref

## Contributors

Anis Haboubi

## License

See [LICENSE.txt](LICENSE.txt) for more info.