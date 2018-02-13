#!/bin/bash
cd /home/alex/Documents/Batcave/test-scripts/rd3/src/utils

# get previous and current ip
previous=`cat wanip.js | cut -d"'" -f 2`
current=`dig +short myip.opendns.com @resolver1.opendns.com`
echo working

if [ "$previous" != "$current" ]
then
  # save ip to js file that exports as WANIP constant
  echo $current > wanip.js
  git add wanip.js
  git commit -m "auto update WANIP"
  git push
fi

# cron job
# crontab -e

# runs script every 5 minutes
# */5 * * * * /home/alex/Documents/Batcave/test-scripts/rd3/src/utils/git-update-ip.sh
