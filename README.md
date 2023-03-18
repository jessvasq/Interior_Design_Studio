# Project_2_Interior-Design-Studio
A website for users to browse through interior design ideas, find their style and an option to create a moodboard with furniture/materials information, all in one place.

## Project Description
A website for users to browse through interior design ideas, find their style and an option to create a moodboard with furniture/materials information, all in one place.


## General App Idea/Purpose<br />
Help users find home decor products information and find their style/inspo to redesign their homes.

## Products Model:
> Models including field names and their datatypes<br />
- Name: String <br />
- Description: String  <br />
- Image: String <br />
- Price: Number <br />
- Tags/Style: String <br />

## A list of routes <br />
>Index <br />
- .GET’/products/Show different interior design styles on main page’ <br />
>New <br />
- .GET’/products/new/Allow user to input information needed to add a new product’ <br />
>Delete <br />
- .DELETE’/products/:id/Once product has been added to user’s personalized page, user will be able to delete a product’ <br />
>Update <br />
- .PUT’/products/:id/User is able to input info needed to update tags, price’ <br />
>Create <br />
- .POST’/products/User is able to create/add new product’ <br />
>Edit <br />
- .GET’/products/:id/edit/User is able to edit a product’s tag/price’ <br />
>Show <br />
- .GET’/products/:id/Show interior design style and product details’ <br />

## Wireframes
> ![Project_2 Wireframe_JN](https://user-images.githubusercontent.com/119137671/226081719-4a224a7d-108f-4bb6-a8be-3d7d51fa0b48.jpeg)


## User Stories

- As a user I want to land on a page where I’m able to see/select different interior design styles 
-Once I select a style, I want to see interior design ideas specific to the style I selected
-When selecting an image/idea, I want to be redirected to a new page where I can see the product’s details from the image selected 
- If I like one of the products, I want to add the product to my personalized page called (‘My studio page’)
- As a user I want to edit, delete and add a new product in “my studio page”
- All these pages should have a button that will redirect me to the main page, in case I want to look at other styles/products.

### MVP Goals
A working full-stack application, using Node.js, Mongoose, Express and EJS
MVC file structure: Models, Views, Controllers
At least one model with all 7 RESTful routes and full CRUD.
At least one Github commit every two days
A README.md file with explanations of the technologies used, the approach was taken, unsolved problems, and notes, wireframes

### Stretch Goals
EJS Partials
CSS framework 
If time allows, include sign up/log in functionality, with encrypted passwords


