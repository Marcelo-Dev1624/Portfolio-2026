<?php
declare(strict_types=1);

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$config = require __DIR__ . '/config.php';

// CORS — only allow origins listed in config
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'], true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Vary: Origin');
}

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Honeypot — silently succeed if the hidden field was filled (bot)
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$company = trim((string)($data['company'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

$errors = [];
if ($name === '')                                  $errors[] = 'Name is required';
if (mb_strlen($name) > 120)                        $errors[] = 'Name too long';
if ($email === '')                                 $errors[] = 'Email is required';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))    $errors[] = 'Invalid email';
if (mb_strlen($company) > 200)                     $errors[] = 'Company too long';
if ($message === '')                               $errors[] = 'Message is required';
if (mb_strlen($message) > 5000)                    $errors[] = 'Message too long';

if ($errors) {
    http_response_code(400);
    echo json_encode(['error' => implode('. ', $errors)]);
    exit;
}

// Build email bodies
$safeName    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
$safeCompany = htmlspecialchars($company ?: '—', ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$subject  = "New portfolio contact from {$name}";
$bodyHtml = <<<HTML
<div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
  <h2 style="color: #4de297; margin-bottom: 1.5rem;">New portfolio contact</h2>
  <p><strong>Name:</strong> {$safeName}</p>
  <p><strong>Email:</strong> <a href="mailto:{$safeEmail}">{$safeEmail}</a></p>
  <p><strong>Company:</strong> {$safeCompany}</p>
  <hr style="border: 0; border-top: 1px solid #ddd; margin: 1.5rem 0;">
  <p style="white-space: pre-wrap; line-height: 1.6;">{$safeMessage}</p>
</div>
HTML;

$bodyPlain = "Name: {$name}\nEmail: {$email}\nCompany: " . ($company ?: '—') . "\n\nMessage:\n{$message}";

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_username'];
    $mail->Password   = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_secure'] === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port    = (int) $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email']);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyPlain;

    $mail->send();
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    error_log('Portfolio contact form error: ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode(['error' => 'Could not send the message. Please try again later.']);
}
