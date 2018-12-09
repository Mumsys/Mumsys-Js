/**
 * Mumsys_Text_Item_Default tests
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2018 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Text
 */

/* global QUnit, Mumsys_Text_Item_Default */

"use strict";

QUnit.test("Mumsys_Text_Item_Default.js tests", function (assert)
{
    var _expected, _mesgOut = "";

    //["langid", "domain", "typeid", "type", "code", "status", "content"];
    //id,siteid,ctime,mtime,editor
    var _testProps = {
        "id": "1",
        "siteid": 2,
        "mtime": "2001-12-31 23:58:59",
        "ctime": "2000-12-31 23:58:59",
        "editor": "me",
        "langid": "de",
        "domain": "text",
        "typeid": 123,
        "type": "sometype",
        "code": "itemcode",
        "status": 1,
        "content": "Text content"
    };

    var _testObj = new Mumsys_Text_Item_Default( _testProps );

    // check tests working
    assert.ok( (1 == "1"), "Passed !" );

    // check getVersion()
    assert.equal( Mumsys_Text_Item_Default.getVersion(), "1.0.0", "static::getVersion(): Passed!" );

    //
    // construction
    assert.ok(
        ( _testObj instanceof Mumsys_Text_Item_Default ),
        "instance Mumsys_Text_Item_Default: Passed!"
    );

    try {
        var errA = new Mumsys_Text_Item_Default( [1] );
        assert.ok( false, "Construction failed!" );
    } catch ( e ) {
        assert.ok(
            ( e.message === "Invalid parameters" ),
            "Exception message: Passed!"
        );
        assert.ok( ( e.name === "Mumsys_Text_Exception" ), "Expected exception: Passed!" );
    }

    //
    // get/set langid
    assert.equal( _testObj.langid , "de", "get langid: Passed!" );
    _testObj.langid = "de";
    assert.ok( !_testObj.isModified(), "langid not changed: Passed!");
    _testObj.langid = "en";
    assert.equal( _testObj.langid , "en", "set domain: Passed!" );
    assert.ok( _testObj.isModified(), "langid changed, modified: Passed!");
    // reset
    _testObj.langid = "de";
    _testObj.setModified( false );


    //
    // get/set domain
    assert.equal( _testObj.domain , "text", "get domain: Passed!" );
    assert.ok( !_testObj.isModified(), "domain not changed: Passed!");
    _testObj.domain = "attribute";
    assert.equal( _testObj.domain , "attribute", "set domain: Passed!" );
    assert.ok( _testObj.isModified(), "domain changed, modified: Passed!");
    // reset
    _testObj.domain = "text";
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
    var _tmp = new Mumsys_Text_Item_Default( {} );
    assert.equal( _tmp.type , "", "get type default value: Passed!" );
    var _tmp = new Mumsys_Text_Item_Default( {"type": 12} );
    assert.equal( _tmp.type , "12", "get type (cast to string): Passed!" );

    //
    // get/set content
    assert.equal( _testObj.content , "Text content", "get content: Passed!" );
    _testObj.content = "Text content"; // set the same to be not modified!
    assert.ok( !_testObj.isModified(), "content not changed: Passed!");
    _testObj.content = "New text content";
    assert.equal( _testObj.content , "New text content", "set content: Passed!" );
    assert.ok( _testObj.isModified(), "content changed, modified: Passed!");
    var _tmp = new Mumsys_Text_Item_Default( {"content": 1234} );
    assert.equal( _tmp.content , "1234", "get content (cast to string): Passed!" );
    // reset
    _testObj.content = "Text content";
    _testObj.setModified( false );
    // get label as alias of content
    assert.equal( _testObj.label , "Text content", "get label (alias of get content): Passed!" );

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
    // getProperties() (covers also _getProperties() and Common/Item/Abstact.js)
    var _tmp = {};
    Object.keys( _testProps ).map( function ( objectKey, index )
    {
        _tmp[ "text." + objectKey ] = _testProps[ objectKey ];
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
