#DATABASE CONFIG FILE /database/mysql.js

#DATABASE -- EXECUTE THE QUERY
/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100137
Source Host           : localhost:3306
Source Database       : paperclick

Target Server Type    : MYSQL
Target Server Version : 100137
File Encoding         : 65001

Date: 2019-02-17 21:18:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for githubstared
-- ----------------------------
DROP TABLE IF EXISTS `githubstared`;
CREATE TABLE `githubstared` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `giturl` varchar(255) DEFAULT NULL,
  `ownerurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
