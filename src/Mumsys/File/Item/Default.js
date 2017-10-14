/**
 * Mumsys_File_Item_Default
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Library
 * @subpackage  File
 */


/**
 * Mumsys default file item.
 *
 * @type object Mumsys default file item
 */
class Mumsys_File_Item_Default
{
    /**
     * Initialize the object.
     *
     * @param {object} params Object properties to set:
     *      {string} path Public path to the folder of the file
     *      {string} filename Base name of the file
     *      {integer} filesize Size in bytes of the file
     *      {string} filetype Type of the file (dir, link, file)
     *      {string} mimetype Mime type of the file
     *
     * @returns {Mumsys_File_Item_Default}
     */
    constructor(params)
    {
        /**
         * @type string
         */
        this.path = params.path;
        /**
         * @type string
         */
        this.name = params.filename;
        /**
         * @type integer
         */
        this.size = params.filesize;
        /**
         * @type string
         */
        this.type = params.filetype;
        /**
         * @type string
         */
        this.mimetype = params.mimetype;
    }

    /**
     * Returns the location of the file.
     *
     * @type string|void Location of the file or undefined if path or name are not set.
     */
    get location()
    {
        if (this.path !== undefined && this.name !== undefined) {
            return this.path + '/' + this.name;
        }

        return;
    }

}
