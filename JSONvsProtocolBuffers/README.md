# Description

Comparing round trip speed between Protocol Buffers and JSON using javascript.


# Installation
## JSON server

```
cd json
npm install
npm start
```

## Protobuf server

```
cd protobuf
npm install
npm start
```

## Install python dependecies

```
pip install -r requirements.txt

# Setup virtualenv (optional)
virtualenv ENV
```

## Give execution permissions to bash files

```chmod +x json/time.sh protobuf/time.sh```

# Usage

At this point you should have a JSON server running at port 3333 and a Protobuf server running at port 6666. To now test performance execute the bash files for cli testing and the python files for plotting.

now execute the scripts by typing:

```./[folder]/time.sh [amount of requests]```

example: 

```./json/time.sh 10```

or the python plot

```python3 plot.py```

example: (default value is 100 if you leave --times out):

```python3 plot.py --times 300```

# Results

Yes protobuf is a faster but in my opinion it is neglectable. Since JSON is a lot easier to work with.

![plot](graph.png)