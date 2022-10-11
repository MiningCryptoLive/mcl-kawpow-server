MCL KawPoW Server - v1.0.1 
================

[![License](https://img.shields.io/badge/license-GPL--3.0-blue)](https://opensource.org/licenses/GPL-3.0)

Highly Efficient Stratum Server for KawPoW !

-------
### MCL KawPoW consists of 2 main modules:
| Project | Link |
| ------------- | ------------- |
| [MCL KawPoW Server](https://github.com/MiningCryptoLive/mcl-kawpow-server) | https://github.com/MiningCryptoLive/mcl-kawpow-server |
| [MCLKawPoW Stratum](https://github.com/MiningCryptoLive/mcl-kawpow-stratum) | https://github.com/MiningCryptoLive/mcl-kawpow-stratum |

-------
### Requirements
***NOTE:*** _These requirements will be installed in the install server section!_
* Ubuntu Server 20.04.* LTS
* Coin daemon
* Node Version Manager
* Node 12.22.12
* Process Manager 2 / pm2
* Redis Server
* ntp

-------

### Install RavenCoin Daemon

    adduser pool
    usermod -aG sudo pool
    su - pool
    sudo apt install wget unzip
    wget https://github.com/RavenProject/Ravencoin/releases/download/v4.3.2.1/raven-4.3.2.1-x86_64-linux-gnu.zip
    unzip raven-4.3.2.1-x86_64-linux-gnu.zip
    rm raven*zip
    cd linux
    tar -xvf raven-4.3.2.1-x86_64-linux-gnu.tar.gz
    rm raven*gz
    cd raven-4.3.2.1/bin
    mkdir -p ~/.raven/
    touch ~/.raven/raven.conf
    echo "rpcuser=user1" > ~/.raven/raven.conf
    echo "rpcpassword=pass1" >> ~/.raven/raven.conf
    echo "prune=550" >> ~/.raven/raven.conf
    echo "daemon=1" >> ~/.raven/raven.conf
    echo "rpcport=8766" >> ~/.raven/raven.conf
    echo "port=8767" >> ~/.raven/raven.conf
    ./ravend
    ./raven-cli getnewaddress

Example output: RNs3ne88DoNEnXFTqUrj6zrYejeQpcj4jk - it is the address of your pool, you need to remember it and specify it in the configuration file pool_configs/ravencoin.json.

Information about pool wallet address.
    
    ./raven-cli getaddressesbyaccount ""
    
Get more information.
    
    ./raven-cli getwalletinfo
    
Information about synchronization of blocks in the main chain.

    ./raven-cli getblockcount
    
Other helpfull commands.

    ./raven-cli help

-------

### Install Neoxa Daemon

    adduser pool
    usermod -aG sudo pool
    su - pool
    sudo apt install wget unzip
    mkdir -p neoxa
    cd neoxa
    wget https://github.com/NeoxaChain/Neoxa/releases/download/v1.0.3/neoxad-linux64.zip
    unzip neoxad-linux64.zip
    rm -rf neoxad-linux64.zip
    mkdir -p ~/.neoxa/
    touch ~/.neoxa/neoxa.conf
    echo "rpcuser=user1" > ~/.neoxa/neoxa.conf
    echo "rpcpassword=pass1" >> ~/.neoxa/neoxa.conf
    echo "prune=550" >> ~/.neoxa/neoxa.conf
    echo "daemon=1" >> ~/.neoxa/neoxa.conf
    echo "rpcport=9766" >> ~/.neoxa/neoxa.conf
    echo "port=9767" >> ~/.neoxa/neoxa.conf
    ./neoxad
    ./neoxa-cli getnewaddress

Example output: GKdky7EFBuUSWPHzfaP1EkqW4joYpqxnHQ - it is the address of your pool, you need to remember it and specify it in the configuration file pool_configs/neoxa.json.

Information about pool wallet address.
    
    ./neoxa-cli getaddressesbyaccount ""
    
Get more information.
    
    ./neoxa-cli getwalletinfo
    
Information about synchronization of blocks in the main chain.

    ./neoxa-cli getblockcount
    
Other helpfull commands.

    ./neoxa-cli help

-------

### Install Server

    sudo apt install git -y
    cd ~
    git config --global http.https://gopkg.in.followRedirects true
    git clone https://github.com/MiningCryptoLive/MCL-kawpow-server.git
    cd mcl-kawpow-server/
    ./install.sh
    
    or
    
    curl -L https://raw.githubusercontent.com/MiningCryptoLive/mcl-kawpow-server/master/install.sh | bash

-------

### Configure Server

Change "stratumHost": "miningcrypto.live", to your IP or DNS in file config.json:

    cd ~/mcl-kawpow-server
    nano config.json

```javascript
{
    "devmode": false,
    "devmodePayMinimim": 0.25,
    "devmodePayInterval": 120,
    "logips": true,       
    "anonymizeips": true,
    "ipv4bits": 16,
    "ipv6bits": 16,
    "defaultCoin": "ravencoin",
    "logger" : {
        "level" : "debug",
        "file" : "/home/pool/mcl-kawpow-server/logs/pool_debug.log"
    },
    "cliHost": "127.0.0.1",
    "cliPort": 17117,
    "clustering": {
        "enabled": true,
        "forks": "auto"
    },
    "defaultPoolConfigs": {
        "blockRefreshInterval": 333,
        "jobRebroadcastTimeout": 25,
        "connectionTimeout": 600,
        "emitInvalidBlockHashes": false,
        "validateWorkerUsername": true,
        "tcpProxyProtocol": false,
        "banning": {
            "enabled": true,
            "time": 600,
            "invalidPercent": 50,
            "checkThreshold": 500,
            "purgeInterval": 300
        },
        "redis": {
            "host": "127.0.0.1",
            "port": 6379
        }
    },
    "website": {
        "enabled": true,
        "sslenabled": false,
        "sslforced": false,
        "host": "0.0.0.0",
        "port": 3001,
        "sslport": 443,
        "sslkey": "/home/pool/mcl-kawpow-server/certs/privkey.pem",
        "sslcert": "/home/pool/mcl-kawpow-server/certs/fullchain.pem",
        "stratumHost": "stratum.alphax.pro",
        "stats": {
            "updateInterval": 300,
            "historicalRetention": 43200,
            "hashrateWindow": 300
        }
    },
    "redis": {
        "host": "127.0.0.1",
        "port": 6379
    }
}

```

Change "address": "RNs3ne88DoNEnXFTqUrj6zrYejeQpcj4jk", to your pool created wallet address in file ravencoin.json:

    cd ~/mcl-kawpow-server/pools
    nano ravencoin.json

```javascript
{
  "enabled": true,
  "coin": "ravencoin.json",
  "address": "RNs3ne88DoNEnXFTqUrj6zrYejeQpcj4jk",
  "rewardRecipients": {
    "RNs3ne88DoNEnXFTqUrj6zrYejeQpcj4jk": 1.0
  },
  "paymentProcessing": {
    "enabled": true,
    "schema": "PROP",
    "paymentInterval": 120,
    "minimumPayment": 1,
    "minConf": 30,
    "coinPrecision": 8,
    "daemon": {
      "host": "127.0.0.1",
      "port": 8766,
      "user": "your_rpc_user",
      "password": "your_rpc_password"
    }
  },
  "ports": {
    "6666": {
      "name": "Stratum Port 1-2 GPU",
      "diff": 0.05,
      "varDiff": {
        "minDiff": 0.025,
        "maxDiff": 1024,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 25
      }
    },
    "7777": {
      "name": "Stratum Port 3-4 GPU",
      "diff": 0.10,
      "varDiff": {
        "minDiff": 0.05,
        "maxDiff": 1024,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 25
      }
    },
    "8888": {
      "name": "Stratum Port 5+ GPU",
      "diff": 0.20,
      "varDiff": {
        "minDiff": 0.10,
        "maxDiff": 1024,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 50
      }
    },
    "9999": {
      "name": "Stratum Port Nicehash",
      "diff": 1024000000,
      "varDiff": {
        "minDiff": 1024000000,
        "maxDiff": 20480000000,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 25
      }
    }
  },
  "daemons": [
    {
      "host": "127.0.0.1",
      "port": 8766,
      "user": "your_rpc_user",
      "password": "your_rpc_password"
    }
  ],
  "p2p": {
    "enabled": false,
    "host": "127.0.0.1",
    "port": 8767,
    "disableTransactions": true
  }
}

```

Change "address": "GKdky7EFBuUSWPHzfaP1EkqW4joYpqxnHQ", to your pool created wallet address in file neoxa.json:

    cd ~/mcl-kawpow-server/pools
    nano neoxa.json

```javascript
{
  "enabled": true,
  "coin": "neoxa.json",
  "address": "GKdky7EFBuUSWPHzfaP1EkqW4joYpqxnHQ",
  "rewardRecipients": {
    "GKdky7EFBuUSWPHzfaP1EkqW4joYpqxnHQ": 1.0
  },
  "paymentProcessing": {
    "enabled": true,
    "schema": "PROP",
    "paymentInterval": 120,
    "minimumPayment": 1,
    "minConf": 30,
    "coinPrecision": 8,
    "daemon": {
      "host": "127.0.0.1",
      "port": 9766,
      "user": "your_rpc_user",
      "password": "your_rpc_password"
    }
  },
  "ports": {
    "6566": {
      "name": "Stratum Port 1-2 GPU",
      "diff": 0.05,
      "varDiff": {
        "minDiff": 0.025,
        "maxDiff": 1024,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 25
      }
    },
    "7577": {
      "name": "Stratum Port 3-4 GPU",
      "diff": 0.10,
      "varDiff": {
        "minDiff": 0.05,
        "maxDiff": 1024,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 25
      }
    },
    "8588": {
      "name": "Stratum Port 5+ GPU",
      "diff": 0.20,
      "varDiff": {
        "minDiff": 0.10,
        "maxDiff": 1024,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 50
      }
    },
    "9599": {
      "name": "Stratum Port Nicehash",
      "diff": 1024000000,
      "varDiff": {
        "minDiff": 1024000000,
        "maxDiff": 20480000000,
        "targetTime": 10,
        "retargetTime": 60,
        "variancePercent": 30,
        "maxJump": 25
      }
    }
  },
  "daemons": [
    {
      "host": "127.0.0.1",
      "port": 9766,
      "user": "your_rpc_user",
      "password": "your_rpc_password"
    }
  ],
  "p2p": {
    "enabled": false,
    "host": "127.0.0.1",
    "port": 9767,
    "disableTransactions": true
  }
}

```

### Run Server
    
    cd ~/mcl-kawpow-server
    bash server-start.sh

### Donations for developer of mcl KawPoW Server


    
-------

## License
```
Licensed under the GPL-3.0
Copyright (c) 2022 miningcrypto.live
```
