const WHITELIST_CONTRACT_ADDRESS = "0x112114ff98eCC239383e0Eb034DA1f44E4715381";
const abi = [
    {
        inputs: [
            {
                internalType: "uint8",
                name: "_maxWhitelistedAddresses",
                type: "uint8",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "addAddressToWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "maxWhitelistedAddresses",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "numAddressesWhitelisted",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "whitelistedAddresses",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

export { WHITELIST_CONTRACT_ADDRESS, abi };
