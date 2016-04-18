from ws4py.client.threadedclient import WebSocketClient

class PiClient(WebSocketClient):
    def opened(self):
        self.send("I Have Connected!!!")

    def closed(self, code, reason=None):
        print "Closed down", code, reason

    def received_message(self, m):
        print m


if __name__ == '__main__':
    try:
        ws = PiClient('ws://localhost:8000/')
        ws.connect()
        ws.run_forever()
    except KeyboardInterrupt:
        ws.close()