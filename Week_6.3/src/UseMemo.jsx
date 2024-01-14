import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [exchange1, setExchange1] = useState({});
    const [exchange2, setExchange2] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(() => {
        setExchange1({returns: 200});
    },[]);

    useEffect(() => {
        setExchange2({returns: 300});
    },[]);

    useEffect(() => {
        setTimeout(() => {
            setBankData({ income: 400 });
        },5000);
    },[]);

    // Is there a need to recalculate the cryptoReturns here only if the bandData is changing? No, right. Here comes the concept of useMemo.So, despite doing this, 
    // const cryptoReturns = exchange1.returns + exchange2.returns;


    // With the help of useMemo, the following cryptoREturns will be recalculated only if the exchange1 or exchange2 value changes and somehow cached the previously calculated value on its end.
    const cryptoReturns = useMemo(() => {
        console.log("Calculating crypto returns")
        return exchange1.returns + exchange2.returns;
    },[exchange1, exchange2]);

    
    const totalTax = (cryptoReturns + bankData.income) * 0.3;

    return (
        <div>
            Hi there, your total taxt is: {totalTax}
        </div>
    )
}

export default UseMemo
