GET /products?supplierId=X

```json
[
  {
    "id": "0001", # unique to supplier (required) (unique to supplier)
    "name": "Museum Tour With Lunch And Something", # (required)
    "reference": "LR1",
    "description": "XXXX",
    "locale": "en", # (required)
    "timeZone": "Europe/London", # (required)
    "availabilityType": "START_TIME", # ENUM("START_TIME", "OPENING_HOURS") (required)
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
        "name": "Morning", # (required)
        "reference": "LR1-01",
        "description": "XXXX",
        "units": [ # (at least one required)
          {
            "id": "adult", # (required) (unique to option)
            "name": "Adult", # (required)
            "reference": "LR1-01-01",
            "description": "XXXX",
            "type": "adult", (ENUM adult, child, infant, youth, student, senior, traveller, resource, other) (traveller can only be used in replacement of adult, child, infant, youth, student, senior) (required)
          },
          {
            "id": "0001-0001-child",
            "reference": "LR1-01-01",
            "type": "child",
            "name": "Child",
            "description": "XXXX"
          }
        ]
      },
      {
        "id": "0001-0002",
        "name": "Afternoon",
        "description": "XXXX",
        "reference": "LR1-02",
        "units": [
          {
            "id": "0001-0002-adult",
            "reference": "LR1-01-01",
            "type": "adult",
            "name": "Adult",
            "description": "XXXX"
          },
          {
            "id": "0001-0002-child",
            "reference": "LR1-01-01",
            "type": "child",
            "name": "Child",
            "description": "XXXX"
          }
        ]
      }
    ]
  }
]