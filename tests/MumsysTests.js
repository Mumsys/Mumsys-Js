/**
 * Mumsys tests
 * for MUMSYS Library for Multi User Management System (MUMSYS)
 *
 * @license LGPL Version 3 http://www.gnu.org/licenses/lgpl-3.0.txt
 * @copyright Copyright (c) 2017 by Florian Blasel for FloWorks Company
 * @author Florian Blasel <flobee.code@gmail.com>
 *
 * @category    Mumsys
 * @package     Js
 */

QUnit.test("Mumsys.js test", function (assert) 
{
    var _obj = new Mumsys();
    
    assert.ok(1 == "1", "Basic test check: Passed!");
    assert.ok( (document.location.href.search("^file") === -1), "Warning: url file:// use http://");
    
    assert.ok( (_obj instanceof Mumsys), "Mumsys::construct: Passed!");
    assert.equal(Mumsys.getVersion(), '3.0.0', "getVersion(): Passed!");
    
    try {
        var errA = Mumsys.checkJsonRpcResponce(true);
    } catch (e) {
        assert.ok(e, "checkJsonRpcResponce() in error: Passed!");
        assert.ok(
                (e.message == 'Invalid json rpc resopnse'), 
                "checkJsonRpcResponce() error message: Passed!"
        );
        assert.ok((e.name=="Mumsys_Exception"), "checkJsonRpcResponce() expected exception: Passed!");
    }
    

//    // demo
//    assert.ok(true, "true succeeds");
//    assert.ok("non-empty", "non-empty string succeeds");
//    assert.ok(false, "false fails");
//    assert.ok(0, "0 fails");
//    assert.ok(NaN, "NaN fails");
//    assert.ok("", "empty string fails");
//    assert.ok(null, "null fails");
//    assert.ok(undefined, "undefined fails");
});