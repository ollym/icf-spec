POST /createCancellationRequest?supplierId=X

```json
{
  "bookingUuid": "xxxxxxxxxxx",
  "reason": "FRAUD", # (required) (ENUM "FRAUD", "CUSTOMER_REQUESTED", "SUPPLIER_REQUESTED", "OTHER")
  "reasonDetails": null
}
```

200 OK RESPONSE

```json
{
  ...full booking object....
  "cancellationRequest": {
    "reason": "FRAUD",
    "reasonDetails": null,
    "status": "ON_HOLD", # (required) (ENUM "ON_HOLD")
    "refundable": "FULL", # (required) (ENUM "FULL", "NONE",
    "confirmedAt": null,
    "timeToResolutionSeconds": 0,
    "utcRequestedAt": "2019-01-01T10:00:00Z",
    "utcResolvedAt": "2019-01-01T10:00:00Z",
    "utcHoldExpiration": "2019-01-01T10:00:00Z", # (required)
  }
}
```