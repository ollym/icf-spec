Cannot change refund from full to none after confirmCancellationRequest

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
    "refund": "FULL", # (required) (ENUM "FULL", "NONE",
    "timeToResolutionSeconds": 0,
    "utcRequestedAt": "2019-01-01T10:00:00Z",
    "utcConfirmedAt": null,
    "utcResolvedAt": null,
    "utcHoldExpiration": "2019-01-01T10:00:00Z", # (required)
  }
}
```