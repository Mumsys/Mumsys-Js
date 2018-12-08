/**
 * Mumsys_Common_Item_Abstract tests
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2018 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Common
 */

/* global QUnit, Mumsys_Common_Item_Abstract */

"use strict";

QUnit.test("Mumsys_Common_Item_Abstract.js tests", function (assert)
{
    var _expected, _mesgOut = "";

    // abstract props: id, siteid, ctime, mtime, editor
    var _testProps = {
        "id": "1",
        "siteid": 2,
        "mtime": "2001-12-31 23:58:59",
        "ctime": "2000-12-31 23:58:59",
        "editor": "me"
    };

    var _testObj = new Mumsys_Common_Item_Abstract( "prfx.", _testProps );

    // check tests working
    assert.ok( (1 == "1"), "Passed !" );

    //
    // construction
    assert.ok(
        ( _testObj instanceof Mumsys_Common_Item_Abstract ),
        "construction Mumsys_Common_Item_Abstract: Passed!"
    );


    var _tmp = new Mumsys_Common_Item_Abstract( "prefix", { } );
    assert.ok(
        ( _tmp instanceof Mumsys_Common_Item_Abstract ),
        "construction 2 Mumsys_Common_Item_Abstract: Passed!"
    );

    // check getVersion()
    assert.equal( Mumsys_Common_Item_Abstract.getVersion(), "1.0.0", "static::getVersion(): Passed!" );

    //
    // get/set id
    assert.equal( _testObj.id , "1", "get id: Passed!" );
    _testObj.id = "1"; // set the same to be not changed!
    assert.ok( !_testObj.isModified(), "id not changed: Passed!");
    _testObj.setModified( false );
    _testObj.id = null;
    assert.equal( _testObj.id , null, "set id to null (new item): Passed!" );
    assert.ok( _testObj.isModified(), "id changed, modified: Passed!");
    // reset
    _testObj.id = "1";
    _testObj.setModified( false );



    //
    // get/set siteid
    assert.equal( _testObj.siteid , 2, "get siteid: Passed!" );
    assert.ok( !_testObj.isModified(), "siteid not changed: Passed!");
    try {
        _testObj.siteid = 2;
    } catch (e) {
        assert.equal(e.message, "setting getter-only property \"siteid\"" , "set siteid failed: Passed!" );
    }
    assert.equal( _testObj.siteid , "2", "get siteid (not changed): Passed!" );
    assert.ok( !_testObj.isModified(), "siteid not changed, modified: Passed!");
    // reset
    _testObj.setModified( false );

    //
    // get/set mtime
    assert.equal( _testObj.mtime, "2001-12-31 23:58:59", "get mtime: Passed!" );
    assert.ok( !_testObj.isModified(), "mtime not modified: Passed!" );
    try {
        _testObj.mtime = "2001-12-31 23:58:59";
    }
    catch ( e ) {
        assert.equal( e.message, "setting getter-only property \"mtime\"", "set mtime failed: Passed!" );
    }
    assert.equal( _testObj.mtime, "2001-12-31 23:58:59", "get mtime (not changed): Passed!" );
    assert.ok( !_testObj.isModified(), "mtime not changed, modified: Passed!" );
    // reset
    _testObj.setModified( false );

    //
    // get/set ctime
    assert.equal( _testObj.ctime, "2000-12-31 23:58:59", "get ctime: Passed!" );
    assert.ok( !_testObj.isModified(), "ctime not modified: Passed!" );
    try {
        _testObj.ctime = "2000-12-31 23:58:59";
    }
    catch ( e ) {
        assert.equal( e.message, "setting getter-only property \"ctime\"", "set ctime failed: Passed!" );
    }
    assert.equal( _testObj.ctime, "2000-12-31 23:58:59", "get ctime (not changed): Passed!" );
    assert.ok( !_testObj.isModified(), "ctime not changed, modified: Passed!" );
    // reset
    _testObj.setModified( false );

    //
    // get/set editor
    assert.equal( _testObj.editor, "me", "get editor: Passed!" );
    assert.ok( !_testObj.isModified(), "editor not modified: Passed!" );
    try {
        _testObj.editor = "me";
    }
    catch ( e ) {
        assert.equal( e.message, "setting getter-only property \"editor\"", "set editor failed: Passed!" );
    }
    assert.equal( _testObj.editor, "me", "get editor (not changed): Passed!" );
    assert.ok( !_testObj.isModified(), "editor not changed, modified: Passed!" );
    // reset
    _testObj.setModified( false );

    //
    // isModified()/ setModified()
    assert.ok( !_testObj.isModified(), "not modified: Passed!" );
    _testObj.setModified( true );
    assert.ok( _testObj.isModified(), "is/ set modified: Passed!" );
    // reset
    _testObj.setModified( false );

    //
    // getProperties() (covers also _getProperties() and Common/Item/Abstact.js)
    var _tmp = { };
    Object.keys( _testProps ).map( function ( objectKey, index )
    {
        _tmp[ "prfx." + objectKey ] = _testProps[ objectKey ];
    } );
    assert.equal(
        JSON.stringify( _testObj.getProperties() ),
        JSON.stringify( _tmp ),
        "getProperties(): Passed!"
        );

    //
    // getRawProperties() (covers also _getProperties() and Common/Item/Abstact.js)
    assert.equal(
        JSON.stringify( _testObj.getRawProperties() ),
        JSON.stringify( _testProps ),
        "getRawProperties(): Passed!"
        );

} );
