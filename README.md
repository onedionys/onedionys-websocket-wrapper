<h1 align="center">Welcome to One Dionys - WebSocket Wrapper! 👋 </h1>

<p align="center">Abstraction to communicate over WebSocket with easier syntax. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-websocket-wrapper?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-websocket-wrapper?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-websocket-wrapper?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-websocket-wrapper?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-websocket-wrapper.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-websocket-wrapper?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-websocket-wrapper?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const WebSocketWrapper = require('websocket-wrapper');

// Create a new WebSocket instance
const socket = new WebSocketWrapper('ws://localhost:8080');

// Add event listeners
socket.on('open', () => {
    console.log('Connection established.');
});

socket.on('message', (data) => {
    console.log('Received message:', data);
});

socket.on('error', (error) => {
    console.error('WebSocket error:', error);
});

// Send data
socket.send('Hello, server!');
```

#### Explanation

* The WebSocket Wrapper package returns an instance of the WebSocketWrapper class, which encapsulates a WebSocket connection. This instance can be used to interact with the WebSocket connection, such as sending and receiving messages, and listening for connection events like 'open', 'message', and 'error'.

#### Return Value

* Directly returns a string value according to the format used. Like `Satu Juta` or `One Million`.

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 12 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - WebSocket Wrapper is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - WebSocket Wrapper? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
