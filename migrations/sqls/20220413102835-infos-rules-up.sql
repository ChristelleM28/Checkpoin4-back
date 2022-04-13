/* Replace with your SQL commands */
CREATE TABLE `infos` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    date DATETIME default CURRENT_TIMESTAMP() NOT NULL
    );

CREATE TABLE `rules` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `assets` VARCHAR(100) NOT NULL,
    `rules_link` VARCHAR(255)
);