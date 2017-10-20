/**
 * Mumsys_Generic_Exception
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

}
