var abi = [
  {
    "contractName": "DumbContract",
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          }
        ],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a72305820beabd33fbf582da8b18637598bda4bb88d781de6868d152874ac9ea373b6d61e0029",
    "deployedBytecode": "0x6080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a72305820beabd33fbf582da8b18637598bda4bb88d781de6868d152874ac9ea373b6d61e0029",
    "sourceMap": "26:193:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:193:0;;;;;;;",
    "deployedSourceMap": "26:193:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;76:59;;8:9:-1;5:2;;;30:1;27;20:12;5:2;76:59:0;;;;;;;;;;;;;;;;;;;;;;;;;;141:76;;8:9:-1;5:2;;;30:1;27;20:12;5:2;141:76:0;;;;;;;;;;;;;;;;;;;;;;;76:59;127:1;114:10;:14;;;;76:59;:::o;141:76::-;177:4;200:10;;193:17;;141:76;:::o",
    "source": "pragma solidity ^0.4.23;\n\ncontract DumbContract {\n    uint storedData;\n\n    function set(uint x) public {\n        storedData = x;\n    }\n\n    function get() public view returns (uint) {\n        return storedData;\n    }\n}\n",
    "sourcePath": "/Users/ctufaro/My Projects/EtherContracts/contracts/DumbContract.sol",
    "ast": {
      "absolutePath": "/Users/ctufaro/My Projects/EtherContracts/contracts/DumbContract.sol",
      "exportedSymbols": {
        "DumbContract": [
          22
        ]
      },
      "id": 23,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".23"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 22,
          "linearizedBaseContracts": [
            22
          ],
          "name": "DumbContract",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "storedData",
              "nodeType": "VariableDeclaration",
              "scope": 22,
              "src": "54:15:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 2,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "54:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "104:31:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 8,
                        "name": "storedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "114:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 9,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "127:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "114:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "114:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 13,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "set",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 6,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5,
                    "name": "x",
                    "nodeType": "VariableDeclaration",
                    "scope": 13,
                    "src": "89:6:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 4,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "89:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "88:8:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "104:0:0"
              },
              "scope": 22,
              "src": "76:59:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 20,
                "nodeType": "Block",
                "src": "183:34:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 18,
                      "name": "storedData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "200:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 17,
                    "id": 19,
                    "nodeType": "Return",
                    "src": "193:17:0"
                  }
                ]
              },
              "documentation": null,
              "id": 21,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "get",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 14,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "153:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 16,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 21,
                    "src": "177:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 15,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "177:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "176:6:0"
              },
              "scope": 22,
              "src": "141:76:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 23,
          "src": "26:193:0"
        }
      ],
      "src": "0:220:0"
    },
    "legacyAST": {
      "absolutePath": "/Users/ctufaro/My Projects/EtherContracts/contracts/DumbContract.sol",
      "exportedSymbols": {
        "DumbContract": [
          22
        ]
      },
      "id": 23,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".23"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 22,
          "linearizedBaseContracts": [
            22
          ],
          "name": "DumbContract",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "storedData",
              "nodeType": "VariableDeclaration",
              "scope": 22,
              "src": "54:15:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 2,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "54:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "104:31:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 8,
                        "name": "storedData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "114:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 9,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "127:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "114:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "114:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 13,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "set",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 6,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5,
                    "name": "x",
                    "nodeType": "VariableDeclaration",
                    "scope": 13,
                    "src": "89:6:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 4,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "89:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "88:8:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "104:0:0"
              },
              "scope": 22,
              "src": "76:59:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 20,
                "nodeType": "Block",
                "src": "183:34:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 18,
                      "name": "storedData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "200:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 17,
                    "id": 19,
                    "nodeType": "Return",
                    "src": "193:17:0"
                  }
                ]
              },
              "documentation": null,
              "id": 21,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "get",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 14,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "153:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 16,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 21,
                    "src": "177:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 15,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "177:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "176:6:0"
              },
              "scope": 22,
              "src": "141:76:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 23,
          "src": "26:193:0"
        }
      ],
      "src": "0:220:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {
      "4447": {
        "events": {},
        "links": {},
        "address": "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
        "transactionHash": "0xc6941cf52e4641ec0235ca99b5fe87ae39ee45b5e276882596d3aebcecb192f4"
      }
    },
    "schemaVersion": "2.0.1",
    "updatedAt": "2018-11-18T17:55:13.020Z"
  }
];
