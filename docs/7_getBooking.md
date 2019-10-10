GET /getBooking?supplierId=X&uuid=Y

```json
{
  "uuid": "xxxx-yyyy-zzzzzzzzz-xxxxxx", # (required)
  "resellerReference": "001-002-003",
  "supplierReference": "ABC-123",
  "status": "CONFIRMED", # (required) (ENUM "ON_HOLD", "PENDING", "CONFIRMED", "CANCELLED", "EXPIRED")
  "utcDeliveredAt": "2019-01-01T11:30:00Z",
  "utcConfirmedAt": null,
  "cancellationRequest": {
    "reason": "FRAUD",
    "reasonDetails": null,
    "status": "ON_HOLD", # (required) (ENUM "ON_HOLD")
    "refund": "FULL", # (required) (ENUM "FULL", "NONE",
    "timeToResolutionSeconds": 0,
    "utcRequestedAt": "2019-01-01T10:00:00Z",
    "utcConfirmedAt": null,
    "utcResolvedAt": null,
    "utcHoldExpiration": "2019-01-01T10:00:00Z", # (required)
  },
  "refreshFrequency": "HOURLY", # ENUM ("HOURLY", "DAILY")
  "productId": "0001", # (required)
  "optionId": "0002", # (required)
  "availability": { # (required)
    "id": "0003", # (required)
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
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
      "uuid": "....", # (required)
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