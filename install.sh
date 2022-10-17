#!/bin/sh

# This is the Server install script.
echo "mcl KawPoW Server install script for Ubuntu Server 20.04."
echo "Please do NOT run as root, run as the pool user!"
echo "If it not exist, create the pool user!"

sleep 2

echo "Installing... Please wait!"

sleep 2

sudo rm -rf /usr/lib/node_modules
sudo rm -rf node_modules
sudo apt remove --purge -y nodejs
sudo rm /etc/apt/sources.list.d/*

sudo apt update
sudo apt upgrade -y

sudo apt install -y apt-transport-https software-properties-common build-essential autoconf pkg-config make gcc g++ screen wget curl ntp fail2ban

sudo add-apt-repository -y ppa:chris-lea/redis-server
curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt update
sudo apt install -y libdb-dev libdb++-dev libssl-dev libboost-all-dev libminiupnpc-dev libtool autotools-dev
sudo apt install -y sudo git nodejs nginx certbot python3-certbot-nginx redis-server unzip htop

sleep 3

sudo systemctl enable fail2ban
sudo systemctl start fail2ban
sleep 2
sudo systemctl enable redis-server
sudo systemctl start redis-server
sleep 2
sudo systemctl enable ntp
sudo systemctl start ntp

sudo rm -rf ~/.nvm
sudo rm -rf ~/.npm
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
sudo chown -R $USER:$GROUP ~/.nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install v12.22.12
nvm use v12.22.12

npm update -g
npm install -g pm2@5.1.1
npm install -g npm@latest-6

git config --global http.https://gopkg.in.followRedirects true
git clone https://github.com/MiningCryptoLive/mcl-kawpow-server.git
chmod -R +x mcl-kawpow-server/
cd mcl-kawpow-server

npm install
npm update
npm audit fix
sleep 2
npm install sha3
sleep 2
npm install logger
sleep 2
npm install bignum
sleep 2

echo ""
echo "KawPoW Server Installed!"
echo ""

exit 0
