import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [bankData, setBankData] = useState({});
    const [exchangeReturns, setExchangeReturns] = useState({});

    useEffect(() => {
        setBankData({income: 100});
        setExchangeReturns({returns: 1000});
    },[])

    const tax = (bankData.income + exchangeReturns.returns) * 0.3;
    return (
        <div>
            Your tax is: {tax}
        </div>
    )
}

export default UseEffect
