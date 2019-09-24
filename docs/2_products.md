GET /products?supplierId=X

```json
[
  {
    "id": "0001", # unique to supplier (required) (unique to supplier)
    "internalName": "Museum Tour With Lunch And Something", # (required)
    "reference": "LR1",
    "locale": "en", # (required)
    "timeZone": "Europe/London", # (required)
    "instantConfirmation": true, # (required)
    "instantDelivery": true, # (required)
    "availabilityType": "START_TIME", # ENUM("START_TIME", "OPENING_HOURS") (required)
    "deliveryFormats": [ "QRCODE", "AZTEC", "PDF_URL" ], # ENUM( "PDF_URL", "QRCODE", "AZTEC", "CODE128", "CODE39"),
    "deliveryMethods": [ "VOUCHER" ], # ENUM( "TICKET", "VOUCHER" )
    "redemptionMethod": "DIGITAL" # ENUM("MANIFEST", "DIGITAL", "PRINT") (required)
    "capabilities": [
      {
        "id": "dynamic-pricing",
        "revision": 1,
        "required": true
      },
      {
        "id": "docs.peek.com/dynamic-pricing",
        "revision": 2,
        "required": false
      }
    ],
    "options": [ # (at least one required)
      {
        "id": "0001", # (required) (unique to product)
        "internalName": "Morning", # (required)
        "reference": "LR1-01",
        "units": [ # (at least one required)
          {
            "id": "adult", # (required) (unique to option)
            "internalName": "Adult", # (required)
            "reference": "LR1-01-01",
            "type": "adult" (ENUM adult, child, infant, youth, student, senior, traveller, resource, other) (traveller can only be used in replacement of adult, child, infant, youth, student, senior) (required)
          },
          {
            "id": "0001-0001-child",
            "internalName": "Child",
            "reference": "LR1-01-01",
            "type": "child"
          }
        ]
      },
      {
        "id": "0001-0002",
        "internalName": "Afternoon",
        "reference": "LR1-02",
        "units": [
          {
            "id": "0001-0002-adult",
            "internalName": "Adult",
            "reference": "LR1-01-01",
            "type": "adult"
          },
          {
            "id": "0001-0002-child",
            "internalName": "Child",
            "reference": "LR1-01-01",
            "type": "child"
          }
        ]
      }
    ]
  }
]