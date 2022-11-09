# PERSONAL SETTINGS AND STUFFS

* **VSCode_settings.json:** setting for VS CODE
* **scriptWallpaper.sh:** script bash to change the wallpaper to macOS
    > *If the script does not has the right to be executed we have to lauch che command `chmod +x ./"NAMEOFTHESCRIPT".sh`*.
    > *For running the script it has to be installed jq, if is not installed run `brew install jq"`*
* **scriptRevert.sh:** script bash to revert the changing of the wallpaper to macOS

* **scriptRevert.sh:** script bash to revert the changing of the wallpaper to macOS

## Configuration of git
* **Configuration of local (not global) GIT** `git config user.email "gvnnmaggi@gmail.com"`
* **See global configuration of GIT** `git config --list`

## Usefull commands for sdfx
* **Launch the login to salesforce** `sfdx force:auth:web:login -a LABELNAME` LABELNAME is the label of the org where you log in
* **Deploy to labeled org** `sfdx force:source:deploy -w 10 -p "./src/classes/CLASSNAME.cls","./src/classes/RiepilogoPartitaTriggerHandlerTest.cls" -l RunSpecifiedTests -r CLASSNAMETEST -u LABELNAME` LABELNAME is the label of the org where you log in. You can decide which file to deploy and which test run. You can decide to run local test with `RunLocalTest` and omotting `-r CLASSNAMETEST`