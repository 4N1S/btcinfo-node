const btcinfo = require('../index.js');
// Public API
// const api_key =api_key,
// 	  api_key_public=api_key_public;
let network="testnet";
const client = new btcinfo();
let addr,
	transaction;

//****************//
//*FUNCTIONS GET**//
//****************//
//testnet
// addr="mmMPaW6LmHS83NdDTgtJSRJSnZbB88FLGU";
//mainnet
addr="1CCoepQFZhTYBAPhPqdqphzw2Kq36amjHL";
client.getBalance(addr,function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);

});

// client.getUtxo(addr,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);

// });


client.getFee(function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);

});


//****************//
//*FUNCTIONS POST*//
//****************//

//transaction en hexa
// transaction="0100000002690284e35e6517b9fc43bf40516e173572c23d888905a59168d33a1cde863adc010000006b483045022100ebe803060992ed6bc1f1b753865da0158c6bc1591bb004e0250cf1f372df34b602200272622aca18adfc760b79e8681351abe3f908a678fc66b3735efba11687ce0f012102cbd5d6a7afa18a049e2aee5dada7e5d2aac754e3c02bd4f638bda2074abd7702ffffffffe72172aad6eb59d3bfaffe5cdd5882c37ff52b71df7ef7cba978033e6597bf17000000006a47304402201a1640b372bb17c531cedf24122f06a301a61926365735278a245e180e42b9cd02203f291505e66c162a314fe80ec546908c775be45ef55d164b87d69223cccc98fa012102cbd5d6a7afa18a049e2aee5dada7e5d2aac754e3c02bd4f638bda2074abd7702ffffffff0240640100000000001976a9143e113c16394a5b3e8c9e77077e83ff6c32719e5488ac801f0100000000001976a9144001b36558caaa021b363089233e49a8d2ed56ba88ac00000000";
// client.pushtx(transaction,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);

// });


//******************//
//*FUNCTIONS STREAM*//
//******************//

// client.streamBalance(addr,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);

// });

// client.streamUtxo(addr,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);

// });


