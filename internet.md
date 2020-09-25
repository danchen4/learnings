HTTP: Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other.

Browser -> Computer -> Router -> ISP

Domain Name in browser -> browser cache -> OS cache -> ISP cache -> Root Server -> Top Level Domain -> Domain Name Server (to find IP address)

Once IP is found, then HTTP request is made (GET ..)
Server responds with 200 OK and connection is created

How information is sent from computer:
HTTP (application protocol)
TCP (breaks down to packets and determines port)
IP ()
Link (Hardware)

AJAX - a way of using HTTP to asynchronously request and receive data from servers
REST (Representational State Transfer) - more or less a standardized way for using HTTP. Typically setup on server-side.

REST was created more or less because AJAX made a mess of things.

Instead of using gazillions of different methods with AJAX

- use the methods available in HTTP protocol (GET, POST, PUT, DELETE)
- use the HTTP status code to signal various errors
- Server and client are stateless (doesn't store previously transmitted data)
- Structure data as resources via an URL
