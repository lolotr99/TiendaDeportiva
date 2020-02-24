-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2020 a las 01:03:48
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `angular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `equipo` varchar(50) NOT NULL,
  `puntos` int(3) NOT NULL,
  `partidosGanados` int(2) NOT NULL,
  `partidosEmpatados` int(2) NOT NULL,
  `partidosPerdidos` int(2) NOT NULL,
  `golesFavor` int(3) NOT NULL,
  `golesContra` int(3) NOT NULL,
  `entrenador` varchar(50) NOT NULL,
  `maximoGoleador` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`equipo`, `puntos`, `partidosGanados`, `partidosEmpatados`, `partidosPerdidos`, `golesFavor`, `golesContra`, `entrenador`, `maximoGoleador`) VALUES
('Alavés', 30, 8, 6, 11, 27, 35, 'Asier Garitano', 'Lucas Pérez'),
('Athletic de Bilbao', 31, 7, 10, 8, 24, 22, 'Gaizka Garitano', 'Raúl García'),
('Atlético de Madrid', 43, 11, 10, 4, 28, 18, 'Diego Pablo Simeone', 'Álvaro Morata'),
('Barcelona', 55, 17, 4, 4, 62, 29, 'Quique Setién', 'Leo Messi'),
('Celta de Vigo', 24, 5, 9, 11, 22, 34, 'Óscar García', 'Iago Aspas'),
('Eibar', 24, 6, 6, 12, 22, 37, 'José Luis Mendilíbar', 'Fabián Orellana'),
('Espanyol', 19, 4, 7, 14, 22, 44, 'Pitu Abelardo', 'Raúl de Tomás'),
('Getafe', 42, 12, 6, 7, 36, 25, 'José Bordalás', 'Ángel'),
('Granada', 36, 11, 3, 11, 32, 31, 'Diego Martínez', 'Carlos Fernández'),
('Leganés', 19, 4, 7, 14, 18, 37, 'Javier Aguirre', 'Martin Braithwaite'),
('Levante', 32, 10, 2, 13, 31, 36, 'Paco López', 'Roger Martí'),
('Mallorca', 22, 6, 4, 15, 26, 42, 'Vicente Moreno', 'Ante Budimir'),
('Osasuna', 31, 7, 10, 8, 31, 35, 'Jagoba Arrasate', 'Chimy Ávila'),
('Real Betis Balompié', 30, 7, 9, 9, 35, 40, 'Rubi', 'Loren Morón'),
('Real Madrid', 53, 15, 8, 2, 46, 17, 'Zinedine Zidane', 'Karim Benzema'),
('Real Sociedad', 40, 12, 4, 8, 42, 31, 'Imanol Alguacil', 'Willian José'),
('Real Valladolid', 29, 6, 11, 8, 22, 28, 'Sergio González', 'Sergi Guardiola'),
('Sevilla', 43, 12, 7, 6, 34, 25, 'Julen Lopetegui', 'Lucas Ocampos'),
('Valencia', 38, 10, 8, 7, 35, 37, 'Albert Celades', 'Maxi Gómez'),
('Villarreal', 38, 11, 5, 9, 43, 35, 'Javier Calleja', 'Gerard Moreno');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`equipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
