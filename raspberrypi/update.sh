rm app.js
rm config.js
rm -r routes
rm -r server
rm -r public
rm -r views
wget https://dl.dropboxusercontent.com/u/6931359/flower/app.js
wget https://dl.dropboxusercontent.com/u/6931359/flower/server.zip
wget https://dl.dropboxusercontent.com/u/6931359/flower/routes.zip
wget https://dl.dropboxusercontent.com/u/6931359/flower/public.zip
wget https://dl.dropboxusercontent.com/u/6931359/flower/config.js
wget https://dl.dropboxusercontent.com/u/6931359/flower/views.zip
unzip routes.zip
unzip server.zip
unzip public.zip
unzip views.zip
rm views.zip
rm public.zip
rm server.zip
rm routes.zip