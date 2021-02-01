# OpenPlant Data Synchronizer

Copyright © 2021 Bentley Systems, Incorporated. All rights reserved.


## Purpose
* 2-way Sync (Synchronize the digital iTwin data with the local Dtabase and vice versa).
* It also supports data synchronization from multiple data sources to multiple iTwins and can run in the background mode without any UI to interact with.
Multiple tasks or configs can be defined for that purpose.

## Goals

1. Connect to a digital iTwin and Query the components.
2. Connect to local database and Query the records.
3. Compare the data in digital iTwin and local database and perform the update based on configuration defined.

## Prerequisites

1. Provide configurations in the Settings.json file.
2. It will ask for Signin only for the first time when running the app.
3. In case of Sql Server:
   - Enable TCP for Sql Server: Sql Server Configuration Manager > SQL Server Network Configuration > Protocols for SQLSERVER > TCP/IP
   - Enable the SQL Server Browser Service
   - Restart these two services: a) Sql Server (Instance Name) b) Sql Server Browser

## Install required packages
1. Run this command on terminal: `npm run installAll`

## Build
1. Run this command on terminal: `npm run build`

## Execute
1. Run this command on terminal: `npm run electron`

## Create Installer
1. Run this command on terminal: `npm run dist`


## How do I Install it?
1. Install OPDataSynchronizer App from this [path](https://autoupdatecdn.bentley.com/opide/OPDataSynchronizer.exe).
2. Run the installer OPDataSynchronizer.exe to install it at desired location.
3. Before running it is required to be configured. Search for config file by typing in the windows search "OPDataSync Config" or find it here:
`C:\Users\{User.Name}\AppData\Local\OPDataSynchronizer\Settings.json`
4. Now run the app. It can be searched in the windows search by typing "OPDataSynchronizer".
5. After the app finishes it will create a log file for each config or task at this path `C:\Users\{User.Name}\AppData\Local\OPDataSynchronizer\logs`

## How do I configure it?

In order to configure the App we need to set the following properties so lets have a look what these properties are.

**`"run_mode": { "headless": true }`**
Whether to run the app in the background mode without User Interface or with GUI.

**`"configurations": []`**
List of configs or tasks to be executed by the App.

**`"master_source": "" // can be set to either "imodel" or "database"`**
Represents single source of truth. If it is set to "imodel" app will update the database defined in the config and vice versa.

**`"imodel_info": {"name": "", "guid": ""}`**
Name and id of the imodel.

**`"project_info": {"name": "", "guid": ""}`**
Name and id of the project.

**Property Mappings**

![alt text](../../media/ecClassmap.PNG)

**For Connecting with Sqlite**

![alt text](../../media/sqliteConfig.PNG)

**For Connecting with SqlServer (Sql Server Authentication Method)**

![alt text](../../media/sqlServer1.PNG)

**For Connecting with SqlServer (Windows Authentication Method)**

![alt text](../../media/sqlServer2.PNG)

**For Connecting with Access Database**

![alt text](../../media/accessDb.PNG)

## References
See https://www.itwinjs.org/reference/ for comprehensive documentation on the iModel.js API and the various constructs used in this sample.


