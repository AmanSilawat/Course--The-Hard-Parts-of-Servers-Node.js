# Course--The-Hard-Parts-of-Servers-Node.js

Reference: [The-Hard-Parts-of-Servers-Node.js- Will Sentance] (https://frontendmasters.com/courses/servers-node-js/)

## Node Overview

Client requests to the server. Any kind of client can be like chrome, safari, firefox, opera and mobile. Client requires minimum 3 things to load web page.

1. HTML
2. CSS
3. JavaScript

But where do we get these things. Client search a URL. This request will be sent to the server and the server will send the response to the client after processing that request.

Some languages are used to give instruction to the server.

-   PHP
-   Ruby
-   Java
-   C/C++
-   JavaScript

Response is sent according to the data/code requested by the client. Like if the client has requested for the home page, then we have to fine send HTML, css and JavaScript, then we will access the file using the filesystem (fs) features of the server.
Socket to handle network request.

JavaScript is not able to access internal feature of server. C/C++ and JavaScript to able accessing the internal feature. this called is **node**.

-   C++ has may features that let it directly interact with the OS directly.

-   JavaScript does not! So it has to work with C+

*   to control these computer features. What is
    this combination known as? ... Node.js

-   JS -> Node -> Computer feature (e.g.
    network, file system)

### Let’s see the 2 things that JS does by itself - saving and using data

```js
let num = 3;
// 1. Save a function (code to run, parameters awaiting inputs)
function multiplyBy2(inputNumber) {
	const result = inputNumber * 2;
	return result;
}
// 2a. Call/run/invoke/execute a function (with parens)
// and 2b. insert an input (an argument)
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

## Using Node APIs

```js
const server = http.createServer();
server.listen(80);
```

`http.createServer()` This code is interact with C++ through Node. This command for node internal feature.

Help of [libUV](https://github.com/libuv/libuv) (Some C ++ code is already written in libUV) open **socket**, an open channel to the internet.Setup a network feature of node but this time to not able to receive messages because port is not port is setup in next line.

Node js make Network(net) -> http

libUV like Node code to any computer internal structure like MAC, Linux or Window.

Channel max length is `65,535`. Different number to represent an entry point to channel to my computer called as PORT.

The entry point for receiving messages from the server is default port 80.

This time `http.createServer()` return a object. In the object listen property hold a method. When run listen method than allow us to edit instance http. Which libUV set up the HTTP instance. this time i am able to receive messages.

### Calling method in NodeJs

Node auto-tun the code. When a incoming message is received than call a function and send back relative data.

```js
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
	functionsToSetOutgoingData.end('Welcome to Twitter!');
}
const server = http.createServer(doOnIncoming);
server.listen(80);
```

first declare `doOnIncoming` function, next line `http.createServer(doOnIncoming)` opening the socket, opening the port using the computer tunnel but one more work in this line.

In this line `http.createServer(doOnIncoming)` createServer accept a function argument. this function is auto run than receive incoming messages.

### Calling a Function Under the Hood

// ..

### Creating a Server Under the Hood

```js
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
	functionsToSetOutgoingData.end('Welcome to Twitter!');
}
const server = http.createServer(doOnIncoming);
server.listen(80);
```

When request a server than the node called the doOnIncoming function automatically and Node inserts 2 arguments automatically. Both arguments will contain an object.

Create a brand new execution context and inside of the local environment persist `incomingData`. this is a object and hold the path of the url, header, body and etc. Second argument is a object `functionsToSetOutgoingData`. this object contains some properties like `end` property persist a function and etc.

When calling `functionsToSetOutgoingData.end('some message')` inside of the execution context then `.end` function intimate connect back to node, the node add the message into HTTP message and then that message is going to be send back to the client.

### Request & Response with Node

**Request**: When a request is made to the server, the client creates an HTTP message.

#### Examples of Request Message

```
GET /tweets/s HTTP/1.1
**Host**: localhost: 8000
Connection: keep-alive
Accept-Language: en-us
User-Agent: Mozilla
```

#### There are 2 ways for GET METHOD

1. Request line
    - `GET /tweets/s HTTP/1.1`
    - Method type gate is inside the HTTP message and the path.
    - Request method: All methods must be in uppercase. The request will be recognized by the given request-URI
        - **GET** request do not have a message body.
        - **POST** request can contain the post data in the body
2. Request Header : Additional information about the client is given in this field. These fields act as request modifiers. meta data, like
    - **HOST** is mandatory
    - **Accept-Language**
    - **Connection**
    - **User-Agent**

These messages will be sent to the server.

#### Example

```js
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
	functionsToSetOutgoingData.end('Welcome to Twitter!');
}
const server = http.createServer(doOnIncoming);
server.listen(80);
```

##### Example explanation

-   **`http.createServer`**

    -   setup the node background feature. This function will return an instance object to us containing a method named listen And will contain more properties.
    -   `http` background feature is Network (net) and this feature is setup the socket through the [libUV](https://github.com/libuv/libuv).
    -   `createServer` is a method of `http`. This function will be auto called by node JS and Auto created two argument by node js.
        -   `incomingData`, parameter value type is object. This parameter value is passed by node js and In the request message, the path of the request-line will be saved in the property named URL.
        -   `functionsToSetOutgoingData`, parameter value type is object. This parameter value is passed by node js and end property hold a function. More properties will be available in the object
            -   `functionsToSetOutgoingData.end('Welcome to Twitter!');`, This method is sent back a request to the client.
    -   `doOnIncoming`, This function is automatic called by node js.
        -   when will be called this function?
            -   When a request is made by a client, this function will be auto called by NodeJs.

-   **`server.listen(80)`**

    -   setup the computer internal feature and open channel to the internet with port.

    -   Set the port `server.listen(80)`. The browser default entering port is 80. Port 80 means request for data.

## Node with HTTP

### Preparing for HTTPRequestObject

Messages are sent in HTTP format

HTTP message: Request line (url, method),
Headers, Body (optional)

```js
const tweets = ["Hi","😂" , "Hello", "👋" ,"👻"]
function doOnIncoming(incomingData, functionsToSetOutgoingData){
 const tweetNeeded = incomingData.url.slice(8)-1
 functionsToSetOutgoingData.end(tweets[tweetNeeded])
}
const server = http.createServer(doOnIncoming)
server.listen(80)
```

![Preparing for HTTPRequestObject](./node-with-http/Preparing-for-HTTPRequestObject/Preparing-for-HTTPRequestObject.jpg)


### Parsing HTTPRequestObject

HttpRequest Node JS internal features to get a request from libUV after node js features get HttpRequestMessage, auto-creates two arguments. which will object the first object which will have "URL" and "method" name property and the second object I will have the property named "end" and both properties contain methods.

![Preparing for HTTPRequestObject](./node-with-http/Parsing-HTTPRequestObject/Parsing-HTTPRequestObject.jpg)

### HTTP Response in Node