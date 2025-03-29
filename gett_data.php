<?php
header("Content-Type: application/json");

$host = "localhost";
$user = "root";
$password = "";
$database = "sensor_db";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "เชื่อมต่อฐานข้อมูลไม่ได้"]));
}

$sql = "SELECT temperature, humidity, magnitude FROM sensor_data ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);
$conn->close();
?>
