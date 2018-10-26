#!/bin/bash
echo $1
for (( c=1; c<=$1; c++ ))
do
    curl -w "@../curl-format.txt" http://localhost:6666 -H 
'Content-Type: application/octet-stream'
done
