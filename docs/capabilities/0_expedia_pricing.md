id: expedia/pricing-ingestion
revision: 1

GET /pricing?
  localDateStart=2019-01-01
  &localDateEnd=2019-01-31
  &supplierId=X
  &productId=Y
  &optionId=Y

```json

[
  {
    "localStartDate": "2019-01-01", # (required)
    "localEndDate": "2019-01-31", # (required)
    "weekdays": [ "SATURDAY", "SUNDAY" ],
    "unitPricing": [
      {
        "unitId": "0001-0002-adult",
        "retailPrice": "100"
      },
      {
        "unitId": "0001-0002-adult",
        "retailPrice": "100"
      }
    ]
  }
]
```