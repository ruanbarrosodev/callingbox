CREATE DATABASE IF NOT EXISTS callingbox;
USE callingbox;
CREATE TABLE IF NOT EXISTS calling (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  ident VARCHAR(50) NOT NULL,
  sector VARCHAR(50) NOT NULL,
  statusCalling VARCHAR(50) NOT NULL,
  typeCalling VARCHAR(50) NOT NULL,
  observation TEXT,
  datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/*
DB_HOST=HOSTNAME
DB_USER=HOSTUSER
DB_PASSWORD=HOSTPASSWORD
DB_NAME=DBNAME
DB_PORT=3306
PORT=4000
*/
{
  "name": "ruan da costa",
  "ident": "232",
  "sector": "TI",
	"statusCalling": "Aguardando",
  "typeCalling": "dwqdqw",
  "observation": "Não consegue acessar o sistema",
  "datetime": "2025-05-18 14:30:00"
}

