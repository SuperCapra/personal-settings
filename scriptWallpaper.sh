now=`date +"%Y-%m-%d %H:%M:%S"`
today=`date +"%Y-%m-%d"`
todayNoMinus=`date +"%Y-%m-%d"`

cd /Users/gmaggi/Documents/personal-backend/personal-settings/

LOG=./log.txt
JSONLASTTIME=./lastRunTime.json
wallpaperOfChioce=./wallpaper/wallpaperOfChioce.jpg

if [ -f "${wallpaperOfChioce}" ]; then
    if [ -f "${LOG}" ]; then
        echo ${now}' | Script started.' >> ${LOG}
    else
        touch ${LOG}
        echo ${now}' | Initializing the script for the first time.' > ${LOG}
    fi

    if [ ! -d "./backupDeloitte/${today}" ]; then
        mkdir ./backupDeloitte/${today}
        echo ${now}' | Folder created at .backupDeloitte/'${today}'.' >> ${LOG}
    fi

    cp /var/deloitte/branding/DeloitteWallpaper.jpg /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte/${today}

    if [ -f "./backupDeloitte/${today}/DeloitteWallpaper.jpg" ]; then
        echo ${now}' | Wallpaper backed up in the folder .backupDeloitte/'${today}'.' >> $LOG
        sudo cp ${wallpaperOfChioce} /var/deloitte/branding/DeloitteWallpaper.jpg

        lastModifiedDate=(date -r /var/deloitte/branding/DeloitteWallpaper.jpg +"%Y-%m-%d")

        if [[ ${today}==${lastModifiedDate} ]]; then
            echo ${now}' | Wallpaper substituted successfully.' >> $LOG
            echo ${now}' | Script Ended successfully.' >> $LOG
            echo "{\"lastRun\":\"${today}\"}" > ${JSONLASTTIME}
        else
            echo ${now}' | Something went wrong.' >> $LOG
            echo ${now}' | Script Ended unsuccessfully.' >> $LOG
        fi
        else
            echo ${now}' | No wallpaper backed up in the folder .backupDeloitte/'${today}'.' >> $LOG
            echo ${now}' | Script ended.' >> $LOG
    fi

else
    if [ -f "${LOG}" ]; then
        echo ${now}' | No wallpaperOfChioce detected.' >> ${LOG}
    else
        touch ${LOG}
        echo ${now}' | No wallpaperOfChioce detected and log.' > ${LOG}
    fi
fi