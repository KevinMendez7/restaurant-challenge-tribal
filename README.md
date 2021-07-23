# restaurant-challenge-tribal
This is the api app for the challenge, is the backend for the frontend challenge(https://github.com/KevinMendez7/restaurant-frontend-challenge/tree/master)

## How to run the app

- clone the repository in the master branch.
- run `npm install` to install dependencies.
- run `npm start` 

## Enpoints available

#### GET /restaurant/:id

- Will return restaurant information

### Example request

GET http://localhost:4000/restaurant/60f7811204ff2421f3ac6d0c

### Example response

{
  "reviews": [
    "60f781ab04ff2421f3ac6d12",    
  ],
  "pictures": [
    "60f875a2f6903c6c33fa837c",    
  ],
  "_id": "60f7811204ff2421f3ac6d0c",
  "name": "Domino's Pizza",
  "main_picture": "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
  "description": "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
  "createdAt": "2021-07-21T02:06:10.733Z",
  "__v": 18
}  

#### GET /restaurant

- Will return all restaurants

### Example request

GET http://localhost:4000/restaurant

### Example response

[{
  "reviews": [
    "60f781ab04ff2421f3ac6d12",    
  ],
  "pictures": [
    "60f875a2f6903c6c33fa837c",    
  ],
  "_id": "60f7811204ff2421f3ac6d0c",
  "name": "Domino's Pizza",
  "main_picture": "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
  "description": "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
  "createdAt": "2021-07-21T02:06:10.733Z",
  "__v": 18
}]
  

#### POST /restaurant

- Will return all restaurants

### Example request

POST http://localhost:4000/restaurant
content-type: application/json

{
    "name": "In-N-Out Burger",
    "main_picture": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAH0AfQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUGBwj/2gAIAQEAAAAA9hAAGmAAHyikkBBC9VagAKXonq+h5TnedxCApntvX/Fdx0vRU8zynK4tUUU7Hv8AeeaZuqtVdB0u+sY2m8yu+oZOxjO4j0u3oMHUcJ6lzXDbD13Gy7uZe0nS6CvzDQ0KLc7PpuUzeno3de08t0aZsL++525QTeixNVeNKuKqBMpm5iyZFgCZuXO/K5tiRM1e7gAAAAP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/9oACgICEAMQAAAAiQACYhZAAPjO3vzvG9PTpvUz7MNNYTnn59uOPW5+zbLW6LJz7urwJonO2lRMXnKUSAAiLAAH/8QAQRAAAQMDAQEMBgcHBQAAAAAAAQIDBAAFEQYSEBMWFyExUVRVk5TSByAjQWGRFTNCYnGSoRQiMDJjgbElNEBQcv/aAAgBAQABPwD/AIHCPT3bdu8S3XCPT3bdu8S3XCPT3bdu8S3XCPT3bdu8S3XCPT3bdu8S3XCLT/bdu8S3XCLT/bdu8S3XCLT/AG3bvEt1wi0/23bvEt1wi0/23bvEt1wi0/23bvEt1wj0923bvEt1wi0/23bvEt1wj0923bvEt1wj0923bvEt1wj0923bvEt+rj18bmPVYYfkL3tlpbi+fZQkqNPR346tl5lxtXQtJT/msfxvR5sqnT2z72Eq+SqMZl1JQtAUnoUAR8jU3SdgfGVwEIV0tEtVJ9H7JyYs5xHwdSF1J0XfWP5GW3x0tL82KkwpcM7MmM8yf6iCmsfwtBOhq+L+/EdFNSkb8kEjG2BTmpr8xMfWi5vn2q8BZ20/JVRdf3JH+5iRn/m0aia/tDuBKiSWD/Z0Uxf9OzxsN3KMfuOne/0XUjSmn7gnbMBnl+2z+7+qKl+jWKvJhz3W/g4AupmgtQRcltpqSn+kvzVKgTYStmVFeZP30FNYpDS3FpQ2kqWo4AAyTS0KbUUrBCgcEHkI3YkRchTaEtFbjightI95JwBTGlkx9QMW63znkPsR9udJBASyfeEUq26nFxlQ/phIjxov7SqW8ykoCKRaZMqS2y2lwuvuhKApBTtKVUzSV4gzI0JxpCn5P1KUKyF1KtM6FIdjPthDrasLRtA4NIgzXPq463Mc+wCvH44ply4QVbTK5DBB50FSMfKomtdSRMZl7+nofQF1F9Ja+aZbEH7zLmP0VTWuNNzEbDrjrHweayPmjNO2fSt55WBDWrpYcCFVA0nDtUxUltbizsFKEuYygmtWWEPNGfHR7Zse1SPtoHv/ABG4w1vi/gOetKW19ho3sSokZLThZYVJaU4Cs86hs1NYn2W1LYQY0n6bcIMtpa99eB+xhVXi5XdMKFp5Uf8A1J0Mh1Tbgc2wOb8CrGTVrutyZnyjeBPmTYLJMeMGg4ELWOVayioOpWWbch+8tL+lIm+hnfWVpLpX0EikXCA+yhibbIocccG/TtpW+nbXlxdTI+pG3YqNPLhsWtDaCCnY2PiV9Iptq2XfVpfZ3l0Q4ft1gApcdWSkfjsirLbE3e+3OdcreWoLe+L3t1stoGfKkVY42m73LEJVkXvqy87vyHilKUZykYq9Q9GsCa1DanCW04W0BRBaKkqwTT6G0vBKf3RycvPjPvprVFhtcNllt12QWmwhKWh/lS6n61nyCREYaip7xdHnNRlMpTguY6aY1jZhHiMMLusFthsIQiMtpYIHSFU1qO2XDVbFynNqYissFtjbyrCxzLXTUuzWm4XC9v3hq5THQveGmmyMFVWyZFsVkXcrk+8Zd3dUtSmMF0CtWSX4sCNZyt6Q5cXE4kyMYQNsdAFJhW+zXCHao1sirW4wXFzJoKwsg42E/fq+2IG/W6Gy3GYZnL+pYUoENoOVOrFOabhW6UHIVvu7J2eR6I8PkUrVSE3HUk2528XyYIEVCQsvoRlSveFhITVktsm3uS5djuVquLm8gKQdoKSOf3Glna5c5UrlJ6SakHL7n/oj5UKyNzNZxzVakIkXGEw+6tDLshtDiknBCVGtQwEWyZKbjPeyQ2hbeCVhSVD40JzwyClB/tTl5kyEIRIW44hGdkKcUoJz0bVR/SDfWGAyJZIHMpxpDixVs1YuFdHLk8Uy31tlBU+VA1wqsL7j75sxakuErLjE1aMuH3qxs1ZNQxrNYpzTIdNzecKgsoCm6e1OJ+m5IXPbjXQZCgE7BeSDzJ6NpNOLSjaUPcKPPWdwbsdew+0rP8qwamuOLQ4rO0N7x04ArJ5qBAFZGRkboURygkUJL6eZ1fzpUh1Y2VHcxuDHqChnNK9ZJAUMjk3RQHqCikAhIHNz0o5J3M+uCKBGK4rNQ9bt3eOeSuKzUPW7d3jnkris1D1u3d455Kb9F1/SrJl2/wDO55K4r7/1uB+dfkris1B1u3d455K4rNQdbt/eOeSuKy/9bt/eOeSuKy/9bt/eOeSuKzUHW7f3jnkrit1B1u39455K4rdQdbt/eOeSuK3UHW7d3jnkritv/W7f3jnkriuv/W7f3jnkriwv/W4H51+T/of/xAAqEQABAwMDAgQHAAAAAAAAAAABAgMRAAQxBRIhEFEgIjBxNEBBYWLR0v/aAAgBAgEBPwD0ZExInt6GuBYvyRIltNJs9at0gtXQcEYJ/qhqWqMfEWO4d001rtksw4Ftn8h+qaubd/lp1CvY9VqMhIpbbThlxpKinuAaCuMxSXCcEEU4y07w402uT9RTmkWC/MGyj7oVV1aXzDSUW1w+6lzgoImB71pqLtq3DdzEpxzJithBJCs0pRQQkkEkyDFELAjaKVEAbDFEoxgZNOAHYE4oCAB1W2FKSrt4Nqew6D5H/8QAKBEAAgIBAgUEAgMAAAAAAAAAAQIDEQASMQQTIUFREBQiMjBxQGGB/9oACAEDAQE/AP4MHWP/AHNcLfZMMcTfV6wwsNqOFWG4PrBEojaZ6rZQe5wRv8OWYyGsDttu2SQ09CFGqh8STZPcZLwyRBVkjZHIuyw0msEcdMdTppQMQfJ7YIpuZy/lq7grsD+rz4q7q4W0O4yVkZrXPcIyIkkVhdqNYr8M3WpFQKFIBBsYPatIshmINkmxVeKrxkXMDvKOJjLUd2+xP7xI+KNuQXk6BSaav775wjSBuJknA17EkUemO2t2byb9Q5AI8+oJGxznS6dPMavF/iI/D//Z",
    "description": "In-N-Out Burger's first location was opened in the Los Angeles suburb of Baldwin Park, California, in 1948 by the Snyders at the southwest corner of what is now the intersection of Interstate 10 and Francisquito Avenue. The restaurant was the first drive-thru hamburger stand in California, allowing drivers to place orders via a two-way speaker system. This was a new and unique idea, since in post-World War II California, carhops were used to take orders and serve food."
}

### Example response

{
  "reviews": [],
  "pictures": [],
  "_id": "60f7811204ff2421f3ac6d0c",
  "name": "In-N-Out Burger",
  "main_picture": "data:image/jpeg;base64,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",
  "description": "In-N-Out Burger's first location was opened in the Los Angeles suburb of Baldwin Park, California, in 1948 by the Snyders at the southwest corner of what is now the intersection of Interstate 10 and Francisquito Avenue. The restaurant was the first drive-thru hamburger stand in California, allowing drivers to place orders via a two-way speaker system. This was a new and unique idea, since in post-World War II California, carhops were used to take orders and serve food.",
  "createdAt": "2021-07-21T02:06:10.733Z",
  "__v": 18
}


#### DELETE /restaurant/:id

- Will return deleted restaurant

### Example request

DELETE http://localhost:4000/restaurant/60f7811204ff2421f3ac6d0c

### Example response

{
  "reviews": [
    "60f781ab04ff2421f3ac6d12",    
  ],
  "pictures": [
    "60f875a2f6903c6c33fa837c",    
  ],
  "_id": "60f7811204ff2421f3ac6d0c",
  "name": "Domino's Pizza",
  "main_picture": "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
  "description": "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
  "createdAt": "2021-07-21T02:06:10.733Z",
  "__v": 18
}  

#### GET /restaurant/:id/pictures

- Will return review by id

### Example request

GET http://localhost:4000/restaurant/60f7811204ff2421f3ac6d0c/pictures

### Example response

{
  "data": [
    {
      "_id": "60f875a2f6903c6c33fa837c",
      "url": "https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8",
      "restaurant": "60f7811204ff2421f3ac6d0c",
      "createdAt": "2021-07-21T19:29:38.285Z",
      "__v": 0
    },
   ]
}

#### POST/restaurant/:id/pictures

- Will return picture created

### Example request

POST http://localhost:4000/restaurant/60f7811204ff2421f3ac6d0c/pictures

### Example response

{
      "_id": "60f875a2f6903c6c33fa837c",
      "url": "https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8",
      "restaurant": "60f7811204ff2421f3ac6d0c",
      "createdAt": "2021-07-21T19:29:38.285Z",
      "__v": 0
}

#### GET /review/:id

- Will return review by id

### Example request

GET http://localhost:4000/review/60f781ab04ff2421f3ac6d12

### Example response
{
      "_id": "60f781ab04ff2421f3ac6d12",
      "name": "Camilo Lizalde",
      "comment": "The best fast food ever!!!",
      "restaurant": "60f7811204ff2421f3ac6d0c",
      "createdAt": "2021-07-21T02:08:43.925Z",
      "__v": 0
}

#### GET /review

- Will return all reviews

### Example request

GET http://localhost:4000/review

### Example response

[
    {
      "_id": "60f781ab04ff2421f3ac6d12",
      "name": "Camilo Lizalde",
      "comment": "The best fast food ever!!!",
      "restaurant": "60f7811204ff2421f3ac6d0c",
      "createdAt": "2021-07-21T02:08:43.925Z",
      "__v": 0
    }
]


#### GET /restaurant/:id/review

- Will return all restaurant reviews

### Example request

GET http://localhost:4000/restaurant/60f7811204ff2421f3ac6d0c/review

### Example response
{
  "data": [
    {
      "_id": "60f781ab04ff2421f3ac6d12",
      "name": "Camilo Lizalde",
      "comment": "The best fast food ever!!!",
      "restaurant": "60f7811204ff2421f3ac6d0c",
      "createdAt": "2021-07-21T02:08:43.925Z",
      "__v": 0
    }
   ]
}

#### POST /restaurant/:id/review

- Will return review created

### Example request

POST http://localhost:4000/restaurant/60f7811204ff2421f3ac6d0c/review
Content-Type: application/json

{
    "name": "Camilo Lizalde",
    "comment": "The best fast food ever!!!"
}



### Example response

 {
      "_id": "60f781ab04ff2421f3ac6d12",
      "name": "Camilo Lizalde",
      "comment": "The best fast food ever!!!",
      "restaurant": "60f7811204ff2421f3ac6d0c",
      "createdAt": "2021-07-21T02:08:43.925Z",
      "__v": 0
    }

## Testing

The tests are pending, still in development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app 
start server in [http://localhost:4000]

The initail route will redirect you to the frontend app if is started.

### `npm test`

Launches the test runner in the interactive watch mode.
