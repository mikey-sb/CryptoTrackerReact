import React, { useEffect, useState } from 'react'
import GainerChart from './GainerChart'
import LoserChart from './LoserChart'

const Rankings = ({ allCrypto, getCrypto }) => {
    const [topTen, setTopTen] = useState([])
    const [bottomTen, setBottomTen] = useState([])

         // TOP 10 GAINERS ARRAY
         let sortedHigh =  allCrypto.sort(function(a,b){
            return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });
            
        let top_ten = sortedHigh.slice(0, 10);

         


        useEffect(() => {
            setTopTen(top_ten)
        }, [])

        console.log(top_ten)
    
        // TOP 10 LOSERS ARRAY
        let sortedLow = allCrypto.sort(function(a,b){
            return a.price_change_percentage_24h - b.price_change_percentage_24h;
            });
            
        let bottom_ten = sortedLow.slice(0, 10)   

        useEffect(() => {
            setBottomTen(sortedLow.slice(0, 10))
        }, [])

   

        return(
            <>
                        
            <div className="gainer-container">
                <GainerChart topTen={topTen}/>
            </div>
            <div className="loser-container">
                <LoserChart bottomTen={bottomTen}/>
            </div>

            </>
            )
 }

export default Rankings;