use crypto;
db.dropDatabase();

db.coins.insertMany(
    [
        { 
            coin: "GME", 
            buyPrice: 150, 
            numberOfShares: 3, 
            singlePrice: 50 
        },
    ]
)

db.wallet.insertMany([
    {
        total_cash: 500,
        profit: 0,
        portfolio_value: 0
    }
])