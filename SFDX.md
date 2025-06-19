# SFDX

## Usefull commands for sdfx
* **Launch the login to salesforce** `sfdx force:auth:web:login -a LABELNAME` LABELNAME is the label of the org where you log in
* **Launch the login to salesforce** `sfdx force:auth:web:login -r SITE -a LABELNAME` LABELNAME is the label of the org where you log in and the SITE is the url of salesforce, for instance https://login.salesforce.com for production
* **Deploy to labeled org** `sfdx force:source:deploy -w 10 -p "./src/classes/CLASSNAME.cls","./src/classes/RiepilogoPartitaTriggerHandlerTest.cls" -l RunSpecifiedTests -r CLASSNAMETEST -u LABELNAME` LABELNAME is the label of the org where you log in. You can decide which file to deploy and which test run. You can decide to run local test with `RunLocalTest` and omitting `-r CLASSNAMETEST`
* **Retrieve from labeled org** `sfdx force:mdapi:retrieve -u LABELNAME -k "./src/package.xml" -r "./src/"` LABELNAME is the label of the org where you log in, the first destination is where the package is and the second is where the zip will be donloaded -> no note that I should write a script to unzip the retrieved files and then remove the zip

* **Retrieve from labeled org** `sf project retrieve start --manifest src/package.xml`

* **Setup sfdx-project.json** the file should be as

{
  "packageDirectories": [
    {
      "path": "",
      "default": true
    }
  ],
  "name": "FAE_FULL",
  "namespace": "",
  "sfdcLoginUrl": "https://test.salesforce.com",
  "sourceApiVersion": "64.0"
}

Where name needs to be the label of the org 