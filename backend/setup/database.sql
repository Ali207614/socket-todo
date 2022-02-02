CREATE DATABASE todo_db;
\c todo_db

create table todos (
    todo_id serial primary key,
    todo_text varchar(365) not null
);