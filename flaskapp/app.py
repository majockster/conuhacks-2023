from flask import Flask
import json

app = Flask(__name__)


def is_acknowledged(data):
    return data['MessageType'] == 'NewOrderAcknowledged'


def get_json(filename):
    f = open(filename)
    return json.load(f)


@app.route("/TSX/NewOrderAcknowledged")
def get_acknowledged():
    data = get_json('./data/TSXData.json')
    return list(filter(is_acknowledged, data))


@app.route("/TSX/NewOrderAcknowledged/BySeconds")
def get_acknowledged_seconds():
    data = get_acknowledged()
    # get all orders at second interval
    # get list of orders between second interval
    # append list into a new list, where each list is a bin
    orders_by_second = []
    current_second = int(data[0]['TimeStampEpoch'])
    next_second = current_second + 1000000000
    order_by_second = []
    for order in data:
        if int(order['TimeStampEpoch']) >= current_second and int(order['TimeStampEpoch']) <= next_second:
            order_by_second.append(order['OrderPrice'])
        if int(order['TimeStampEpoch']) >= next_second:
            current_second = next_second
            next_second = current_second + 1000000000
            orders_by_second.append(order_by_second)
            order_by_second = []

    return orders_by_second


@app.route("/")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run()
