GET /availabilityOverview
  ?localDateStart=2019-01-01
  &localDateEnd=2019-01-31
  &supplierId=X
  &productId=Y
  &optionId=Y

If product was availabilityType OPENING_HOURS then the local start/end time are the opening hours. For attractions with more than one opening hour on the same day, then two availability objects are returned for the same day.

Each availability is identified by an ID that you must use during booking. There is also a status field indicating how often the availability cache must be refreshed. The meanings are:

FREESALE = Always available, refresh very rarely (refresh every week or more)
AVAILABLE = Available for sale, but fixed capacity (refresh every 12hrs)
LIMITED = Available, but not many left (refresh every hour or less)
SOLD_OUT = All tickets sold out, but some may free up (refresh every hour?)
CLOSED = Blocked out, and not available for sale (refresh every 12hrs)

```json
[
  {
    "id": "xxxxxxxxxxxxxxxxxxxx",
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
    "status": "AVAILABLE", ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
  },
  {
    "id": "xxxxxxxxxxxxxxxxxxxx",
    "localStartDateTime": "2019-01-01T11:30:00", # (required)
    "localEndDateTime": "2019-01-01T13:30:00", # (required)
    "status": "AVAILABLE" ENUM("FREESALE", "AVAILABLE", "LIMITED", "SOLD_OUT", "CLOSED") # (required)
  }
]
```