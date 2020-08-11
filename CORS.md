Cross Origin Resource Sharing

**same origin policy** Web page can only access data from another web page if from same origin

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

# Headers

Access-Control-Allow-Origin: response from server. '\*' (common) means that server will share requested resources with any domain.

**GET**

- If request is cross-origin, browser always adds Origin

GET /request
Host: anywhere.com
Origin: https://javascript.info
