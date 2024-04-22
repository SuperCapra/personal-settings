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
* **Launch the login to salesforce** `sfdx force:auth:web:login -r SITE -a LABELNAME` LABELNAME is the label of the org where you log in and the SITE is the url of salesforce, for instance https://login.saleforce.com for production
* **Deploy to labeled org** `sfdx force:source:deploy -w 10 -p "./src/classes/CLASSNAME.cls","./src/classes/RiepilogoPartitaTriggerHandlerTest.cls" -l RunSpecifiedTests -r CLASSNAMETEST -u LABELNAME` LABELNAME is the label of the org where you log in. You can decide which file to deploy and which test run. You can decide to run local test with `RunLocalTest` and omitting `-r CLASSNAMETEST`
* **Retrieve from labeled org** `sfdx force:mdapi:retrieve -u LABELNAME -k "./src/package.xml" -r "./src/"` LABELNAME is the label of the org where you log in, the first destination is where the package is and the second is where the zip will be donloaded -> no note that I should write a script to unzip the retrieved files and then remove the zip

## Usefull Unix commands

* **Find with process is running on a given port** `lsof -i tcp:PORT`
* **Kill the process with the PID given** `kill -9 PID`

## SSH KEYS HOW TO

1. Go in the user folder (gmaggi), hence just open the terminal
2. create the folder .ssh with the command `mkdir .ssh`
3. create the file id_rsa `touch id_rsa`
4. open the file id_rsa `open id_rsa` and paste inside the the private key of the SSH
5. create the file config with `touch config` and add the following lines

```
Host *.github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa_github
Host ssh.dev.azure.com
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes
  HostkeyAlgorithms +ssh-rsa
  PubkeyAcceptedKeyTypes=ssh-rsa
```
6. then secure the `id_rsa` file with the comand `chmod 400 ~/.ssh/id_rsa;`
7. finally add the ssh key to the keychain with the command `ssh-add --apple-use-keychain ~/.ssh/id_rsa`
8. the step 7 needs to be repeated with all the ssh keys
