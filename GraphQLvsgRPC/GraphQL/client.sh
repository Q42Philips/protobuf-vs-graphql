#!/bin/bash
echo $1
for (( c=1; c<=$1; c++ ))
do
    curl -X POST -w \
    "../@curl-format.txt" -H "Content-Type: application/json" \
    -d '{"query": "{ data{testint, teststring, testdate, teststring2, testbool} }" }' \
    http://localhost:4000/graphql 
done

