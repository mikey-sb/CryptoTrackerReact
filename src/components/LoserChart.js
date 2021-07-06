import React from 'react'
import { Bar } from 'react-chartjs-2'


const LoserChart = ({bottomTen}) => {
    return (
        <div>
            {bottomTen.length > 0 ? <Bar
            
            data = {
                { labels: [
                    bottomTen[0].name, 
                    bottomTen[1].name, 
                    bottomTen[2].name, 
                    bottomTen[3].name, 
                    bottomTen[4].name, 
                    bottomTen[5].name, 
                    bottomTen[6].name, 
                    bottomTen[7].name, 
                    bottomTen[8].name, 
                    bottomTen[9].name
                    ],

                    datasets: [
                        {
                            label: '',
                            data: [
                                bottomTen[0].price_change_percentage_24h.toFixed(2), 
                                bottomTen[1].price_change_percentage_24h.toFixed(2), 
                                bottomTen[2].price_change_percentage_24h.toFixed(2), 
                                bottomTen[3].price_change_percentage_24h.toFixed(2), 
                                bottomTen[4].price_change_percentage_24h.toFixed(2), 
                                bottomTen[5].price_change_percentage_24h.toFixed(2), 
                                bottomTen[6].price_change_percentage_24h.toFixed(2), 
                                bottomTen[7].price_change_percentage_24h.toFixed(2), 
                                bottomTen[8].price_change_percentage_24h.toFixed(2), 
                                bottomTen[9].price_change_percentage_24h.toFixed(2)
                                ],

                            backgroundColor: ['red'],
                            hoverBackgroundColor: ['dodgerblue'],
                            borderColor: ['red'],
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

export default LoserChart
