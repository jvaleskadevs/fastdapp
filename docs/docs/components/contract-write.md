---
sidebar_label: 'Contract Write'
sidebar_position: 3
---

# Contract Write
This component is used to invite users to interact with a smart contract.

## Props

* `address`
* `ABI`
* `functionName`
* `args` an array containing the default parameters you want to use
* `buttonText` (optional)

## Example

```
<ContractWrite 
    address={TOKEN_ADDRESS} 
    abi={ABIs.ERC20} 
    functionName="transfer" 
    args={[TOKEN_RECIPIENT, 1]} />
```

## Advanced usage
### How to change the form label of a parameter?

If you want to change one of the parameter label in the input you can edit it's `name` in the input list.

### How to hide a parameter?

If you want one parameter to be hidden so the user can't change the default value you can add `hidden` inside of it's ABI definition.

```
<ContractWrite address={NFT_ADDRESS}  abi={[{
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "hidden": true
            },
            {
                "name": "Can manage my NFT?",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }]} 
  functionName="setApprovalForAll"
  args={[TOKEN_ADDRESS, true]}
   />
```

## TODO

Here is a list of things coming for the component:
* Manage token approvals
* Manage token decimals
* Specific input for numbers/addresses