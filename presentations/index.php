<?php $TOP_DIR='..'; include '../header.inc'; ?>

<section class="light-bg">
  <div class="container">
    <div class="row white">
      <div class="col-md-8 col-md-offset-2 inner-bottom-xs">
        <h1>Presentations</h1>
        <p>
The following presentations have been given over the years to explain the 
basic concepts behind the Credentials initiative.
        </p>

      <ul>

<?php
$Directory = new RecursiveDirectoryIterator('.', FilesystemIterator::SKIP_DOTS);
$Iterator = new RecursiveIteratorIterator($Directory);
$allSlides = new RegexIterator($Iterator, '/^.+index\.x?html$/i', RecursiveRegexIterator::GET_MATCH);

//rsort($allSlides);

foreach($allSlides as $match)
{
   $deck = $match[0];
   $zipfile = str_replace("/index.xhtml", ".zip", $match[0]);
   $zipfile = str_replace("/index.html", ".zip", $zipfile);
   $deckTitle = "Untitled";
   
   if(strpos($deck, 'template') !== false) continue;
   
   if(preg_match('/<title>(.+)<\/title>/', 
      file_get_contents($deck), $matches) && isset($matches[1]))
      $deckTitle = $matches[1];
   else
      $deckTitle = $deck;
   
   preg_match('/[0-9]{4,4}/', $deck, $matches);
   $deckYear = $matches[0];
   
   print("                 <li><a href=\"$deck\">$deckYear - $deckTitle</a> (<a href=\"$zipfile\">zip archive</a>)</li>");
}

?>
      </div><!-- col-md-8 -->
    </div><!-- row -->
  </div><!-- container -->
</section>

<?php $TOP_DIR='..'; include '../footer.inc'; ?>
