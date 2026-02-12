Typing
======

Notes about type rules in general.




Compatible & Incompatible Types
-------------------------------
Sometimes I'm seeing things work that are a bit unexpected.
For instance `number` being compatible with `object`.
Looks like `{object}` will take just about anything - pretty obvious now that i think about it.

For testing purposes I sometimes need to force a type incompatibility so looking for notable examples of each.
Some might only work in one direction also.


* Argument of type 'any[]' is not assignable to parameter of type 'number'.ts(2345)





Class Extension
---------------

Something about this that I don't properly get yet...
Not sure done I've this kind of thing recently - might need to brush up a bit.


* You can change the type signature of an extended class's constructor, but not the signature of methods


Actually still experimenting - like everything, I think it *depends*.




