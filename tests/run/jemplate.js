/* 
   This Javascript code was generated by Jemplate, the Javascript
   Template Toolkit. Any changes made to this file will be lost the next
   time the templates are compiled.

   Copyright 2006 - Ingy döt Net - All rights reserved.
*/

if (typeof(Jemplate) == 'undefined')
    throw('Jemplate.js must be loaded before any Jemplate template files');

Jemplate.templateMap['basic_array1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 5 "basic_array1.html"
stash.set( "simple_list", ["a","b","c"] );
stash.set( "mylist", [["a","b","c"],["d","e","f"],["h","i","j"]] );
output += 'a = ';
//line 6 "basic_array1.html"
output += stash.get(['simple_list', 0, 0, 0]);
output += '\na = ';
//line 7 "basic_array1.html"
output += stash.get(['mylist', 0, 0, 0, 0, 0]);
output += '\nc = ';
//line 8 "basic_array1.html"
output += stash.get(['mylist', 0, 0, 0, 2, 0]);
output += '\ne = ';
//line 9 "basic_array1.html"
output += stash.get(['mylist', 0, 1, 0, 1, 0]);
output += '\nj = ';
//line 10 "basic_array1.html"
output += stash.get(['mylist', 0, 2, 0, 2, 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {

//line 4 "directives1.html"
stash.set('list', [ 3, 4, 5 ]);
//line 7 "directives1.html"

// FOREACH 
(function() {
    var list = stash.get('list');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['i'] = value;
//line 6 "directives1.html"
output += context.process('foo');;
            retval = list.get_next();
            var value = retval[0];
            var done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['foo'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += 'I <3 Sushi\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives2.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "directives2.html"
stash.set('num', 4);
//line 2 "directives2.html"
stash.set('array', [ ]);
//line 6 "directives2.html"
    
// WHILE
var failsafe = 1000;
while (--failsafe && (stash.get('num') < 7)) {
//line 4 "directives2.html"
if (stash.get('num') % 2) {
//line 4 "directives2.html"
stash.get(['array', 0, 'push', [ 'Odd' ]]);
}
else {
//line 4 "directives2.html"
stash.get(['array', 0, 'push', [ 'Even' ]]);
}

//line 5 "directives2.html"
stash.set('num', stash.get('num') + 1);
}
if (! failsafe)
    throw("WHILE loop terminated (> 1000 iterations)\n")

//line 7 "directives2.html"
output += stash.get(['array', 0, 'join', [ '***' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives3.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "directives3.html"
stash.set("obj", {"key1": "val1", "key2": "val2"});
output += 'Key1: ';
//line 5 "directives3.html"
output += stash.get(['obj', 0, 'key1', 0]);
output += '\nKey2: ';
//line 6 "directives3.html"
output += stash.get(['obj', 0, 'key2', 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives4.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "directives4.html"
stash.set("obj", {"key1": "val1", "key2": "val2"});
//line 7 "directives4.html"

// FOREACH 
(function() {
    var list = stash.get('obj');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['key'] = value;
//line 6 "directives4.html"
output += stash.get('key');
output += ': ';
//line 6 "directives4.html"
output += stash.get(['obj', 0, stash.get('key'), 0]);
output += '\n';;
            retval = list.get_next();
            var value = retval[0];
            var done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_html.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 3 "filters_html.html"

// FILTER
output += (function() {
    var output = '';

output += 'This is some html text\nAll the <tags> should be escaped & protected\n';

    return context.filter(output, 'html', []);
})();

output += '\n';
//line 4 "filters_html.html"
stash.set('text', 'The <cat> sat on the <mat>');
output += '\n';
//line 5 "filters_html.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('text');

    return context.filter(output, 'html', []);
})();

output += '\n';
//line 7 "filters_html.html"

// FILTER
output += (function() {
    var output = '';

output += '\n"It isn\'t what I expected", he replied.';

    return context.filter(output, 'html', []);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_indent.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 7 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent', []);
})();

output += '\n#\n';
//line 15 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent', [ 3 ]);
})();

output += '\n#\n';
//line 23 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent', [ '2' ]);
})();

output += '\n#\n';
//line 31 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent', [ 0 ]);
})();

output += '\n#\n';
//line 33 "filters_indent.html"
stash.set('text', 'The cat sat on the mat');
//line 33 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';


// FILTER
output += (function() {
    var output = '';

output += stash.get('text');

    return context.filter(output, 'indent', [ '> ' ]);
})();


    return context.filter(output, 'indent', [ '+' ]);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_null.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "filters_null.html"

// FILTER
output += (function() {
    var output = '';

output += 'Ils ont les chapeaux ronds, vive la bretagne';

    return context.filter(output, 'null', []);
})();

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_repeat.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "filters_repeat.html"

// FILTER
output += (function() {
    var output = '';

output += 'foo...';

    return context.filter(output, 'repeat', [ 5 ]);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_replace.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "filters_replace.html"
stash.set('text', 'The cat sat on the mat');
//line 1 "filters_replace.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('text');

    return context.filter(output, 'replace', [ ' ', '_' ]);
})();

output += '\n';
//line 2 "filters_replace.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('text');

    return context.filter(output, 'replace', [ 'sat', 'shat' ]);
})();

output += '\n';
//line 3 "filters_replace.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('text');

    return context.filter(output, 'replace', [ 'at', 'plat' ]);
})();

output += '\n';
//line 4 "filters_replace.html"
stash.set('text', 'The <=> operator, blah, blah');
//line 4 "filters_replace.html"

// FILTER
output += (function() {
    var output = '';


// FILTER
output += (function() {
    var output = '';

output += stash.get('text');

    return context.filter(output, 'html', []);
})();


    return context.filter(output, 'replace', [ 'blah', 'rhubarb' ]);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_truncate.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "filters_truncate.html"
stash.set('a', '1234567890');
//line 2 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 5 ]);
})();

output += '\n';
//line 3 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 10 ]);
})();

