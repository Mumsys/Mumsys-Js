/**
 * Mumsys_Generic_Manager tests
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */

////QUnit.module( "Mumsys Generic", function() 
//{ 
//  QUnit.test("Mums ...
QUnit.test( "Mumsys_Generic_Manager.js tests", function ( assert )
{
    /**
     * @type String
     */
    var _expected, _mesgOut = '';

    /**
     * @type Array
     */
    var _items = [
        { "id": 1, "name": "name 1" },
        { "id": 2, "name": "name 2" },
        { "id": 3, "name": "name 3" },
        { "id": 4, "name": "name 4" }
    ];

    /**
     * @class Mumsys_Generic_Manager
     * @type Mumsys_Generic_Manager
     */
    var _obj = new Mumsys_Generic_Manager();

    //
    // setup
    _items.forEach( function ( data, i ) {
        _obj.addItem( _obj.createItem( data ) );
    } );

    //
    // construction
    assert.ok( ( _obj instanceof Mumsys_Generic_Manager ), "Construction: Passed!" );
    assert.equal( _obj.getVersion(), '3.0.0', "getVersion(): Passed!" );
    assert.equal( _obj.getItems().length, _items.length, "getItems() length: Passed!" );

    //
    // creatItem()
    var newItem = _obj.createItem( { "id": 5, "name": "name 5" } );
    assert.ok( ( newItem instanceof Mumsys_Generic_Item ), "createItem() instance: Passed!" );
    try {
        _obj.createItem( "Wrong" );
    } catch ( e ) {
        _mesgOut = 'createItem() Exception: Passed!';
        _expected = 'Invalid properties';
        assert.equal( e.message, _expected, _mesgOut );
        assert.equal( e.name, "Error", "createItem() Expected exception: Passed!" );
    }

    //
    // addItem()
    assert.ok( ( _obj.addItem( newItem ) === undefined ), "addItem(item): Passed!" );
    try {
        _obj.addItem( newItem );
    } catch ( e ) {
        _mesgOut = 'addItem() exists exception: Passed!';
        _expected = '"id" (5) is unique and already exists';
        assert.equal( e.message, _expected, _mesgOut );
        assert.equal( e.name, "Error", "addItem() Expected exception: Passed!" );
    }
    try {
        _obj.addItem( "no valid item" );
    } catch ( e ) {
        _mesgOut = 'addItem() ivalid item: Passed!';
        _expected = 'Invalid item';
        assert.equal( e.message, _expected, _mesgOut );
        assert.equal( e.name, "Error", "addItem() Expected exception: Passed!" );
    }
    // check item count now
    assert.equal( _obj.getItems().length, 5, "getItems() count after add item: Passed!" );

    //
    // removeItem()
    _obj.removeItem( 5 );
    assert.equal( _obj.getItems().length, 4, "removeItem(): Passed!" );

    //
    // getItems()
    var items = _obj.getItems();
    for ( var i = 0; i < _obj.getItems().length; i++ ) {
        assert.equal( items[i].get( 'id' ), ( i + 1 ), "getItems() for ID " + ( i + 1 ) + ": Passed!" );
    }

    //
    // getItem()
    assert.equal( _obj.getItem( "idx", 0 ).getProperties(), _items[0], "getItem(idx,0): Passed!" );
    assert.equal( _obj.getItem( "idx", 1 ).getProperties(), _items[1], "getItem(idx,1): Passed!" );
    assert.equal( _obj.getItem( "idx", 3 ).getProperties(), _items[3], "getItem(idx,3): Passed!" );
    assert.equal( _obj.getItem( "idx", -1 ).getProperties(), _items[3], "getItem(idx,-1): Passed!" );

    assert.equal( _obj.getItem( "id", 4 ).getProperties(), _items[3], "getItem(id,4): Passed!" );
    assert.equal( _obj.getItem( "name", 'name 1' ).getProperties(), _items[0], "getItem(name,name 1): Passed!" );

    assert.equal( _obj.getItem( "none", 123, false ), false, "getItem() default return: Passed!" );

    //
    // clear()
    _obj.clear();
    assert.equal( _obj.getItems().length, 0, "clear(): Passed!" );

    //
    // isLoaded()
    assert.equal( _obj.isLoaded(), false, "isLoaded()::false Passed!" );

    //
    // loadItems()
    _obj.loadItems( { }, { "url": "testfiles/genericItemList.js", "async": false } );
    assert.equal( _obj.getItems().length, 8, "loadItems(): Passed!" );
    assert.equal( _obj.isLoaded(), true, "loadItems(), isLoaded()::true: Passed!" );
    /** @todo to be implemented */
    // loadItems() error 
    // _obj.loadItems({}, {"url":"testfiles/notExists.js","async":false});

    //
    // saveItem()
    var expected = _obj.getItem( "id", 3 );
    var jqParams = {
        "url": "testfiles/genericSaveItemResponse.js",
        "async": false,
        "type": "GET",
        "dataType": 'json'
    };
    var rquestParams = { };
    var actual = _obj.saveItem( expected, rquestParams, jqParams );
    assert.equal( actual, expected, "saveItem() not changed: Passed!" );
    assert.equal( expected.isModified(), false, "saveItem() item.isModified()::false: Passed!" );
    // real request
    expected.set( "id", null );
    assert.equal( expected.isModified(), true, "saveItem() item.isModified(): Passed!" );
    var actual = _obj.saveItem( expected, rquestParams, jqParams );
    assert.equal( actual, expected, "saveItem() real request: Passed!" );

} );
