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

"use strict";

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
        return "3.0.0";
    }

};
