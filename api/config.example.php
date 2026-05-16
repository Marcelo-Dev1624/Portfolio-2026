<?php
/**
 * SMTP and form configuration template.
 *
 * Copy this file to `config.php` and fill in real values.
 * `config.php` is gitignored — never commit credentials.
 */

return [
    // Hostinger SMTP — these are the standard values for Hostinger email accounts.
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl', // 'ssl' (port 465) or 'tls' (port 587)

    // Credentials of your domain email account.
    'smtp_username' => 'contact@marcelodev.es',
    'smtp_password' => 'REPLACE_WITH_REAL_PASSWORD',

    // What appears in the email's From header.
    'from_email' => 'contact@marcelodev.es',
    'from_name' => 'Marcelo Portfolio Contact',

    // Where the form submissions should land.
    'to_email' => 'contact@marcelodev.es',

    // Origins allowed to call this endpoint (CORS).
    // Add localhost if you want to test from the Vite dev server.
    'allowed_origins' => [
        'https://marcelodev.es',
        'https://www.marcelodev.es',
    ],
];
