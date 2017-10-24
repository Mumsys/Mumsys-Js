"use strict";
/*!
 * Mumsys
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
 * Mumsys object.
 * 
 * Helpers: http://jshint.com/
 * 
 * @category Mumsys
 * @package  Js
 */
class Mumsys 
{
    /**
     * Returns the version ID.
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return '3.1.0';
    }

    /**
     *  Initilizes the Mumsys object.
     *  
     * @returns {Mumsys} Mumsys object
     */
    constructor()
    {
    }

    /**
     * Checks json rpc 2.0 responce for validity.
     * 
     * @param {Object} response object
     * 
     * @return {void} 
     * @throws {Mumsys_Exception} If response seems to be invalid
     */
    static checkJsonRpcResponce( response )
    {
        if ( !( response instanceof Object ) ) {
            var message = 'Invalid json rpc resopnse';
            throw new Mumsys_Exception( message );
        }
    }
    
}


/**
 * Mumsys_Exception
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 */


/**
 * Default mumsys exception and exception expanding.
 * 
 * @extends Error
 * @type Mumsys_Exception
 */
class Mumsys_Exception extends Error
{
    /**
     * Default error code for technical errors, no futher reason,
     * discribed in the error message.
     * 
     * @var constant
     */
    static get ERRCODE_DEFAULT() { return 1; }
    

    /**
     * Returns the version ID.
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return '3.0.0';
    }

    /**
     * Initialize the mumsys exception.
     * 
     * @param {String} message Exception message
     * @param {String|integer} code Exception code or number; Optional, 
     * Default: 0
     * 
     * @returns {Extend_Exceptions}
     */
    constructor( message, code = 0 )
    {
        super( message );

        this.name = this.constructor.name;
        this.code = code;

        if ( typeof Error.captureStackTrace === 'function' ) {
            Error.captureStackTrace( this, this.constructor );
        } else {
            this.stack = ( new Error( message ) ).stack;
        }
    }

}


/**
 * Mumsys_File_Item_Exception
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  File
 */


/**
 * Mumsys generic item exception.
 * 
 * @category    Mumsys
 * @package     Js
 * @subpackage  File
 */
