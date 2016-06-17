      $(document).ready(function ($) {
        $("#example-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'consolidated_screening_list'
        });

        $("#example-trade-leads-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'trade_leads'
        });

        $("#example-trade-events-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'trade_events'
        });

        $("#example-useac-locations-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'useac_locations'
        });

        $("#example-ita-office-locations-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'ita_office_locations'
        });
      });
