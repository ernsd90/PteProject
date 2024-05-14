# SERVER 5000 

pm2 stop navServer
source ~/.bashrc && pm2 restart navServer
pm2 status

cd /var/data/www/navServer/ && source ~/.bashrc && nodemon server.js
#copy build folder for Updated GAD UI
cp -ri /var/data/www/navServer/gad-ui-updated/build /var/data/www/navServer/dist


# Panel 10000  GADS
cd /var/data/www/ &&  nohup ./GADS   --auth=true   --host-address=93.123.85.23   --port=10000   --mongo-db=93.123.85.23:27017   --admin-username=admin   --admin-password=admin   --admin-email=admin@gmail.com   --ui-files-dir=/var/data/www/gads-ui

#restrat
ps aux | grep './GADS'
 kill 363304

# GADS Provider
cd /var/data/www/Gads-provider/ && source ~/.bashrc && nohup  ./GADS-devices-provider --nickname=jimmyy --mongo-db=93.123.85.23:27017  --provider-folder="/var/data/www/Gads-provider/provider-data"  --log-level="debug"


cd /var/data/www/gads-ui/


echo 'export PATH=$PATH:/usr/local/bin/appium' >> ~/.bashrc
source ~/.bashrc







# For Window Local
./GADS   --auth=true   --host-address=localhost   --port=10000   --mongo-db=localhost:27017   --admin-username=admin   --admin-password=admin   --admin-email=admin@gmail.com   --ui-files-dir=C:\NavotCode\GADS/gads-ui

./GADS-devices-provider --nickname=jimmy --mongo-db=localhost:27017  --provider-folder="C:\NavotCode\GADS/Gads-provider/provider-data"  --log-level="debug"