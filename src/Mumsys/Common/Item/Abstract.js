/**
 * Mumsys_Common_Item_Abstact
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

"use strict";

/**
 * abstract item (item interface, DTO).
 *
 * Abstract item proprties to manage in this class using get/set() methodes.
 *
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Common
 */
class Mumsys_Common_Item_Abstract
{
    constructor( prefix, params )
    {
        // defProps: id, siteid, mtime, ctime, editor
        this.__prefix = prefix.toString() || "";

        /**
         * Incomming properties to be used.
         * @private
         * @var Object
         */
        this.__input = params;
    }


    /**
     * Returns the version ID.
     *
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return "1.0.0";
    }


    /**
     * Return the item ID.
     *
     * @return {String} Item ID
     */
    get id()
    {
        return ( !this.__input.id ? null : this.__input.id.toString() );
    }


    /**
     * Sets the new ID of the item.
     *
     * @param {String|undefined} id ID of the item
     */
    set id( id )
    {
        if ( ( this.__input.id = this._checkId( this.id, id ) ) === null ) {
            this.__m = true;
        } else {
            this.__m = false;
        }
    }


    /**
     * Returns the site ID of the item.
     *
     * @return integer|undefined Site ID or null if no site id is available
     */
    get siteid()
    {
        return ( ( this.__input.siteid === undefined ) ? null : Number( this.__input.siteid ) );
    }


    /**
     * Returns modification time of the order coupon.
     *
     * @return string|null Modification time (YYYY-MM-DD HH:mm:ss)
     */
    get mtime()
    {
        return ( ( this.__input.mtime === undefined ) ? null : this.__input.mtime.toString() );
    }


    /**
     * Returns the create date of the item.
     *
     * @return string|null ISO date in YYYY-MM-DD hh:mm:ss format
     */
    get ctime()
    {
        return ( ( this.__input.ctime === undefined ) ? null : this.__input.ctime.toString() );
    }


    /**
     * Returns the name of editor who created/modified the item at last.
     *
     * @return {string} Name of editor who created/modified the item at last
     */
    get editor()
    {
        return ( ( this.__input.editor === undefined ) ? "" : this.__input.editor.toString() );
    }


    /**
     * Checks if the item was modified.
     *
     * @returns {Boolean}
     */
    isModified()
    {
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
     * Return the raw abstract item properties.
     *
     * @return {Mumsys_Common_Item_Abstract.getProperties.AbstractAnonym$0}
     */
    getRawProperties()
    {
        return this._getProperties( "" );
    }


    /**
     * Return the domain abstract item properties.
     *
     * @return {Object} Object where object keys are prefixed by domain
     */
    getProperties()
    {
        return this._getProperties( this.__prefix );
    }


    /**
     * Return the abstract item properties.
     *
     * @return {Object} Object of abstract item properties.
     */
    _getProperties( prefix )
    {
        return {
            [prefix + "id"]: this.id,
            [prefix + "siteid"]: this.siteid,
            [prefix + "mtime"]: this.mtime,
            [prefix + "ctime"]: this.ctime,
            [prefix + "editor"]: this.editor
        };
    }


    /**
     * Returns the item ID property if item ID seems not to be manipulated.
     *
     * @param {integer|string|null} oldID Old item ID
     * @param {integer|string|null} newID New item ID
     *
     * @returns {string|integer} New ID
     * @throws {Mumsys_Exception} If ID differs (not the same item)
     */
    _checkId( oldID, newID )
    {
        if ( newID === undefined || oldID === undefined ) {
            var mesg = "Invalid ID given: old: '" + oldID + "', new: '" + newID + "'";
            throw new Mumsys_Exception( mesg );
        }

        if ( newID !== null && oldID !== null && oldID !== newID ) {
            var mesg = "New item ID '" + newID + "' differs from old ID '" + oldID + "'";
            throw new Mumsys_Exception( mesg );
        }

        return newID;
    }

}
