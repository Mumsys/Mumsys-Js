/**
 * Mumsys_Generic_Item_Exception
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
 * Default mumsys generic item exception.
 * 
 * @category    Mumsys
 * @package     Js
 * @subpackage  Generic
 * 
 * @extends Error
 * @type Mumsys_Exception
 * 
 */
class Mumsys_Generic_Item_Exception extends Mumsys_Exception
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
    
}
