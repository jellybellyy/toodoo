const pg = require("pg");

const configs = {
    user: "wongjoey",
    host: "127.0.0.1",
    database: "project2",
    port: 5432,
};

const pool = new pg.Pool(configs);

pool.on("error", function (err) {
    console.log("idle client error", err.message, err.stack);
});

const usersModelsFunction = require("./models/users_model");
const todolistModelsFunction = require("./models/todolist_model");

const poolUsersModelsObject = usersModelsFunction(pool);
const poolTodolistModelsObject = todolistModelsFunction(pool);

module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool: pool,

    /*
     * ADD APP MODELS HERE
     */

    users: poolUsersModelsObject,
    todolist: poolTodolistModelsObject,
};
