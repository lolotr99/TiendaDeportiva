<?php 

  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  mysqli_set_charset($conn, 'utf8');

  // REALIZA LA QUERY A LA DB
  $sql = "select equipo, puntos,(partidosGanados + partidosEmpatados + partidosPerdidos) as partidosJugados, partidosGanados, partidosEmpatados, partidosPerdidos, golesFavor, golesContra, (golesFavor - golesContra) as diferenciaGoles, entrenador, maximoGoleador from equipos order by puntos DESC ,(golesContra - golesFavor) asc ";
  $res = $conn->query($sql);
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  while ($resultado = mysqli_fetch_array($res))  
  {
    $datos[] = $resultado;
  }
  
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  echo $json;