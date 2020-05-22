CREATE SCHEMA `burgers_db` ;
CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL,
  `burger_name` VARCHAR(45) NULL,
  `devoured` TINYINT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `burgers_db`.`burgers` 
ADD COLUMN `burgerscol` VARCHAR(45) NULL AFTER `devoured`,
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `burgers_db`.`burgers` 
DROP COLUMN `burgerscol`;
