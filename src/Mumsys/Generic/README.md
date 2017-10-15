# Using the generic item/manager

## Forword

DTO/DAO is quite simple an very powerful. 
But understanding this simple thing sometimes takes a time.

This generic version has some BUTs but you will agree:

 - It will downgrade implementation time
 - Server requests will slow down (performance boost) because only changed data will be 
   served.


## Usage

Eg.: You load a list of objects form the server which serves jsonrpc 2.0 as follow. E.g:

### Request:

    var myManager = new Mumsys_Generic_Manager_Default("/requestjson");
    var requestData = {};
    var requestOptions = {"async":false};

    myManager.loadItems(requestData, requestOptions);
    
### Response (JsonRPC):

The list shows e.g. some rows of your database. Well formed.

    {
        "jsonrpc": "2.0",
        "result": {
            "list": [
                {"id": 1, "name": "Some name 1"},
                {"id": 3, "name": "Some name 3"},
                {"id": 5, "name": "Some name 5"},
                {"id": 7, "name": "Some name 7"}
            ]
        }
        ,
        "id": null, // request ID, Optional
    }


### Result
    
myManager now includes 4 Objects implementing the Mumsys_Generic_Item_Default class/
interface. Now you can work with it e.g. Showing the list, some forms to change the data.
E.g:

    var item1 = myManager.getItem("id", 5);
    // Example using jQuery
    $('#myform id').val( item1.get("id") );
    $('#myform name').val( item1.get("name", "Name not set") );

Now you change some values and want to save them:

    item1.set("name", $('#myform name').val() );

    // prepeare saving, e.g:
    var params = {"controller":"mycontroller","action":"someaction"};
    var requestOptions = {"async": false, "type": "POST", "url": "/some-post-url"};

    myManager.saveItem( item1, params, requestOptions );

Whats happend now:

If the item values has changes a real request performs to the given url.
It send the data to the server e.g. as post request. You save the data.
The answer must be a jsonrpc response and must be as follow:

    {
        "jsonrpc":"2.0",
        "result":{
            "item":{
                "id":5,
                "name":"Your changed value"
            }
        },
        "id":null,      // future: request ID
    }

Now the new item returns with the new value and will be updated in the manager to be 
available for the next step.

Thats all. A very simple but powerful option to handle data.


    
    
    

    
