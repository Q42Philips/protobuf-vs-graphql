# Description

Comparing round trip speed between GraphQL and gRPC using javascript and comparing small amounts of data and very big messages.


# Installation
## GraphQL server

```
cd GraphQL
npm install
npm start
(for the bigdata server "node indexbigdata.js")
```

## gRPC server

```
cd gRPC
npm install
npm start
(for the bigdata server "node serverbigdata.js")
```

## Install Python dependencies

```
pip install -r requirements.txt

# Setup virtualenv (optional)
virtualenv ENV
```

## Very Large Requests and Responses

```python3 generatebigmessage.py``` 

or:

```python3 generatebigdata.py```

now copy paste your results in your indexbigdata.js file or serverbigdata.js (Or leave as is since I have already done this to save you time)

**tip: if you don't want to manually copy paste use | pbcopy (for mac) or | xclip (for linux)**

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

**These results how every are not with keep-alive and since gRPC does use keep-alive we thought this is not fair therefor this is how to get the results with keep-alive enabled**

```node client.js```

or for the large data

```node clientbigdata.js```

the results are now saved in results.txt or resultsbigdata.txt respectivly

to now plot there results type

```python3 plotfile.py```

or for the large data

```python3 plotfilebigdata.py```

# Results

The difference between gRPC and GraphQL is very significant, gRPC is approximatly 10 times faster in every scenario. **BUT** this is not a fair comparison. You are comparing gRPC with keep-alive versus GraphQL without keep-alive. When you add keep-alive headers to GraphQL (in our test case) we found that it is actually a little bit faster then gRPC and that gives some very promissing results. Since in my opinion at least I would rather work with GraphQL since it is a lot easier and cleaner to work with.

The more itterations you do with gRPC the faster the average time gets. This is due to establishing a connection, during the first cylce the server and client need to establish a handshake but after this handshake is established, you don't need to repeat this step. In the plot you can actually see this. On average the time the first request response cycle took on gRPC 12 milliseconds. All other cycles after that one however took around 0.05 miliseconds. For GraphQL the handshake establishment is a lot faster aswell around 1 milliseconds compared to 12.

What I did find very unexpecting is that the bigger messages where only very slightly slower then the over a 100.000 times smaller messages.

![GraphQLvsgRPCplot](GraphQLvsgRPC/GraphQLgRPCdata.png)

![GraphQL with keep alive](graphqlkeepalive.png)