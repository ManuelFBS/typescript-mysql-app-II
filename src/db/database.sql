DROP DATABASE IF EXISTS node_ts_mysql;

CREATE DATABASE node_ts_mysql;

CREATE TABLE posts(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIME
);

DESCRIBE posts;