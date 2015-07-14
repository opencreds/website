<?php $TOP_DIR='..'; include '../header.inc'; ?>

<?php
function dirContents($dir)
{
   $contents = scandir($dir);
   rsort($contents);

   print("Previous Drafts: ");
   $items = array();
   foreach($contents as $item)
   {
      if(preg_match("/201[0-9]-[0-9]{2,2}-[0-9]{2,2}/", $item))
      {
         array_push($items, "<a href=\"$dir/$item/\">$item $type</a>");
      }
   }
   print(implode($items, ", "));
}
?>

<!-- ==== HEADER -->
<section class="light-bg">
  <div class="container">
    <div class="row white">
      <div class="col-md-8 col-md-offset-2 inner-bottom-xs">
        <h1>Specificatons</h1>
        <p>
The Open Credentials specs are available under an open, patent and royalty-free 
license. Just like all other successful open Web technologies, the freedom to 
innovate is a fundamental part of what we do.
        </p>
       </div><!-- col-md-10 -->
    </div><!-- row -->
  </div><!-- container -->
</section>

<!-- ==== Design Documents ==== -->
<section class="light-bg">
  <div class="container" id="use-cases">
    <div class="row white">
      <div class="col-md-8 col-md-offset-2 inner-bottom-xs">
        <h3>Vision</h3>
        <p>
          <a href="source/vision">Vision</a>: The vision of the Open Credentials specifications is to support Motherhood and Apple Pie.
        </p>
      </div>
      <div class="col-md-8 col-md-offset-2 inner-bottom-xs">
        <h3>Design</h3>
        <p>
<a href="source/use-cases">Use Cases</a>:

The purpose of the Open Credentials specifications is to establish a
credential storage and exchange system for the Web. The use cases outlined here
are provided in order to make progress toward possible future standardization 
and interoperability of both low and high-stakes credentials with the
goals of storing, transmitting, and receiving digitally verifiable proof of 
qualifications and achievements. The following use cases focus on concrete 
scenarios that the technology created by the group should enable.
<?php dirContents("ED/use-cases"); ?>
        </p>
      </div><!-- col-md-10 -->
    </div><!-- row -->
  </div><!-- container -->
</section>

<!-- ==== Identity Credentials ==== -->
<section class="light-bg">
  <div class="container" id="credentials">
    <div class="row white">
      <div class="col-md-8 col-md-offset-2 inner-bottom-xs">
        <h3>Credentials</h3>
        <p>
<a href="source/identity-credentials/">Identity Credentials</a>: A decentralized 
identity mechanism for the Web that allows arbitrary Linked Data to be read from 
and written to an identity URL.
<?php dirContents("ED/identity-credentials"); ?>
        </p>
      </div><!-- col-md-10 -->
    </div><!-- row -->
  </div><!-- container -->
</section>

<?php $TOP_DIR='..'; include '../footer.inc'; ?>
