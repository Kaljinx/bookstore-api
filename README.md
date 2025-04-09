Bookstore API

Welcome to the Bookstore API repository! This project is designed to manage bookstore operations, including book inventory, customer management, and order processing. It is built using TypeScript and leverages the NestJS framework.

How to run the project:
1. In the project root folder Install dependencies:
   ```
   npm install
   ```
2. Running the Poject
   
   Start the mongoDB server on Default port
   
   Then type the following command to start the Book store api on port 3000
   ```
   npm run start:dev
   ```

Making requests:
1. Register a user

`POST /auth/signup`
Body
```
{
  "email": "test@example.com",
  "password": "password123"
}
```
2. Login

`POST /auth/login`
```
{
  "email": "test@example.com",
  "password": "password123"
}
```
It will give Response:
```
{
  "access_token": "jwttoken"
}
```
Use this token in the Authorization header to access protected routes:

`Authorization: Bearer jwttoken` in the header.

3. Register a new book:
HTTP Method: `POST`
URL: `http://localhost:3000/books`
Body:
```
{
	"title": "Gitanjali",
	"author": "Rabindranath Tagore",
	"category": "Classic",
	"price": 200,
	"rating": 4.5,
	"publishedDate": "1925-04-10T14:30:00.000Z", #ensure it follows correct ISO fortmat
	"_id": "67f6b2689a007e975838843f",
	"__v": 0
}
```
4. Fetch the book
Similarly to before but now use the id we got before to get the book
HTTP Method: `GET`
URL: `http://localhost:3000/books/id`

Where ID is from the respnse before
Like: `http://localhost:3000/books/67f6b2689a007e975838843f`

Similarly the other commands 
All routes under /books require a valid JWT token.

    POST /books - Add a new book

    GET /books - List all books

    GET /books/:id - Get a specific book by ID

    PATCH /books/:id - Update book details

    DELETE /books/:id - Remove a book

Filtering and Search

    GET /books?author=John&category=fiction&rating=4 - Filter books

    GET /books?search=harry - Search by title (partial match)
