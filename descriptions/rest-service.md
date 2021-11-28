# REST service

Let's try to create a competitor for [Trello](https://trello.com/)!

NB! You must create new repository from [template](https://github.com/rolling-scopes-school/nodejs-course-template/) for this task. Its name must be `nodejs2021Q4-service` i.e. full link to the repository must be `https://github.com/%your-gihub-id%/nodejs2021Q4-service`.

**Create an application, the application should operate with the following resources:**

- `User` (with attributes):
  ```javascript
  { id, name, login, password }
  ```
- `Board` (set of `columns`):
  ```javascript
  { id, title, columns }
  ```
- `Column` (set of tasks):
  ```javascript
   { id, title, order }
  ```
- `Task`:
  ```javascript
  {
    id,
    title,
    order,
    description,
    userId, //assignee
    boardId,
    columnId
  }
  ```

**Details:**

1. For `User`, `Board` and `Task` REST endpoints with separate router paths should be created
    * `User` (`/users` route)
      * `GET /users` - get all users (remove password from response)
      * `GET /users/:userId` - get the user by id (ex. “/users/123”) (remove password from response)
      * `POST /users` - create user
      * `PUT /users/:userId` - update user
      * `DELETE /users/:userId` - delete user
    * `Board` (`/boards` route)
      * `GET /boards` - get all boards
      * `GET /boards/:boardId` - get the board by id
      * `POST /boards` - create board
      * `PUT /boards/:boardId` - update board
      * `DELETE /boards/:boardId` - delete board
    * `Task` (`boards/:boardId/tasks` route)
      * `GET boards/:boardId/tasks` - get all tasks
      * `GET boards/:boardId/tasks/:taskId` - get the task by id
      * `POST boards/:boardId/tasks` - create task
      * `PUT boards/:boardId/tasks/:taskId` - update task
      * `DELETE boards/:boardId/tasks/:taskId` - delete task

2. When somebody `DELETEs` `Board`, all its `Tasks` should be deleted as well.

3. When somebody `DELETEs` `User`, all `Tasks` where `User` is assignee should be updated to put `userId = null`.

4. For now, these endpoints should operate only with **in-memory** (hardcoded) data, in the next tasks we will use a DB for it. You may organize your modules with the consideration that the data source will be changed soon.

5. An `application/json` format should be used for request and response body.

6. Do not put everything in one file - use a separate file for application creation (bootstrapping), for controllers (routers) and code related to business logic. Also split files to different modules depends on a domain (user-related, board-related, etc...).

7. To run the service `npm start` command should be used.

8. Service should listen on PORT `4000`.

9. You can try to refactor template using framework that differs from Express.js and Nest.js

**Hints**

* To generate all entities `id`s use [uuid](https://www.npmjs.com/package/uuid) package or [Node.js analogue](https://nodejs.org/dist/latest-v16.x/docs/api/crypto.html#cryptorandomuuidoptions).