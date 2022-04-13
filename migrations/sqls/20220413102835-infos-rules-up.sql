/* Replace with your SQL commands */
CREATE TABLE `infos` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
    title VARCHAR(100)  NOT NULL ,
    description TEXT NOT NULL ,
    date DATETIME
    );

CREATE TABLE `rules` (
    `id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
    `assets` VARCHAR(100) NOT NULL ,
    `rules_link` VARCHAR(255)
);