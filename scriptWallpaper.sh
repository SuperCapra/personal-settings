now=`date +"%Y-%m-%d-%H:%M:%S"`
today=`date +"%Y-%m-%d"`
todayNoMinus=`date +"%Y-%m-%d"`
LOG=log.txt
JSONLASTTIME=lastRunTime.json

cd /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte

if [!-f "$LOG"]; then
    touch log.txt
    echo ${today}': Initializing the script for the first time at '${now}'.' > $LOG
    else
    echo ${today}': Script started at '${now}'.' >> $LOG
fi

if test !-d ${today} then
    mkdir ${today}
    echo ${today}': Folder created at '${now}'.' >> $LOG
fi

cp /var/deloitte/branding/DeloitteWallpaper.jpg /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte/${today}/DeloitteWallpaper.jpg

echo ${today}': Wallpaper backed up at '${now}' in the folder /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte/'${today}'.' >> $LOG

echo ${today}': Renamed wallpaper '${now}'.' >> $LOG

sudo cp ../wallpaper/wallpaperOfChioce.jpg /var/deloitte/branding/DeloitteWallpaper.jpg

echo ${today}': Wallpaper substituted at '${now}'. Now you can logout and log in with a new wallpaper.' >> ../backupDeloittelog.txt

echo "{\"lastRun\":\"${today}\"}" > $JSONLASTTIME