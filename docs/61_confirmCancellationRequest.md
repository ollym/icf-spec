POST /confirmCancellationRequest?supplierId=X

```json
{
  "bookingUuid": "xxxxxxxxxxx",
  "reason": "FRAUD", # (required) (ENUM "FRAUD", "CUSTOMER_REQUESTED", "SUPPLIER_REQUESTED", "OTHER")
  "reasonDetails": null
}
```

RESPONSE

```json
{
  ...full booking object....
  "cancellationRequest": {
    "reason": "FRAUD",
    "reasonDetails": null,
    "status": "CONFIRMED", # (required) (ENUM "ON_HOLD")
    "refund": "FULL", # (required) (ENUM "FULL", "NONE",
    "timeToResolutionSeconds": 0,
    "utcRequestedAt": "2019-01-01T10:00:00Z",
    "utcConfirmedAt": "2019-01-01T11:00:00Z",
    "utcResolvedAt": "2019-01-01T11:00:00Z",
    "utcHoldExpiration": "2019-01-01T11:30:00Z", # (required)
  }
}
```