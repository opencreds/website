/* Web Payments Community Group common spec JavaScript */
var opencreds = {
  // Add as the respecConfig localBiblio variable
  // Extend or override global respec references
  localBiblio: {
    "REST": {
      title: "Architectural Styles and the Design of Network-based Software Architectures",
      date: "2000",
      href: "http://www.ics.uci.edu/~fielding/pubs/dissertation/",
      authors: [
        "Fielding, Roy Thomas"
      ],
      publisher: "University of California, Irvine."
    },
    "SECURE-MESSAGING": {
      title: "Secure Messaging",
      href: "https://web-payments.org/specs/source/secure-messaging",
      authors: [
        "Manu Sporny"
      ],
      etal: true,
      // FIXME: add CG-DRAFT status and publisher support to respec
      status: "unofficial",
      publisher: "Web Payments Community Group"
    },
    // aliases to known references
    "HTTP-SIGNATURES": {
      aliasOf: "http-signatures"
    },
    "JSON-PATCH": {
      aliasOf: "json-patch"
    },
    'OPEN-BADGES': {
      title: 'Open Badges',
      href: 'https://github.com/openbadges/openbadges-specification',
      authors: ['Brian Brennan', 'Mike Larsson', 'Chris McAvoy', 
        'Nate Otto', 'Kerri Lemoie'],
      status:   'BA-DRAFT',
      publisher:  'Badge Alliance Standard Working Group'
    },
    'IDENTITY-CREDENTIALS': {
      title: 'Identity Credentials',
      href: 'http://opencreds.org/specs/source/identity-credentials/',
      authors: ['Manu Sporny', 'Dave Longley'],
      status:   'CG-DRAFT',
      publisher:  'W3C Credentials Community Group'
    },
    'RDF-NORMALIZATION': {
      title: 'RDF Dataset Normalization',
      href: 'http://json-ld.github.io/normalization/spec/',
      authors: ['Dave Longley', 'Manu Sporny'],
      status:   'CG-DRAFT',
      publisher:  'Credentials W3C Community Group'
    },
    'WEB-COMMERCE': {
      title: 'Web Commerce',
      href: 'https://web-payments.org/specs/source/web-commerce/',
      authors: ['Dave Longley', 'Manu Sporny', 'David I. Lehn'],
      status:   'CG-DRAFT',
      publisher:  'W3C Credentials Community Group'
    },
    'WEB-COMMERCE-API': {
      title: 'Web Commerce API',
      href: 'https://web-payments.org/specs/source/web-commerce-api/',
      authors: ['Manu Sporny', 'Dave Longley', 'David I. Lehn'],
      status:   'CG-DRAFT',
      publisher:  'W3C Credentials Community Group'
    }
  },

  // We should be able to remove terms that are not actually
  // referenced from the common definitions
  rescrictReferences: function (utils, content) {
    var termNames = [] ;
    var base = document.createElement("div");
    base.innerHTML = content;

    // strategy: Traverse the content finding all of the terms defined
    $.each(base.querySelectorAll("dfn"), function(i, item) {
        var $t = $(item) ;
        var title = $t.dfnTitle();
        var n = $t.makeID("dfn", title);
        if (n) {
            termNames[n] = $t.parent() ;
        }
    });

    // add a handler to come in after all the definitions are resolved

    respecEvents.sub('end', function(message) {
        if (message == 'core/link-to-dfn') {
            // all definitions are linked
            $("a.internalDFN").each(function () {
                var $item = $(this) ;
                var r = $item.attr('href').replace(/^#/,"") ;
                if (termNames[r]) {
                    delete termNames[r] ;
                }
            });
    // delete any terms that were not referenced.
            Object.keys(termNames).forEach(function(term) {
                var $p = $("#"+term) ;
                if ($p) {
                    var t = $p.dfnTitle();
                    $p.parent().next().remove();
                    $p.remove() ;
                    if (respecConfig.definitionMap[t]) {
                        delete respecConfig.definitionMap[t];
                    }
                }
            });
        }
    });
    return (base.innerHTML);
  }
};
