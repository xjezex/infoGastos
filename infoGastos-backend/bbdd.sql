CREATE DATABASE IF NOT EXISTS infoGastos;

CREATE TABLE IF NOT EXISTS expense(
id      	 		int(255) auto_increment NOT NULL,
dateExpense  		date,
amount 		 		DECIMAL(9,2),
descriptionExpense  text,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS income(
id			 		int(255) auto_increment NOT NULL,
dateIncome   		date,
income 		 		DECIMAL(9,2),
descriptionIncome  text,
PRIMARY KEY(id)
);