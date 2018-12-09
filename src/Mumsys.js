/*!
 * Mumsys
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017-2018 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 */

"use strict";

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
        return "3.2.1";
    }

    /**
     * Initilizes the Mumsys object.
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
            var mesg = "Invalid json rpc resopnse";
            throw new Mumsys_Exception( mesg );
        }
    }

}
