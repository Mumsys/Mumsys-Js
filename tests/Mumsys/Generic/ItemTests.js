/**
 * Mumsys_Generic_Item tests
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

QUnit.test("Mumsys_Generic_Item.js tests", function (assert)
{
    var _expected, _mesgOut = '';

    var props = { "id": 3, "name": "Item 3" };

    var _obj = new Mumsys_Generic_Item( props );

    // construction
    assert.equal( _obj.getVersion(), '3.0.0', "getVersion(): Passed!" );
    try {
        var errA = new Mumsys_Generic_Item();

    } catch ( e ) {
        assert.ok(
            ( e.message === 'Invalid parameters' ),
            "Exception message: Passed!"
            );
        assert.ok( ( e.name === "Error" ), "Expected exception: Passed!" );
    }

    //
    // get/set()
    assert.equal( _obj.get( 'id' ), 3, "get/set(): Passed!" );
    assert.equal( _obj.get( 'invalidkey', false ), false, "get() default: Passed!" );
    try {
        _obj.set( "id", 4 );
    }
    catch (e) {
        _expected = 'New item ID "4" differs from old ID "3"';
        _mesgOut = 'set() Exception thrown when manipulate item ID: Passed!';
        assert.equal( e.message, _expected, _mesgOut );

        assert.equal( e.name, "Mumsys_Generic_Item_Exception", "set() Expected exception: Passed!" );
    }
    _obj.set( 'id', 3 );
    assert.equal( _obj.get( 'id' ), 3, "set() same ID: Passed!" );
    _obj.set( 'id', null );
    assert.equal( _obj.get( 'id' ), undefined, "set(null): Passed!" );
    assert.equal( _obj.isModified(), true, "set(null) isModified(): Passed!" );
    _obj.set( 'id', 4 );
    assert.equal( _obj.isModified(), false, "set(newID) after set(null): Passed!" );

    //
    // getProperties()
    assert.ok( ( _obj.getProperties() == props ), "getProperties(): Passed!" );

    //
    // set/isModified()
    assert.equal( _obj.isModified(), false, "is/setModified(): Passed!" );
    _obj.setModified();
    assert.equal( _obj.isModified(), true, "is/setModified(): Passed!" );
    _obj.setModified( true );
    assert.equal( _obj.isModified(), true, "is/setModified(): Passed!" );
    _obj.setModified( false );
    assert.equal( _obj.isModified(), false, "is/setModified(): Passed!" );

    //
    // checkID()
    assert.equal( _obj._checkId( null, null ), null, "_checkId(): Passed!" );
    assert.equal( _obj._checkId( null, 1 ), 1, "_checkId(): Passed!" );
    assert.equal( _obj._checkId( null, null ), null, "_checkId(): Passed!" );
    assert.equal( _obj._checkId( 1, null ), null, "_checkId(): Passed!" );
    
});
