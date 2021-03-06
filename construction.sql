-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 26 avr. 2019 à 11:02
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `construction`
--

-- --------------------------------------------------------

--
-- Structure de la table `depenses`
--

CREATE TABLE `depenses` (
  `id` int(11) NOT NULL,
  `lib` varchar(255) NOT NULL,
  `id_project` int(11) NOT NULL,
  `montant` double NOT NULL,
  `description` text NOT NULL,
  `date_dep` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `depenses`
--

INSERT INTO `depenses` (`id`, `lib`, `id_project`, `montant`, `description`, `date_dep`) VALUES
(1, 'Paiement entrepreneur', 3, 50000, 'Versement pour debut des fondations', '2019-10-20'),
(2, 'paiement permis de construire', 3, 25000000, 'Versement a la direction de la construction', '2019-02-15'),
(3, 'Paiement entrepreneur pour debut de projet', 11, 250000, 'juste le paiement', '2019-04-26'),
(4, 'paiement entrepreneur', 12, 180000, 'rien de grave', '2019-04-18'),
(5, 'Paiement entrepreneur', 13, 250000, 'oki cest bon', '2019-04-24'),
(6, 'Paiement entrepreneur', 14, 25000000, 'oki', '2019-04-10'),
(7, 'Paiement entrepreneur', 15, 250000, 'oki', '2019-04-18');

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `id_task`, `id_project`, `img`) VALUES
(1, 1, 0, 'alsace-construction-traditionnelle.jpg'),
(2, 1, 0, 'batisud-entreprise-construction-renovation-montpellier.jpg'),
(3, 1, 0, 'buildImg.jpg'),
(4, 2, 3, '22921284-homme-d-affaires-vÃªtu-d-une-chemise-bleu-business-est-submergÃ©-par-les-nouvelles-technologies-tena.jpg'),
(5, 2, 3, 'bigstock-Construction-Worker-At-Site-3461983.jpg'),
(6, 2, 3, 'construction-apps-for-ipad.jpg'),
(7, 4, 14, 'alsace-construction-traditionnelle.jpg'),
(8, 4, 14, 'batisud-entreprise-construction-renovation-montpellier.jpg'),
(9, 5, 15, 'alsace-construction-traditionnelle.jpg'),
(10, 5, 15, 'batisud-entreprise-construction-renovation-montpellier.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `invitation`
--

CREATE TABLE `invitation` (
  `id` int(11) NOT NULL,
  `idProject` int(11) NOT NULL,
  `idEmetteur` int(11) NOT NULL,
  `idRecepteur` int(11) NOT NULL,
  `dateEnvoi` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statut` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `invitation`
--

INSERT INTO `invitation` (`id`, `idProject`, `idEmetteur`, `idRecepteur`, `dateEnvoi`, `statut`) VALUES
(2, 2, 10, 13, '2019-04-17 18:09:04', 0),
(10, 3, 10, 11, '2019-04-24 06:00:40', 1),
(11, 12, 20, 21, '2019-04-26 04:21:15', 1),
(12, 13, 22, 11, '2019-04-26 07:55:49', 1),
(13, 14, 27, 28, '2019-04-26 08:30:17', 1),
(14, 15, 29, 30, '2019-04-26 08:52:10', 1);

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `nomProjet` varchar(100) NOT NULL,
  `nomArchitecte` varchar(100) NOT NULL,
  `budget` double NOT NULL,
  `dateFin` date NOT NULL,
  `emplacement` varchar(250) NOT NULL,
  `imageProjet` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_proprio` int(11) NOT NULL,
  `id_ent` int(11) DEFAULT '16',
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `project`
--

INSERT INTO `project` (`id`, `nomProjet`, `nomArchitecte`, `budget`, `dateFin`, `emplacement`, `imageProjet`, `createdAt`, `id_proprio`, `id_ent`, `status`) VALUES
(15, 'Ecole NaN', 'Da Vinci', 2500000000, '2019-04-27', 'Angre Gestoci', '29-alsace-construction-traditionnelle.jpg', '2019-04-26 08:48:37', 29, 30, 1);

-- --------------------------------------------------------

--
-- Structure de la table `taches`
--

CREATE TABLE `taches` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `id_project` int(11) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `finishedAt` date DEFAULT NULL,
  `begin` date NOT NULL,
  `valid` tinyint(1) NOT NULL DEFAULT '0',
  `validateAt` date DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `statut` tinyint(4) NOT NULL DEFAULT '0',
  `chef` varchar(255) NOT NULL,
  `montant` double NOT NULL,
  `description` text NOT NULL,
  `ressources` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `taches`
--

INSERT INTO `taches` (`id`, `title`, `id_project`, `createAt`, `finishedAt`, `begin`, `valid`, `validateAt`, `deadline`, `statut`, `chef`, `montant`, `description`, `ressources`) VALUES
(5, 'fondations', 15, '2019-04-26 08:53:54', '2019-04-26', '2019-04-28', 1, '2019-04-26', '2019-04-30', 1, 'Hinata', 2500000, 'ce sont les fondations', 'ciment : 50kg ...');

-- --------------------------------------------------------

--
-- Structure de la table `typeintervenant`
--

CREATE TABLE `typeintervenant` (
  `id` int(11) NOT NULL,
  `lib` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `typeintervenant`
--

INSERT INTO `typeintervenant` (`id`, `lib`) VALUES
(1, 'particulier'),
(2, 'entrepreneur/entreprise');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `mail` varchar(254) NOT NULL,
  `mdp` varchar(100) NOT NULL,
  `work` int(11) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `picture` varchar(255) NOT NULL DEFAULT 'default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `firstname`, `mail`, `mdp`, `work`, `createAt`, `picture`) VALUES
(10, 'Gbro', 'Cosette D\'avila', 'davilacosette@gmail.com', '$2y$15$clDuXL59DXgpCnlzntLEUuoYTQ3xnWzez45qsmEToVaNNNJcKA94W', 1, '2019-04-16 10:21:38', 'EYFO4724.JPG'),
(12, 'particulier', 'particulier', 'particulier@mail.com', '12345678', 1, '2019-04-17 16:08:51', ''),
(16, 'BuildApp', ' ', 'buildapp@build.com', 'buildApp', 2, '2019-04-25 16:17:31', 'default.jpg'),
(29, 'Nanguy', 'Marc-Henry', 'marchenrynanguy@gmail.com', '$2y$15$NzxceoYaU/wbXtaSeyaQH.YUaOMNKpyyJu2IEDGwoGSZzjXKCkJ76', 1, '2019-04-26 08:47:20', 'profil.jpg'),
(30, 'Marc', 'Nanguy', 'marckent@gmail.com', '$2y$15$sOz6FKOdcfFVzbtGACkYBO2XorYH9O.V/xXRVvulJNDc4Rr9GyEkm', 2, '2019-04-26 08:51:20', 'default.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `depenses`
--
ALTER TABLE `depenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tache` (`id_project`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_task` (`id_task`),
  ADD KEY `id_project` (`id_project`);

--
-- Index pour la table `invitation`
--
ALTER TABLE `invitation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProject` (`idProject`,`idEmetteur`,`idRecepteur`),
  ADD KEY `idEmetteur` (`idEmetteur`),
  ADD KEY `idRecepteur` (`idRecepteur`);

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_proprio` (`id_proprio`),
  ADD KEY `id_ent` (`id_ent`);

--
-- Index pour la table `taches`
--
ALTER TABLE `taches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poject` (`id_project`);

--
-- Index pour la table `typeintervenant`
--
ALTER TABLE `typeintervenant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD KEY `work` (`work`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `depenses`
--
ALTER TABLE `depenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `invitation`
--
ALTER TABLE `invitation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `taches`
--
ALTER TABLE `taches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `typeintervenant`
--
ALTER TABLE `typeintervenant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `depenses`
--
ALTER TABLE `depenses`
  ADD CONSTRAINT `depenses_ibfk_1` FOREIGN KEY (`id_project`) REFERENCES `project` (`id`);

--
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `taches` (`id`);

--
-- Contraintes pour la table `invitation`
--
ALTER TABLE `invitation`
  ADD CONSTRAINT `invitation_ibfk_1` FOREIGN KEY (`idEmetteur`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `invitation_ibfk_2` FOREIGN KEY (`idRecepteur`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`id_proprio`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `project_ibfk_2` FOREIGN KEY (`id_ent`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `taches`
--
ALTER TABLE `taches`
  ADD CONSTRAINT `taches_ibfk_1` FOREIGN KEY (`id_project`) REFERENCES `project` (`id`);

--
-- Contraintes pour la table `typeintervenant`
--
ALTER TABLE `typeintervenant`
  ADD CONSTRAINT `typeintervenant_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`work`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`work`) REFERENCES `typeintervenant` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
