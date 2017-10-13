QUnit.test("Mumsys_Generic_Item.js tests", function (assert)
{
    var _expected, _mesgOut = '';

    var props = {"id": 3, "name": "Item 3"};

    var obj = new Mumsys_Generic_Item(props);

    assert.ok(1 == "1", "Passed!");


    // construction
    try {
        var errA = new Mumsys_Generic_Item();
        
    } catch (e) {
        assert.ok(
                (e.message == 'Invalid parameters'), 
                "Exception message: Passed!"
        );
        assert.ok((e.name=="Error"), "Expected exception: Passed!");
    }

    //
    // get/set()
    assert.equal(obj.get('id'), 3, "get/set(): Passed!");
    assert.equal(obj.get('invalidkey', false), false, "get() default: Passed!");
    try {
        obj.set("id", 4);
    }
    catch (e) {
        _expected = 'New item ID "4" differs from old ID "3"';
        _mesgOut = 'set() Exception thrown when manipulate item ID: Passed!';
        assert.equal(e.message, _expected, _mesgOut);

        assert.equal(e.name, "Error", "set() Expected exception: Passed!");
    }
    obj.set('id', 3);
    assert.equal(obj.get('id'), 3, "set() same ID: Passed!");
    obj.set('id', null);
    assert.equal(obj.get('id'), undefined, "set(null): Passed!");
    assert.equal(obj.isModified(), true, "set(null) isModified(): Passed!");
    obj.set('id', 4);
    assert.equal(obj.isModified(), false, "set(newID) after set(null): Passed!");

    //
    // getProperties()
    assert.ok((obj.getProperties() == props), "getProperties(): Passed!");

    //
    // set/isModified()
    assert.equal(obj.isModified(), false, "is/setModified(): Passed!");
    obj.setModified();
    assert.equal(obj.isModified(), true, "is/setModified(): Passed!");
    obj.setModified(true);
    assert.equal(obj.isModified(), true, "is/setModified(): Passed!");
    obj.setModified(false);
    assert.equal(obj.isModified(), false, "is/setModified(): Passed!");

    //
    // checkID()
    assert.equal(obj._checkId(null, null), null, "_checkId(): Passed!");
    assert.equal(obj._checkId(null, 1), 1, "_checkId(): Passed!");
    assert.equal(obj._checkId(null, null), null, "_checkId(): Passed!");
    assert.equal(obj._checkId(1, null), null, "_checkId(): Passed!");
});
