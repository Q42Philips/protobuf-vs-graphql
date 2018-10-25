#!/bin/bash

usage() { echo -e "Usage: $0 [-s <install or skip>] [-d <small or big>] [-k <true or false>] \
\n                            -s for install         -d for data         -k for keep-alive" 1>&2; exit 1; }

while getopts ":s:d:k:" o; do
    case "${o}" in
        s)
            s=${OPTARG}
            ((s == "install" || s == skip)) || usage
            ;;
        d)
            d=${OPTARG}
            ((d == "small" || d == "big")) || usage
            ;;
        k)
            k=${OPTARG}
            ((k == "true" || d == "false")) || usage
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

if [ -z "${s}" ] || [ -z "${k}" ]; then
    usage
fi

cd GraphQLvsgRPC/GraphQL 

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


if [ $k == "true" ]
then 
    continue;
elif [ $k == "false" ]
then 
    if [ $d == "small" ]
    then 
        node index.js &
        python3 plot.py
        exit
    elif [ $d == "big" ]
    then 
        node indexbigdata.js &
        python3 plotbigdata.py
        exit
    else
        echo "that was not a correct argument"
    fi

else
    echo "that was not a correct argument"
fi

if [ $d == "small" ]
then 
    node index.js &
    node client.js
    python3 plotfile.py
elif [ $d == "big" ]
then 
    node indexbigdata.js &
    node clientbigdata.js
    python3 plotfilebigdata.py 
else
    echo "that was not a correct argument"
fi


cd
