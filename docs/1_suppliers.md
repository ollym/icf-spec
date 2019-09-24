HOST: api.my-booking-platform.com

List all the suppliers this platform offers to the reseller that's calling the endpoint. As the platform you can tell who's calling this endpoint using the authentication credentials and use that to decide which suppliers you respond with.

GET /suppliers

```json
[
  {
    "id": "0001",
    "name": "Big Bus Tours",
    "endpoint": "https://api.my-booking-platform.com/v1", # (required)
    "contact": {
      "website": "www.bigbustours.com",
      "email": "info@bigbustours.com",
      "telephone": null,
      "address": "70 Lebanon Gardens, London, SW18 1RH"
    }
  },
  {
    "id": "0002",
    "name": "Walt Disney Attractions",
    "endpoint": "https://api.my-booking-platform.com/v1", # (required)
    "contact": {
      "website": "www.bigbustours.com",
      "email": "info@bigbustours.com",
      "telephone": null,
      "address": "70 Lebanon Gardens, London, SW18 1RH"
    }
  },
  {
    "id": "0002",
    "name": "Merlin Entertainment Ltd",
    "endpoint": "https://api.my-booking-platform.com/v1", # (required)
    "contact": {
      "website": "www.bigbustours.com",
      "email": "info@bigbustours.com",
      "telephone": null,
      "address": "70 Lebanon Gardens, London, SW18 1RH"
    }
  }
]
```