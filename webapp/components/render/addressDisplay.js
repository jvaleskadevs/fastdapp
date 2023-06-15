import { default as React, useState, useRef, useEffect } from 'react';
import { fetchEnsName } from '@wagmi/core'

const AddressDisplay = (props) => {
    const [ENS, setENS] = React.useState(null);

    function formatAddress(address) {
        return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length);
    }

    async function getInfo() {
        const ensName = await fetchEnsName({
            address: props.address,
        })
        setENS(ensName);
    }
    getInfo();
    
    // This will run only once
    useEffect(() => {
      
    }, []);

    return (
        <span>
            {ENS != null ? ENS : formatAddress(props.address)}
        </span >
    );
}

export default AddressDisplay;