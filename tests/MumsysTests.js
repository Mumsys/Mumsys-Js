
QUnit.test("Mumsys.js test", function (assert) 
{
    var obj = new Mumsys();
    
    assert.ok(1 == "1", "Passed!");
    
    assert.ok( (obj instanceof Mumsys), "Mumsys::construct: Passed!");
    assert.ok( (obj.version == '3.0.0'), "Mumsys::version: Passed!");
    
    try {
        var errA = Mumsys.checkJsonRpcResponce(true);
    } catch (e) {
        assert.ok(e, "checkJsonRpcResponce() in error: Passed!");
        assert.ok(
                (e.message == 'Invalid json rpc resopnse'), 
                "checkJsonRpcResponce() error message: Passed!"
        );
        assert.ok((e.name=="Error"), "checkJsonRpcResponce() expected exception: Passed!");
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