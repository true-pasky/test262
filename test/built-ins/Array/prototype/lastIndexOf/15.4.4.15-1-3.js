// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-1-3
description: Array.prototype.lastIndexOf applied to boolean primitive
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Boolean.prototype[1] = true;
            Boolean.prototype.length = 2;

            return 1 === Array.prototype.lastIndexOf.call(true, true);
        } finally {
            delete Boolean.prototype[1];
            delete Boolean.prototype.length;
        }
    }
runTestCase(testcase);
