POST /expireCancellationRequest?supplierId=X

REQUEST:

```json
{
  "uuid": "xxxxxxxxxxx"
}
```

RESPONSE:

```json
{
  "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
  "resellerReference": "001-002-003",
  "supplierReference": "ABC-123",
  "status": "EXPIRED", # (required) (ENUM "ON_HOLD", "PENDING", "CONFIRMED", "CANCELLED", "EXPIRED")
  "productId": "0001", # (required)
  "optionId": "0002", # (required)
  "availability": { # (required)
    "id": "0003", # (required)
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
  },
  "confirmedAt": null,
  "barcode": null,
  "barcodeSymbology": "QRCode", # (required) (ENUM QRCode Aztec Code128 Code39)
  "ticketsPdfUrl": null,
  "utcHoldExpiration": "2019-01-01T10:00:00Z", # (required)
  "contact": { # (required)
    "fullName": null,
    "emailAddress": null,
    "phoneNumber": null
  },
  "units": [ # (required)
    {
      "id": "0001", # (required)
      "quantity": 3 # (required)
    },
    {
      "id": "0002", # (required)
      "quantity": 2 # (required)
    }
  ],
  "tickets": [ ]
}
```