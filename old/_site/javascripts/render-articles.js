
                                                $(document).ready(function() {
                                                                get_results2();
                                                });
                                                function get_results2()
                                                {
                                                                $.getJSON('https://pluto.kerits.org/v1/articles/search?q=trade&types=country+commercial+guide,top+markets+report', function(d)
                                                                {
                                                                                $("#results_container2").empty();
                                                                                for (x in d.results)
                                                                                {
                                                                                                row = '<div class="listing-item"><div class="listing-item-body clearfix"><div class="box-style-3"><div class="icon-container default-bg"><i class="fa fa-newspaper-o"></i></div><div class="body" id="result_' + x + '">' + '<a class="url" href="' + d.results[x].url + '"><h4 class="result_title title">' + d.results[x].title + '</h4></a><h7 class="result_snippet">' + d.results[x].snippet + '</h7>' + '</div></div></div>'
                                                                                                if (x < d.results.length-1)
                                                                                                {
                                                                                                                row = row ;
                                                                                                }
                                                                                                row = row + "</div>";
                                                                                                $("#results_container2").append(row);

                                                                                }

                                                                });
                                                }