class Mumsys_File_Item_Exception 
    extends Mumsys_Exception 
{
    /**
     * Returns the version ID.
     * 
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return '3.0.0';
    }

};


/**
 * Mumsys_File_Item_Default
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  File
 */


/**
 * Mumsys default file item.
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  File
 */
class Mumsys_File_Item_Default
{
    /**
     * Returns the version ID.
     * @returns {String} Version ID
     */
    static getVersion() 
    {
        return '3.0.1';
    }
    
    
    /**
     * Initialize the object.
     *
     * @param {object} params Object properties to set:
     *      {string} path Public path to the folder of the file
     *      {string} filename Base name of the file
     *      {integer} filesize Size in bytes of the file
     *      {string} filetype Type of the file (dir, link, file)
     *      {string} mimetype Mime type of the file
     *
     * @returns {Mumsys_File_Item_Default}
     */
    constructor( params )
    {
        /**
         * @type string
         */
        this.path = params.path;
        /**
         * @type string
         */
        this.name = params.filename;
        /**
         * @type integer
         */
        this.size = params.filesize;
        /**
         * @type string
         */
        this.type = params.filetype;
        /**
         * @type string
         */
        this.mimetype = params.mimetype;
    }

    /**
     * Returns the location of the file.
     *
     * @return {String} Location of the file (depending on type: a path +/ or 
     * with the file name)
     * @throws {Mumsys_File_Item_Exception} If whether path nor file was set
     */
    get location()
    {
        if ( this.path !== undefined && this.name !== undefined ) {
            return this.path + '/' + this.name;
        }

        var message = 'No path or file was set to get the location';
        throw new Mumsys_File_Item_Exception( message, Mumsys_Exception.ERRCODE_DEFAULT );
    }

}


/**
 * Mumsys_Generic_Exception
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */


/**
 * Mumsys generic exception.
 * 
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */
class Mumsys_Generic_Exception
    extends Mumsys_Exception
{
    /**
     * Returns the version ID.
     * 
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return '3.0.0';
    }

};


/**
 * Mumsys_Generic_Item_Exception
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */


/**
 * Mumsys generic item exception.
 * 
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */
class Mumsys_Generic_Item_Exception
    extends Mumsys_Generic_Exception
{
    /**
     * Returns the version ID.
     * 
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return '3.0.0';
    }

};


/**
 * Mumsys_Generic_Manager_Exception
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */


/**
 * Mumsys generic manager exception.
 * 
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */
class Mumsys_Generic_Manager_Exception
    extends Mumsys_Generic_Exception
{
    /**
     * Returns the version ID.
     * 
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return '3.0.0';
    }

};


/**
 * Mumsys_Generic_Item_Default
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */


/**
 * Default generic item (item interface, DTO).
 *
 * Item proprties are managed in this class and always are acceassible through 
 * get/set() methodes. 
 * 
 * Pro/Cons
 * Generic items have a variable list of properties. So getter/setter work 
 * different than standard handling in js ( item.get('id') vs. item.id ). 
 * Items are managed through its own generic manager. 
 * If you have special requirements and want to use getter/setter handling in 
 * a normal way you need to implement your own item/ manager objects or 
 * extending this set of item/manager classes.
 * 
 * To get properties use the getter, e.g: item.get('name', 'unknown'); which 
 * returns the value of "name" property or the default value if 'name' key
 * not exists. Then: 'unknown' will return. If not given undefined will return.
 * 
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */
class Mumsys_Generic_Item_Default
{
    /**
     * Returns the version ID.
     * @returns {String} Version ID
     */
    static getVersion() 
    {
        return '3.1.1';
    }
    
    
    /**
     * Initialise the item
     * 
     * @param {Object} params Mixes parameters to set the item properties
     * 
     * @returns {Mumsys_Generic_Item}
     * @throws {Mumsys_Generic_Item_Exception} If params not of type object
     */
    constructor( params )
    {
        /**
         * Incomming properties to be used.
         * @private
         * @var Object
         */
        this.__itemProps = {};

        /**
         * Private flag to detect if item was modified or not.
         * @type Boolean
         */
        this.__m = false;

        if ( params instanceof Object )
        {
            this.__itemProps = params;

            if ( undefined !== params.id ) {
                this.set( 'id', params.id );
            }
        } else {
            var message = 'Invalid parameters';
            throw new Mumsys_Generic_Item_Exception( message );
        }

        this.setModified( false );
    }
    
    
    /**
     * Returns the value by given key name or "defVal" if the key not exists.
     *
     * @param {string} key Property to get
     * @param {mixed} defVal Value to return if key not exists.
     *
     * @returns {mixed} Item property
     */
    get( key, defVal ) {
        if ( this.__itemProps[key] === undefined ) {
            return defVal;
        } else {
            return this.__itemProps[key];
        }
    }
    
    
    /**
     * Sets/ replaces a item property by given key and value.
     *
     * @param {String} key Key to update/create the value for
     * @param {Mixed} val Value to be set
     *
     * @returns {void}
     */
    set( key, val )
    {
        var v = this.get( key );

        if ( JSON.stringify( v ) === JSON.stringify( val ) ) {
            return;
        }

        if ( key === 'id' )
        {
            if ( ( this.__itemProps[key] = this._checkId( this.get( "id" ), val ) ) === null ) {
                this.setModified( true );
            } else {
                this.setModified( false );
            }
        } else {
            this.__itemProps[key] = val;
            this.setModified( true );
        }
    }
    
    
    /**
     * Returns the item properties.
     *
     * Depending on your incoming structure: A list of key/value pairs.
     *
     * @return {Object}  List of key/value pairs
     */
    getProperties() {
        return this.__itemProps;
    }


    /**
     * Checks if the item was modified.
     *
     * @returns {Boolean}
     */
    isModified() {
        return this.__m;
    }


    /**
     * Set the modification status.
     *
     * By default set to true otherwise given boolean value
     *
     * @param {boolean} flag Flag to set. true or false, Default or without a 
     * value: true will be set.
     *
     * @returns {void}
     */
    setModified( flag )
    {
        var _flag;

        if ( flag === undefined ) {
            _flag = true;
        } else {
            _flag = Boolean( flag );
        }

        this.__m = _flag;
    }


    /**
     * Returns the item ID property if item ID seems not to be manipulated.
     * 
     * @param {integer|string|null} oldID Old item ID
     * @param {integer|string|null} newID N ew item ID
     * 
     * @returns {string|integer} New ID
     * @throws {Mumsys_Generic_Item_Exception} If ID differs
     */
    _checkId( oldID, newID )
    {
        if ( newID === undefined || oldID === undefined ) {
            var message = 'Invalid ID given: old: "' + oldID + '", new: "' + newID + '"';
            throw new Mumsys_Generic_Item_Exception( message );
        }

        if ( newID !== null && oldID !== null && oldID !== newID ) {
            var message = 'New item ID "' + newID + '" differs from old ID "' + oldID + '"';
            throw new Mumsys_Generic_Item_Exception( message );
        }

        return newID;
    }

}


/* global Mumsys_Generic_Item_Default, Mumsys */

/**
 * Mumsys_Generic_Manager_Default
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */


/**
 * Default generic manager (data container and data access handler DAO).
 *
 * Loads lists of items, handles and saves items in a generic way.
 * 
 * @uses jQuery for ajax requests
 * @uses JSONRpc 2.0 API
 */
class Mumsys_Generic_Manager_Default
{
    /**
     * Returns the version ID.
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return '3.1.0';
    }
    
    
    /**
     * Initialize the manager object.
     * 
     * @param url Location to send post/get requests. Default 'jsonrpc.php'; 
     * Optional
     * 
     * @returns {Mumsys_Generic_Manager_Default}
     */
    constructor( url = false )
    {
        /**
         * Location to send/get requests results.
         * @private Private property
         * @type {string}
         */
        this.__url = 'jsonrpc.php';

        if ( url ) {
            this.__url = url;
        }

        /**
         * List of items.
         * @private Private property
         * @type Array
         */
        this.__itemList = [];

        /**
         * Private flags to detect:
         *  - if loading of data is finished.
         * @private Private property: Use public methodes
         * @type {Object}
         */
        this.__flags = { "isLoaded": false };

        /**
         * Map as memory keeper to speed up item searches
         * @type Object
         */
        this.__map = { };
    }


    /**
     * Create a new generic item by given properties.
     *
     * @param {Object} props Properties to initialize the item
     *
     * @returns {Mumsys_Generic_Item_Default} Generic item object
     * @throws {Mumsys_Generic_Manager_Exception} If props not of type object
     */
    createItem( props )
    {
        if ( props instanceof Object ) {
            return new Mumsys_Generic_Item_Default( props );
        } else {
            var message = 'Invalid properties';
            throw new Mumsys_Generic_Manager_Exception( message );
        }
    }


    /**
     * Adds a generic item interface to the list of items to work with.
     *
     * @param {Mumsys_Generic_Item_Default} item Generic item to add
     */
    addItem( item )
    {
        if ( item instanceof Mumsys_Generic_Item_Default )
        {
            var id = item.get( 'id' );

            if ( id !== undefined && this.__map[ id ] !== undefined ) {
                var message = '"id" (' + id + ') is unique and already exists';
                throw new Mumsys_Generic_Manager_Exception( message );
            }

            if ( id !== undefined ) {
                this.__map[ id ] = this.__itemList.length;
            }

            this.__itemList.push( item );
        } 
        else {
            throw new Mumsys_Generic_Manager_Exception( 'Invalid item' );
        }
    }


    /**
     * Remove an item by given id from memory/ current item list.
     *
     * @param {string|integer} id Unique ID of the item
     */
    removeItem( id )
    {
        var _tmp = [];
        var _tmpmap = {};

        for ( var i = 0; i < this.__itemList.length; i++ )
        {
            var itemID = this.__itemList[i].get( 'id' );
            if ( itemID !== id ) {
                _tmp.push( this.__itemList[i] );
                _tmpmap[ itemID ] = i;
            }
        }

        this.__itemList = _tmp;
        this.__map = _tmpmap;
    }


    /**
     * Returns the list of generic items.
     *
     * @returns {Array} List of Mumsys_Generic_Item_Default items
     */
    getItems()
    {
        return this.__itemList;
    }


    /**
     * Returns a generic item by identifier and the expected value.
     * 
     * The first match will return.
     * Alternativly you can also fetch an item by given array index as "idx" for 
     * the key. 
     * Warning: Be sure your data does not contain a idx key/property!
     * Note: Checks are type save! Be sure checking for integer, string...
     *
     * E.g:
     * getItem('idx', 0); // returns the first element of the item list
     * getItem('idx', -1);// returns the last  element of the item list
     * getItem('idx', 1); // returns the item with the internal key = 1
     * getItem('id', 3);  // returns the item with id=3 or undefined if not set
     *
     * @param {String|integer} key Item property to look for. E.g: 'id'
     * @param {Mixed} value Value you are looking for
     * @param {mixed|null} defreturn Default return value if item was not 
     * found. Optional, otherwise undefined will return
     * 
     * @return {Mumsys_Generic_Item_Default|defreturn} Generic item or undefined 
     * for not found
     */
    getItem( key, value, defreturn )
    {
        if ( key === 'idx' )
        {
            if ( value === -1 )
            {
                var k;
                if ( ( this.__itemList.length - 1 ) < 0 ) {
                    k = 0;
                } else {
                    k = this.__itemList.length - 1;
                }

                return this.__itemList[ k ];
            } 
            else {
                return this.__itemList[ value ];
            }

            return this.__itemList[ value ];
        }

        if ( key === 'id' && this.__map[ key ] !== undefined ) {
            return this.__itemList[ this.__map[ key ] ];
        }

        for ( var i = 0; i < this.__itemList.length; i++ ) {
            if ( this.__itemList[i].get( key ) === value ) {
                return this.__itemList[i];
            }
        }

        return defreturn;
    }


    /**
     * Clears the item list buffer.
     */
    clear()
    {
        this.__itemList = [];
        this.__map = {};
    }


    /**
     * Returns the status flag if loading of data was successful.
     *
     * @returns {Boolean} true on success or false on failure or on not finished 
     * yet
     */
    isLoaded()
    {
        return this.__flags.isLoaded;
    }


    /**
     * Loads a list of generic items. Wrapper method for jQuery.ajax()
     *
     * Warning: This methods load records and keeps existing data when loading 
     * again. This can endup in very bad performance which huge lists of data!
     * You may call clear() method befor load again. Also loading duplicate 
     * items will fail if item ID also exists.
     *
     * Parameters must be given like your backend to request the right address, 
     * eg: {"program":"a","controller":"b","action":"c"} or other methodes
     * Server reponse must be a jsonrpc 2.0 result containing the list of items 
     * as follow:
     * obj.result.list[ .._Generic_Item_.., .._Generic_Item_.., ... ]
     *  |    |      |
     *  |    |      + --- array containing objects to initialise generic item's
     *  |    + ---------- json rpc api "result" property
     *  + --------------- response object
     *
     * Request params to be set:
     * <pre>
     *  - url: {String} Url to request to, Default; 'jsonrpc.php'
     *  - async: {Boolean} Use asyc request or not; Default: true
     *  - type: {String} Request type. Default: 'GET'
     *  - contentType: {String} Default: 'application/json'
     *  - dataType: {String} Default: 'json'
     * </pre>
     * Feel free also to overwrite jQuerys success, error callbacks
     *
     * @param {Object} data Mixed request parameters/ data
     * @param {Object} requestParams Parameters to overwrite the ajax request 
     * defaults or to extend for jQuery.ajax().
     *
     * @return {void}
     * @throws {Mumsys_Exception} On errors in response
     */
     loadItems( data, requestParams = false )
    {
        /**
         * Request parameters. (finals for the server request)
         * @type {Object} Mixed key/value pairs
         */
        var _reParams;
        var _this = this;
        this.__flags.isLoaded = false;

        var defaultParams = {
            url: this.__url
            , async: true
            , type: 'GET'
            , contentType: 'application/json'
            , dataType: 'json'
            , success: function ( obj )
            {
                Mumsys.checkJsonRpcResponce( obj );

                for ( var i = 0; i < obj.result.list.length; i++ ) {
                    _this.addItem( _this.createItem( obj.result.list[i] ) );
                }
                _this.__flags.isLoaded = true;
            }
            , error: function ( obj/*, textStatus, errorThrown */ )
            {
                Mumsys.checkJsonRpcResponce( obj );
            }
        };

        _reParams = this._buildParams( defaultParams, data, requestParams );

        jQuery.ajax( _reParams ).done( function ( obj ) {
            Mumsys.checkJsonRpcResponce( obj );
        } );
    }


    /**
     * Save a generic item. Wrapper method for jQuery.ajax()
     *
     * Note: the backend must check the "item" parameter where the item 
     * properties will be send to. ( Dont set params.item!)
     *
     * default request parameters:
     * <pre>
     *  - url: {String} Url to request to, Default; 'jsonrpc.php'
     *  - type: {String} Request type. Default: 'POST'
     *  - error: {function} Callback for errors
     * </pre>
     *
     * @param {Mumsys_Generic_Item_Default} item Generic item object
     * @param {Object} params Request parameters to the server
     * @param {Object} requestOptions Parameters to overwrite the ajax request 
     * defaults of jQuery.
     *
     * @returns {Object} Returns the updated generic item
     *
     * @throws {Mumsys_Generic_Manager_Exception} If params.item already exists
     * @throws {Mumsys_Exception} If json response is in error
     */
    saveItem( item, params, requestOptions = false )
    {
        if ( params.item !== undefined ) {
            var message = 'params.item property already defined';
            throw new Mumsys_Generic_Manager_Exception( message );
        }

        if ( item.isModified() )
        {
            params.item = item.getProperties();

            var defaultParams = {
                url: this.__url
                , type: "POST"
                , fail: function ( obj, textStatus, errorThrown ) 
                    {
                        console.log("fail textStatus", textStatus);
                        console.log("fail errorThrown", errorThrown);

                        Mumsys.checkJsonRpcResponce(
                            jQuery.parseJSON(obj.responseText)
                        );
                    }
            };

            var reqParams = this._buildParams(
                defaultParams, params, requestOptions
            );
            
            jQuery.ajax( reqParams ).done( function ( obj )
                {
                    Mumsys.checkJsonRpcResponce( obj );
                    if (obj.result.item.id !== undefined) {
                        item.set('id', obj.result.item.id);
                    }
                }
            );

            item.setModified( false );
        }

        return item;
    }


    /**
     * Returns a build parameter object for the jquery ajax request.
     *
     * @param {object} defaultParams Parameters for the jquery ajax request 
     * ($.ajax( params )...)
     * @param {object} dataParams Your data to request or send
     * @param {object} requestParams Parameters to overwrite or reset keys of 
     * the default parameters or to add additionals jquery ajax() request can 
     * handle.
     *
     * @returns {object} Parameters to be set to the jquery ajax request.
     */
    _buildParams( defaultParams, dataParams, requestParams )
    {
        var obj = { };

        if ( requestParams )
        {
            for ( var keyA in defaultParams ) {
                if ( requestParams[keyA] === undefined ) {
                    obj[keyA] = defaultParams[keyA];
                }
            }

            for ( var keyB in requestParams ) {
                if ( requestParams[keyB] !== null ) {
                    obj[keyB] = requestParams[keyB];
                }
            }
        } 
        else {
            obj = defaultParams;
        }

        obj.data = dataParams;

        return obj;
    }

}


/**
 * Mumsys_Generic_Item
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */


/**
 * @deprecated Use Generic/Item/Default.js
 * @since version 3.0.0
 *  
 * Generic item (item interface, DTO).
 *
 * Item proprties are managed in this class and always are acceassible through 
 * get/set() methodes.
 * 
 * To get properties use the getter, e.g: item.get('name', 'unknown'); which 
 * returns the value of "name" property or the default value if 'name' key
 * not exists. Then: 'unknown' will return. If not given undefined will return.
 *
 * @param {Object} params Parameters to set the item properties
 */
function Mumsys_Generic_Item( params ) 
{
    /**
     * Incomming properties to be used.
     * @private
     * @var Object
     */
    this.__itemProps = {};

    /**
     * Private flag to detect if item was modified or not.
     * @type Boolean
     */
    this.__m = false;

    if ( params instanceof Object ) {
        this.__itemProps = params;

        if ( undefined !== params.id ) {
            this.set( 'id', params.id );
        }
    } else {
        var message = 'Invalid parameters';
        throw new Error( message );
    }

    this.setModified( false );
};


/**
 * Returns the version ID.
 * @returns {String} Version ID
 */
Mumsys_Generic_Item.prototype.getVersion = function ()
{
    return '3.0.0';
};


/**
 * Returns the value by given key name or "defVal" if the key not exists.
 *
 * @param {string} key Property to get
 * @param {mixed} defVal Value to return if key not exists.
 *
 * @returns {mixed} Item property
 */
Mumsys_Generic_Item.prototype.get = function (key, defVal) {
    if (this.__itemProps[key] === undefined) {
        return defVal;
    } else {
        return this.__itemProps[key];
    }
};


/**
 * Sets/ replaces a item property by given key and value.
 *
 * @param {String} key Key to update/create the value for
 * @param {Mixed} val Value to be set
 *
 * @returns {void}
 */
Mumsys_Generic_Item.prototype.set = function (key, val)
{
    var v = this.get(key);

    if (JSON.stringify(v) === JSON.stringify(val) ) {
        return;
    }

    if (key === 'id')
    {
        if ((this.__itemProps[key] = this._checkId(this.get("id"), val)) === null) {
            this.setModified(true);
        } else {
            this.setModified(false);
        }
    } else {
        this.__itemProps[key] = val;
        this.setModified(true);
    }
};

    
/**
 * Returns the item properties.
 *
 * Depending on your incoming structure: A list of key/value pairs.
 *
 * @returns {Object}
 */
Mumsys_Generic_Item.prototype.getProperties = function () {
    return this.__itemProps;
};


/**
 * Checks if the item was modified.
 *
 * @returns {Boolean}
 */
Mumsys_Generic_Item.prototype.isModified = function () {
    return this.__m;
};


/**
 * Set the modification status.
 *
 * By default set to true otherwise given boolean value
 *
 * @param {boolean} flag Flag to set. true or false, Default or without a value: true will be set.
 *
 * @returns {void}
 */
Mumsys_Generic_Item.prototype.setModified = function ( flag )
{
    if (flag === undefined) {
        var flag = true;
    } else {
        var flag = Boolean(flag);
    }

    this.__m = flag;
};


/**
 * Returns the item ID property if item ID seems not to be manipulated.
 * 
 * @param {integer|string} oldID Old item ID
 * @param {integer|string} newID new item ID
 * 
 * @returns {string|integer} New ID
 */
Mumsys_Generic_Item.prototype._checkId = function (oldID, newID)
{
    if ( newID === undefined || oldID === undefined ) {
        var message = 'Invalid ID given: old: "' + oldID + '", new: "' + newID + '"';
        throw new Mumsys_Generic_Item_Exception( message );
    }

    if ( newID !== null && oldID !== null && oldID !== newID ) {
        var message = 'New item ID "' + newID + '" differs from old ID "' + oldID + '"';
        throw new Mumsys_Generic_Item_Exception( message );
    }

    return newID;
};


/* global Mumsys_Generic_Item, Mumsys */

/**
 * Mumsys_Generic_Manager
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 */


/**
 * @deprecated Use Generic/Manager/Default.js
 * @since version 3.0.0 
 * 
 * Generic manager (data container and data access handler DAO).
 *
 * Loads lists of items, handles and saves items in a generic way.
 * 
 * @uses jQuery for ajax requests
 * @uses JSONRpc 2.0 API
 * 
 * @param url Location to send post/get requests. Default 'jsonrpc.php'
 */
function Mumsys_Generic_Manager(url = false)
{    
    /**
     * Location to send/get requests results.
     * @private Private property
     * @type {string}
     */
    this.__url = 'jsonrpc.php';
    
    if (url) {
        this.__url = url;
    }
    
    /**
     * List of items.
     * @private Private property
     * @type Array
     */
    this.__itemList = [];

    /**
     * Private flag to detect if loading of data is finished.
     * @private Private property: Use public methodes
     * @type Boolean
     */
    this.__flags = {"isLoaded": false};

    /**
     * Map as memory keeper to speed up item searches
     * @type Object
     */
    this.__map = {};
}


/**
 * Returns the version ID.
 * @returns {String} Version ID
 */
Mumsys_Generic_Manager.prototype.getVersion = function ()
{
    return '3.0.0';
};


/**
 * Create a new generic item by given properties.
 *
 * @param {Object} props Properties to initialize the item
 *
 * @returns {Mumsys_Generic_Item} Generic item object
 */
Mumsys_Generic_Manager.prototype.createItem = function (props)
{
    if (props instanceof Object) {
        return new Mumsys_Generic_Item(props);
    } else {
        var message = 'Invalid properties';
        throw new Error(message);
    }
};


/**
 * Adds a generic item interface to the list of items to work with.
 *
 * @param {Mumsys_Generic_Item} item Generic item to add
 */
Mumsys_Generic_Manager.prototype.addItem = function ( item )
{
    if ( item instanceof Mumsys_Generic_Item )
    {
        var id = item.get( 'id' );

        if ( id !== undefined && this.__map[ id ] !== undefined ) {
            var message = '"id" (' + id + ') is unique and already exists';
            throw new Error( message );
        }

        if ( id !== undefined ) {
            this.__map[ id ] = this.__itemList.length;
        }

        this.__itemList.push( item );
    } else {
        throw new Error( 'Invalid item' );
    }
};


/**
 * Remove an item by given id from memory/ current item list.
 *
 * @param {string|integer} id Unique ID of the item (array index)
 */
Mumsys_Generic_Manager.prototype.removeItem = function ( id )
{
    var _tmp = [];
    var _tmpmap = { };

    for ( var i = 0; i < this.__itemList.length; i++ )
    {
        var itemID = this.__itemList[i].get( 'id' );
        if ( itemID !== id ) {
            _tmp.push( this.__itemList[i] );
            _tmpmap[ itemID ] = i;
        }
    }

    this.__itemList = _tmp;
    this.__map = _tmpmap;
};


/**
 * Returns the list of generic items.
 *
 * @returns {Array} List of Mumsys_Generic_Item items
 */
Mumsys_Generic_Manager.prototype.getItems = function () 
{
    return this.__itemList;
};


/**
 * Returns a generic item by identifier and the expected value.
 * 
 * The first match will return.
 * Alternativly you can also fetch an item by given array index as "idx" for 
 * the key. 
 * Warning: Be sure your data does not contain a idx key/property!
 * Note: Checks are type save! Be sure checking for integer, string...
 *
 * E.g:
 * getItem('idx', 0); // returns the first element of the item list
 * getItem('idx', -1);// returns the last  element of the item list
 * getItem('idx', 1); // returns the item with the internal key = 1
 * getItem('id', 3);  // returns the item with id=3 or undefined if not exists
 *
 * @param {String|integer} key Item property to look for. E.g: 'id'
 * @param {Mixed} value Value you are looking for
 * @param {mixed|null} defreturn Default (null) return value if item was not found
 * 
 * @return {Mumsys_Generic_Item|defreturn} Generic item or undefined for not found
 */
Mumsys_Generic_Manager.prototype.getItem = function ( key, value, defreturn )
{
    if ( key === 'idx' )
    {
        if ( value === -1 )
        {
            if ( ( this.__itemList.length - 1 ) < 0 ) {
                var k = 0;
            } else {
                var k = this.__itemList.length - 1;
            }

            return this.__itemList[ k ];
        } else {
            return this.__itemList[ value ];
        }

        return this.__itemList[ value ];
    }

    if ( key === 'id' && this.__map[ key ] !== undefined ) {
        return this.__itemList[ this.__map[ key ] ];
    }

    for ( var i = 0; i < this.__itemList.length; i++ ) {
        if ( this.__itemList[i].get( key ) === value ) {
            return this.__itemList[i];
        }
    }

    return defreturn;
};


/**
 * Clears the item list buffer.
 */
Mumsys_Generic_Manager.prototype.clear = function ()
{
    this.__itemList = [];
    this.__map = {};
};


/**
 * Returns the status flag if loading of data was successful.
 *
 * @returns {Boolean} true on success or false on failure or on not finished yet
 */
Mumsys_Generic_Manager.prototype.isLoaded = function ()
{
    return this.__flags.isLoaded;
};


/**
 * Loads a list of generic items. Wrapper method for jQuery.ajax()
 *
 * Warning: This methods load records and keeps existing data when loading 
 * again. This can endup in very bad performance which huge lists of data!
 * You may call clear() method befor load again. Also loading duplicate items 
 * will fail if item ID also exists.
 *
 * Parameters must be given like your backend to request the right address, 
 * eg: {"program":"a","controller":"b","action":"c"} or other methodes
 * Server reponse must be a jsonrpc 2.0 result containing the list of items as
 * follow:
 * obj.result.list[ Mumsys_Generic_Item, Mumsys_Generic_Item, ... ]
 *  |    |      |
 *  |    |      + --- array containing objects to be initialised as generic item
 *  |    + ---------- json rpc api "result" property
 *  + --------------- response object
 *
 * Request params to be set:
 * <pre>
 *  - url: {String} Url to request to, Default; 'jsonrpc.php'
 *  - async: {Boolean} Use asyc request or not; Default: true
 *  - type: {String} Request type. Default: 'GET'
 *  - contentType: {String} Default: 'application/json'
 *  - dataType: {String} Default: 'json'
 * </pre>
 * Feel free also to overwrite jQuerys success, error callbacks
 *
 * @param {Object} data Mixed request parameters/ data
 * @param {Object} requestParams Parameters to overwrite the ajax request 
 * defaults or to extend for jQuery.ajax().
 *
 * @return {void}
 * @throws {Exception} On errors in response
 */
Mumsys_Generic_Manager.prototype.loadItems = function ( data, requestParams = false )
{
    /**
     * Request parameters. (finals for the server request)
     * @type {Object} Mixed key/value pairs
     */
    var _reParams;
    var _this = this;
    this.__flags.isLoaded = false;

    var defaultParams = {
        url: this.__url
        , async: true
        , type: 'GET'
        , contentType: 'application/json'
        , dataType: 'json'
        , success: function ( obj )
        {
            Mumsys.checkJsonRpcResponce( obj );

            for ( var i = 0; i < obj.result.list.length; i++ ) {
                _this.addItem( _this.createItem( obj.result.list[i] ) );
            }
            _this.__flags.isLoaded = true;
        }
        , error: function ( obj/*, textStatus, errorThrown */ )
        {
            Mumsys.checkJsonRpcResponce( obj );
        }
    };

    _reParams = this._buildParams( defaultParams, data, requestParams );

    jQuery.ajax( _reParams ).done( function ( obj ) {
        Mumsys.checkJsonRpcResponce( obj );
    } );
};


/**
 * Save a generic item.
 *
 * Note: the backend must check the "item" parameter where the item properties 
 * will be set to.
 *
 * default request parameters:
 * <pre>
 *  - url: {String} Url to request to, Default; 'jsonrpc.php'
 *  - type: {String} Request type. Default: 'POST'
 *  - error: {function} Callback for errors
 * </pre>
 *
 * @param {Mumsys_Generic_Item} item Generic item object
 * @param {Object} params Request parameters to the server
 * @param {Object} requestParams Parameters to overwrite the ajax request defaults of jQuery.
 *
 * @returns {Object} Returns the updated generic item
 *
 * @throws {Exception} If json response is in error
 */
Mumsys_Generic_Manager.prototype.saveItem = function ( item, params, requestParams = false )
{
    if ( params.item !== undefined ) {
        var message = 'params.item property already defined';
        throw new Error( message );
    }

    if ( item.isModified() )
    {
        params.item = item.getProperties();

        var defaultParams = {
            url: this.__url
            , type: 'POST'
            , fail: function ( obj, textStatus, errorThrown )
                {
                    console.log( "fail textStatus", textStatus );
                    console.log( "fail errorThrown", errorThrown );

                    Mumsys.checkJsonRpcResponce( jQuery.parseJSON( obj.responseText ) );
                }
        };

        var reqParams = this._buildParams( defaultParams, params, requestParams );
        jQuery.ajax( reqParams ).done( function ( obj )
            {
                Mumsys.checkJsonRpcResponce( obj );
                if ( obj.result.item.id !== undefined ) {
                    item.set( 'id', obj.result.item.id );
                }
            }
        );

        item.setModified( false );
    }

    return item;
};


/**
 * Returns a build parameter object for the jquery ajax request.
 *
 * @param {object} defaultParams Parameters for the jquery ajax request ($.ajax( params )...)
 * @param {object} dataParams Your data to request or send
 * @param {object} requestParams Parameters to overwrite or reset keys of the default
 * parameters or to add additionals jquery ajax() request can handle.
 *
 * @returns {object} Parameters to be set to the jquery ajax request.
 */
Mumsys_Generic_Manager.prototype._buildParams = function ( defaultParams, dataParams, requestParams )
{
    var obj = {};

    if ( requestParams )
    {
        for ( var keyA in defaultParams )
        {
            if ( requestParams[keyA] === undefined ) {
                obj[keyA] = defaultParams[keyA];
            }
        }
        for ( var keyB in requestParams ) {
            if ( requestParams[keyB] !== null ) {
                obj[keyB] = requestParams[keyB];
            }
        }

    } else {
        obj = defaultParams;
    }

    obj.data = dataParams;

    return obj;
};


