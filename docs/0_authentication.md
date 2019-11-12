1. Basic Auth

base64(expedia:h7Jh8sFm2fS)

GET https://api.my-booking-platform.com/suppliers
Accept: application/json
Authorization: Bearer j724i9jsdjjdash7Jh8sFm2fS
Accept-version: v2,v1;q=0.9

<- Response

```json
[
  {
    "id": "0001",
    "name": "Big Bus Tours",
    "endpoint": "https://bigbustours.my-booking-platform.com", # (required)
    "contact": {
      "website": "www.bigbustours.com",
      "email": "info@bigbustours.com",
      "telephone": null,
      "address": "70 Lebanon Gardens, London, SW18 1RH"
    }
  },
  ...
]
```


RESPONSE:

HTTP 2.0 OK
Content-Type: application/json
Version: v2