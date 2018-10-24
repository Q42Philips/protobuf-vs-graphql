# Description

Comparing round trip speed between GraphQL and gRPC using javascript and comparing small amounts of data and very big messages.


# Installation
## GraphQL server

```cd GraphQL```
```npm install```
```npm start```

## gRPC server

```cd gRPC```
```npm install```
```npm start```

## Very Large Requests and Responses

```python3 generatebigmessage.py``` 
or 
```python3 generatebigdata.py```
now copy paste your results in your indexbigdata.js file or serverbigdata.js
***tip: if you don't want to manually copy paste use | pbcopy (for mac) or | xclip (for linux)***

## Install python dependecies

```pip install requests matplotlib argparse numpy hurry.filesize```

# Usage

At this point you should have a GraphQL server running at port 1234 and a gRPC server running at port 50051. To now test performance execute the python files for plotting. (note these are for small amounts of data, if you want to run the bigdata servers type ````node serverbigdata.js or node indexbigdata.js```)


## For gRPC

```cd gRPC```

make requests by typing:
```node client.js```
or for the large messages:
```serverbigdata.js```

your times should be saved at results.txt (or resultsbigdata.txt)

to now plot this data type:
```python3 plotfile.py```
or for the large messages:
```python3 plotfilebigdata.py```


## For GraphQL

```cd GraphQL```

execute the python script:
```python3 plot.py```
or for the large messages:
```python3 plotbigdata.py```

**You can add --times [amount] for more samples**

# Results

Yes gRPC is actually a lot faster (basicly 10X faster for whatevery you trow at it). I would still rather work with GraphQL since gRPC is a pain in the ass.

![plot](graph.png)