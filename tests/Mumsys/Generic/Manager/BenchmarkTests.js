/**
 * Mumsys_Generic_Manager_Default tests
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

//QUnit.module( "Generic", function() 
//{ 
QUnit.test( "Mumsys_Generic_Manager_Default.js benchmark tests (compare get(\"prop\") vs getProperties()", function ( assert )
{
    function getTime() 
    {
        return new Date().getTime();
    }
    
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
     * @class Mumsys_Generic_Manager_Default
     * @type Mumsys_Generic_Manager_Default
     */
    var _obj = new Mumsys_Generic_Manager_Default();

    //
    // setup
    _items.forEach( function ( data, i ) {
        _obj.addItem( _obj.createItem( data ) );
    } );


    function testGetItems() 
    {
        var _timeStart, _timeEnd, _mem = [];
        _timeStart = getTime();
        for (var i=0; i<100000;i++) 
        {
            _obj.getItems().forEach( function (item, i) {
                var _id = item.get('id');
                var _name = item.get('name');
                
                _mem.push(_id,_name);
            }
            );
        }
        _timeEnd = getTime();
        
        return _timeEnd - _timeStart;
    }
    
    function testGetPropsOfItem()
    {
        var _timeStart, _timeEnd, _mem = [];
        _timeStart = getTime();
        for (var i=0; i<100000;i++) 
        {
            _obj.getItems().forEach( function (item, i) {
                var _obj = item.getProperties();
                var _id = _obj.id;
                var _name = _obj.name;
                
                _mem.push(_id,_name);
            }
            );
        }
        _timeEnd = getTime();
        
        return _timeEnd - _timeStart;
    }
    
    var x;
    assert.ok( x = testGetPropsOfItem() , "testGetItems().getProperties() took: " + x + 'ms');
    assert.ok( x = testGetItems() , "testGetItems().get(\"prop\"), .get(\"prop\") took: " + x + 'ms');
    assert.ok( x = testGetPropsOfItem() , "testGetItems().getProperties() took: " + x + 'ms');
    assert.ok( x = testGetItems() , "testGetItems().get(\"prop\"), .get(\"prop\") took: " + x + 'ms');
} );
//
//});
