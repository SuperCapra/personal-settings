now=`date +"%Y-%m-%d %H:%M:%S"`
today=`date +"%Y-%m-%d"`
todayNoMinus=`date +"%Y-%m-%d"`
modifiedDateTime=`date -r /var/deloitte/branding/DeloitteWallpaper.jpg +"%Y-%m-%d %H:%M:%S"`
modifiedDateTimeFromJson=`(jq -r .lastModifiedDateTime lastRunTime.json)`

cd /Users/gmaggi/Documents/personal-backend/personal-settings/

LOG=./log.txt
JSONLASTTIME=./lastRunTime.json
wallpaperOfChioce=./wallpaper/wallpaperOfChioce.jpg

if [[ ${modifiedDateTime} != ${modifiedDateTimeFromJson} ]]; then
    if [ -f "${wallpaperOfChioce}" ]; then
        if [ -f "${LOG}" ]; then
            echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Script started.' >> ${LOG}
        else
            touch ${LOG}
            echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Initializing the script for the first time.' > ${LOG}
        fi

        if [ ! -d "./backupDeloitte/${today}" ]; then
            mkdir ./backupDeloitte/${today}
            echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Folder created at .backupDeloitte/'${today}'.' >> ${LOG}
        fi

        cp /var/deloitte/branding/DeloitteWallpaper.jpg /Users/gmaggi/Documents/personal-backend/personal-settings/backupDeloitte/${today}

        if [ -f "./backupDeloitte/${today}/DeloitteWallpaper.jpg" ]; then
            echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Wallpaper backed up in the folder .backupDeloitte/'${today}'.' >> $LOG
            sudo cp ${wallpaperOfChioce} /var/deloitte/branding/DeloitteWallpaper.jpg

            lastModifiedDate=`(date -r /var/deloitte/branding/DeloitteWallpaper.jpg +"%Y-%m-%d")`
            lastModifiedDateTime=`(date -r /var/deloitte/branding/DeloitteWallpaper.jpg +"%Y-%m-%d %H:%M:%S")`

            if [[ ${today} == ${lastModifiedDate} ]]; then
                echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Wallpaper substituted successfully.' >> $LOG
                echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Script Ended successfully.' >> $LOG
                echo "{\"lastRun\":\"${today}\", \"lastModifiedDateTime\":\"${lastModifiedDateTime}\"}" > ${JSONLASTTIME}
            else
                echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Something went wrong.' >> $LOG
                echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Script Ended unsuccessfully.' >> $LOG
            fi
            else
                echo ${now}' | [SCRIPT CHANGE WALLPAPER] | No wallpaper backed up in the folder .backupDeloitte/'${today}'.' >> $LOG
                echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Script ended.' >> $LOG
        fi

    else
        if [ -f "${LOG}" ]; then
            echo ${now}' | [SCRIPT CHANGE WALLPAPER] | No wallpaperOfChioce detected.' >> ${LOG}
        else
            touch ${LOG}
            echo ${now}' | [SCRIPT CHANGE WALLPAPER] | No wallpaperOfChioce detected and log.' > ${LOG}
        fi
    fi
else
    echo ${now}' | [SCRIPT CHANGE WALLPAPER] | Last modified wallpaper is made by this script.' >> ${LOG}
fi