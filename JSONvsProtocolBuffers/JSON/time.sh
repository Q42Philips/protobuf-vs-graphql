#!/bin/bash
echo $1
for (( c=1; c<=$1; c++ ))
do
   curl -w "@../curl-format.txt" "http://localhost:3333"
done
