-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 10, 2018 at 06:08 AM
-- Server version: 5.7.19
-- PHP Version: 7.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web2_auction`
--

-- --------------------------------------------------------

--
-- Table structure for table `auction`
--

DROP TABLE IF EXISTS `auction`;
CREATE TABLE IF NOT EXISTS `auction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seller` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `highest_bid` int(11) NOT NULL,
  `current_price` int(11) NOT NULL,
  `bid_count` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `seller` (`seller`,`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bid`
--

DROP TABLE IF EXISTS `bid`;
CREATE TABLE IF NOT EXISTS `bid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auction_id` int(11) NOT NULL,
  `bidder` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auction_id` (`auction_id`,`bidder`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ProName` varchar(50) NOT NULL,
  `img_1` varchar(255) NOT NULL,
  `img_2` varchar(255) DEFAULT NULL,
  `img_3` varchar(255) DEFAULT NULL,
  `StartPrice` int(11) NOT NULL,
  `PriceStep` int(11) NOT NULL,
  `InstantBuyout` int(11) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `hoten` varchar(120) NOT NULL,
  `role` int(11) NOT NULL,
  `diachi` varchar(250) NOT NULL,
  `created_date` datetime NOT NULL,
  `last_modified_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`,`email`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `hoten`, `role`, `diachi`, `created_date`, `last_modified_date`) VALUES
(1, 'admin', 'admin@admin.com', '$2a$10$XdggSpiENidCgFq1JvTRmO57nxeJK93GqvZKHf1sgFXJWAn.RKP4.', 'admin', 0, 'admin', '2018-06-10 04:19:08', '2018-06-10 04:19:08'),
(2, 'seller1', 'seller@1.com', '$2a$10$0NHsvbur6n2kGWbU5N4J/uTQcCSqeWMKDjvxVZFC9DnIHF0OVKmyG', 'seller1', 1, '1 seller street', '2018-06-10 04:22:08', '2018-06-10 04:22:08'),
(3, 'client1', 'client@1.com', '$2a$10$gdgwPRPey1n36SomywS2hObPGQRj2/84a8GaOdf2uIFcfT4GQ5s..', 'client1', 2, '1 client street', '2018-06-10 04:22:37', '2018-06-10 04:22:37');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
