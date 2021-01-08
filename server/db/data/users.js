const users = [
    {
        "cart": {
            "products": []
        },
        "_id": "5fe5904ac451c54c18f23e7b",
        "first_name": "Tamir",
        "last_name": "Megged",
        "email": "t@m",
        "id_number": "123773032",
        "password": "$2a$10$iOomHy3ZezzoyuQGSpOVhu/5lkjArx.h41nWZrNAvIdHq2EuoterG",
        "city": "Tel Aviv",
        "street": "Hakeshet 2",
        "role": "admin"
    },
    {
        "cart": {
            "products": [
                {
                    "_id": "5ff755248bf43824dc6fef15",
                    "product": "5fd0957aed26a20a7819d22c",
                    "amount": 1
                }
            ],
            "total_price": 599,
            "date": "2021-01-07T18:38:28.870Z"
        },
        "_id": "5fe8a057d617e00e8cae4d06",
        "first_name": "Avraham",
        "last_name": "Balata",
        "email": "a@b",
        "id_number": "123344444",
        "password": "$2a$10$EqxM6Kf2hq0GgW34jThX9eCNP3zzcLsp0MjY4.VafQRJAanJD.ou6",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "role": "customer"
    }
]

module.exports = users;