
let contractABIs = {
        "MultiSigWalletWithDailyLimit": [{
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "owners",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "owner",
                    "type": "address"
                }],
                "name": "removeOwner",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "revokeConfirmation",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "address"
                }],
                "name": "isOwner",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                }],
                "name": "confirmations",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "pending",
                    "type": "bool"
                },
                {
                    "name": "executed",
                    "type": "bool"
                }],
                "name": "getTransactionCount",
                "outputs": [{
                    "name": "count",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "owner",
                    "type": "address"
                }],
                "name": "addOwner",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "isConfirmed",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "getConfirmationCount",
                "outputs": [{
                    "name": "count",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "transactions",
                "outputs": [{
                    "name": "destination",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "name": "executed",
                    "type": "bool"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getOwners",
                "outputs": [{
                    "name": "",
                    "type": "address[]"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "from",
                    "type": "uint256"
                },
                {
                    "name": "to",
                    "type": "uint256"
                },
                {
                    "name": "pending",
                    "type": "bool"
                },
                {
                    "name": "executed",
                    "type": "bool"
                }],
                "name": "getTransactionIds",
                "outputs": [{
                    "name": "_transactionIds",
                    "type": "uint256[]"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "getConfirmations",
                "outputs": [{
                    "name": "_confirmations",
                    "type": "address[]"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "transactionCount",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_required",
                    "type": "uint256"
                }],
                "name": "changeRequirement",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "confirmTransaction",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "destination",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes"
                }],
                "name": "submitTransaction",
                "outputs": [{
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "MAX_OWNER_COUNT",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "required",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address"
                }],
                "name": "replaceOwner",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "executeTransaction",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "inputs": [{
                    "name": "_owners",
                    "type": "address[]"
                },
                {
                    "name": "_required",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "constructor",
                "stateMutability": "nonpayable"
            },
            {
                "payable": true,
                "type": "fallback",
                "stateMutability": "payable"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "Confirmation",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "Revocation",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "Submission",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "Execution",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }],
                "name": "ExecutionFailure",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }],
                "name": "Deposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                }],
                "name": "OwnerAddition",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                }],
                "name": "OwnerRemoval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "name": "required",
                    "type": "uint256"
                }],
                "name": "RequirementChange",
                "type": "event"
            }],
            
        "DutchAuction": [{
                "constant": false,
                "inputs": [{
                    "name": "_bidderAddrs",
                    "type": "address[]"
                }],
                "name": "addArrayToWhitelist",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "_addr",
                    "type": "address"
                }],
                "name": "isInWhitelist",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "virtuePlayerPoints",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "MAX_TOKENS_SOLD",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "_startIdx",
                    "type": "uint256"
                },
                {
                    "name": "_count",
                    "type": "uint256"
                }],
                "name": "whitelistEntries",
                "outputs": [{
                    "name": "",
                    "type": "address[]"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "address"
                }],
                "name": "whitelistIndexMap",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "endTime",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_ceiling",
                    "type": "uint256"
                },
                {
                    "name": "_priceFactor",
                    "type": "uint256"
                }],
                "name": "changeSettings",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "calcTokenPrice",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "startBlock",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "wallet",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "bidderWhitelist",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "address"
                }],
                "name": "bids",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_virtuePlayerPoints",
                    "type": "address"
                }],
                "name": "setup",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "startAuction",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "WAITING_PERIOD",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "ceiling",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_bidderAddr",
                    "type": "address"
                }],
                "name": "removeFromWhitelist",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "receiver",
                    "type": "address"
                }],
                "name": "bid",
                "outputs": [{
                    "name": "amount",
                    "type": "uint256"
                }],
                "payable": true,
                "type": "function",
                "stateMutability": "payable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalReceived",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "finalPrice",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "stage",
                "outputs": [{
                    "name": "",
                    "type": "uint8"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "updateStage",
                "outputs": [{
                    "name": "",
                    "type": "uint8"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "calcCurrentTokenPrice",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "calcStopPrice",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "receiver",
                    "type": "address"
                }],
                "name": "claimTokens",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "priceFactor",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_bidderAddr",
                    "type": "address"
                }],
                "name": "addToWhitelist",
                "outputs": [],
                "payable": false,
                "type": "function",
                "stateMutability": "nonpayable"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "whitelistCount",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "function",
                "stateMutability": "view"
            },
            {
                "inputs": [{
                    "name": "_wallet",
                    "type": "address"
                },
                {
                    "name": "_ceiling",
                    "type": "uint256"
                },
                {
                    "name": "_priceFactor",
                    "type": "uint256"
                }],
                "payable": false,
                "type": "constructor",
                "stateMutability": "nonpayable"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }],
                "name": "BidSubmission",
                "type": "event"
            }],
            
        "VirtuePlayerPoints": [{
                    "constant": false,
                    "inputs": [{
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }],
                    "name": "approve",
                    "outputs": [{
                        "name": "",
                        "type": "bool"
                    }],
                    "payable": false,
                    "type": "function",
                    "stateMutability": "nonpayable"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [{
                        "name": "",
                        "type": "uint256"
                    }],
                    "payable": false,
                    "type": "function",
                    "stateMutability": "view"
                },
                {
                    "constant": false,
                    "inputs": [{
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }],
                    "name": "transferFrom",
                    "outputs": [{
                        "name": "",
                        "type": "bool"
                    }],
                    "payable": false,
                    "type": "function",
                    "stateMutability": "nonpayable"
                },
                {
                    "constant": true,
                    "inputs": [{
                        "name": "_owner",
                        "type": "address"
                    }],
                    "name": "balanceOf",
                    "outputs": [{
                        "name": "",
                        "type": "uint256"
                    }],
                    "payable": false,
                    "type": "function",
                    "stateMutability": "view"
                },
                {
                    "constant": false,
                    "inputs": [{
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }],
                    "name": "transfer",
                    "outputs": [{
                        "name": "",
                        "type": "bool"
                    }],
                    "payable": false,
                    "type": "function",
                    "stateMutability": "nonpayable"
                },
                {
                    "constant": true,
                    "inputs": [{
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }],
                    "name": "allowance",
                    "outputs": [{
                        "name": "",
                        "type": "uint256"
                    }],
                    "payable": false,
                    "type": "function",
                    "stateMutability": "view"
                },
                {
                    "anonymous": false,
                    "inputs": [{
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [{
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }],
                    "name": "Approval",
                    "type": "event"
                }]                
                
                
   };

function contractList()
{
    return Object.keys(contractABIs);
}


export { contractABIs, contractList };


        