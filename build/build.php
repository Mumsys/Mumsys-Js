<?php

/**
 * Mumsys Js - build file.
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 */

/**
 * Simple build file to create an all-in-one file version + a minified version.
 * Use composer to get dependencies for the build
 *
 * run: # php ./build/build.php
 */


chdir(__DIR__ . '/../');

$include = array(
    'src/Mumsys.js',
    'src/Mumsys/Exception.js',

    'src/Mumsys/File/Item/Exception.js',
    'src/Mumsys/File/Item/Default.js',

    'src/Mumsys/Generic/Exception.js',
    'src/Mumsys/Generic/Item/Exception.js',
    'src/Mumsys/Generic/Manager/Exception.js',
    'src/Mumsys/Generic/Item/Default.js',
    'src/Mumsys/Generic/Manager/Default.js',

    // to be removed, not supported
    'src/Mumsys/Generic/Item.js',
    'src/Mumsys/Generic/Manager.js',
);


$buildFile = 'deploy/development/Mumsys.js';
$minifyFile = 'deploy/production/Mumsys.min.js';


$content = '';
foreach($include as $file)
{
    $content .= file_get_contents($file) . "\n\n";
}
$newcontent = '"use strict";' . "\n" .  str_replace('"use strict";' . "\n", '', $content);
file_put_contents($buildFile, $newcontent);


include('vendor/autoload.php');
$minifiedCode = \JShrink\Minifier::minify($newcontent, array('flaggedComments' => false));
file_put_contents($minifyFile, $minifiedCode);


echo $buildFile . ' done.' . PHP_EOL;
echo $minifyFile . ' done.' . PHP_EOL;
echo 'done.' . PHP_EOL;