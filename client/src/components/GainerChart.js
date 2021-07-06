import React from 'react'
import { Bar } from 'react-chartjs-2'


const GainerChart = ({topTen}) => {
    return (
        <div>
            {topTen.length > 0 ? <Bar
            
            data = {
                { labels: [
                    topTen[0].name, 
                    topTen[1].name, 
                    topTen[2].name, 
                    topTen[3].name, 
                    topTen[4].name, 
                    topTen[5].name, 
                    topTen[6].name, 
                    topTen[7].name, 
                    topTen[8].name, 
                    topTen[9].name
                    ],

                    datasets: [
                        {
                            label: '',
                            data: [
                                topTen[0].price_change_percentage_24h.toFixed(2), 
                                topTen[1].price_change_percentage_24h.toFixed(2), 
                                topTen[2].price_change_percentage_24h.toFixed(2), 
                                topTen[3].price_change_percentage_24h.toFixed(2), 
                                topTen[4].price_change_percentage_24h.toFixed(2), 
                                topTen[5].price_change_percentage_24h.toFixed(2), 
                                topTen[6].price_change_percentage_24h.toFixed(2), 
                                topTen[7].price_change_percentage_24h.toFixed(2), 
                                topTen[8].price_change_percentage_24h.toFixed(2), 
                                topTen[9].price_change_percentage_24h.toFixed(2)
                                ],

                            backgroundColor: ['green'],
                            hoverBackgroundColor: ['dodgerblue'],
                            borderColor: ['green'],
                            borderWidth: 1,
                            indexAxis: 'y',
                            maxBarThickness: 5,
                            skipNull: true,
                        }
                    ]
                }
            }
            
                    height={300}
                    width={200}
                    options={{maintainAspectRatio: false}}

            /> : null}          
        </div>
    )
}

export default GainerChart
