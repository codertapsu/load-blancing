#!/bin/bash

# start=`date +%s%N`
SECONDS=0
for ((request=1;request<=20;request++))
do
    for ((x=1;x<=20;x++))
    do
        curl -s "http://localhost:3000" &
    done
done

wait

echo ""
# end=`date +%s%N`
echo "Execution Time is : $SECONDS seconds"
