
                                                $(document).ready(function() {
                                                                get_results2();
                                                });
                                                function get_results2()
                                                {
                                                                $.getJSON('https://api.trade.gov/trade_events/search?api_key=_aZaWWLd8jSl8Ha4S6Xv7OMI&countries=DE', function(d)
                                                                {
                                                                                $("#results_container2").empty();
                                                                                for (x in d.results)
                                                                                {
                                                                                                row = '<div class="box-style-3"><div class="icon-container default-bg"><i class="fa fa-calendar"></i></div><div class="body" id="result_' + x + '">' + '<a class="registration_link" href="' + d.results[x].registration_link + '"><h4 class="result_event_name text-thin">' + d.results[x].event_name + '</h4></a><h7 class="result_start_date">' + d.results[x].start_date +  '</h7>' + '<h7 class="result_url">' + d.results[x].url + '</h7>' + '</div>'
                                                                                                if (x < d.results.length-1)
                                                                                                {
                                                                                                                row = row ;
                                                                                                }
                                                                                                row = row + "</div>";
                                                                                                $("#results_container2").append(row);

                                                                                }

                                                                });
                                                }


                                                $(document).ready(function() {
                                                                get_results3();
                                                });
                                                function get_results3()
                                                {
                                                                $.getJSON('https://api.govwizely.com/v2/trade_articles/search?api_key=-DgaM8IefU4280JDV36SHZC1&size=5', function(d)
                                                                {
                                                                                $("#results_container3").empty();
                                                                                for (x in d.results)
                                                                                {
                                                                                                row = '<div class="box-style-3"><div class="icon-container default-bg"><i class="fa fa-newspaper-o"></i></div><div class="body" id="result_' + x + '"> <h4 class="result_seo_metadata_title text-thin">' + d.results[x].seo_metadata_title + '</h4><h7 class="result_creation_date">' + d.results[x].creation_date +  '</h7><h7 class="result_seo_metadata_description">' + d.results[x].seo_metadata_description + '</h7>' + '</div>'
                                                                                                if (x < d.results.length-1)
                                                                                                {
                                                                                                                row = row ;
                                                                                                }
                                                                                                row = row + "</div>";
                                                                                                $("#results_container3").append(row);

                                                                                }

                                                                });
                                                }



                                                $(document).ready(function() {
                                                                get_results4();
                                                });
                                                function get_results4()
                                                {
                                                                $.getJSON('https://api.govwizely.com/ita_faqs/search?api_key=-DgaM8IefU4280JDV36SHZC1&size=3', function(d)
                                                                {
                                                                                $("#results_container4").empty();
                                                                                for (x in d.results)
                                                                                {
                                                                                                row = '<div class="box-style-3"><div class="icon-container default-bg"><i class="fa fa-question-circle"></i></div><div class="body" id="result_' + x + '"> <h4 class="result_question text-thin">' + d.results[x].question + '</h4><h7 class="result_update_date">' + d.results[x].update_date +  '</h7><h7 class="result_answer">' + d.results[x].answer + '</h7>' + '</div>'
                                                                                                if (x < d.results.length-1)
                                                                                                {
                                                                                                                row = row ;
                                                                                                }
                                                                                                row = row + "</div>";
                                                                                                $("#results_container4").append(row);

                                                                                }

                                                                });
                                                }

