/**
 * Mumsys_Text_Item_Default
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

"use strict";

/**
 * Default attribute item (item interface, DTO).
 *
 * Item proprties are managed in this class and always are acceassible through
 * get/set() methodes.
 *
 * Pro/Cons
 * Text items have a specific list of properties.
 * Items are managed through its own manager.
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Text
 */
class Mumsys_Text_Item_Default
    extends Mumsys_Common_Item_Abstract
{
    /**
     * Returns the version ID.
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return "1.0.0";
    }


    /**
     * Initialise the item
     *
     * @param {Object} params Mixed parameters to set the item properties
     *
     * @returns {Mumsys_Text_Item}
     * @throws {Mumsys_Text_Exception} If params not of type object
     */
    constructor( params )
    {
        super( "text.", params );

        /**
         * Possible properties to be used.
         * @private
         * @var Array
         */
        //this.__defProps = ["langid", "domain", "typeid", "type", "code", "status", "content"];

        /**
         * Private flag to detect if item was modified or not.
         * @type Boolean
         */
        this.__m = false;

        if ( Array.isArray( params ) || !( params instanceof Object )  ) {
            var mesg = "Invalid parameters";
            throw new Mumsys_Text_Exception( mesg );
        }

        /**
         * Incomming properties to be used.
         * @private
         * @var Object
         */
        this.__input = params;

    }


    /**
     * Returns the language ID of the item.
     *
     * @return {string|null} Returns the language ID for this item e.g. de,
     * en, ... or null for all languages
     */
    get langid()
    {
        return ( ! this.__input.langid ) ? null : this.__input.langid.toString();
    }


    /**
     * Set the language ID for this item.
     *
     * @param {string} langid Name of the language ID e.g. de, en... or null
     */
    set langid( langid )
    {
        if ( langid === this.langid ) {
            return;
        }

        super._checkLanguageId( langid );
        this.__input.langid = langid;
        this.setModified();
    }


    /**
     * Returns the domain of the item.
     *
     * @return {string} Returns the domain for this item e.g. text, attribute, ...
     */
    get domain()
    {
        return ( ( this.__input.domain === undefined ) ? "" : this.__input.domain.toString() );
    }


    /**
     * Set the name of the domain for this item.
     *
     * @param {string} domain Name of the domain e.g. text, media, attribute...
     */
    set domain( domain )
    {
        if ( domain === this.domain ) {
            return;
        }

        this.__input.domain = domain.toString();
        this.setModified();
    }


    /**
     * Returns the type ID of the item.
     *
     * @return {integer|null} Returns the type ID for this item
     */
    get typeid()
    {
        return ( ( this.__input.typeid === undefined ) ? null : ( Number( this.__input.typeid ) | 0 ) );
    }


    /**
     * Sets the type ID for this item.
     *
     * @param {string} typeid Text type ID
     */
    set typeid( typeid )
    {
        if ( typeid === this.typeid ) {
            return;
        }

        this.__input.typeid = Number( typeid ) | 0;
        this.setModified();
    }


    /**
     * Returns the item type code of the item if available.
     *
     * @return {string} Returns the type code for this item
     */
    get type()
    {
        return ( ( this.__input.type === undefined ) ? "" : this.__input.type.toString() );
    }


    /**
     * Returns the content of the item.
     *
     * @return {string} Returns the content for this item
     */
    get content()
    {
        return ( (this.__input.content === undefined) ? "" : this.__input.content.toString() );
    }


    /**
     * Sets the code for this item.
     *
     * @param {string} code Text code
     */
    set content( content )
    {
        if ( content === this.content ) {
            return;
        }

        this.__input.content = content.toString();
        this.setModified();
    }

    /**
     * Alias of get content() for generic usage.
     *
     * @return string Content of the item
     */
    get label()
    {
        return this.content;
    }


    /**
     * Returns the code of the item.
     *
     * @return {string} Returns the code for this item
     */
    get code()
    {
        return ( (this.__input.code === undefined) ? "" : this.__input.code.toString() );
    }


    /**
     * Sets the code for this item.
     *
     * @param {string} code Text code
     */
    set code( code )
    {
        if ( code === this.code ) {
            return;
        }

        this.__input.code = code.toString();
        this.setModified();
    }


    /**
     * Returns the status of the item.
     *
     * @return {integer} Returns the status for this item 0=Off, 1=On
     */
    get status()
    {
        return ( Number( this.__input.status ) | 0 );
    }


    /**
     * Sets the status for this item.
     *
     * @param {string} status Text status 0=Off, 1=On...
     */
    set status( status )
    {
        if ( status === this.status ) {
            return;
        }

        this.__input.status = ( Number( status ) | 0 );
        this.setModified();
    }


    /**
     * Returns the item properties.
     *
     * @return {Object} List of key/value pairs including the domain
     */
    getProperties()
    {
        return this._getProperties( "text." );
    }


    /**
     * Returns the raw item properties.
     *
     * @return {Object} List of key/value pairs
     */
    getRawProperties()
    {
        return this._getProperties( "" );
    }


    /**
     * Returns the item values as list of key/value pairs prefixed by prefix
     *
     * @return {Object} Associative list of item properties and their values
     */
    _getProperties( prefix )
    {
        var objParent = super._getProperties( prefix );
        var objCurrent = {
            [prefix + "langid"]: this.langid,
            [prefix + "domain"]: this.domain,
            [prefix + "typeid"]: this.typeid,
            [prefix + "type"]: this.type,
            [prefix + "code"]: this.code,
            [prefix + "status"]: this.status,
            [prefix + "content"]: this.content
        };

        return Object.assign( {}, objParent, objCurrent );
    }

}
