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

