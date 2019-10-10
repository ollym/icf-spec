POST /pricing/pricingCheck?supplierId=X

REQUEST BODY:

```json
{
  "productId": "Y", # (required)
  "optionId": "Z", # (required)
  "availabilityIds": [ "xxx", "yyy" ], # (required)
  "units": [ # (required)
    {
      "id": "0001", # (required)
      "quantity": 3 # (required)
    },
    {
      "id": "0002",
      "quantity": 2
    }
  ]
}
```

RESPONSE

```json
[
  {
    "id": "xxx",
    "unitPricing": [
      {
        "unitId": "xxxxxx",
        "rrp": "10.00",
        "net": "5.00"
      },
      {
        "unitId": "yyyyyy",
        "rrp": "15.00",
        "net": "10.00"
      }
    ]
  },
  {
    "id": "yyy",
    "unitPricing": [
      {
        "unitId": "xxxxxx",
        "rrp": "10.00",
        "net": "5.00"
      },
      {
        "unitId": "yyyyyy",
        "rrp": "15.00",
        "net": "10.00"
      }
    ]
  }
]
```