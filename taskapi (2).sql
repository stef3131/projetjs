-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 13 juin 2022 à 14:52
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `taskapi`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categorie` int(11) NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(250) DEFAULT NULL,
  `couleur_categorie` varchar(50) DEFAULT NULL,
  `id_tache` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_categorie`),
  KEY `id_tache` (`id_tache`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `nom_categorie`, `couleur_categorie`, `id_tache`) VALUES
(1, 'ooi', 'iii', 1),
(2, 'uykkk', 'kkuu', 32),
(3, 'aa', 'uu', 4),
(4, 'hhh', 'ff', NULL),
(5, 'jj', 'jj', NULL),
(6, 'll', 'll', NULL),
(7, 'bbb', 'bbb', NULL),
(8, 'undefined', 'undefined', NULL),
(9, 'ee', 'ee', NULL),
(10, 'undefined', 'undefined', NULL),
(11, 'undefined', 'undefined', NULL),
(12, 'undefined', 'undefined', NULL),
(13, 'undefined', 'undefined', NULL),
(14, 'undefined', 'undefined', NULL),
(15, 'ùù', 'pp', NULL),
(16, 'undefined', 'undefined', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `tache`
--

DROP TABLE IF EXISTS `tache`;
CREATE TABLE IF NOT EXISTS `tache` (
  `id_tache` int(11) NOT NULL AUTO_INCREMENT,
  `nom_tache` varchar(250) NOT NULL,
  `faite` varchar(3) DEFAULT NULL,
  `description_tache` text,
  `id_utilisateur` int(11) NOT NULL,
  PRIMARY KEY (`id_tache`),
  KEY `id_utilisateur` (`id_utilisateur`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tache`
--

INSERT INTO `tache` (`id_tache`, `nom_tache`, `faite`, `description_tache`, `id_utilisateur`) VALUES
(1, 'laver les carottes', 'non', 'laver', 1),
(2, 'couper tomates', 'oui', 'ciouepr en dés', 2),
(3, 'jjjj', 'non', 'jj', 4),
(4, 'nettoyer la cafetiere', 'oui', 'kkkk', 4),
(5, 'mmmmm', 'mmm', 'iii', 4),
(6, 'll', 'lmm', 'mm', 1),
(7, 'k', 'k', 'k', 4),
(8, 'hh', 'hh', 'hh', 4),
(9, 'preparer les patates', 'oui', 'eplucher', 4),
(10, 'ujj', 'non', 'jjj', 4),
(11, 'iii', 'non', 'hhh', 4),
(12, 'jhh', 'oui', 'hh', 4),
(13, 'ùù', 'oui', 'ùù', 4),
(14, 'kk', 'oui', 'lll', 4);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mob_no` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `mob_no`, `user_name`, `password`) VALUES
(4, 'stéphane', 'cuallado-picot', 615090866, 'stef31', '170289'),
(5, 'bob', 'lemartien', 615252585, 'boblm', '17'),
(6, 'hh', 'hhh', 615252585, 'h', 'h');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