output += '\n';
//line 4 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 15 ]);
})();

output += '\n';
//line 5 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 2 ]);
})();

output += '\n';
//line 6 "filters_truncate.html"
stash.set('a', '1234567890123456789012345678901234567890');
//line 7 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', []);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_uri.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "filters_uri.html"

// FILTER
output += (function() {
    var output = '';

output += 'my file.html';

    return context.filter(output, 'uri', []);
})();

output += '\n';
//line 2 "filters_uri.html"

// FILTER
output += (function() {
    var output = '';

output += 'my<file & your>file.html';

    return context.filter(output, 'uri', []);
})();

output += '\n';
//line 3 "filters_uri.html"

// FILTER
output += (function() {
    var output = '';


// FILTER
output += (function() {
    var output = '';

output += 'my<file & your>file.html';

    return context.filter(output, 'uri', []);
})();


    return context.filter(output, 'html', []);
})();

output += '\n';
//line 4 "filters_uri.html"

// FILTER
output += (function() {
    var output = '';

output += 'guitar&amp;file.html';

    return context.filter(output, 'uri', []);
})();

output += '\n';
//line 5 "filters_uri.html"

// FILTER
output += (function() {
    var output = '';


// FILTER
output += (function() {
    var output = '';

output += 'guitar&amp;file.html';

    return context.filter(output, 'uri', []);
})();


    return context.filter(output, 'html', []);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_each.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "hash_each.html"
stash.set('hash', { 'a': 1, 'b': 2, 'c': 3  });
//line 4 "hash_each.html"
stash.set('list', stash.get(['hash', 0, 'each', 0]));
//line 4 "hash_each.html"

// FOREACH 
(function() {
    var list = [ 0, 2, 4 ];
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['kindex'] = value;
//line 4 "hash_each.html"
stash.set('vindex', stash.get('kindex') + 1);
//line 4 "hash_each.html"
stash.set('key', stash.get(['list', 0, stash.get('kindex'), 0]));
//line 4 "hash_each.html"
stash.set('value', stash.get(['list', 0, stash.get('vindex'), 0]));
//line 4 "hash_each.html"
output += (stash.get('key') && stash.get(['hash', 0, stash.get('key'), 0]) == stash.get('value')) ? 1 : 0;;
            retval = list.get_next();
            var value = retval[0];
            var done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_exists.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "hash_exists.html"
stash.set('a', { 'a': 1, 'b': 2, 'c': 3  });
//line 2 "hash_exists.html"
output += stash.get(['a', 0, 'exists', [ 'b' ]]) ? 1 : 0;
output += '\n';
//line 3 "hash_exists.html"
output += stash.get(['a', 0, 'exists', [ 'z' ]]) ? 1 : 0;
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_import.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '1\n';
output += '1\n';
output += '2\n';
output += '5\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_keys.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "hash_keys.html"
stash.set('a', { 'a': 1, 'b': 2, 'c': 3  });
//line 2 "hash_keys.html"
output += stash.get(['a', 0, 'keys', 0, 'sort', 0, 'join', [ ' ' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_list.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "hash_list.html"
stash.set('hash', { 'a': 1, 'b': 2, 'c': 3  });
//line 2 "hash_list.html"
output += stash.get(['hash', 0, 'list', [ 'keys' ], 'sort', 0, 'join', [ ' ' ]]);
output += '\n';
//line 3 "hash_list.html"
output += stash.get(['hash', 0, 'list', [ 'values' ], 'sort', 0, 'join', [ ' ' ]]);
output += '\n';
//line 4 "hash_list.html"
stash.set('list', stash.get(['hash', 0, 'list', [ 'each' ]]));
//line 4 "hash_list.html"

// FOREACH 
(function() {
    var list = [ 0, 2, 4 ];
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['kindex'] = value;
//line 4 "hash_list.html"
stash.set('vindex', stash.get('kindex') + 1);
//line 4 "hash_list.html"
stash.set('key', stash.get(['list', 0, stash.get('kindex'), 0]));
//line 4 "hash_list.html"
stash.set('value', stash.get(['list', 0, stash.get('vindex'), 0]));
//line 4 "hash_list.html"
output += (stash.get('key') && stash.get(['hash', 0, stash.get('key'), 0]) == stash.get('value')) ? 1 : 0;;
            retval = list.get_next();
            var value = retval[0];
            var done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n';
//line 11 "hash_list.html"
stash.set('list', stash.get(['hash', 0, 'list', []]));
//line 11 "hash_list.html"

// FOREACH 
(function() {
    var list = stash.get('list');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['entry'] = value;
//line 11 "hash_list.html"
stash.set('key', stash.get(['entry', 0, 'key', 0]));
//line 11 "hash_list.html"
stash.set('value', stash.get(['entry', 0, 'value', 0]));
//line 11 "hash_list.html"
output += (stash.get(['hash', 0, stash.get('key'), 0]) == stash.get('value')) ? 1 : 0;;
            retval = list.get_next();
            var value = retval[0];
            var done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_nsort.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "hash_nsort.html"
stash.set('a', { '499': 'c', '5': 'a', '50': 'b'  });
//line 2 "hash_nsort.html"
output += stash.get(['a', 0, 'nsort', 0, 'join', [ ' ' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_size.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "hash_size.html"
stash.set('a', { 'a': 1, 'b': 2, 'c': 3  });
//line 2 "hash_size.html"
output += stash.get(['a', 0, 'size', 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_sort.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "hash_sort.html"
stash.set('a', { 'ac': 1, 'b': 2, 'aa': 3  });
//line 2 "hash_sort.html"
output += stash.get(['a', 0, 'sort', 0, 'join', [ ' ' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hash_values.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "hash_values.html"
stash.set('a', { 'a': 1, 'b': 2, 'c': 3  });
//line 2 "hash_values.html"
output += stash.get(['a', 0, 'values', 0, 'nsort', 0, 'join', [ ' ' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hello.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += 'Hello, ';
//line 1 "hello.html"
output += stash.get('name');
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['join.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "join.html"
stash.set('a', [ 'foo', 'bar', 'baz' ]);
//line 1 "join.html"
output += stash.get(['a', 0, 'join', [ '::' ]]);
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['list.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "list.html"
stash.set('a1', [ 'one', 'two', 'three' ]);
//line 2 "list.html"
stash.get(['a1', 0, 'push', [ 'four' ]]);
//line 3 "list.html"
output += stash.get(['a1', 0, 'first', []]);
output += ' - ';
//line 3 "list.html"
output += stash.get(['a1', 0, 'last', []]);
output += '\n';
//line 4 "list.html"
output += stash.get(['a1', 0, 'grep', [ 'o' ], 'join', [ '/' ]]);
output += '\n';
//line 5 "list.html"
output += stash.get(['a1', 0, 'max', []]);
output += '+';
//line 5 "list.html"
output += stash.get(['a1', 0, 'size', []]);
output += '\n';
//line 6 "list.html"
stash.set('a2', stash.get(['a1', 0, 'reverse', 0]));
//line 7 "list.html"
output += stash.get(['a2', 0, 'join', [ '^' ]]);
output += '\n';
//line 8 "list.html"
output += stash.get(['a2', 0, 'slice', [ 1, 3 ], 'join', [ '*' ]]);
output += '\n';
//line 9 "list.html"
stash.set('a3', [ 5, 9, 'x', 17, 9, 33, 12, 'x', 5 ]);
//line 10 "list.html"
output += stash.get(['a3', 0, 'unique', [], 'join', [ ',' ]]);
output += '\n';
//line 11 "list.html"
output += stash.get(['a1', 0, 'unshift', [ 'zero' ], 'sort', [], 'join', [ '!' ]]);
output += '\n';
//line 12 "list.html"
stash.get(['a1', 0, 'shift', []]);
//line 12 "list.html"
stash.get(['a1', 0, 'pop', []]);
//line 12 "list.html"
output += stash.get(['a1', 0, 'join', [ '_' ]]);
output += '\n';
//line 13 "list.html"
stash.get(['a3', 0, 'splice', [ 2, 1 ]]);
//line 13 "list.html"
stash.get(['a3', 0, 'splice', [ -2, 1 ]]);
//line 13 "list.html"
output += stash.get(['a3', 0, 'nsort', 0, 'join', [ '~' ]]);
output += '\n';
//line 14 "list.html"
stash.set('a4', [ 11, 22, 33 ]);
//line 15 "list.html"
stash.set('a5', [ 44, 55, 66 ]);
//line 16 "list.html"
stash.set('a6', [ 77, 88, 99 ]);
//line 17 "list.html"
stash.set('a7', stash.get(['a4', 0, 'merge', [ stash.get('a5'), 'foo', stash.get('a6') ]]));
//line 18 "list.html"
output += stash.get(['a7', 0, 'join', [ '\'' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['localise1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "localise1.html"
output += stash.get('thing');
output += '\n';
//line 2 "localise1.html"
stash.set('thing', 'bar');
//line 3 "localise1.html"
output += stash.get('thing');
output += '\n';
//line 4 "localise1.html"
output += context.include('myblock');
//line 5 "localise1.html"
output += stash.get('thing');
output += '\n';

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['myblock'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 7 "localise1.html"
stash.set('thing', 'baz');
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['localise2.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "localise2.html"
output += stash.get('thing');
output += '\n';
//line 2 "localise2.html"
stash.set('thing', 'bar');
//line 3 "localise2.html"
output += stash.get('thing');
output += '\n';
//line 4 "localise2.html"
output += context.process('myblock');
//line 5 "localise2.html"
output += stash.get('thing');
output += '\n';

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['myblock'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 7 "localise2.html"
stash.set('thing', 'baz');
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['operator1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "operator1.html"
if ('abc' == 'abc') {
output += 'same';
}

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['operator2.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "operator2.html"
if ('abc' != 'def') {
output += 'not same';
}

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['operator3.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "operator3.html"
output += 'abc'  + 'def';
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['stash-functions1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "stash-functions1.html"
output += stash.get(['hash', 0, 'keys', 0, 'sort', 0, 'join', [ '+' ]]);
output += '\n';
//line 2 "stash-functions1.html"
output += stash.get(['hash', 0, 'keys', [], 'sort', [], 'join', [ '+' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['stash-functions2.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "stash-functions2.html"
output += stash.get(['hash', 0, 'keys', 0]);
output += '\n';
//line 2 "stash-functions2.html"
output += stash.get(['hash', 0, 'keys', [], 'join', [ '+' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_chunk.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_chunk.html"
stash.set('a', '1234567890');
//line 2 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', 0, 'join', [ ' ' ]]);
output += '\n';
//line 3 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ 2 ], 'join', [ ' ' ]]);
output += '\n';
//line 4 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ 3 ], 'join', [ ' ' ]]);
output += '\n';
//line 5 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ 9 ], 'join', [ ' ' ]]);
output += '\n';
//line 6 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ 10 ], 'join', [ ' ' ]]);
output += '\n';
//line 7 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ -1 ], 'join', [ ' ' ]]);
output += '\n';
//line 8 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ -2 ], 'join', [ ' ' ]]);
output += '\n';
//line 9 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ -3 ], 'join', [ ' ' ]]);
output += '\n';
//line 10 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ -9 ], 'join', [ ' ' ]]);
output += '\n';
//line 11 "string_chunk.html"
output += stash.get(['a', 0, 'chunk', [ -10 ], 'join', [ ' ' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_defined.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_defined.html"
stash.set('a', '1');
//line 2 "string_defined.html"
output += stash.get(['a', 0, 'defined', 0]) ? '1' : '0';
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_hash.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_hash.html"
stash.set('a', 'Hi');
//line 2 "string_hash.html"
output += stash.get(['a', 0, 'hash', 0, 'value', 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_length.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_length.html"
stash.set('a', 'Hi');
//line 2 "string_length.html"
output += stash.get(['a', 0, 'length', 0]);
output += '\n';
//line 3 "string_length.html"
stash.set('a', 10);
//line 4 "string_length.html"
output += stash.get(['a', 0, 'length', 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_list.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_list.html"
stash.set('a', 'Hi');
//line 2 "string_list.html"
output += stash.get(['a', 0, 'list', 0, 0, 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_match.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_match.html"
stash.set('a', 'aaa12aaa34aaa56');
//line 2 "string_match.html"
output += stash.get(['a', 0, 'match', [ '\\\d\\\d' ], 'join', [ ' ' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_repeat.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_repeat.html"
stash.set('a', 'aaa');
//line 2 "string_repeat.html"
output += stash.get(['a', 0, 'repeat', [ 3 ]]);
output += '\n';
//line 3 "string_repeat.html"
output += stash.get(['a', 0, 'repeat', []]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_replace.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_replace.html"
stash.set('a', 'aaa12aaa34aaa56');
//line 2 "string_replace.html"
output += stash.get(['a', 0, 'replace', [ '\\\d\\\d', 'bb' ]]);
output += '\n';
//line 3 "string_replace.html"
output += stash.get(['a', 0, 'replace', [ '\\\d\\\d' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_search.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_search.html"
stash.set('a', 'aaa12aaa34aaa56');
//line 2 "string_search.html"
output += stash.get(['a', 0, 'search', [ '\\\d\\\d' ]]) ? 1 : 0;
output += '\n';
//line 3 "string_search.html"
output += stash.get(['a', 0, 'search', [ 'w' ]]) ? 1 : 0;
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_size.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_size.html"
stash.set('a', '1');
//line 2 "string_size.html"
output += stash.get(['a', 0, 'defined', 0]) ? '1' : '0';
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['string_split.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "string_split.html"
stash.set('a', 'aaa12aaa34aaa');
//line 2 "string_split.html"
output += stash.get(['a', 0, 'split', [ '\\\d\\\d' ], 'join', [ ' ' ]]);
output += '\n';
//line 3 "string_split.html"
stash.set('a', '1aaa2aaa3aaa4');
//line 4 "string_split.html"
output += stash.get(['a', 0, 'split', [ 'aaa' ], 'join', [ ' ' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

