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
      $('#tab-data').html("<div class='tableauPlaceholder' id='viz1584901929003' style='position: relative'> <noscript> <a href='#'> <img alt=' ' src='https://public.tableau.com/static/images/co/covid19-confirm/confirmed/1_rss.png' style='border: none' /> </a> </noscript> <object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /> <param name='name' value='covid19-confirm/confirmed' /> <param name='tabs' value='no' /> <param name='toolbar' value='yes' /> <param name='static_image' value='https://public.tableau.com/static/images/co/covid19-confirm/confirmed/1.png' /> <param name='animate_transition' value='yes' /> <param name='display_static_image' value='yes' /> <param name='display_spinner' value='yes' /> <param name='display_overlay' value='yes' /> <param name='display_count' value='yes' /> <param name='filter' value='publish=yes' /> </object> </div> <div class='tableauPlaceholder' id='viz1584901951391' style='position: relative'> <noscript> <a href='#'> <img alt=' ' src='https://public.tableau.com/static/images/co/covid19-new/New/1_rss.png' style='border: none' /> </a> </noscript><object class='tableauViz' style='display:none;'> <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /> <param name='name' value='covid19-new/New' /> <param name='tabs' value='no' /><param name='toolbar' value='yes' /> <param name='static_image' value='https://public.tableau.com/static/images/co/covid19-new/New/1.png' /> <param name='animate_transition' value='yes' /> <param name='display_static_image' value='yes' /> <param name='display_spinner' value='yes' /> <param name='display_overlay' value='yes' /> <param name='display_count' value='yes' /> <param name='filter' value='publish=yes' /> </object> </div> <div class='tableauPlaceholder' id='viz1584901979008' style='position: relative'> <noscript> <a href='#'> <img alt=' ' src='https://public.tableau.com/static/images/co/covid19-nation/nation/1_rss.png' style='border: none' /> </a></noscript><object class='tableauViz' style='display:none;'> <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /> <param name='name' value='covid19-nation/nation' /> <param name='tabs' value='no' /> <param name='toolbar' value='yes' /> <param name='static_image' value='https://public.tableau.com/static/images/co/covid19-nation/nation/1.png' /> <param name='animate_transition' value='yes' /> <param name='display_static_image' value='yes' /> <param name='display_spinner' value='yes' /> <param name='display_overlay' value='yes' /> <param name='display_count' value='yes' /> <param name='filter' value='publish=yes' /> </object> </div>");
      var divElement = document.getElementById('viz1584901929003');
      var vizElement = divElement.getElementsByTagName('object')[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
      }
      var scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
      var divElement = document.getElementById('viz1584901951391');
      var vizElement = divElement.getElementsByTagName('object')[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
      }
      var scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
      var divElement = document.getElementById('viz1584901979008');
      var vizElement = divElement.getElementsByTagName('object')[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
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
