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
    }
  }
};
