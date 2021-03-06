// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    PerformPromiseThen 
    Ref 25.4.5.3.1
author: Sam Mikes
description: Promise.prototype.then enqueues handler if pending
includes: [PromiseHelper.js]
---*/

var sequence = [],
    pResolve,
    p = new Promise(function (resolve, reject) {
        pResolve = resolve;
    });

sequence.push(1);

p.then(function () {
    sequence.push(3);
    checkSequence(sequence, "Should be second");
}).catch($DONE);

Promise.resolve().then(function () {
    // enqueue another then-handler
    p.then(function () {
        sequence.push(4);
        checkSequence(sequence, "Should be third");
    }).then($DONE, $DONE);

    sequence.push(2);
    checkSequence(sequence, "Should be first");

    pResolve();
}).catch($DONE);
