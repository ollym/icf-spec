POST /availabilityCheck?supplierId=X

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
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
    "status": "AVAILABLE", ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
  },
  {
    "id": "yyy",
    "localStartDateTime": "2019-01-01T14:30:00", # (required)
    "localEndDateTime": "2019-01-01T18:30:00", # (required)
    "status": "AVAILABLE", ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
  }
]
```