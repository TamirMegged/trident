const orders = [
    {
        "_id": "5ff4a34897f1395be0a38960",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-05T17:35:04.316Z",
        "shipping_date": "2021-01-13T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff4a33797f1395be0a3895e",
                "product": "5fd4a0fa91b89f4344f29938",
                "amount": 8
            },
            {
                "_id": "5ff4a33b97f1395be0a3895f",
                "product": "5fe89dd30f48464608e0d40f",
                "amount": 3
            }
        ],
        "total_price": 670
    },
    {
        "_id": "5ff4a3a57fdff672b04338da",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-05T17:36:37.283Z",
        "shipping_date": "2021-01-11T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff4a39b7fdff672b04338d9",
                "product": "5fd4a0fa91b89f4344f29938",
                "amount": 1
            }
        ],
        "total_price": 20
    },
    {
        "_id": "5ff4a3ee9f263561a0a40bbb",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-05T17:37:50.524Z",
        "shipping_date": "2021-01-11T22:00:00.000Z",
        "creditCard": "1111",
        "items": [],
        "total_price": 0
    },
    {
        "_id": "5ff4a40d9f263561a0a40bbd",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-05T17:38:21.428Z",
        "shipping_date": "2021-01-20T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff4a4019f263561a0a40bbc",
                "product": "5fd4a0fa91b89f4344f29938",
                "amount": 1
            }
        ],
        "total_price": 20
    },
    {
        "_id": "5ff4a40f9f263561a0a40bbf",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-05T17:38:23.127Z",
        "shipping_date": "2021-01-20T22:00:00.000Z",
        "creditCard": "1111",
        "items": [],
        "total_price": 0
    },
    {
        "_id": "5ff4a4cc9f263561a0a40bc1",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-05T17:41:32.372Z",
        "shipping_date": "2021-01-14T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff4a4249f263561a0a40bc0",
                "product": "5fef470008a8455f8cd8e5b8",
                "amount": 2
            }
        ],
        "total_price": 1080
    },
    {
        "_id": "5ff4a5099f263561a0a40bc4",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-05T17:42:33.460Z",
        "shipping_date": "2021-01-21T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff4a4fe9f263561a0a40bc3",
                "product": "5fef487508a8455f8cd8e5b9",
                "amount": 1
            }
        ],
        "total_price": 490
    },
    {
        "_id": "5ff718d3d6901d22605406aa",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:21:07.333Z",
        "shipping_date": "2021-01-20T22:00:00.000Z",
        "creditCard": "1234",
        "items": [
            {
                "_id": "5ff718b1d6901d22605406a4",
                "product": "5fd4a0d091b89f4344f29936",
                "amount": 1
            },
            {
                "_id": "5ff718b4d6901d22605406a5",
                "product": "5ff65c66d6901d226054068d",
                "amount": 1
            },
            {
                "_id": "5ff718b8d6901d22605406a6",
                "product": "5ff65c0fd6901d226054068c",
                "amount": 1
            },
            {
                "_id": "5ff718bcd6901d22605406a7",
                "product": "5ff6635cd6901d2260540694",
                "amount": 1
            },
            {
                "_id": "5ff718bed6901d22605406a8",
                "product": "5ff6633bd6901d2260540693",
                "amount": 1
            },
            {
                "_id": "5ff718c0d6901d22605406a9",
                "product": "5ff663d1d6901d2260540695",
                "amount": 1
            }
        ],
        "total_price": 1367
    },
    {
        "_id": "5ff71912d6901d22605406b7",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:22:10.697Z",
        "shipping_date": "2021-01-18T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff718f4d6901d22605406b1",
                "product": "5fe89dd30f48464608e0d40f",
                "amount": 1
            },
            {
                "_id": "5ff718f5d6901d22605406b2",
                "product": "5fd4a0fa91b89f4344f29938",
                "amount": 1
            },
            {
                "_id": "5ff718f7d6901d22605406b3",
                "product": "5fe89e83e1815b09d4244255",
                "amount": 1
            },
            {
                "_id": "5ff718f9d6901d22605406b4",
                "product": "5ff6537fd6901d226054067d",
                "amount": 1
            },
            {
                "_id": "5ff718fbd6901d22605406b5",
                "product": "5ff656f0d6901d2260540683",
                "amount": 1
            },
            {
                "_id": "5ff71902d6901d22605406b6",
                "product": "5ff65738d6901d2260540684",
                "amount": 1
            }
        ],
        "total_price": 496
    },
    {
        "_id": "5ff71a67f30efd2af44a93b4",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:27:51.706Z",
        "shipping_date": "2021-01-18T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff71a4af30efd2af44a93b1",
                "product": "5fd4a0fa91b89f4344f29938",
                "amount": 1
            },
            {
                "_id": "5ff71a4bf30efd2af44a93b2",
                "product": "5fe89dd30f48464608e0d40f",
                "amount": 1
            },
            {
                "_id": "5ff71a4df30efd2af44a93b3",
                "product": "5fe89e83e1815b09d4244255",
                "amount": 1
            }
        ],
        "total_price": 269
    },
    {
        "_id": "5ff71ae78d78113bc064c6a8",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:29:59.641Z",
        "shipping_date": "2021-01-18T22:00:00.000Z",
        "creditCard": "2223",
        "items": [
            {
                "_id": "5ff71abf8d78113bc064c698",
                "product": "5fef487508a8455f8cd8e5b9",
                "amount": 1
            },
            {
                "_id": "5ff71ac08d78113bc064c699",
                "product": "5fef470008a8455f8cd8e5b8",
                "amount": 1
            },
            {
                "_id": "5ff71ac28d78113bc064c69a",
                "product": "5ff65b38d6901d226054068a",
                "amount": 1
            },
            {
                "_id": "5ff71ac48d78113bc064c69b",
                "product": "5ff65b7fd6901d226054068b",
                "amount": 1
            },
            {
                "_id": "5ff71ac78d78113bc064c69c",
                "product": "5fd4a0d091b89f4344f29936",
                "amount": 1
            },
            {
                "_id": "5ff71ac88d78113bc064c69d",
                "product": "5fd4a0e391b89f4344f29937",
                "amount": 1
            },
            {
                "_id": "5ff71aca8d78113bc064c69e",
                "product": "5ff65c0fd6901d226054068c",
                "amount": 1
            },
            {
                "_id": "5ff71acc8d78113bc064c69f",
                "product": "5ff65c66d6901d226054068d",
                "amount": 1
            },
            {
                "_id": "5ff71ace8d78113bc064c6a0",
                "product": "5ff65cc1d6901d226054068e",
                "amount": 1
            },
            {
                "_id": "5ff71acf8d78113bc064c6a1",
                "product": "5ff661aed6901d226054068f",
                "amount": 1
            },
            {
                "_id": "5ff71ad28d78113bc064c6a2",
                "product": "5ff662c2d6901d2260540692",
                "amount": 1
            },
            {
                "_id": "5ff71ad38d78113bc064c6a3",
                "product": "5ff6626cd6901d2260540691",
                "amount": 1
            },
            {
                "_id": "5ff71ad58d78113bc064c6a4",
                "product": "5ff66207d6901d2260540690",
                "amount": 1
            },
            {
                "_id": "5ff71ad78d78113bc064c6a5",
                "product": "5ff6633bd6901d2260540693",
                "amount": 1
            },
            {
                "_id": "5ff71ad88d78113bc064c6a6",
                "product": "5ff6635cd6901d2260540694",
                "amount": 1
            },
            {
                "_id": "5ff71ada8d78113bc064c6a7",
                "product": "5ff663d1d6901d2260540695",
                "amount": 1
            }
        ],
        "total_price": 6961
    },
    {
        "_id": "5ff71b7146dd4a27200d03cb",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:32:17.953Z",
        "shipping_date": "2021-01-07T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff71b3846dd4a27200d03b3",
                "product": "5fd0957aed26a20a7819d22c",
                "amount": 1
            },
            {
                "_id": "5ff71b3946dd4a27200d03b4",
                "product": "5fef430f08a8455f8cd8e5b6",
                "amount": 1
            },
            {
                "_id": "5ff71b3a46dd4a27200d03b5",
                "product": "5ff64d619a6de4353c78ba75",
                "amount": 1
            },
            {
                "_id": "5ff71b3d46dd4a27200d03b6",
                "product": "5ff64dbc9a6de4353c78ba76",
                "amount": 1
            },
            {
                "_id": "5ff71b3e46dd4a27200d03b7",
                "product": "5ff64e859a6de4353c78ba77",
                "amount": 1
            },
            {
                "_id": "5ff71b4046dd4a27200d03b8",
                "product": "5ff64f82d6901d2260540679",
                "amount": 1
            },
            {
                "_id": "5ff71b4346dd4a27200d03b9",
                "product": "5ff64fb1d6901d226054067a",
                "amount": 1
            },
            {
                "_id": "5ff71b4446dd4a27200d03ba",
                "product": "5ff65200d6901d226054067b",
                "amount": 1
            },
            {
                "_id": "5ff71b4646dd4a27200d03bb",
                "product": "5ff652b7d6901d226054067c",
                "amount": 1
            },
            {
                "_id": "5ff71b4846dd4a27200d03bc",
                "product": "5ff65481d6901d226054067f",
                "amount": 1
            },
            {
                "_id": "5ff71b4a46dd4a27200d03bd",
                "product": "5ff654c5d6901d2260540680",
                "amount": 1
            },
            {
                "_id": "5ff71b4c46dd4a27200d03be",
                "product": "5ff65557d6901d2260540681",
                "amount": 1
            },
            {
                "_id": "5ff71b5146dd4a27200d03bf",
                "product": "5fd4a0fa91b89f4344f29938",
                "amount": 1
            },
            {
                "_id": "5ff71b5246dd4a27200d03c0",
                "product": "5fe89dd30f48464608e0d40f",
                "amount": 1
            },
            {
                "_id": "5ff71b5446dd4a27200d03c1",
                "product": "5fe89e83e1815b09d4244255",
                "amount": 1
            },
            {
                "_id": "5ff71b5646dd4a27200d03c2",
                "product": "5ff6537fd6901d226054067d",
                "amount": 1
            },
            {
                "_id": "5ff71b5746dd4a27200d03c3",
                "product": "5ff6538cd6901d226054067e",
                "amount": 1
            },
            {
                "_id": "5ff71b5946dd4a27200d03c4",
                "product": "5ff656f0d6901d2260540683",
                "amount": 1
            },
            {
                "_id": "5ff71b5b46dd4a27200d03c5",
                "product": "5ff65738d6901d2260540684",
                "amount": 1
            },
            {
                "_id": "5ff71b5d46dd4a27200d03c6",
                "product": "5ff657a5d6901d2260540685",
                "amount": 1
            },
            {
                "_id": "5ff71b5e46dd4a27200d03c7",
                "product": "5ff6581bd6901d2260540686",
                "amount": 1
            },
            {
                "_id": "5ff71b6146dd4a27200d03c8",
                "product": "5ff65870d6901d2260540687",
                "amount": 1
            },
            {
                "_id": "5ff71b6246dd4a27200d03c9",
                "product": "5ff658c0d6901d2260540688",
                "amount": 1
            },
            {
                "_id": "5ff71b6446dd4a27200d03ca",
                "product": "5ff65942d6901d2260540689",
                "amount": 1
            }
        ],
        "total_price": 4869
    },
    {
        "_id": "5ff71bac46dd4a27200d03e7",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:33:16.795Z",
        "shipping_date": "2021-01-06T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff71b9946dd4a27200d03e4",
                "product": "5fd4a0fa91b89f4344f29938",
                "amount": 4
            },
            {
                "_id": "5ff71b9b46dd4a27200d03e5",
                "product": "5fe89dd30f48464608e0d40f",
                "amount": 2
            },
            {
                "_id": "5ff71b9e46dd4a27200d03e6",
                "product": "5fe89e83e1815b09d4244255",
                "amount": 1
            }
        ],
        "total_price": 496
    },
    {
        "_id": "5ff71c1bcf43ad3e708f3a79",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:35:07.440Z",
        "shipping_date": "2021-01-06T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff71c01cf43ad3e708f3a70",
                "product": "5fef430f08a8455f8cd8e5b6",
                "amount": 1
            },
            {
                "_id": "5ff71c02cf43ad3e708f3a71",
                "product": "5fd0957aed26a20a7819d22c",
                "amount": 1
            },
            {
                "_id": "5ff71c04cf43ad3e708f3a72",
                "product": "5ff64d619a6de4353c78ba75",
                "amount": 1
            },
            {
                "_id": "5ff71c06cf43ad3e708f3a73",
                "product": "5ff64dbc9a6de4353c78ba76",
                "amount": 1
            },
            {
                "_id": "5ff71c08cf43ad3e708f3a74",
                "product": "5ff64e859a6de4353c78ba77",
                "amount": 1
            },
            {
                "_id": "5ff71c0acf43ad3e708f3a75",
                "product": "5ff64f82d6901d2260540679",
                "amount": 1
            },
            {
                "_id": "5ff71c0ccf43ad3e708f3a76",
                "product": "5ff65200d6901d226054067b",
                "amount": 1
            },
            {
                "_id": "5ff71c0fcf43ad3e708f3a77",
                "product": "5ff654c5d6901d2260540680",
                "amount": 1
            },
            {
                "_id": "5ff71c10cf43ad3e708f3a78",
                "product": "5ff64fb1d6901d226054067a",
                "amount": 1
            }
        ],
        "total_price": 2458
    },
    {
        "_id": "5ff71c6ea8d44922ecfbf56b",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:36:30.833Z",
        "shipping_date": "2021-01-10T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff71c61a8d44922ecfbf569",
                "product": "5fd0957aed26a20a7819d22c",
                "amount": 2
            },
            {
                "_id": "5ff71c63a8d44922ecfbf56a",
                "product": "5fef430f08a8455f8cd8e5b6",
                "amount": 1
            }
        ],
        "total_price": 1618
    },
    {
        "_id": "5ff71ca5b1f3e239189184b3",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:37:25.147Z",
        "shipping_date": "2021-01-06T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff71c9ab1f3e239189184b1",
                "product": "5fef430f08a8455f8cd8e5b6",
                "amount": 2
            },
            {
                "_id": "5ff71c9bb1f3e239189184b2",
                "product": "5fd0957aed26a20a7819d22c",
                "amount": 1
            }
        ],
        "total_price": 1439
    },
    {
        "_id": "5ff71d0db1f3e239189184bb",
        "customer": "5fe8a057d617e00e8cae4d06",
        "city": "Tel Aviv",
        "street": "Sham 3",
        "order_date": "2021-01-07T14:39:09.482Z",
        "shipping_date": "2021-01-11T22:00:00.000Z",
        "creditCard": "1111",
        "items": [
            {
                "_id": "5ff71cfab1f3e239189184b6",
                "product": "5fd0957aed26a20a7819d22c",
                "amount": 1
            },
            {
                "_id": "5ff71cfbb1f3e239189184b7",
                "product": "5fef430f08a8455f8cd8e5b6",
                "amount": 1
            },
            {
                "_id": "5ff71cfdb1f3e239189184b8",
                "product": "5ff64d619a6de4353c78ba75",
                "amount": 1
            },
            {
                "_id": "5ff71cffb1f3e239189184b9",
                "product": "5ff64dbc9a6de4353c78ba76",
                "amount": 1
            },
            {
                "_id": "5ff71d01b1f3e239189184ba",
                "product": "5ff64e859a6de4353c78ba77",
                "amount": 1
            }
        ],
        "total_price": 1723
    }
]

module.exports = orders;