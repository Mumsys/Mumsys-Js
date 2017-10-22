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

$buildFile = 'dist/Mumsys.js';
$minifyFile = 'dist/Mumsys.min.js';
$testsFile = 'tests/AllTests.travis.js';

$includeSource = array(
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

//$includeTests = array(
//    'tests/MumsysTests.js',
//    'tests/Mumsys/File/Item/DefaultTests.js',
//    'tests/Mumsys/Generic/Item/DefaultTests.js',
//    'tests/Mumsys/Generic/Manager/DefaultTests.js',
//    // to be removed, not supported
//    'tests/Mumsys/Generic/ItemTests.js',
//    'tests/Mumsys/Generic/ManagerTests.js',
//);



function saveContent( $list, $target )
{
    $content = '';
    foreach ( $list as $file ) {
        $content .= file_get_contents($file) . "\n\n";
    }
    $newcontent = '"use strict";' . "\n"
        . str_replace('"use strict";' . "\n", '', $content);

    file_put_contents($target, $newcontent);

    return $newcontent;
}


if ( saveContent($includeSource, $buildFile) ) {
    echo $buildFile . PHP_EOL;
}

//if ( saveContent($includeTests, $testsFile) ) {
//    echo $testsFile . PHP_EOL;
//}


include('vendor/autoload.php');
$minifiedCode = \JShrink\Minifier::minify(file_get_contents($buildFile), array('flaggedComments' => false));
file_put_contents($minifyFile, $minifiedCode);

echo $minifyFile . PHP_EOL;

echo 'done.' . PHP_EOL;