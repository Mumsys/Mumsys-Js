/**
 * Mumsys_Attribute_Item_Default tests
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2018 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Attribute
 */

/* global QUnit, Mumsys_Attribute_Item_Default */

"use strict";

QUnit.test("Mumsys_Attribute_Item_Default.js tests", function (assert)
{
    var _expected, _mesgOut = "";

    //["domain", "typeid", "type", "code", "status", "position", "label"];
    //id,siteid,ctime,mtime,editor
    var _testProps = {
        "id": "1",
        "siteid": 2,
        "mtime": "2001-12-31 23:58:59",
        "ctime": "2000-12-31 23:58:59",
        "editor": "me",
        "domain": "attribute",
        "typeid": 123,
        "type": "sometype",
        "code": "itemcode",
        "status": 1,
        "position": 100,
        "label": "Attribute label"
    };

    var _testObj = new Mumsys_Attribute_Item_Default( _testProps );

    // check tests working
    assert.ok( (1 == "1"), "Passed !" );

    // check getVersion()
    assert.equal( Mumsys_Attribute_Item_Default.getVersion(), "1.0.0", "static::getVersion(): Passed!" );

    //
    // construction
    assert.ok(
        ( _testObj instanceof Mumsys_Attribute_Item_Default ),
        "instance Mumsys_Attribute_Item_Default: Passed!"
    );

    try {
        var errA = new Mumsys_Attribute_Item_Default( [1] );
        assert.ok( false, "Construction failed!" );
    } catch ( e ) {
        assert.ok(
            ( e.message === "Invalid parameters" ),
            "Exception message: Passed!"
        );
        assert.ok( ( e.name === "Mumsys_Attribute_Exception" ), "Expected exception: Passed!" );
    }


    //
    // get/set domain
    assert.equal( _testObj.domain , "attribute", "get domain: Passed!" );
    assert.ok( !_testObj.isModified(), "domain not changed: Passed!");
    _testObj.domain = "text";
    assert.equal( _testObj.domain , "text", "set domain: Passed!" );
    assert.ok( _testObj.isModified(), "domain changed, modified: Passed!");
    // reset
    _testObj.domain = "attribute";
    _testObj.setModified( false );


    //
    // get/set typeid
    assert.equal( _testObj.typeid , 123, "get typeid: Passed!" );
    _testObj.typeid = 123; // set the same to be not modified!
    assert.ok( !_testObj.isModified(), "typeid not changed: Passed!");
    _testObj.typeid = 321;
    assert.equal( _testObj.typeid , 321, "set typeid: Passed!" );
    assert.ok( _testObj.isModified(), "typeid changed, modified: Passed!");
    // reset
    _testObj.typeid = 123;
    _testObj.setModified( false );

    // get type (optional)
    assert.equal( _testObj.type , "sometype", "get type: Passed!" );
    var _tmp = new Mumsys_Attribute_Item_Default( {} );
    assert.equal( _tmp.type , "", "get type default value: Passed!" );
    var _tmp = new Mumsys_Attribute_Item_Default( {"type": 12} );
    assert.equal( _tmp.type , "12", "get type (cast to string): Passed!" );

    //
    // get/set code
    assert.equal( _testObj.code , "itemcode", "get code: Passed!" );
    _testObj.code = "itemcode"; // set the same to be not modified!
    assert.ok( !_testObj.isModified(), "code not changed: Passed!");
    _testObj.code = "newitemcode";
    assert.equal( _testObj.code , "newitemcode", "set code: Passed!" );
    assert.ok( _testObj.isModified(), "code changed, modified: Passed!");
    // reset
    _testObj.code = "itemcode";
    _testObj.setModified( false );

    //
    // get/set status
    assert.equal( _testObj.status, 1, "get status: Passed!" );
    _testObj.status = 1; // set the same to be not modified!
    assert.ok( !_testObj.isModified(), "status not changed: Passed!" );
    _testObj.status = 0;
    assert.equal( _testObj.status, 0, "set status: Passed!" );
    assert.ok( _testObj.isModified(), "status changed, modified: Passed!" );
    _testObj.status = "hi";
    assert.equal( _testObj.status, 0, "get status (cast to integer): Passed!" );
    // reset
    _testObj.status = 1;
    _testObj.setModified( false );

    //
    // get/set position
    assert.equal( _testObj.position, 100, "get position: Passed!" );
    _testObj.position = 100; // set the same to be not modified!
    assert.ok( !_testObj.isModified(), "position not changed: Passed!" );
    _testObj.position = 1;
    assert.equal( _testObj.position, 1, "set position: Passed!" );
    assert.ok( _testObj.isModified(), "position changed, modified: Passed!" );
    _testObj.position = "hi";
    assert.equal( _testObj.position, 0, "get position (cast to integer): Passed!" );
    // reset
    _testObj.position = 100;
    _testObj.setModified( false );

    //
    // get/set label
    assert.equal( _testObj.label , "Attribute label", "get label: Passed!" );
    _testObj.label = "Attribute label"; // set the same to be not modified!
    assert.ok( !_testObj.isModified(), "label not changed: Passed!");
    _testObj.label = "New attribute label";
    assert.equal( _testObj.label , "New attribute label", "set label: Passed!" );
    assert.ok( _testObj.isModified(), "label changed, modified: Passed!");
    var _tmp = new Mumsys_Attribute_Item_Default( {"label": 1234} );
    assert.equal( _tmp.label , "1234", "get label (cast to string): Passed!" );
    // reset
    _testObj.label = "Attribute label";
    _testObj.setModified( false );

    //
    // getProperties() (covers also _getProperties() and Common/Item/Abstact.js)
    var _tmp = {};
    Object.keys( _testProps ).map( function ( objectKey, index )
    {
        _tmp[ "attribute." + objectKey ] = _testProps[ objectKey ];
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
