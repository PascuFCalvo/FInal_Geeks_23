# 🎮 StreamCash, tu plataforma 🎮

Welcome to StreamCash! This comprehensive REST API has been developed as the final project for the GeeksHubs Academy bootcamp. This application allows you to manage your streaming advertising effortlessly, whether you are a brand looking to increase visibility or a streamer aiming to enhance your live broadcasts and generate revenue.

## Table of Contents 🗂️

- [Features ✨](#features-)
- [Live Deployment 📡](#live-deployment-)
- [Installation 🚀](#installation-)
- [Running directly with composer php artisan](#running-directly-with-composer-php-artisan)
- [Frontend Design 📖](#frontend-design-)
- [Database Design 📖](#database-design-)
- [API Endpoints 🔌](#api-endpoints-)
- [Authors ✒️](#authors-)
- [Acknowledgements 🎓](#acknowledgements-)

## Stack 🛠️

[![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/manual/es/intro-whatis.php)[![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)[![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/)[![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)](https://stackoverflow.com/)[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)[![ThunderClient](https://img.shields.io/badge/Thunder_Client-%237A1FA2?style=for-the-badge)](https://www.thunderclient.com/)[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)[![OpenAI](https://img.shields.io/badge/OpenAI-%236400A5?style=for-the-badge)](https://www.openai.com/)[![AWS](https://img.shields.io/badge/AWS-%23232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)

## Features ✨

- **User Authentication:**
- **Stream and Campaign creation:**
- **Freedom to select your favourite adds and brands:**
- **Access to detailed data:**
- **MySQL Database with Laravel and Migrations:**
- **Seeder Data Generation:**
- **Error Handling:**
- **Deploy on AWS:**

## Installation 🚀

Get a copy of the project up and running on your local machine for development and testing purposes.

Get a copy of both repositories

```sh
git clone https://github.com/PascuFCalvo/FInal_Geeks_23


in frontend FInal_Geeks_23 enter in to the directory and execute
npm install
npm run dev

```

You'll need add a `.env` based on the provided `.env.example` file with the database credentials, and have a MySQL server running.

#### Running with composer php artisan

```sh
git clone https://github.com/PascuFCalvo/Final_Geeks_23_Backend

composer install
php artisan serve
php artisan migrate
php artisan db:seed
```

Now you have the frontend UP with node and the backend running with artisan.
<br></br>
<br></br>

<img width="853" alt="ERD" src=./src/assets/images/logo-largo.png>

## Frontend Design 📖

#### Responsive design

<img width="853" alt="ERD" src=./src/assets/readme/vista-principal.png>
<br></br>
<br></br>
<img width="853" alt="ERD" src=./src/assets/readme/vista-2.png>
<br></br>
<br></br>
<img width="200" alt="ERD" src=https://i.gyazo.com/ca444539184749d7df3c21cf4934aea3.gif>

<img width="203" alt="ERD" src=/src/assets/readme/vista-5.png> 
<img width="203" alt="ERD" src=/src/assets/readme/vista-6.png>
<br></br>

#### Simply

<img width="449" alt="ERD" src=./src/assets/readme/vista-3.png> <img width="400" alt="ERD" src=./src/assets/readme/vista-4.png>

<img width="853" alt="ERD" src=https://i.gyazo.com/7d16e5dce3edb394280b6dd5abb01e9f.gif>

<br></br>

#### Detailed data

<img width="853" alt="ERD" src=https://i.gyazo.com/9c8fb0c8d72d688e70dc98eb6fc4adcb.gif>

<img width="424" alt="ERD" src=./src/assets/readme/vista-7.png>
<img width="424" alt="ERD" src=./src/assets/readme/vista-8.png>
<img width="853" alt="ERD" src=./src/assets/readme/vista-9.png>

## Database Design 📖

<img width="853" alt="ERD" src=./src/assets/readme/vista-10.png>

<details>
  <summary style="font-weight: bold; font-size: 1.3em;">Endpoints</summary>

- `Route::post('/registerStreamer')` The user can regeister as a streamer.
- `Route::post('/registerBrand')` The user can regeister as a brand.
- `Route::post('/login')` Login in the app.
- `Route::post('/logout')` Logout from the app.
- `Route::get('/getAllUsers')` Get all users from the API.
- `Route::get('/getCountries')` Get all countries from the API.
- `Route::get('/getAllStreams')`Get all streams from the API.
- `Route::get('/getAllBrands')`Get all brands from the API.
- `Route::get('/getAllStreamers')`Get all streamers from the API.
- `Route::get('/getAllCampaigns)`Get all campaigns from the API.
- `Route::get('/profile')`Access to your profile.
- `Route::put('/editBrandProfile')`Edit your profile as a brand.
- `Route::put('/editStreamerProfile')`Edit your profile as a stramer.
- `Route::put('/editUserProfile')`Edit your profile as a user.
- `Route::put('/inactivateUser')`Inactivate yourself as a user.
- `Route::post('/createStream')`Report a new stream.
- `Route::post('/createACampaign')`Create a new campaign.
- `Route::get('/getStreamsByStreamer')`Get all your strems as a streamer.
- `Route::get('/getCampaignsAsABrand')`Get all your campaigns as a brand.
- `Route::put('/payStream')`Pay a stream as admin.
- `Route::delete('/deleteCampaign/{id}')`Delete a campaign.
- `Route::put('/activateUserById/{id}')`Activate a user.
- `Route::put('/inactivateUserById/{id}')`Inactivate a user.
- `Route::put('/approveAStream/{id})`Aprove a stream.
- `Route::delete("/deleteAStreamById/{id}")`Delete a stream.
- `Route::delete('/definitiveDeleteUser/{id})`Delete a user and cannot ve reactivated.
- `Route::put('/activateACampaign/{id}')`Restart a paused campaign.
- `Route::put('/inactivateACampaign/{id}')`Pause a campaign.

</details>

## Author✒️

- **Pascual Fernandez**
  [GitHub Pascual](https://github.com/PascuFCalvo)

## Roadmap 🛣️

- **Add responsive** in data and charts
- **Add PDF generator** to download the info to your computer
- **Add more info in the charts**

## Known issues :bug: and future upgrades

- I need to refactor the code to avoid duplicated chunks.
- Review some dependency arrays to enhance information loading when rendering components.
- Improve backend relationships to minimize calls.
- General improvement in responsiveness.

## Acknowledgements 🎓

- A big shoutout to the **Geekshubs Academy** and to my project partners for the opportunity to learn and grow as a developer.
