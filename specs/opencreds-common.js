/* Web Payments Community Group common spec JavaScript */
var opencreds = {
  // Add to the respecConfig preProcess config array
  preProcess: {
    apply:  function(c) {
      // process the document before anything else is done
      var refs = document.querySelectorAll('tdef') ;
      for (var i = 0; i < refs.length; i++) {
        var item = refs[i];
        if (!item) continue ;
        var p = item.parentNode ;
        var con = item.innerHTML ;
        var ref = item.getAttribute('title') ;
        if (!ref) {
          ref = item.textContent ;
        }
        if (ref) {
          ref = ref.replace(/\n/g, '_') ;
          ref = ref.replace(/\s+/g, '_') ;
        }
        var sp = document.createElement( 'dfn' ) ;
        sp.title = ref ;
        sp.innerHTML = con ;
        p.replaceChild(sp, item) ;
      }
      // now term references
      refs = document.querySelectorAll('tref') ;
      for (var i = 0; i < refs.length; i++) {
        var item = refs[i];
        if (!item) continue ;
        var p = item.parentNode ;
        var con = item.innerHTML ;
        var ref = item.getAttribute('title') ;
        if (!ref) {
          ref = item.textContent ;
        }
        if (ref) {
          ref = ref.replace(/\n/g, '_') ;
          ref = ref.replace(/\s+/g, '_') ;
        }

        var sp = document.createElement( 'a' ) ;
        var id = item.textContent ;
        sp.className = 'tref' ;
        sp.title = ref ;
        sp.innerHTML = con ;
        p.replaceChild(sp, item) ;
      }
    }
  },

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
  }
};
