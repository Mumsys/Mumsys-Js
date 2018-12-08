/**
 * Mumsys_File_Item_Default
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
 * Mumsys default file item.
 *
 * @category    Mumsys
 * @package     Js
 * @subpackage  File
 */
class Mumsys_File_Item_Default
{
    /**
     * Returns the version ID.
     * @returns {String} Version ID
     */
    static getVersion() 
    {
        return '3.0.1';
    }
    
    
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
    constructor( params )
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
     * @return {String} Location of the file (depending on type: a path +/ or 
     * with the file name)
     * @throws {Mumsys_File_Item_Exception} If whether path nor file was set
     */
    get location()
    {
        if ( this.path !== undefined && this.name !== undefined ) {
            return this.path + '/' + this.name;
        }

        var mesg = 'No path or file was set to get the location';
        throw new Mumsys_File_Item_Exception( mesg, Mumsys_Exception.ERRCODE_DEFAULT );
    }

}
