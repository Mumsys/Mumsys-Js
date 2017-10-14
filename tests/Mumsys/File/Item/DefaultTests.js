/**
 * Mumsys_File_Item_Default tests
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Library
 * @subpackage  File
 */


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
        "mimetype": "image/png",
    };

    /**
     * @type Mumsys_File_Item_Default
     */
    var obj = new Mumsys_File_Item_Default(props);

    assert.ok(1 == "1", "Passed!");


    // construction
    var objTest1 = new Mumsys_File_Item_Default(props);
    assert.ok(
        (objTest1 instanceof Mumsys_File_Item_Default),
        "instanceof Mumsys_File_Item_Default: Passed!"
    );

    //
    // get path()
    assert.equal( obj.path, props.path, "get path: Passed!");
    
    //
    // get name()
    assert.equal( obj.name, props.filename, "get name: Passed!");
    
    //
    // get size()
    assert.equal( obj.size, props.filesize, "get size: Passed!");
    
    //
    // get filetype()
    assert.equal( obj.type, props.filetype, "get type: Passed!");
    
    //
    // get mimetype()
    assert.equal( obj.mimetype, props.mimetype, "get mimetype: Passed!");
    
    //
    // get location()
    assert.equal( obj.location, props.path + '/' + props.filename, "get location: Passed!" );

});
