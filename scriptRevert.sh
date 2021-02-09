now=`date +"%Y-%m-%d-%H:%M:%S"`
today=`date +"%Y-%m-%d"`
LOG=log.txt
JSONLASTTIME=lastRunTime.json
lastRun=$(jq -r .date pr.json)

echo ${today}' : Initializing the script for reversion of the substitution of the wallpaper.' >> $LOG

cd /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte
sudo cp ./${lastRun}/DeloitteWallpaper.jpg /var/deloitte/branding/DeloitteWallpaper.jpg

echo ${today}' : Reverting done with no problem at '${now}'.' >> $LOG