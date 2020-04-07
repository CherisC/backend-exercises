# backend-exercises
Option 1 - AnimalAPI
 

Build a server that looks in a folder of images and sends a JSON response that has the URL of the image and a status. i.e.

{
 "status": "OK",
 "message": "http://localhost:3000/images/ferret-in-a-bucket.jpg"
}
Steps to complete

1. Build a new express server that uses the `express.static()` middleware
2. add a new `GET` route at `/random` . Inside of the request handler function, do the following:
3. Use the `fs` module to find all image files in the `public` folder
4. pick one at random and build a response that looks like the above
5. update your dog.ceo project to use your new api
