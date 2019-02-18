#DATABASE CONFIG FILE /database/mysql.js

#DATABASE -- EXECUTE THE QUERY


SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `githubstared`;
CREATE TABLE `githubstared` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `giturl` varchar(255) DEFAULT NULL,
  `ownerurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
