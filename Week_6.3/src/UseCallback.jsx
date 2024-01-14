import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [exchange1, setExchange1] = useState({});
    const [exchange2, setExchange2] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(() => {
        setExchange1({ returns: 200 });
    }, []);

    useEffect(() => {
        setExchange2({ returns: 300 });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setBankData({ income: 400 });
        }, 5000);
    }, []);

    // as you are calculating the crypto returns in the useMemo and then getting overall result in the cryptoResult variable, you can memoize the whole logic for the calculation and then use it in the place of the crytpoResult variable.
    // const cryptoReturns = useMemo(() => {
    //     console.log("Calculating crypto returns")
    //     return exchange1.returns + exchange2.returns;
    // }, [exchange1, exchange2]);


    // If we do this, again and again the function will be called recursively one upon the another which will re-render the components as well. In order to fix the function call, we use useCallback which is a react hook which has the capability to memoize the function.
    // useCallback() is not about the minimizing the amount of code that is run.
    // useCallback() is about not rendering a child component, if the function hasn't/doesn't changed across renders. If the dependency state variables changes, the function will be called again leading to the calculation.

    const calculateCryptoReturns = useCallback( () => {
        return exchange1.returns + exchange2.returns;
    }, [exchange1, exchange2]);

    const totalTax = (calculateCryptoReturns() + bankData.income) * 0.3;

    return (
        <>
            <CryptoReturnCalculator calculateCryptoReturns={calculateCryptoReturns} />
        </>
    )
}

const CryptoReturnCalculator = memo(({calculateCryptoReturns}) => {
    console.log("Calculating crypto component re-rendered");

    return (
        <div>
            <h1>Calculating crypto returns</h1>
            <h2>{calculateCryptoReturns()}</h2>
        </div>
    )
});

export default UseMemo
