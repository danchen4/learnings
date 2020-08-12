Cross Origin Resource Sharing

**same origin policy** Web page can only access data from another web page if from same origin. If same origin HTTP request is always allowed.

Origin is made up of:

1. protocol (HTTP)
2. host(example.com)
3. port number(80)

https://www.example.com/foo-bar.html

**CORS** request for resource (image, font) outside of the origin

- CORS is made using HTTP request methods
- Most servers allow **simple requests** (GET, POST HEAD)
- Non-simple requests (PATCH, PUT, DELETE) require pre-flight

**HTTP Header** piece of information with a request or a response. Passed back and forth between browser(client) and server.

# Process

## Simple Requests

_Request Headers_

- Accept,
- Accept-Language,
- Content-Language,
- Content-Type (must be one of three..can't be application/json for example)
  - application/x-www-form-urlencoded (key/value pairs)
  - multipart/form-data
  - text/plain

* Client sends HTTP request with header
  - If request is cross-origin, browser always adds Origin
* Server can inspect Origin and, if it agrees to accept such a request, adds a special header **Access-Control-Allow-Origin** to the response.
* If **Access-Control-Allow-Origin** has allowed Origin (aka domain) or '\*' the response is successful, and client can access the response, else an error.

**Response Headers**

_Simple response headers_
Cache-Control
Content-Language
Content-Type
Expires
Last-Modified
Pragma

**Access-Control-Expose-Headers**: Grant javascript access to response headers outside of above, must include Access-Control-Expose-Headers with allowed headers.

**Access-Control-Allow-Origin**: response from server. '\*' (most common) means that server will share requested resources with any domain.

## Non Simple Requests

- Preflight request uses method **OPTIONS**, no body and two headers:
  - Access-Control-Request-Method
  - Access-Control-Request-Headers
- If Server agrees, it response with no body, status 200 and headers:
  - Access-Control-Allow-Methods
  - Access-Control-Allow-Headers
  - _Access-Control-Max-Age_ (optional) - specify a number of seconds to cache the permissions. So the browser won’t have to send a preflight for subsequent requests that satisfy given permissions.
- After preflight is successfull, then browser makes main request

## Credentials

- Most HTTP request are made with credentials (cookies);
- If sending with cookies, must have header:
  - credentials: "include"
- If server agrees to accept request with credentials, should respond with:
- Access-Control-Allow-Credentials: true
- Access-Control-Allow-Origin with the domain listed (\* is not allowed)

# RESTful APIs

API is an application programming interface. It is a set of rules that allow programs to talk to each other.

REST determines how the API looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their API. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL.
