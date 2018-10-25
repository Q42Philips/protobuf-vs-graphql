#!/bin/bash

usage() { echo -e "Usage: $0 [-s <install or skip>] [-d <small or big>] \
\n                         -s for install         -d for data" 1>&2; exit 1; }

while getopts ":s:d:" o; do
    case "${o}" in
        s)
            s=${OPTARG}
            ((s == "install" || s == "skip")) || usage
            ;;
        d)
            d=${OPTARG}
            ((d == "small" || d == "big")) || usage
            ;;
        i)
            i=${OPTARG}
            ;;
        t)
            t=${OPTARG}
            ;;
        *)
            usage
            ;;
    esac
done
shift $((OPTIND-1))

if [ -z "${s}" ] || [ -z "${d}" ]; then
    usage
fi

cd GraphQLvsgRPC/gRPC

if [ $s == "install" ]
then 
    npm install
    sudo pip install -r ../../requirements.txt
elif [ $s == "skip" ]
then 
    echo ""
else
    echo "that was not a correct argument"
fi

if [ $d == "small" ]
then 
    node server.js &
    node client.js

    python3 plotfile.py
    exit
elif [ $d == "big" ]
then 
    node serverbigdata.js &
    node clientbigdata.js

    python3 plotfilebigdata.py
    exit
else
    echo "that was not a correct argument"
fi

cd
