const axios = require('axios');
const apiHeaders = { 'Content-Type': 'application/json', Accept: 'application/json' };

const coinUrl = 'https://scanner.tradingview.com/crypto/scan';

const getCoin10_100_200_1dk = async() => {
    const oneMinuteTriple = await axios({
        method: 'post',
        url: coinUrl,
        headers: apiHeaders,
        body: {
            "filter": [{
                    "left": "24h_vol|5",
                    "operation": "nempty"
                },
                {
                    "left": "close|1",
                    "operation": "egreater",
                    "right": "EMA100|1"
                },
                {
                    "left": "EMA10|1",
                    "operation": "crosses_above",
                    "right": "EMA200|1"
                },
                {
                    "left": "typespecs",
                    "operation": "has_none_of",
                    "right": "cryptoasset"
                }
            ],
            "options": {
                "lang": "tr"
            },
            "markets": [
                "crypto"
            ],
            "symbols": {
                "query": {
                    "types": []
                },
                "tickers": []
            },
            "columns": [
                "base_currency_logoid",
                "currency_logoid",
                "name",
                "close|1",
                "change|1",
                "change_abs|1",
                "high|1",
                "low|1",
                "volume|1",
                "24h_vol|5",
                "24h_vol_change|5",
                "Recommend.All|1",
                "exchange",
                "description",
                "type",
                "subtype",
                "update_mode|1",
                "pricescale",
                "minmov",
                "fractional",
                "minmove2"
            ],
            "sort": {
                "sortBy": "24h_vol|5",
                "sortOrder": "desc"
            },
            "price_conversion": {
                "to_symbol": false
            },
            "range": [
                0,
                150
            ]
        }

    });

    return oneMinuteTriple;
}



module.exports = {
    getCoin10_100_200_1dk
}