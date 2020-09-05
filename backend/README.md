# About This Project
國網中心的軟體市集後端，使用 node.js 與 mongoDB。

## Usage
- `autoMakeDockerfile.js`  
  這個檔案 export 一個同名模組（`autoMakeDockerfile(aSelectedPackageArray, aJsonFile)`）。其中 `aJsonFile` 分成兩部分，`base` 對應到 Dockerfile 的 `FROM <image>`，`packages` 則會有一系列的套件及其對應的安裝指令。  
  
  只要給定一個 array (`aSelectedPackageArray`)，其第 1 個元素（array[0]）屬於 `aJsonFile.base`，其他元素均屬於 `aJsonFile.packages`，這個 module 就會產生一個第一行是 `FROM <image>`、第二行以後是 `RUN <commands>` 的 Dockerfile。  
  
  `aJsonFIle` 的範例可見 `dockerPackage.json`，預期會是從 DB query 出來的 json object，`autoMakeDockerfile.test.js` 中有使用範例。
  
- `status.js`
  這個檔案會使用帳號為visitor、密碼為123456的身分連接softwareMarket資料庫，產生紀錄軟體狀態的`progress.json`。
- `softwareData.js`
  這個檔案會使用帳號為visitor、密碼為123456的身分連接softwareMarket資料庫，產生紀錄軟體資訊的`result.json`。
