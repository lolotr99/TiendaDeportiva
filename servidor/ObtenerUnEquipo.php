<?php

header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    mysqli_set_charset($conn, 'utf8');

  // REALIZA LA QUERY A LA DB
  $sql = "SELECT * FROM equipos where equipo rlike '$_GET[equipo]'";
  $res = $conn->query($sql);
  
  // SI EL USUARIO EXISTE OBTIENE LOS DATOS Y LOS GUARDA EN UN ARRAY
  if ($resultado = mysqli_fetch_array($res))  
  {
    $datos[] = $resultado;
  }
  
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS

  echo $json; // MUESTRA EL JSON GENERADO
