# mumsys-js
MUMSYS Javascript Library

Currently only DTO/DAO objects available. 

Server request require jQuery.ajax()

Build files in deploy/production (without comments, minified version) or 
deploy/development for a single file including comments/ documentation.

Development goes in single files at src/.

Also have a look at the html files in tests/ folder to run tests or to get into it in 
detail.

For distribution/ builds you can use composer:
    composer require flobee/mumsys-js

For own builds (requires php 5.6+, 7.* cli version):
    composer require flobee/mumsys-js
    cd verndor/flobee/mumsys-js
    composer install
to the get dependencies for builds.
    