$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetAllArticles'},
        type:'POST',
        dataType:'json',
        success:PrintArticleLinks,
        error: function (data) {
            console.log(data);
        },
    });
});
function searchArticles() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("articleList");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function PrintArticleLinks(articles){
    var articleCount = articles.length;
    articles.forEach(article => {
        var articleContainer = $("<li></li>").append(
            $("<div></div>").addClass("col-lg-8 article").attr("id", article["id"])
            .append($("<h3></h3>").text(article["title"]))
            .append($("<p></p>").addClass("lead").text("by " + article["author"]))
            .append($("<hr>"))
            .append($("<p></p>").text("Posted on " + article["created_at"]))
            .append($("<hr>"))
            .append($("<div></div>").addClass("link-content").html(article["article"])));
        
        $(".module-content").append(articleContainer);

        if (articles.indexOf(article) + 1 !== articleCount) {
            $("module-content").append($("<hr>"));
        }

        $('#'+article["id"]).click(function(){
            window.location.href = "article.php?article_id="+article["id"];
        });
    });
}
function sortArticlesByTitle(){
    var list, c1, c2, article1, article2, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("articleList");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      article1 = b[i].getElementsByTagName("h3")
      article2 = b[i + 1].getElementsByTagName("h3")
      if (dir == "asc") {
        if (article1[0].innerHTML.toLowerCase() > article2[0].innerHTML.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (article1[0].innerHTML.toLowerCase() < article2[0].innerHTML.toLowerCase()) {
          /* If next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function sortArticlesByAuthor(){
    var list, c1, c2, article1, article2, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("articleList");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      article1 = b[i].getElementsByTagName("p")
      article2 = b[i + 1].getElementsByTagName("p")
      if (dir == "asc") {
        if (article1[0].innerHTML.toLowerCase() > article2[0].innerHTML.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (article1[0].innerHTML.toLowerCase() < article2[0].innerHTML.toLowerCase()) {
          /* If next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function sortArticlesByPosted(){
    var list, c1, c2, article1, article2, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("articleList");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      article1 = b[i].getElementsByTagName("p")
      article2 = b[i + 1].getElementsByTagName("p")
      if (dir == "asc") {
        if (article1[1].innerHTML.toLowerCase() > article2[1].innerHTML.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (article1[1].innerHTML.toLowerCase() < article2[1].innerHTML.toLowerCase()) {
          /* If next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}