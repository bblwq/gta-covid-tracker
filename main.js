console.log("main.js loaded");
$(document).ready(function() {
  // Load map
  $("#home-link").click(function() {
    $(".tab-btn").removeClass('active');
    $(this).addClass('active');
    $(".tab").hide();
    $('#tab-home').show();
  });

  // Load data charts
  $("#data-link").click(function() {
    $(".tab-btn").removeClass('active');
    $(this).addClass('active');
    $(".tab").hide();
    $('#tab-data').show();
    if (!$('#tab-data').html().length) {
      $('#tab-data').html("<div class='tableauPlaceholder' id='viz1585322983117' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;covid19-new&#47;New&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='covid19-new&#47;New' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;covid19-new&#47;New&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='publish=yes' /></object></div>");
      var divElement = document.getElementById('viz1585322983117');
      var vizElement = divElement.getElementsByTagName('object')[0];
      if ( divElement.offsetWidth > 800 ) {
        vizElement.style.width='700px';
        vizElement.style.height='1527px';
      } else if (
        divElement.offsetWidth > 500 ) {
        vizElement.style.width='700px';
        vizElement.style.height='1527px';
      } else {
        vizElement.style.width='100%';
        vizElement.style.height='1527px';
      }
      var scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  });

  // Load news tab content
  $("#news-link").click(function() {
    $(".tab-btn").removeClass('active');
    $(this).addClass('active');
    $(".tab").hide();
    $('#tab-news').show();
  });

  // Labels function
  $("#GCH-btn").click(function() {
    $(".label-btn").removeClass('active');
    $(this).addClass("active");
    $(".sub-tab").hide();
    $("#GovCanHealth").show();
  });

	$("#Metrolinx-btn").click(function() {
    $(".label-btn").removeClass('active');
    $(this).addClass("active");
    $(".sub-tab").hide();
    $("#Metrolinx").show();
  });

  $("#WestJet-btn").click(function() {
    $(".label-btn").removeClass('active');
    $(this).addClass("active");
    $(".sub-tab").hide();
    $("#WestJet").show();
  });

	// Load help
  $("#help-link").click(function() {
    $(".tab-btn").removeClass('active');
    $(this).addClass('active');
    $(".tab").hide();
    $('#tab-help').show();
  });

});
