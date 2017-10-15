/**
 * Mumsys_Generic_Item_Default
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

"use strict";

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
        return '3.0.0';
    }
    
    
    /**
     * Initialise the item
     * 
     * @param {Object} params Mixes parameters to set the item properties
     * 
     * @param {type} params
     * @returns {Mumsys_Generic_Item}
     */
    constructor(params) 
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
            throw new Error( message );
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
    get ( key, defVal ) {
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
     * @param {integer|string} oldID Old item ID
     * @param {integer|string} newID new item ID
     * 
     * @returns {string|integer} New ID
     */
    _checkId( oldID, newID )
    {
        if ( newID != undefined && oldID != undefined && oldID != newID ) {
            var message = 'New item ID "' + newID + '" differs from old ID "' + oldID + '"';
            throw new Error( message );
        }

        return newID;
    }

}
