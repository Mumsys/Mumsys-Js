/**
 * Mumsys_Exception
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 */

"use strict";

/**
 * Default mumsys exception and exception expanding.
 * 
 * @extends Error
 * @type Mumsys_Exception
 */
class Mumsys_Exception extends Error
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
     * Initialize the mumsys exception.
     * 
     * @param {String} message Exception message
     * @returns {Extend_Exceptions}
     */
    constructor( message )
    {
        super( message );

        this.name = this.constructor.name;

        if ( typeof Error.captureStackTrace === 'function' ) {
            Error.captureStackTrace( this, this.constructor );
        } else {
            this.stack = ( new Error( message ) ).stack;
        }
    }

}
