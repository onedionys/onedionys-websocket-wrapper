class WebSocketWrapper {
    constructor(url) {
        this.url = url;
        this.socket = new WebSocket(url);
        this.bindEvents();
    }

    bindEvents() {
        this.socket.onopen = () => {
            this.emit('open');
        };

        this.socket.onmessage = (event) => {
            this.emit('message', event.data);
        };

        this.socket.onerror = (error) => {
            this.emit('error', error);
        };
    }

    send(data) {
        this.socket.send(data);
    }

    on(event, callback) {
        if (!this.events) {
            this.events = {};
        }
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event, ...args) {
        if (this.events && this.events[event]) {
            this.events[event].forEach(callback => {
                callback(...args);
            });
        }
    }
}

module.exports = WebSocketWrapper;