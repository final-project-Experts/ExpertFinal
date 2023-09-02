-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema jhdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jhdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jhdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `jhdb` ;

-- -----------------------------------------------------
-- Table `jhdb`.`candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`candidat` (
  `candidatId` INT NOT NULL AUTO_INCREMENT,
  `candidatNomPrenom` VARCHAR(255) NOT NULL,
  `candidatQualifications` VARCHAR(255) NOT NULL,
  `candiatMail` VARCHAR(255) NOT NULL,
  `candidatCV` VARCHAR(255) NOT NULL,
  `candidatPassword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`candidatId`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jhdb`.`entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`entreprise` (
  `EId` INT NOT NULL AUTO_INCREMENT,
  `ENom` VARCHAR(255) NOT NULL,
  `EDescription` VARCHAR(255) NOT NULL,
  `EntrepriseContact` VARCHAR(255) NOT NULL,
  `EOffre` VARCHAR(255) NOT NULL,
  `EMail` VARCHAR(255) NOT NULL,
  `Epassword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`EId`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jhdb`.`candidat_has_entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`candidat_has_entreprise` (
  `candidat_candidatId` INT NOT NULL,
  `entreprise_EId` INT NOT NULL,
  PRIMARY KEY (`candidat_candidatId`, `entreprise_EId`),
  INDEX `fk_candidat_has_entreprise_entreprise1_idx` (`entreprise_EId` ASC) VISIBLE,
  INDEX `fk_candidat_has_entreprise_candidat1_idx` (`candidat_candidatId` ASC) VISIBLE,
  CONSTRAINT `fk_candidat_has_entreprise_candidat1`
    FOREIGN KEY (`candidat_candidatId`)
    REFERENCES `jhdb`.`candidat` (`candidatId`),
  CONSTRAINT `fk_candidat_has_entreprise_entreprise1`
    FOREIGN KEY (`entreprise_EId`)
    REFERENCES `jhdb`.`entreprise` (`EId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jhdb`.`offre d'emploi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`offre d'emploi` (
  `oId` INT NOT NULL AUTO_INCREMENT,
  `oPoste` VARCHAR(255) NOT NULL,
  `oRequis` VARCHAR(255) NOT NULL,
  `oResponsabilities` VARCHAR(255) NOT NULL,
  `oAbtUs` VARCHAR(255) NOT NULL,
  `entreprise_EId` INT NOT NULL,
  PRIMARY KEY (`oId`),
  INDEX `fk_offre d'emploi_entreprise1_idx` (`entreprise_EId` ASC) VISIBLE,
  CONSTRAINT `fk_offre d'emploi_entreprise1`
    FOREIGN KEY (`entreprise_EId`)
    REFERENCES `jhdb`.`entreprise` (`EId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jhdb`.`candidat_has_offre d'emploi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`candidat_has_offre d'emploi` (
  `candidat_candidatId` INT NOT NULL,
  `offre d'emploi_oId` INT NOT NULL,
  PRIMARY KEY (`candidat_candidatId`, `offre d'emploi_oId`),
  INDEX `fk_candidat_has_offre d'emploi_offre d'emploi1_idx` (`offre d'emploi_oId` ASC) VISIBLE,
  INDEX `fk_candidat_has_offre d'emploi_candidat1_idx` (`candidat_candidatId` ASC) VISIBLE,
  CONSTRAINT `fk_candidat_has_offre d'emploi_candidat1`
    FOREIGN KEY (`candidat_candidatId`)
    REFERENCES `jhdb`.`candidat` (`candidatId`),
  CONSTRAINT `fk_candidat_has_offre d'emploi_offre d'emploi1`
    FOREIGN KEY (`offre d'emploi_oId`)
    REFERENCES `jhdb`.`offre d'emploi` (`oId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jhdb`.`entreprise_has_candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`entreprise_has_candidat` (
  `entreprise_eId` INT NOT NULL,
  `candidat_candidatId` INT NOT NULL,
  PRIMARY KEY (`entreprise_eId`, `candidat_candidatId`),
  INDEX `fk_entreprise_has_candidat_candidat1_idx` (`candidat_candidatId` ASC) VISIBLE,
  INDEX `fk_entreprise_has_candidat_entreprise1_idx` (`entreprise_eId` ASC) VISIBLE,
  CONSTRAINT `fk_entreprise_has_candidat_candidat1`
    FOREIGN KEY (`candidat_candidatId`)
    REFERENCES `jhdb`.`candidat` (`candidatId`),
  CONSTRAINT `fk_entreprise_has_candidat_entreprise1`
    FOREIGN KEY (`entreprise_eId`)
    REFERENCES `jhdb`.`entreprise` (`EId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
