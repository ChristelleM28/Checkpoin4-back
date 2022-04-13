/* Replace with your SQL commands */
CREATE TABLE `calendar` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date DATETIME NOT NULL,
    category VARCHAR(100) NOT NULL,
    circuit_id INT NOT NULL
);