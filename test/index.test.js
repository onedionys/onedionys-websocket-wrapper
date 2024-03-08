const assert = require('assert');
const WebSocketWrapper = require('../src/websocket-wrapper');

describe('WebSocketWrapper', () => {
    let socket;

    beforeEach(() => {
        socket = new WebSocketWrapper('ws://localhost:8080');
    });

    it('should establish a WebSocket connection', (done) => {
        socket.on('open', () => {
            assert.strictEqual(socket.socket.readyState, WebSocket.OPEN);
            done();
        });
    });

    it('should receive messages', (done) => {
        const message = 'Hello, server!';
        socket.on('message', (data) => {
            assert.strictEqual(data, message);
            done();
        });

        socket.socket.onopen = () => {
            socket.socket.send(message);
        };
    });

    it('should handle errors', (done) => {
        socket = new WebSocketWrapper('ws://invalid-url');
        socket.on('error', (error) => {
            assert(error instanceof Error);
            done();
        });
    });
});
