<?php
$servername = "localhost";
$username = "root";  // ค่าเริ่มต้นของ XAMPP
$password = "";      // ค่าเริ่มต้นของ XAMPP
$dbname = "sensor_db";

// เชื่อมต่อ MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// รับค่าจาก ESP32
$temperature = $_GET['temperature'];
$humidity = $_GET['humidity'];
$magnitude = $_GET['magnitude'];
$accX = $_GET['accX'];
$accY = $_GET['accY'];
$accZ = $_GET['accZ'];

// บันทึกข้อมูลลง MySQL
$sql = "INSERT INTO sensor_data (temperature, humidity, magnitude, accX, accY, accZ)
        VALUES ('$temperature', '$humidity', '$magnitude', '$accX', '$accY', '$accZ')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
