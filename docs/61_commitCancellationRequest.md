POST /commitCancellationRequest?supplierId=X

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
    "status": null # (required) (ENUM "PENDING", "CONFIRMED", "REJECTED", "EXPIRED"),
    "refundStatus": "NONE", # (required) (ENUM "FULL", "PARTIAL", "NONE"),
    "utcRequestedAt": "2019-01-01T10:00:00Z",
    "utcResolvedAt": "2019-01-01T10:00:00Z"
  }
}
```