// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-204
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' property doesn't exist in 'O', test
    [[Configurable]] of 'P' property in 'Attributes' is set as false
    value if [[Configurable]] is absent in accessor descriptor 'desc'
    (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];
arr.verifySetter = 100;

Object.defineProperties(arr, {
    "0": {
        set: function (value) {
            arr.verifySetter = value;
        },
        get: function () {
            return arr.verifySetter;
        },
        enumerable: true
    }
});

if (!Object.prototype.hasOwnProperty.call(arr, "0")) {
    $ERROR("Expected hasOwnProperty to return true.");
}

arr[0] = 101;

verifyEqualTo(arr, 0, 101);

if (arr.verifySetter !== 101) {
    $ERROR('Expected arr.verifySetter === 101, actually ' + arr.verifySetter);
}

verifyNotConfigurable(arr, 0);
