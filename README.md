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

## Copyright
Copyright The GoDataSource_PushNotificationServer Contributors.

## Terms of Use and License Agreement
GoDataSource_PushNotificationServer is available under the [GNU General Public License Version 3](https://github.com/WorldHealthOrganization/godata/blob/master/LICENSE.txt).

GoDataSource_PushNotificationServer also includes external libraries that are available under a variety of licenses.

## Disclaimer of Warranty
There is no warranty for the program, to the extent permitted by applicable law. Except when otherwise stated in writing the copyright holders and/or other parties provide the program “as is” without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the program is with you. should the program prove defective, you assume the cost of all necessary servicing, repair or correction.

## Limitation of Liability
In no event unless required by applicable law or agreed to in writing will any copyright holder, or any other party who modifies and/or conveys the program as permitted in the license, be liable to you for damages, including any general, special, incidental or consequential damages arising out of the use or inability to use the program (including but not limited to loss of data or data being rendered inaccurate or losses sustained by you or third parties or a failure of the program to operate with any other programs), even if such holder or other party has been advised of the possibility of such damages.