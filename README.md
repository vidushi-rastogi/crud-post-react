# CRUD Project with React and JSON server FAKE API

Build a Reactjs CRUD Application, having JSON server as backend. The project does the following

- Create, Read, Update, Delete user posts.
- Maintain likes and dislikes count and update the database accordingly.
#

## Build Setup
##### 1. Clone project
#
```
git clone https://github.com/vidushi-rastogi/crud-post-react.git
```
##### 2. Install all the dependencies mentioned in package.json using npm
#
```
cd <project_directory>
npm i react react-dom react-scripts react-router-dom json-server
npm i bootstrap font-awesome 
```

##### 3. Start Application
Default port will be 3000

```
npm start
```
##### 4. Start JSON server on different CLI
You can start the server on any port other than 3000
```
cd <project_directory>
json-server --watch data/db.json --port 8000
```

#
## Useful links

- jsonplaceholder api documentation - https://jsonplaceholder.typicode.com/guide/
- json server api documentation - https://github.com/typicode/json-server/blob/master/README.md#getting-started
- For React App initial file structure - https://codesandbox.io/s/upbeat-cache-isy8m 




