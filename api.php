<?php
header('Content-Type: application/json');
require_once 'config.php';

$action = $_GET['action'] ?? '';

// جلب المشاريع
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'get_projects') {
    $stmt = $pdo->query('SELECT * FROM projects ORDER BY created_at DESC');
    echo json_encode($stmt->fetchAll());
}

// استقبال طلب جديد
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'submit_lead') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!empty($data['name']) && !empty($data['phone'])) {
        $stmt = $pdo->prepare('INSERT INTO leads (full_name, phone_number, interest_type) VALUES (?, ?, ?)');
        $stmt->execute([$data['name'], $data['phone'], $data['interest']]);
        echo json_encode(['status' => 'success', 'message' => 'Lead received']);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Missing data']);
    }
}
?>