<?php

chdir(__DIR__ . '/../src');

$include = array(
    'Mumsys.js',
    'Mumsys/File/Item/Default.js',
    'Mumsys/Generic/Item/Default.js',
    'Mumsys/Generic/Manager/Default.js',
);


foreach($include as $file) {
    $content = file_get_contents($file) . "\n\n";

    if ($file !== 'Mumsys.js') {
        $content = str_replace('"use strict";' . "\n", '', $content);
        file_put_contents('../build/version/Mumsys.3.0.0.js', $content, FILE_APPEND);
    } else {
        file_put_contents('../build/version/Mumsys.3.0.0.js', $content);
    }

}

echo 'done.' . PHP_EOL;