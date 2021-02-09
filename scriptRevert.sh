now=`date +"%Y-%m-%d %H:%M:%S"`
today=`date +"%Y-%m-%d"`
LOG=log.txt

echo ${today}' : Initializing the script for reversion of the substitution of the wallpaper.' >> $LOG

cd /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte

JSONLASTTIME=./lastRunTime.json
lastRun=(jq -r .lastRun lastRunTime.json)

if [ -f "${JSONLASTTIME}" ] && [ -d "${lastRun}" ]; then
    sudo cp ./${lastRun}/DeloitteWallpaper.jpg /var/deloitte/branding/DeloitteWallpaper.jpg
    rm lastRunTime.json
    echo ${today}' : Reverting done with no problem at '${now}'.' >> $LOG
else
    echo ${today}' : There were some problems at retrieving the folder.' >> $LOG
fi