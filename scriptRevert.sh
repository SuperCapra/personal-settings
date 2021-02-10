now=`date +"%Y-%m-%d %H:%M:%S"`
today=`date +"%Y-%m-%d"`
LOG=log.txt

echo ${today}' | [SCRIPT REVERT WALLPAPER] | Script Started.' >> $LOG
echo ${today}' | [SCRIPT REVERT WALLPAPER] | Initializing the script for revertion of the substitution of the wallpaper.' >> $LOG

cd /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte

JSONLASTTIME=./lastRunTime.json
lastRun=`(jq -r .lastRun lastRunTime.json)`

if [ -f "${JSONLASTTIME}" ] && [ -d "${lastRun}" ] && [ -f "./${lastRun}/DeloitteWallpaper.jpg" ]; then
    sudo cp ./${lastRun}/DeloitteWallpaper.jpg /var/deloitte/branding/DeloitteWallpaper.jpg
    echo ${today}' | [SCRIPT REVERT WALLPAPER] | Reverting done with no problem at '${now}'.' >> $LOG
else
    echo ${today}' | [SCRIPT REVERT WALLPAPER] | There were some problems at retrieving the folder.' >> $LOG
fi

echo ${today}' | [SCRIPT REVERT WALLPAPER] | Script Ended.' >> $LOG