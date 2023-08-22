-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema jhdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jhdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jhdb` DEFAULT CHARACTER SET utf8mb3 ;
USE `jhdb` ;

-- -----------------------------------------------------
-- Table `jhdb`.`candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`candidat` (
  `candidatId` INT NOT NULL AUTO_INCREMENT,
  `candidatNomPrénom` VARCHAR(255) NOT NULL,
  `candidatQualifications` VARCHAR(255) NOT NULL,
  `candidatMail` VARCHAR(255) NOT NULL,
  `Entreprise_EntrepriseId` INT NOT NULL,
  `candidatCV` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`candidatId`, `Entreprise_EntrepriseId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`entreprise` (
  `eId` INT NOT NULL AUTO_INCREMENT,
  `eNom` VARCHAR(255) NOT NULL,
  `eDescription` VARCHAR(255) NOT NULL,
  `eContact` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`eId`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`offre d'emploi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`offre d'emploi` (
  `offreId` INT NOT NULL AUTO_INCREMENT,
  `offrePoste` VARCHAR(255) NOT NULL,
  `offreRequis` VARCHAR(255) NOT NULL,
  `offreResponsabilities` VARCHAR(255) NOT NULL,
  `offreAboutUs` VARCHAR(255) NOT NULL,
  `Entreprise_EntrepriseId` INT NOT NULL,
  `candidat_candidatId` INT NOT NULL,
  `candidat_Entreprise_EntrepriseId` INT NOT NULL,
  PRIMARY KEY (`offreId`, `Entreprise_EntrepriseId`, `candidat_candidatId`, `candidat_Entreprise_EntrepriseId`),
  INDEX `fk_offre d'emploi_Entreprise1_idx` (`Entreprise_EntrepriseId` ASC) VISIBLE,
  INDEX `fk_offre d'emploi_candidat1_idx` (`candidat_candidatId` ASC, `candidat_Entreprise_EntrepriseId` ASC) VISIBLE,
  CONSTRAINT `fk_offre d'emploi_candidat1`
    FOREIGN KEY (`candidat_candidatId` , `candidat_Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`candidat` (`candidatId` , `Entreprise_EntrepriseId`),
  CONSTRAINT `fk_offre d'emploi_Entreprise1`
    FOREIGN KEY (`Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`entreprise` (`eId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`candidat_has_offre d'emploi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`candidat_has_offre d'emploi` (
  `candidat_candidatId` INT NOT NULL,
  `candidat_Entreprise_EntrepriseId` INT NOT NULL,
  `offre d'emploi_offreId` INT NOT NULL,
  `offre d'emploi_Entreprise_EntrepriseId` INT NOT NULL,
  PRIMARY KEY (`candidat_candidatId`, `candidat_Entreprise_EntrepriseId`, `offre d'emploi_offreId`, `offre d'emploi_Entreprise_EntrepriseId`),
  INDEX `fk_candidat_has_offre d'emploi_offre d'emploi1_idx` (`offre d'emploi_offreId` ASC, `offre d'emploi_Entreprise_EntrepriseId` ASC) VISIBLE,
  INDEX `fk_candidat_has_offre d'emploi_candidat1_idx` (`candidat_candidatId` ASC, `candidat_Entreprise_EntrepriseId` ASC) VISIBLE,
  CONSTRAINT `fk_candidat_has_offre d'emploi_candidat1`
    FOREIGN KEY (`candidat_candidatId` , `candidat_Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`candidat` (`candidatId` , `Entreprise_EntrepriseId`),
  CONSTRAINT `fk_candidat_has_offre d'emploi_offre d'emploi1`
    FOREIGN KEY (`offre d'emploi_offreId` , `offre d'emploi_Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`offre d'emploi` (`offreId` , `Entreprise_EntrepriseId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`entreprise_has_candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`entreprise_has_candidat` (
  `Entreprise_EntrepriseId` INT NOT NULL,
  `candidat_candidatId` INT NOT NULL,
  `candidat_Entreprise_EntrepriseId` INT NOT NULL,
  PRIMARY KEY (`Entreprise_EntrepriseId`, `candidat_candidatId`, `candidat_Entreprise_EntrepriseId`),
  INDEX `fk_Entreprise_has_candidat_candidat1_idx` (`candidat_candidatId` ASC, `candidat_Entreprise_EntrepriseId` ASC) VISIBLE,
  INDEX `fk_Entreprise_has_candidat_Entreprise1_idx` (`Entreprise_EntrepriseId` ASC) VISIBLE,
  CONSTRAINT `fk_Entreprise_has_candidat_candidat1`
    FOREIGN KEY (`candidat_candidatId` , `candidat_Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`candidat` (`candidatId` , `Entreprise_EntrepriseId`),
  CONSTRAINT `fk_Entreprise_has_candidat_Entreprise1`
    FOREIGN KEY (`Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`entreprise` (`eId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`logins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`logins` (
  `loginsId` INT NOT NULL AUTO_INCREMENT,
  `loginsMail` VARCHAR(255) NOT NULL,
  `loginsPassword` VARCHAR(45) NOT NULL,
  `Entreprise_EntrepriseId` INT NOT NULL,
  `candidat_candidatId` INT NOT NULL,
  `candidat_Entreprise_EntrepriseId` INT NOT NULL,
  PRIMARY KEY (`loginsId`, `Entreprise_EntrepriseId`, `candidat_candidatId`, `candidat_Entreprise_EntrepriseId`),
  INDEX `fk_logins_Entreprise1_idx` (`Entreprise_EntrepriseId` ASC) VISIBLE,
  INDEX `fk_logins_candidat1_idx` (`candidat_candidatId` ASC, `candidat_Entreprise_EntrepriseId` ASC) VISIBLE,
  CONSTRAINT `fk_logins_candidat1`
    FOREIGN KEY (`candidat_candidatId` , `candidat_Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`candidat` (`candidatId` , `Entreprise_EntrepriseId`),
  CONSTRAINT `fk_logins_Entreprise1`
    FOREIGN KEY (`Entreprise_EntrepriseId`)
    REFERENCES `jhdb`.`entreprise` (`eId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
