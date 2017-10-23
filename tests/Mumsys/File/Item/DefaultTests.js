/**
 * Mumsys_File_Item_Default tests
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  File
 */

"use strict";

QUnit.test("Mumsys_File_Item_Default.js tests", function (assert)
{
    /**
     * File item properties.
     * @type Object
     */
    var props = {
        "path": '/some/path',
        "filename": "somefile.png",
        "filesize": 1024,
        "filetype": "file",
        "mimetype": "image/png"
    };

    /**
     * @type Mumsys_File_Item_Default
     */
    var _obj = new Mumsys_File_Item_Default(props);

    // construction
    var objTest1 = new Mumsys_File_Item_Default(props);
    assert.ok(
        (objTest1 instanceof Mumsys_File_Item_Default),
        "instanceof Mumsys_File_Item_Default: Passed!"
    );

    //
    // getVersion()
    assert.equal( Mumsys_File_Item_Default.getVersion(), '3.0.1', "static::getVersion(): Passed!" );

    //
    // get path()
    assert.equal( _obj.path, props.path, "get path: Passed!" );

    //
    // get name()
    assert.equal( _obj.name, props.filename, "get name: Passed!" );

    //
    // get size()
    assert.equal( _obj.size, props.filesize, "get size: Passed!" );

    //
    // get filetype()
    assert.equal( _obj.type, props.filetype, "get type: Passed!" );

    //
    // get mimetype()
    assert.equal( _obj.mimetype, props.mimetype, "get mimetype: Passed!" );

    //
    // get location()
    assert.equal( _obj.location, props.path + '/' + props.filename, "get location: Passed!" );
    var oLocTest = new Mumsys_File_Item_Default( { } );
    try {
        oLocTest.location;
    } catch ( e ) {
        var _mesgOut = 'get location() Exception: Passed!',
            _expected = 'No path or file was set to get the location'
            ;
        assert.equal( e.message, _expected, _mesgOut );
        assert.equal( e.name, "Mumsys_File_Item_Exception", "get location() expected exception: Passed!" );
        assert.equal( e.code, 1, "expected exception code: Passed!" );
    }

    //
    // get unknown
    assert.equal( _obj.unknown, undefined, "get unknown: Passed!" );
    _obj.unknown = true;
    assert.equal( _obj.unknown, true, "set unknown: Passed!" );
});
