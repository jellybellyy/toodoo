CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS todolist (
    id SERIAL PRIMARY KEY,
    task TEXT,
    user_id INTEGER
);