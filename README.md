# STADVDB_S11.5_ETL_T120-21
STADVDB MCO2 ETL Tool Git Repository

## Build for local
### Step 0: Install Node.js and npm
### Step 1: Create financial data warehouse using FinancialWH.sql found in Team Notion to MySQL

### Step 2: Modify the mysql.js file to your connection's configuration with the financial database
```
exports.dbSource = mysql.createConnection({
  host: "yourHostName",
  port: "yourPortNumber",
  user: "yourUsername",
  password: "yourPassword",
  database: "financial"
})

exports.dbDest = mysql.createConnection({
  host: "yourHostName",
  port: "yourPortNumber",
  user: "yourUsername",
  password: "yourPassword",
  database: "financialwh"
})
```

### Step 3: Install dependencies
```
npm install
```

### Step 4: Compiles and starts local instance
```
npm start
```

### Step 5: Access local instance on localhost:3000
