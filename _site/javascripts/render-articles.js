
                                                $(document).ready(function() {
                                                                get_results2();
                                                });
                                                function get_results2()
                                                {
                                                                $.getJSON('https://api.govwizely.com/v2/trade_articles/search?api_key=-DgaM8IefU4280JDV36SHZC1&size=5', function(d)
                                                                {
                                                                                $("#results_container2").empty();
                                                                                for (x in d.results)
                                                                                {
                                                                                                row = '<div class="box-style-3"><div class="icon-container default-bg"><i class="fa fa-newspaper-o"></i></div><div class="body" id="result_' + x + '"> <h4 class="result_seo_metadata_title text-thin">' + d.results[x].seo_metadata_title + '</h4><h5 class="result_creation_date">' + d.results[x].creation_date +  '</h5><p class="result_seo_metadata_description">' + d.results[x].seo_metadata_description + '</p>' + '<hr></div>'
                                                                                                if (x < d.results.length-1)
                                                                                                {
                                                                                                                row = row ;
                                                                                                }
                                                                                                row = row + "</div>";
                                                                                                $("#results_container2").append(row);

                                                                                }

                                                                });
                                                }
