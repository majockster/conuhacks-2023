from flask import Flask, render_template, request, send_file
app = Flask(__name__)

import json
# import seaborn as sns
import io
import base64
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# achknowledged
orderprices_a = []
orderprices_a_timestamps = []
# request
orderprices_r = []
orderprices_r_timestamps = []

@app.route("/TSX/NewOrderAcknowledged")
def OrderAcknowledged():
  # Opening JSON file
  f = open('data/TSXData.json')
    
  # returns JSON object as a dictionary
  data = json.load(f)
    
  # Iterating through the json list
  for i in data:
    if i['MessageType'] == "NewOrderAcknowledged":
      orderprices_a.append(str(i['OrderPrice']))
      orderprices_a_timestamps.append(str(i['TimeStampEpoch']))

  # # 1 second
  # bins = []
  # for i in range(239):
  #   bins.append(list(filter(lambda x: int(x) < int(orderprices_a_timestamps[0])+1000000000*(i+1) and int(x) >= int(orderprices_a_timestamps[0])+1000000000*(i),orderprices_a_timestamps)))

  # bin_lengths = []
  # for bin in bins:
  #   bin_lengths.append(len(bin)-1)

  ls_epochs = []
  for i in range(239):
      ls_epochs.append(list(filter(lambda x: int(x) < int(orderprices_a_timestamps[0])+1000000000*(i+1) and int(x) >= int(orderprices_a_timestamps[0])+1000000000*(i),orderprices_a_timestamps)))

  end_index = []
  for bin in ls_epochs:
      # print(len(bin))
      end_index.append(len(bin)-1)

  end_index = np.cumsum(end_index)

  all_indexes = []
  for i, val in enumerate(end_index):
      if i==0:
          # print(list(range(0, val)))
          all_indexes.append(list(range(0, val)))
      else:
          # print(list(range(end_index[i-1], val)))
          all_indexes.append(list(range(end_index[i-1], val)))

  prices_list=[]
  for indexlist in all_indexes:
    templist = []
    for index in indexlist:
      templist.append(orderprices_a[index])
    prices_list.append(templist)

  import pandas as pd
  df = pd.DataFrame({'Open':[],'High':[],'Low':[],'Close':[]})
  dictionary = {'Open':[],'High':[],'Low':[],'Close':[]}
  openn = []
  high = []
  low = []
  close = []
  count = 0
  for pricebin in prices_list:
    if pricebin != []:
      openn.append(pricebin[0])
      high.append(max(pricebin))
      low.append(min(pricebin))
      close.append(pricebin[-1])
    else:
      count += 1

  # print(count)
  dictionary['Open'] = openn
  dictionary['High'] = high
  dictionary['Low'] = low
  dictionary['Close'] = close

  df['Open'] = openn
  df['High'] = high
  df['Low'] = low
  df['Close'] = close

  import plotly.graph_objects as go
  fig3 = make_subplots(specs=[[{"secondary_y": True}]])
  fig3.add_trace(go.Candlestick(x=hist.index,
                              open=hist['Open'],
                              high=hist['High'],
                              low=hist['Low'],
                              close=hist['Close'],
                             ))

  # return dictionary

  # onesec = list(filter(lambda x: int(x) < int(orderprices_a_timestamps[0])+1000000000,orderprices_a_timestamps))
  # return onesec

  # splitt = list(map(lambda x: x.split(' ')[-1], orderprices_a_timestamps))
  # return splitt[0]
  
  # return sns.lineplot(x=orderprices_a_timestamps, y=orderprices_a)
  # fig,ax=plt.subplots(figsize=(6,6))
  # ax=sns.set(style="darkgrid")
  # sns.lineplot(orderprices_a_timestamps,orderprices_a)
  # canvas=FigureCanvas(fig)
  # img = io.BytesIO()
  # fig.savefig(img)
  # img.seek(0)
  # return send_file(img,mimetype='img/png')
    
  # Closing file
  f.close()


@app.route("/TSX/NewOrderRequest")
def OrderRequest():
  # Opening JSON file
  f = open('data/TSXData.json')
    
  # returns JSON object as a dictionary
  data = json.load(f)
    
  # Iterating through the json list
  for i in data:
    if i['MessageType'] == "NewOrderRequest":
      orderprices_r.append(str(i['OrderPrice']))
      orderprices_r_timestamps.append(str(i['TimeStamp']))
    
  # Closing file
  f.close()


@app.route("/")
def hello():
  return "Hello World!"

if __name__ == "__main__":
  app.run()
