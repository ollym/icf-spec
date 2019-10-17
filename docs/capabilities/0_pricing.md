GET /icf/pricing/availabilityPricingOverview
  ?localDateStart=2019-01-01
  &localDateEnd=2019-01-31
  &supplierId=X
  &productId=Y
  &optionId=Y
  &currency=USD

If product was availabilityType OPENING_HOURS then the local start/end time are the opening hours. For attractions with more than one opening hour on the same day, then two availability objects are returned for the same day.

Each availability is identified by an ID that you must use during booking. There is also a status field indicating how often the availability cache must be refreshed. The meanings are:

FREESALE = Always available, refresh very rarely (refresh every week or more)
AVAILABLE = Available for sale, but fixed capacity (refresh every 12hrs)
LIMITED = Available, but not many left (refresh every hour or less)
SOLD_OUT = All tickets sold out, but some may free up (refresh every hour?)
CLOSED = Blocked out, and not available for sale (refresh every 12hrs)

```json
[
  {
    "id": "xxxxxxxxxxxxxxxxxxxx",
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
    "status": "AVAILABLE", ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
    "vacancies": 100,
    "currency": "USD",
    "unitPricing": [
      {
        "unitId": "xxxxxx",
        "retail": "10.00",
        "minimum": "8.00",
        "net": "5.00"
      },
      {
        "unitId": "yyyyyy",
        "retail": "15.00",
        "minimum": "13.00",
        "net": "10.00"
      }
    ]
  },
  {
    "id": "xxxxxxxxxxxxxxxxxxxx",
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
    "status": "AVAILABLE", ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
    "vacancies": null,
    "unitPricing": [
      {
        "unitId": "xxxxxx",
        "retail": "10.00",
        "minimum": "8.00",
        "net": "5.00"
      },
      {
        "unitId": "yyyyyy",
        "retail": "15.00",
        "minimum": "13.00",
        "net": "10.00"
      }
    ]
  }
]
```

POST /icf/pricing/availabilityPricingCheck?supplierId=X

REQUEST BODY:

```json
{
  "productId": "Y", # (required)
  "optionId": "Z", # (required)
  "availabilityIds": [ "xxx", "yyy" ], # (required)
  "currency": "USD",
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
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
    "status": "AVAILABLE", ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
    "vacancies": 100,
    "currency": "USD",
    "total": {
      "retail": "50.00",
      "minimum": "45.00",
      "net": "10.00"
    },
    "breakdown": [
      { "name": "CA Sales Tax (8%)", "value": "10.00", "type": "tax" }, # type = ENUM(tax, fee)
      { "name": "Fuel Surcharge", "value": "5.00", "type": "fee" },
      { "name": "Handling Fee", "value": "3.25", "type": "fee" }
    ],
    "unitPricing": [
      {
        "unitId": "xxxxxx",
        "retail": "10.00",
        "minimum": "8.00",
        "net": "5.00"
      },
      {
        "unitId": "yyyyyy",
        "retail": "15.00",
        "minimum": "13.00",
        "net": "10.00"
      }
    ]
  },
  {
    "id": "yyy",
    "localStartDateTime": "2019-01-01T14:30:00", # (required)
    "localEndDateTime": "2019-01-01T18:30:00", # (required)
    "status": "AVAILABLE", ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
    "vacancies": 100,
    "total": {
      "retail": "50.00",
      "minimum": "45.00",
      "net": "10.00"
    },
    "breakdown": [
      { "name": "CA Sales Tax (8%)", "value": "10.00", "type": "tax" }, # type = ENUM(tax, fee)
      { "name": "Fuel Surcharge", "value": "5.00", "type": "fee" },
      { "name": "Handling Fee", "value": "3.25", "type": "fee" }
    ],
    "unitPricing": [
      {
        "unitId": "xxxxxx",
        "retail": "10.00",
        "minimum": "8.00",
        "net": "5.00"
      },
      {
        "unitId": "yyyyyy",
        "retail": "15.00",
        "minimum": "13.00",
        "net": "10.00"
      }
    ]
  }
]
```