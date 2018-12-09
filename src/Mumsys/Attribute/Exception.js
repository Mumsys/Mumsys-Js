/**
 * Mumsys_Attribute_Exception
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2018 by Florian Blasel
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Attribute
 */

"use strict";

/**
 * Mumsys attribute exception.
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  Attribute
 */
class Mumsys_Attribute_Exception
    extends Mumsys_Exception
{
    /**
     * Returns the version ID.
     *
     * @returns {String} Version ID
     */
    static getVersion()
    {
        return "1.0.0";
    }

};
