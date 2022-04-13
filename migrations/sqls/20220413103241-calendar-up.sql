/* Replace with your SQL commands */
CREATE TABLE `calendar` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
    date DATETIME NOT NULL ,
    category VARCHAR(100) NOT NULL ,
    circuit_id INT NOT NULL
);