/**
 * Mumsys_Generic_Item
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Library
 */

/**
 * Mumsys object.
 * 
 * @type object Mumsys object
 */
class Mumsys {
    /**
     *  Initilizes the Mumsys object.
     *  
     * @returns {Mumsys} Mumsys object
     */
    constructor() 
    {
        /**
         * @type string Version ID
         */
        this.version = '3.0.0';
    }
    
    /**
     * Checks json rpc 2.0 responce for validity.
     * 
     * @param {Object} response object
     * 
     * @return {void} 
     * @throws {Error} If response seems to be invalid
     */
    static checkJsonRpcResponce( response )
    {
        if (!(response instanceof Object)) {
            var message = 'Invalid json rpc resopnse';
            throw new Error(message);
        }
    }
    
}