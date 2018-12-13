# Go.Data Push Notification Server
This project was build using Express 4.x (https://expressjs.com/), Parse Dashboard 1.2 (https://github.com/parse-community/parse-dashboard), Parse Server 3.1 (https://github.com/parse-community/parse-server) and Node 8.x (latest LTS at the time of the development).

## Installation

### Pre-Requisites
Install latest Node 8.x (https://nodejs.org/dist) and MongoDB (https://www.mongodb.com/download-center/community).

### Installation steps
1. Clone this repository from GIT
2. Install 3rd-party packages `# npm install`
3. Add Apple certificates (for push notifications) in certs directory
4. Configure application settings in config/config.json, such as
    1. application port
    2. database settings
    3. Parse application settings
    4. users that can login to the application UI
    5. push notification settings for Android and IOS
5. Start application `# npm start`