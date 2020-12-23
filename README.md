

# BookStore-Vermeg 

 

## Screenshots

### CustomerPages:







#### 1-Loginpage:
![loginpage](https://github.com/AkroutiHamza/BookStoreApp/blob/main/Screenshots/signup.png?raw=true)

#### 2-Bookspage:
![Bookspage](https://github.com/AkroutiHamza/BookStoreApp/blob/main/Screenshots/books.png?raw=true)


#### 3-Cartpage:
![Cartpage](https://github.com/AkroutiHamza/BookStoreApp/blob/main/Screenshots/cart.png?raw=true)

### Employee & Manager pages :



#### 1-Orderspage:
![Orderspage](https://github.com/AkroutiHamza/BookStoreApp/blob/main/Screenshots/orders.png?raw=true)

#### 2-editbookpage:
![editbookpage](https://github.com/AkroutiHamza/BookStoreApp/blob/main/Screenshots/bookedit.png?raw=true)


#### 3-editprofilepage:
![editprofilepage](https://github.com/AkroutiHamza/BookStoreApp/blob/main/Screenshots/editprofile.png?raw=true)







## Technology Stacks
**Backend**
  - Java 11
  - Spring Boot 2.4.0
  - Spring Security
  - JWT Authentication
  - Spring Data JPA
  - Hibernate
  - MySQL
  - Maven

**Frontend**
  - Angular 11
  - Angular CLI
  - Bootstrap



## How to  Run

Start the backend server before the frontend client to get the api json . 

**Backend**

  1. Install [MySQL](https://www.mysql.com/fr/downloads/) 
  2. Configure datasource in `application.yml`.
  3. `cd backend`.
  4. Run `mvn install`.
  5. Run `mvn spring-boot:run`.
  6. Spring Boot will import mock data into database by executing `import.sql` automatically.
  7. The backend server is running on [localhost:8080]().

**Frontend**
  1. Install [Node.js and npm](https://www.npmjs.com/get-npm)
  2. `cd frontend`.
  3. Run `npm install`.
  4. Run `ng serve`
  5. The frontend client is running on [localhost:4200]().
  
Note: The backend API url is configured in `src/environments/environment.ts` of the frontend project. It is `localhost:8080/api` by default . in case you want to change it go to the api file in your backend and change it name and change it also in application.yml & enviroment.ts 
  
#### Run in Docker
You can build the image and run the container with Docker. 
1. Build backend project
```bash
cd backend
mvn package
```
2. Build fontend project
```bash
cd frontend
npm install
ng build --prod
```
3. Build images and run containers
```bash
docker-compose up --build
```

