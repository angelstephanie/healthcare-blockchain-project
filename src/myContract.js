import web3 from './web3';

const contract_address = '0xB6dD48fC33085f07B23C09062A6C122310b1Bb6B';

const abi =  [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "licenseId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "profId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "licenseType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "issueDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "expiryDate",
				"type": "string"
			}
		],
		"name": "addMedicalLicense",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "practiceId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "diagnosis",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "treatment",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "profId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "providerName",
				"type": "string"
			}
		],
		"name": "addMedicalPractice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "profId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "experience",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "addMedicalProfessional",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "providerName",
				"type": "string"
			}
		],
		"name": "addMedicalProvider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "providerName",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getAllMedicalLicenses",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "licenseId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "profId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "licenseType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issueDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "expiryDate",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.MedicalLicense[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMedicalPractices",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "practiceId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "patientName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "diagnosis",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "treatment",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "profId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "providerName",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.MedicalPractice[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMedicalProfessionals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "profId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "position",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "experience",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					}
				],
				"internalType": "struct Healthcare.MedicalProfessional[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMedicalProviders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "providerName",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.MedicalProvider[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "profId",
				"type": "uint256"
			}
		],
		"name": "getMedicalLicensesByProfId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "licenseId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "profId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "licenseType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issueDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "expiryDate",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.MedicalLicense[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "profId",
				"type": "uint256"
			}
		],
		"name": "getMedicalPracticesByProfId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "practiceId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "patientName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "diagnosis",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "treatment",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "profId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "providerName",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.MedicalPractice[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getMedicalProfessionalByProfAddress",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "profId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "position",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "experience",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					}
				],
				"internalType": "struct Healthcare.MedicalProfessional",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "profId",
				"type": "uint256"
			}
		],
		"name": "getMedicalProfessionalByProfId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "profId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "position",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "experience",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					}
				],
				"internalType": "struct Healthcare.MedicalProfessional",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getMedicalProvider",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "providerName",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.MedicalProvider",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isProfessionalAddressExist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isProvider",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, contract_address);
