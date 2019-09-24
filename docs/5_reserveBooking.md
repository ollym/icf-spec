POST /createReservation?supplierId=X

- Request with a duplicate uuid should respond with the same original response.
- The request body should not change between requests with the same uuid.
- If hold expiration cannot be met, then do the highest available.
- If booking status is ON_HOLD, EXPIRED or PENDING the tickets array MUST be empty.

REQUEST BODY:

```json
{
  "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)  
  "productId": "Y", # (required)
  "optionId": "Z", # (required)
  "availabilityId": "xxx", # (required)
  "unitItems": [ # (required)
    {
      "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
      "resellerReference": "001-002-003",
      "unitId": "0001", # (required)
    },
    {
      "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
      "resellerReference": "001-002-003",
      "unitId": "0001", # (required)
    },
    {
      "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
      "resellerReference": "001-002-003",
      "unitId": "0002", # (required)
    }
  ],
  "holdExpirationMinutes": 360
}
```

RESPONSE:

```json
{
  "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
  "resellerReference": "001-002-003",
  "supplierReference": "ABC-123",
  "status": "ON_HOLD", # (required) (ENUM "ON_HOLD", "PENDING", "CONFIRMED", "CANCELLED", "EXPIRED")
  "productId": "0001", # (required)
  "optionId": "0002", # (required)
  "availability": { # (required)
    "id": "0003", # (required)
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
  },
  "confirmedAt": null,
  "utcHoldExpiration": "2019-01-01T10:00:00Z", # (required)
  "contact": { # (required)
    "fullName": null,
    "emailAddress": null,
    "phoneNumber": null
  },
  
  "ticket": {
    "barcode": null,
    "barcodeSymbology": "QRCode", # (required) (ENUM QRCode Aztec Code128 Code39)
    "ticketsPdfUrl": null,
  },
  
  "unitItems": [ # (required)
    {
      "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
      "resellerReference": "001-002-003",
      "unitId": "0001", # (required)
      "ticket": {
        "barcode": null,
        "barcodeSymbology": "QRCode", # (required) (ENUM QRCode Aztec Code128 Code39)
        "ticketsPdfUrl": null
      }
    },
    {
      "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
      "resellerReference": "001-002-003",
      "unitId": "0001", # (required)
      "ticket": {
        "barcode": null,
        "barcodeSymbology": "QRCode", # (required) (ENUM QRCode Aztec Code128 Code39)
        "ticketsPdfUrl": null
      }
    },
    {
      "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
      "resellerReference": "001-002-003",
      "unitId": "0002", # (required)
      "ticket": {
        "barcode": null,
        "barcodeSymbology": "QRCode", # (required) (ENUM QRCode Aztec Code128 Code39)
        "ticketsPdfUrl": null
      }
    }
  ]
}
```