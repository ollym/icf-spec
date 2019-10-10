POST /confirmReservation?supplierId=X

```json
{
  "uuid": "xxxxxxxxxxx",
  "resellerReference": "001-002-003",
  "contact": {
    "fullName": "Oliver Morgan",
    "emailAddress": "ollym@me.com",
    "phoneNumber": "07840 739436",
    "locales": [ "en-GB", "en-US", "en" ],
    "country": "GB"
  }
}
```

Status state machine:

"ON_HOLD" -> "CONFIRMED"
"ON_HOLD" -> "EXPIRED"

"ON_HOLD" -> "PENDING"
"ON_HOLD" -> "PENDING" -> "CONFIRMED"
"ON_HOLD" -> "PENDING" -> "REJECTED"

"ON_HOLD" -> "CONFIRMED" -> "CANCELLED"
"ON_HOLD" -> "PENDING" -> "CONFIRMED" -> "CANCELLED"

```json
{
  "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
  "resellerReference": "001-002-003",
  "supplierReference": "ABC-123",
  "status": "CONFIRMED", # (required) (ENUM "ON_HOLD", "PENDING", "CONFIRMED", "CANCELLED", "EXPIRED")
  "utcDeliveredAt": "2019-01-01T11:30:00Z",
  "utcConfirmedAt": null,
  "cancellationRequest": null,
  "refreshFrequency": "HOURLY", # ENUM ("HOURLY", "DAILY")
  "productId": "0001", # (required)
  "optionId": "0002", # (required)
  "availability": { # (required)
    "id": "0003", # (required)
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
  },
  "cancellationRequest": {
    "reason": "FRAUD",
    "reasonDetails": null,
    "status": null # (required) (ENUM "PENDING", "CONFIRMED", "REJECTED"),
    "refundStatus": "NONE", # (required) (ENUM "FULL", "PARTIAL", "NONE"),
    "utcRequestedAt": "2019-01-01T10:00:00Z",
    "utcResolvedAt": "2019-01-01T10:00:00Z"
  },
  "deliveryMethods": [ "TICKET", "VOUCHER" ], # (required) ENUM("TICKET", "VOUCHER")
  "voucher": {
    "deliveryFormat": "QRCODE", # (required, can be empty)
    "redemptionMethod": "DIGITAL", # ENUM("MANIFEST", "DIGITAL", "PRINT") (required)
    "utcRedeemedAt": "2019-01-01T11:30:00Z",
    "utcDeliveredAt": "2019-01-01T11:30:00Z",
    "deliveryValue": "04728937123",
  },
  "unitItems": [ # (required)
    {
      "uuid": "...."
      "resellerReference": "001-002-003",
      "supplierReference": "ABC-123",
      "unitId": "0001",
      
      "ticket": {
        "deliveryFormat": "PDF_URL", # (required)
        "redemptionMethod": "DIGITAL", # ENUM("MANIFEST", "DIGITAL", "PRINT") (required)
        "utcRedeemedAt": "2019-01-01T11:30:00Z",
        "utcDeliveredAt": "2019-01-01T11:30:00Z",
        "deliveryValue": "https://some-url/ticket.pdf",
      }
    }
  ],
  "utcHoldExpiration": null,
  "contact": { # (required)
    "fullName": "Oliver Morgan",
    "emailAddress": "ollym@me.com",
    "phoneNumber": "07840 739436",
    "locales": [ "en-GB", "en-US", "en" ],
    "country": "GB"
  }
}
```