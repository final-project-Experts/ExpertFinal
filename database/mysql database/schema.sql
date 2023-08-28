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
  `candidatCV` VARCHAR(255) NOT NULL,
  `candidatPassword` VARCHAR(255) NOT NULL,
  `candidatCIN` INT NOT NULL,
  PRIMARY KEY (`candidatId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`entreprise` (
  `eId` INT NOT NULL AUTO_INCREMENT,
  `eNom` VARCHAR(255) NULL,
  `eDescription` VARCHAR(255) NULL,
  `eContact` VARCHAR(255) NULL,
  `eMail` VARCHAR(255) NOT NULL,
  `ePassword` VARCHAR(255) NOT NULL,
  `eRNE` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`eId`))
ENGINE = InnoDB
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
  PRIMARY KEY (`offreId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`entreprise_has_candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`entreprise_has_candidat` (
  `entreprise_eId` INT NOT NULL,
  `candidat_candidatId` INT NOT NULL,
  PRIMARY KEY (`entreprise_eId`, `candidat_candidatId`),
  INDEX `fk_entreprise_has_candidat_candidat1_idx` (`candidat_candidatId` ASC) VISIBLE,
  INDEX `fk_entreprise_has_candidat_entreprise1_idx` (`entreprise_eId` ASC) VISIBLE,
  CONSTRAINT `fk_entreprise_has_candidat_entreprise1`
    FOREIGN KEY (`entreprise_eId`)
    REFERENCES `jhdb`.`entreprise` (`eId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entreprise_has_candidat_candidat1`
    FOREIGN KEY (`candidat_candidatId`)
    REFERENCES `jhdb`.`candidat` (`candidatId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`offre d'emploi_has_candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`offre d'emploi_has_candidat` (
  `offre d'emploi_offreId` INT NOT NULL,
  `candidat_candidatId` INT NOT NULL,
  PRIMARY KEY (`offre d'emploi_offreId`, `candidat_candidatId`),
  INDEX `fk_offre d'emploi_has_candidat_candidat1_idx` (`candidat_candidatId` ASC) VISIBLE,
  INDEX `fk_offre d'emploi_has_candidat_offre d'emploi1_idx` (`offre d'emploi_offreId` ASC) VISIBLE,
  CONSTRAINT `fk_offre d'emploi_has_candidat_offre d'emploi1`
    FOREIGN KEY (`offre d'emploi_offreId`)
    REFERENCES `jhdb`.`offre d'emploi` (`offreId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_offre d'emploi_has_candidat_candidat1`
    FOREIGN KEY (`candidat_candidatId`)
    REFERENCES `jhdb`.`candidat` (`candidatId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `jhdb`.`entreprise_has_offre d'emploi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jhdb`.`entreprise_has_offre d'emploi` (
  `entreprise_eId` INT NOT NULL,
  `offre d'emploi_offreId` INT NOT NULL,
  PRIMARY KEY (`entreprise_eId`, `offre d'emploi_offreId`),
  INDEX `fk_entreprise_has_offre d'emploi_offre d'emploi1_idx` (`offre d'emploi_offreId` ASC) VISIBLE,
  INDEX `fk_entreprise_has_offre d'emploi_entreprise1_idx` (`entreprise_eId` ASC) VISIBLE,
  CONSTRAINT `fk_entreprise_has_offre d'emploi_entreprise1`
    FOREIGN KEY (`entreprise_eId`)
    REFERENCES `jhdb`.`entreprise` (`eId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entreprise_has_offre d'emploi_offre d'emploi1`
    FOREIGN KEY (`offre d'emploi_offreId`)
    REFERENCES `jhdb`.`offre d'emploi` (`offreId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
