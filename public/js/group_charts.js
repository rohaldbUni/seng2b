var chartDataMultiPanel = [];
generateChartDataMultiPanel();


function generateChartDataMultiPanel() {
    var firstDate = new Date();
    firstDate.setHours( 0, 0, 0, 0 );
    firstDate.setDate( firstDate.getDate() - 2000 );
    for ( var i = 0; i < 2000; i++ ) {
      var newDate = new Date( firstDate );
      newDate.setDate( newDate.getDate() + i );
      var open = Math.round( Math.random() * ( 30 ) + 100 );
      var close = open + Math.round( Math.random() * ( 15 ) - Math.random() * 10 );
      var low;
      if ( open < close ) {
        low = open - Math.round( Math.random() * 5 );
      } else {
        low = close - Math.round( Math.random() * 5 );
      }
      var high;
      if ( open < close ) {
        high = close + Math.round( Math.random() * 5 );
      } else {
        high = open + Math.round( Math.random() * 5 );
      }
      var volume = Math.round( Math.random() * ( 1000 + i ) ) + 100 + i;
      var value = Math.round( Math.random() * ( 30 ) + 100 );

      chartDataMultiPanel[ i ] = ( {
        "date": newDate,
        "open": open,
        "close": close,
        "high": high,
        "low": low,
        "volume": volume,
        "value": value
      } );
    }
}


var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];

generateChartData();

function generateChartData() {
  var firstDate = new Date();
  firstDate.setDate( firstDate.getDate() - 500 );
  firstDate.setHours( 0, 0, 0, 0 );

  var a1 = 1500;
  var b1 = 1500;
  var a2 = 1700;
  var b2  = 1700;
  var a3 = 1600;
  var b3 = 1600;
  var a4 = 1400;
  var b4 = 1400;

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    a1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    chartData1.push( {
      "date": newDate,
      "value": a1,
      "volume": b1 + 1500
    } );
    chartData2.push( {
      "date": newDate,
      "value": a2,
      "volume": b2 + 1500
    } );
    chartData3.push( {
      "date": newDate,
      "value": a3,
      "volume": b3 + 1500
    } );
    chartData4.push( {
      "date": newDate,
      "value": a4,
      "volume": b4 + 1500
    } );
  }
}


var chart = AmCharts.makeChart( "chartdiv3", {
  "type": "stock",
  "theme": "light",
  "dataSets": [ {
      "title": "first data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData1,
      "categoryField": "date"
    }, {
      "title": "second data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData2,
      "categoryField": "date"
    }, {
      "title": "third data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData3,
      "categoryField": "date"
    }, {
      "title": "fourth data set",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData4,
      "categoryField": "date"
    }
  ],

  "panels": [ {
    "showCategoryAxis": false,
    "title": "Value",
    "percentHeight": 70,
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "comparable": true,
      "compareField": "value",
      "balloonText": "[[title]]:<b>[[value]]</b>",
      "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>"
    } ],
    "stockLegend": {
      "periodValueTextComparing": "[[percents.value.close]]%",
      "periodValueTextRegular": "[[value.close]]"
    }
  }, {
    "title": "Volume",
    "percentHeight": 30,
    "stockGraphs": [ {
      "valueField": "volume",
      "type": "column",
      "showBalloon": false,
      "fillAlphas": 1
    } ],
    "stockLegend": {
      "periodValueTextRegular": "[[value.close]]"
    }
  } ],

  "chartScrollbarSettings": {
    "graph": "g1"
  },

  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "valueLineAlpha": 0.5
  },

  "periodSelector": {
    "position": "left",
    "periods": [ {
      "period": "MM",
      "selected": true,
      "count": 1,
      "label": "1 month"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 year"
    }, {
      "period": "YTD",
      "label": "YTD"
    }, {
      "period": "MAX",
      "label": "MAX"
    } ]
  },

  "dataSetSelector": {
    "position": "left"
  },

  "export": {
    "enabled": true
  }
} );


//function generateMultiplePanelsChart(chartData){
  var chart = AmCharts.makeChart( "chartdiv2", {
    "type": "stock",
    "theme": "light",
    "dataSets": [ {
      "fieldMappings": [ {
        "fromField": "open",
        "toField": "open"
      }, {
        "fromField": "close",
        "toField": "close"
      }, {
        "fromField": "high",
        "toField": "high"
      }, {
        "fromField": "low",
        "toField": "low"
      }, {
        "fromField": "volume",
        "toField": "volume"
      }, {
        "fromField": "value",
        "toField": "value"
      } ],
      "color": "#7f8da9",
      "dataProvider": chartDataMultiPanel,
      "title": "West Stock",
      "categoryField": "date"
    }, {
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      } ],
      "color": "#fac314",
      "dataProvider": chartDataMultiPanel,
      "compared": true,
      "title": "East Stock",
      "categoryField": "date"
    } ],


    "panels": [ {
        "title": "Value",
        "showCategoryAxis": false,
        "percentHeight": 70,
        "valueAxes": [ {
          "id": "v1",
          "dashLength": 5
        } ],

        "categoryAxis": {
          "dashLength": 5
        },

        "stockGraphs": [ {
          "type": "candlestick",
          "id": "g1",
          "openField": "open",
          "closeField": "close",
          "highField": "high",
          "lowField": "low",
          "valueField": "close",
          "lineColor": "#7f8da9",
          "fillColors": "#7f8da9",
          "negativeLineColor": "#db4c3c",
          "negativeFillColors": "#db4c3c",
          "fillAlphas": 1,
          "useDataSetColors": false,
          "comparable": true,
          "compareField": "value",
          "showBalloon": false,
          "proCandlesticks": true
        } ],

        "stockLegend": {
          "valueTextRegular": undefined,
          "periodValueTextComparing": "[[percents.value.close]]%"
        }
      },

      {
        "title": "Volume",
        "percentHeight": 30,
        "marginTop": 1,
        "showCategoryAxis": true,
        "valueAxes": [ {
          "dashLength": 5
        } ],

        "categoryAxis": {
          "dashLength": 5
        },

        "stockGraphs": [ {
          "valueField": "volume",
          "type": "column",
          "showBalloon": false,
          "fillAlphas": 1
        } ],

        "stockLegend": {
          "markerType": "none",
          "markerSize": 0,
          "labelText": "",
          "periodValueTextRegular": "[[value.close]]"
        }
      }
    ],

    "chartScrollbarSettings": {
      "graph": "g1",
      "graphType": "line",
      "usePeriod": "WW"
    },

    "chartCursorSettings": {
      "valueLineBalloonEnabled": true,
      "valueLineEnabled": true
    },

    "periodSelector": {
      "position": "bottom",
      "periods": [ {
        "period": "DD",
        "count": 10,
        "label": "10 days"
      }, {
        "period": "MM",
        "selected": true,
        "count": 1,
        "label": "1 month"
      }, {
        "period": "YYYY",
        "count": 1,
        "label": "1 year"
      }, {
        "period": "YTD",
        "label": "YTD"
      }, {
        "period": "MAX",
        "label": "MAX"
      } ]
    },
    "export": {
      "enabled": true
    }
  } );
//}

// This graph takes a long time to load and display. Consider selecting a different graph for our purpose which still aligns with our user requirements
// Potential 'need' for this 3rd graph is eliminated via our inclusion of leaderboards using non stock graphs from AMchart
/*
var actualValues = [ {
  "date": "2016-03-09",
  "APPL": 101.120003,
  "MSFT": 52.84,
  "ORCL": 38.48,
  "FB": 107.510002,
  "TWTR": 17.66,
  "AMZN": 559.469971,
  "EBAY": 23.950001,
  "YHOO": 33.509998
}, {
  "date": "2016-03-10",
  "APPL": 101.169998,
  "MSFT": 52.049999,
  "ORCL": 38.049999,
  "FB": 107.32,
  "TWTR": 16.610001,
  "AMZN": 558.929993,
  "EBAY": 23.690001,
  "YHOO": 32.82
}, {
  "date": "2016-03-11",
  "APPL": 102.260002,
  "MSFT": 53.07,
  "ORCL": 38.950001,
  "FB": 109.410004,
  "TWTR": 16.809999,
  "AMZN": 569.609985,
  "EBAY": 24.02,
  "YHOO": 33.810001
}, {
  "date": "2016-03-14",
  "APPL": 102.519997,
  "MSFT": 53.169998,
  "ORCL": 38.700001,
  "FB": 109.889999,
  "TWTR": 17.120001,
  "AMZN": 573.369995,
  "EBAY": 24.280001,
  "YHOO": 33.580002
}, {
  "date": "2016-03-15",
  "APPL": 104.580002,
  "MSFT": 53.59,
  "ORCL": 38.740002,
  "FB": 110.669998,
  "TWTR": 16.190001,
  "AMZN": 577.02002,
  "EBAY": 23.58,
  "YHOO": 33.259998
}, {
  "date": "2016-03-16",
  "APPL": 105.970001,
  "MSFT": 54.349998,
  "ORCL": 40.220001,
  "FB": 112.18,
  "TWTR": 16.700001,
  "AMZN": 574.27002,
  "EBAY": 23.68,
  "YHOO": 34.009998
}, {
  "date": "2016-03-17",
  "APPL": 105.800003,
  "MSFT": 54.66,
  "ORCL": 40.610001,
  "FB": 111.019997,
  "TWTR": 16.85,
  "AMZN": 559.440002,
  "EBAY": 23.76,
  "YHOO": 34.279999
}, {
  "date": "2016-03-18",
  "APPL": 105.919998,
  "MSFT": 53.490002,
  "ORCL": 41.48,
  "FB": 111.449997,
  "TWTR": 16.85,
  "AMZN": 552.080017,
  "EBAY": 23.77,
  "YHOO": 35.169998
}, {
  "date": "2016-03-21",
  "APPL": 105.910004,
  "MSFT": 53.860001,
  "ORCL": 41.610001,
  "FB": 111.849998,
  "TWTR": 16.889999,
  "AMZN": 553.97998,
  "EBAY": 24.34,
  "YHOO": 35.470001
}, {
  "date": "2016-03-22",
  "APPL": 106.720001,
  "MSFT": 54.07,
  "ORCL": 41.380001,
  "FB": 112.25,
  "TWTR": 16.860001,
  "AMZN": 560.47998,
  "EBAY": 24.129999,
  "YHOO": 35.41
}, {
  "date": "2016-03-23",
  "APPL": 106.129997,
  "MSFT": 53.970001,
  "ORCL": 40.75,
  "FB": 112.540001,
  "TWTR": 16.01,
  "AMZN": 569.630005,
  "EBAY": 24.17,
  "YHOO": 34.799999
}, {
  "date": "2016-03-24",
  "APPL": 105.669998,
  "MSFT": 54.209999,
  "ORCL": 40.970001,
  "FB": 113.050003,
  "TWTR": 15.91,
  "AMZN": 582.950012,
  "EBAY": 24.33,
  "YHOO": 34.860001
}, {
  "date": "2016-03-28",
  "APPL": 105.190002,
  "MSFT": 53.540001,
  "ORCL": 40.619999,
  "FB": 113.690002,
  "TWTR": 15.6,
  "AMZN": 579.869995,
  "EBAY": 24.120001,
  "YHOO": 35.23
}, {
  "date": "2016-03-29",
  "APPL": 107.68,
  "MSFT": 54.709999,
  "ORCL": 40.700001,
  "FB": 116.139999,
  "TWTR": 15.97,
  "AMZN": 593.859985,
  "EBAY": 24.1,
  "YHOO": 36.32
}, {
  "date": "2016-03-30",
  "APPL": 109.559998,
  "MSFT": 55.049999,
  "ORCL": 40.970001,
  "FB": 114.699997,
  "TWTR": 16.360001,
  "AMZN": 598.690002,
  "EBAY": 24.040001,
  "YHOO": 36.560001
}, {
  "date": "2016-03-31",
  "APPL": 108.989998,
  "MSFT": 55.23,
  "ORCL": 40.91,
  "FB": 114.099998,
  "TWTR": 16.549999,
  "AMZN": 593.640015,
  "EBAY": 23.860001,
  "YHOO": 36.810001
}, {
  "date": "2016-04-01",
  "APPL": 109.989998,
  "MSFT": 55.57,
  "ORCL": 41.16,
  "FB": 116.059998,
  "TWTR": 15.98,
  "AMZN": 598.5,
  "EBAY": 23.879999,
  "YHOO": 36.48
}, {
  "date": "2016-04-04",
  "APPL": 111.120003,
  "MSFT": 55.43,
  "ORCL": 41.07,
  "FB": 112.550003,
  "TWTR": 17.09,
  "AMZN": 593.190002,
  "EBAY": 24.030001,
  "YHOO": 37.02
}, {
  "date": "2016-04-05",
  "APPL": 109.809998,
  "MSFT": 54.560001,
  "ORCL": 40.529999,
  "FB": 112.220001,
  "TWTR": 17.049999,
  "AMZN": 586.140015,
  "EBAY": 24.389999,
  "YHOO": 36.41
}, {
  "date": "2016-04-06",
  "APPL": 110.959999,
  "MSFT": 55.119999,
  "ORCL": 40.75,
  "FB": 113.709999,
  "TWTR": 17.26,
  "AMZN": 602.080017,
  "EBAY": 25.43,
  "YHOO": 36.66
}, {
  "date": "2016-04-07",
  "APPL": 108.540001,
  "MSFT": 54.459999,
  "ORCL": 39.970001,
  "FB": 113.639999,
  "TWTR": 16.98,
  "AMZN": 591.429993,
  "EBAY": 24.1,
  "YHOO": 36.169998
}, {
  "date": "2016-04-08",
  "APPL": 108.660004,
  "MSFT": 54.419998,
  "ORCL": 40.360001,
  "FB": 110.629997,
  "TWTR": 16.65,
  "AMZN": 594.599976,
  "EBAY": 24.07,
  "YHOO": 36.07
}, {
  "date": "2016-04-11",
  "APPL": 109.019997,
  "MSFT": 54.310001,
  "ORCL": 40.389999,
  "FB": 108.989998,
  "TWTR": 16.51,
  "AMZN": 595.929993,
  "EBAY": 24.059999,
  "YHOO": 36.48
}, {
  "date": "2016-04-12",
  "APPL": 110.440002,
  "MSFT": 54.650002,
  "ORCL": 40.419998,
  "FB": 110.610001,
  "TWTR": 16.57,
  "AMZN": 603.169983,
  "EBAY": 24.42,
  "YHOO": 36.66
}, {
  "date": "2016-04-13",
  "APPL": 112.040001,
  "MSFT": 55.349998,
  "ORCL": 41.310001,
  "FB": 110.510002,
  "TWTR": 17.370001,
  "AMZN": 614.820007,
  "EBAY": 25.08,
  "YHOO": 37.310001
}, {
  "date": "2016-04-14",
  "APPL": 112.099998,
  "MSFT": 55.360001,
  "ORCL": 41.240002,
  "FB": 110.839996,
  "TWTR": 17.530001,
  "AMZN": 620.75,
  "EBAY": 25.209999,
  "YHOO": 37.169998
}, {
  "date": "2016-04-15",
  "APPL": 109.849998,
  "MSFT": 55.650002,
  "ORCL": 41.02,
  "FB": 109.639999,
  "TWTR": 17.58,
  "AMZN": 625.890015,
  "EBAY": 25.219999,
  "YHOO": 36.509998
}, {
  "date": "2016-04-18",
  "APPL": 107.480003,
  "MSFT": 56.459999,
  "ORCL": 41.240002,
  "FB": 110.449997,
  "TWTR": 17.309999,
  "AMZN": 635.349976,
  "EBAY": 25.309999,
  "YHOO": 36.52
}, {
  "date": "2016-04-19",
  "APPL": 106.910004,
  "MSFT": 56.389999,
  "ORCL": 41.060001,
  "FB": 112.290001,
  "TWTR": 16.92,
  "AMZN": 627.900024,
  "EBAY": 24.299999,
  "YHOO": 36.330002
}, {
  "date": "2016-04-20",
  "APPL": 107.129997,
  "MSFT": 55.59,
  "ORCL": 41.099998,
  "FB": 112.419998,
  "TWTR": 17.4,
  "AMZN": 632.98999,
  "EBAY": 24.66,
  "YHOO": 37.84
}, {
  "date": "2016-04-21",
  "APPL": 105.970001,
  "MSFT": 55.779999,
  "ORCL": 40.990002,
  "FB": 113.440002,
  "TWTR": 17.51,
  "AMZN": 631,
  "EBAY": 24.690001,
  "YHOO": 37.669998
}, {
  "date": "2016-04-22",
  "APPL": 105.68,
  "MSFT": 51.779999,
  "ORCL": 40.700001,
  "FB": 110.559998,
  "TWTR": 17.23,
  "AMZN": 620.5,
  "EBAY": 24.4,
  "YHOO": 37.48
}, {
  "date": "2016-04-25",
  "APPL": 105.080002,
  "MSFT": 52.110001,
  "ORCL": 40.779999,
  "FB": 110.099998,
  "TWTR": 17.09,
  "AMZN": 626.200012,
  "EBAY": 24.219999,
  "YHOO": 37.23
}, {
  "date": "2016-04-26",
  "APPL": 104.349998,
  "MSFT": 51.439999,
  "ORCL": 40.650002,
  "FB": 108.760002,
  "TWTR": 17.75,
  "AMZN": 616.880005,
  "EBAY": 24.49,
  "YHOO": 37.110001
}, {
  "date": "2016-04-27",
  "APPL": 97.82,
  "MSFT": 50.939999,
  "ORCL": 40.849998,
  "FB": 108.889999,
  "TWTR": 14.86,
  "AMZN": 606.570007,
  "EBAY": 25.27,
  "YHOO": 36.950001
}, {
  "date": "2016-04-28",
  "APPL": 94.830002,
  "MSFT": 49.900002,
  "ORCL": 40.330002,
  "FB": 116.730003,
  "TWTR": 14.64,
  "AMZN": 602,
  "EBAY": 24.620001,
  "YHOO": 36.59
}, {
  "date": "2016-04-29",
  "APPL": 93.739998,
  "MSFT": 49.869999,
  "ORCL": 39.860001,
  "FB": 117.580002,
  "TWTR": 14.62,
  "AMZN": 659.590027,
  "EBAY": 24.43,
  "YHOO": 36.599998
}, {
  "date": "2016-05-02",
  "APPL": 93.639999,
  "MSFT": 50.610001,
  "ORCL": 40.299999,
  "FB": 118.57,
  "TWTR": 14.4,
  "AMZN": 683.849976,
  "EBAY": 24.26,
  "YHOO": 36.529999
}, {
  "date": "2016-05-03",
  "APPL": 95.18,
  "MSFT": 49.779999,
  "ORCL": 39.68,
  "FB": 117.43,
  "TWTR": 14.01,
  "AMZN": 671.320007,
  "EBAY": 23.98,
  "YHOO": 36.009998
}, {
  "date": "2016-05-04",
  "APPL": 94.190002,
  "MSFT": 49.869999,
  "ORCL": 39.290001,
  "FB": 118.059998,
  "TWTR": 14.84,
  "AMZN": 670.900024,
  "EBAY": 23.799999,
  "YHOO": 36
}, {
  "date": "2016-05-05",
  "APPL": 93.239998,
  "MSFT": 49.939999,
  "ORCL": 39.23,
  "FB": 117.809998,
  "TWTR": 14.12,
  "AMZN": 659.090027,
  "EBAY": 23.809999,
  "YHOO": 36.939999
}, {
  "date": "2016-05-06",
  "APPL": 92.720001,
  "MSFT": 50.389999,
  "ORCL": 39.41,
  "FB": 119.489998,
  "TWTR": 14.4,
  "AMZN": 673.950012,
  "EBAY": 23.82,
  "YHOO": 37.23
}, {
  "date": "2016-05-09",
  "APPL": 92.790001,
  "MSFT": 50.07,
  "ORCL": 39.360001,
  "FB": 119.239998,
  "TWTR": 14.2,
  "AMZN": 679.75,
  "EBAY": 24.02,
  "YHOO": 37.18
}, {
  "date": "2016-05-10",
  "APPL": 93.419998,
  "MSFT": 51.02,
  "ORCL": 40.02,
  "FB": 120.5,
  "TWTR": 14.63,
  "AMZN": 703.070007,
  "EBAY": 24.16,
  "YHOO": 37.439999
}, {
  "date": "2016-05-11",
  "APPL": 92.510002,
  "MSFT": 51.049999,
  "ORCL": 39.650002,
  "FB": 119.519997,
  "TWTR": 14.59,
  "AMZN": 713.22998,
  "EBAY": 23.74,
  "YHOO": 37.369999
}, {
  "date": "2016-05-12",
  "APPL": 90.339996,
  "MSFT": 51.509998,
  "ORCL": 39.82,
  "FB": 120.279999,
  "TWTR": 14.08,
  "AMZN": 717.929993,
  "EBAY": 23.58,
  "YHOO": 37.029999
}, {
  "date": "2016-05-13",
  "APPL": 90.519997,
  "MSFT": 51.080002,
  "ORCL": 39.610001,
  "FB": 119.809998,
  "TWTR": 14.1,
  "AMZN": 709.919983,
  "EBAY": 23.780001,
  "YHOO": 36.48
}, {
  "date": "2016-05-16",
  "APPL": 93.879997,
  "MSFT": 51.830002,
  "ORCL": 39.970001,
  "FB": 118.669998,
  "TWTR": 14.29,
  "AMZN": 710.659973,
  "EBAY": 23.799999,
  "YHOO": 37.48
}, {
  "date": "2016-05-17",
  "APPL": 93.489998,
  "MSFT": 50.509998,
  "ORCL": 39.599998,
  "FB": 117.349998,
  "TWTR": 14.34,
  "AMZN": 695.27002,
  "EBAY": 23.27,
  "YHOO": 37.27
}, {
  "date": "2016-05-18",
  "APPL": 94.559998,
  "MSFT": 50.810001,
  "ORCL": 39.470001,
  "FB": 117.650002,
  "TWTR": 14.14,
  "AMZN": 697.450012,
  "EBAY": 23.690001,
  "YHOO": 37.240002
}, {
  "date": "2016-05-19",
  "APPL": 94.199997,
  "MSFT": 50.32,
  "ORCL": 38.84,
  "FB": 116.809998,
  "TWTR": 14.15,
  "AMZN": 698.52002,
  "EBAY": 23.42,
  "YHOO": 37.02
}, {
  "date": "2016-05-20",
  "APPL": 95.220001,
  "MSFT": 50.619999,
  "ORCL": 39.41,
  "FB": 117.349998,
  "TWTR": 14.43,
  "AMZN": 702.799988,
  "EBAY": 23.65,
  "YHOO": 36.5
}, {
  "date": "2016-05-23",
  "APPL": 96.43,
  "MSFT": 50.029999,
  "ORCL": 39.18,
  "FB": 115.970001,
  "TWTR": 14.41,
  "AMZN": 696.75,
  "EBAY": 23.459999,
  "YHOO": 36.66
}, {
  "date": "2016-05-24",
  "APPL": 97.900002,
  "MSFT": 51.59,
  "ORCL": 39.900002,
  "FB": 117.699997,
  "TWTR": 14.03,
  "AMZN": 704.200012,
  "EBAY": 24.049999,
  "YHOO": 37.529999
}, {
  "date": "2016-05-25",
  "APPL": 99.620003,
  "MSFT": 52.119999,
  "ORCL": 40.130001,
  "FB": 117.889999,
  "TWTR": 14.41,
  "AMZN": 708.349976,
  "EBAY": 24.040001,
  "YHOO": 35.59
}, {
  "date": "2016-05-26",
  "APPL": 100.410004,
  "MSFT": 51.889999,
  "ORCL": 39.950001,
  "FB": 119.470001,
  "TWTR": 14.3,
  "AMZN": 714.909973,
  "EBAY": 24.120001,
  "YHOO": 36.759998
}, {
  "date": "2016-05-27",
  "APPL": 100.349998,
  "MSFT": 52.32,
  "ORCL": 40.07,
  "FB": 119.379997,
  "TWTR": 15.1,
  "AMZN": 712.23999,
  "EBAY": 24.360001,
  "YHOO": 37.82
}, {
  "date": "2016-05-31",
  "APPL": 99.860001,
  "MSFT": 53,
  "ORCL": 40.200001,
  "FB": 118.809998,
  "TWTR": 15.22,
  "AMZN": 722.789978,
  "EBAY": 24.459999,
  "YHOO": 37.939999
}, {
  "date": "2016-06-01",
  "APPL": 98.459999,
  "MSFT": 52.849998,
  "ORCL": 40.259998,
  "FB": 118.779999,
  "TWTR": 15.02,
  "AMZN": 719.440002,
  "EBAY": 24.07,
  "YHOO": 36.650002
}, {
  "date": "2016-06-02",
  "APPL": 97.720001,
  "MSFT": 52.48,
  "ORCL": 38.66,
  "FB": 118.93,
  "TWTR": 15.2,
  "AMZN": 728.23999,
  "EBAY": 24.25,
  "YHOO": 37.150002
}, {
  "date": "2016-06-03",
  "APPL": 97.919998,
  "MSFT": 51.790001,
  "ORCL": 39.099998,
  "FB": 118.470001,
  "TWTR": 15.2,
  "AMZN": 725.539978,
  "EBAY": 23.98,
  "YHOO": 36.599998
}, {
  "date": "2016-06-06",
  "APPL": 98.629997,
  "MSFT": 52.130001,
  "ORCL": 39.439999,
  "FB": 118.790001,
  "TWTR": 15.27,
  "AMZN": 726.72998,
  "EBAY": 23.99,
  "YHOO": 37.07
}, {
  "date": "2016-06-07",
  "APPL": 99.029999,
  "MSFT": 52.099998,
  "ORCL": 39.130001,
  "FB": 117.760002,
  "TWTR": 15,
  "AMZN": 723.73999,
  "EBAY": 24.280001,
  "YHOO": 36.73
}, {
  "date": "2016-06-08",
  "APPL": 98.940002,
  "MSFT": 52.040001,
  "ORCL": 39.279999,
  "FB": 118.389999,
  "TWTR": 14.95,
  "AMZN": 726.640015,
  "EBAY": 24.23,
  "YHOO": 36.970001
}, {
  "date": "2016-06-09",
  "APPL": 99.650002,
  "MSFT": 51.619999,
  "ORCL": 39.049999,
  "FB": 118.559998,
  "TWTR": 14.6,
  "AMZN": 727.650024,
  "EBAY": 24.33,
  "YHOO": 37.349998
}, {
  "date": "2016-06-10",
  "APPL": 98.830002,
  "MSFT": 51.48,
  "ORCL": 38.740002,
  "FB": 116.620003,
  "TWTR": 14.02,
  "AMZN": 717.909973,
  "EBAY": 24.07,
  "YHOO": 36.830002
}, {
  "date": "2016-06-13",
  "APPL": 97.339996,
  "MSFT": 50.139999,
  "ORCL": 38.619999,
  "FB": 113.949997,
  "TWTR": 14.55,
  "AMZN": 715.23999,
  "EBAY": 23.889999,
  "YHOO": 36.470001
}, {
  "date": "2016-06-14",
  "APPL": 97.459999,
  "MSFT": 49.830002,
  "ORCL": 38.830002,
  "FB": 114.940002,
  "TWTR": 15.36,
  "AMZN": 719.299988,
  "EBAY": 23.879999,
  "YHOO": 37.400002
}, {
  "date": "2016-06-15",
  "APPL": 97.139999,
  "MSFT": 49.689999,
  "ORCL": 38.439999,
  "FB": 114.599998,
  "TWTR": 15.96,
  "AMZN": 714.26001,
  "EBAY": 23.959999,
  "YHOO": 37.32
}, {
  "date": "2016-06-16",
  "APPL": 97.550003,
  "MSFT": 50.389999,
  "ORCL": 38.639999,
  "FB": 114.389999,
  "TWTR": 15.87,
  "AMZN": 717.51001,
  "EBAY": 23.85,
  "YHOO": 37.389999
}, {
  "date": "2016-06-17",
  "APPL": 95.330002,
  "MSFT": 50.130001,
  "ORCL": 39.68,
  "FB": 113.019997,
  "TWTR": 16.1,
  "AMZN": 706.390015,
  "EBAY": 23.790001,
  "YHOO": 36.939999
}, {
  "date": "2016-06-20",
  "APPL": 95.099998,
  "MSFT": 50.07,
  "ORCL": 39.73,
  "FB": 113.370003,
  "TWTR": 16.34,
  "AMZN": 714.01001,
  "EBAY": 24.57,
  "YHOO": 37.290001
}, {
  "date": "2016-06-21",
  "APPL": 95.910004,
  "MSFT": 51.189999,
  "ORCL": 39.990002,
  "FB": 114.379997,
  "TWTR": 16.32,
  "AMZN": 715.820007,
  "EBAY": 24.700001,
  "YHOO": 37.400002
}, {
  "date": "2016-06-22",
  "APPL": 95.550003,
  "MSFT": 50.990002,
  "ORCL": 40.009998,
  "FB": 113.910004,
  "TWTR": 16.129999,
  "AMZN": 710.599976,
  "EBAY": 24.34,
  "YHOO": 37.360001
}, {
  "date": "2016-06-23",
  "APPL": 96.099998,
  "MSFT": 51.91,
  "ORCL": 40.830002,
  "FB": 115.080002,
  "TWTR": 17.040001,
  "AMZN": 722.080017,
  "EBAY": 24.85,
  "YHOO": 37.779999
}, {
  "date": "2016-06-24",
  "APPL": 93.400002,
  "MSFT": 49.830002,
  "ORCL": 39.23,
  "FB": 112.080002,
  "TWTR": 16.440001,
  "AMZN": 698.960022,
  "EBAY": 23.129999,
  "YHOO": 36.240002
}, {
  "date": "2016-06-27",
  "APPL": 92.040001,
  "MSFT": 48.43,
  "ORCL": 38.48,
  "FB": 108.970001,
  "TWTR": 15.84,
  "AMZN": 691.359985,
  "EBAY": 22.719999,
  "YHOO": 35.220001
}, {
  "date": "2016-06-28",
  "APPL": 93.589996,
  "MSFT": 49.439999,
  "ORCL": 39.130001,
  "FB": 112.699997,
  "TWTR": 16.42,
  "AMZN": 707.950012,
  "EBAY": 22.99,
  "YHOO": 36.040001
}, {
  "date": "2016-06-29",
  "APPL": 94.400002,
  "MSFT": 50.540001,
  "ORCL": 40.549999,
  "FB": 114.160004,
  "TWTR": 16.83,
  "AMZN": 715.599976,
  "EBAY": 23.309999,
  "YHOO": 36.860001
}, {
  "date": "2016-06-30",
  "APPL": 95.599998,
  "MSFT": 51.169998,
  "ORCL": 40.93,
  "FB": 114.279999,
  "TWTR": 16.91,
  "AMZN": 715.619995,
  "EBAY": 23.41,
  "YHOO": 37.560001
}, {
  "date": "2016-07-01",
  "APPL": 95.889999,
  "MSFT": 51.16,
  "ORCL": 40.860001,
  "FB": 114.190002,
  "TWTR": 17.280001,
  "AMZN": 725.679993,
  "EBAY": 23.780001,
  "YHOO": 37.990002
}, {
  "date": "2016-07-05",
  "APPL": 94.989998,
  "MSFT": 51.169998,
  "ORCL": 40.400002,
  "FB": 114.199997,
  "TWTR": 17.139999,
  "AMZN": 728.099976,
  "EBAY": 23.76,
  "YHOO": 37.5
}, {
  "date": "2016-07-06",
  "APPL": 95.529999,
  "MSFT": 51.380001,
  "ORCL": 40.529999,
  "FB": 116.699997,
  "TWTR": 17.200001,
  "AMZN": 737.609985,
  "EBAY": 23.83,
  "YHOO": 37.509998
}, {
  "date": "2016-07-07",
  "APPL": 95.940002,
  "MSFT": 51.380001,
  "ORCL": 40.529999,
  "FB": 115.849998,
  "TWTR": 17.370001,
  "AMZN": 736.570007,
  "EBAY": 23.93,
  "YHOO": 37.52
}, {
  "date": "2016-07-08",
  "APPL": 96.68,
  "MSFT": 52.299999,
  "ORCL": 40.869999,
  "FB": 117.239998,
  "TWTR": 18.08,
  "AMZN": 745.809998,
  "EBAY": 24.610001,
  "YHOO": 37.740002
}, {
  "date": "2016-07-11",
  "APPL": 96.980003,
  "MSFT": 52.59,
  "ORCL": 40.779999,
  "FB": 117.870003,
  "TWTR": 17.709999,
  "AMZN": 753.780029,
  "EBAY": 24.860001,
  "YHOO": 37.959999
}, {
  "date": "2016-07-12",
  "APPL": 97.419998,
  "MSFT": 53.209999,
  "ORCL": 41.419998,
  "FB": 117.93,
  "TWTR": 18.1,
  "AMZN": 748.210022,
  "EBAY": 25.129999,
  "YHOO": 37.889999
}, {
  "date": "2016-07-13",
  "APPL": 96.870003,
  "MSFT": 53.509998,
  "ORCL": 41.459999,
  "FB": 116.779999,
  "TWTR": 17.74,
  "AMZN": 742.630005,
  "EBAY": 25.120001,
  "YHOO": 37.639999
}, {
  "date": "2016-07-14",
  "APPL": 98.790001,
  "MSFT": 53.740002,
  "ORCL": 41.669998,
  "FB": 117.290001,
  "TWTR": 17.959999,
  "AMZN": 741.200012,
  "EBAY": 26.08,
  "YHOO": 37.959999
}, {
  "date": "2016-07-15",
  "APPL": 98.779999,
  "MSFT": 53.700001,
  "ORCL": 41.77,
  "FB": 116.860001,
  "TWTR": 18.08,
  "AMZN": 735.440002,
  "EBAY": 26.34,
  "YHOO": 37.720001
}, {
  "date": "2016-07-18",
  "APPL": 99.830002,
  "MSFT": 53.959999,
  "ORCL": 41.639999,
  "FB": 119.370003,
  "TWTR": 18.65,
  "AMZN": 736.070007,
  "EBAY": 26.49,
  "YHOO": 37.950001
}, {
  "date": "2016-07-19",
  "APPL": 99.870003,
  "MSFT": 53.09,
  "ORCL": 41.080002,
  "FB": 120.610001,
  "TWTR": 18.33,
  "AMZN": 739.950012,
  "EBAY": 26.5,
  "YHOO": 38.169998
}, {
  "date": "2016-07-20",
  "APPL": 99.959999,
  "MSFT": 55.91,
  "ORCL": 41.25,
  "FB": 121.919998,
  "TWTR": 18.559999,
  "AMZN": 745.719971,
  "EBAY": 26.99,
  "YHOO": 38.900002
}, {
  "date": "2016-07-21",
  "APPL": 99.43,
  "MSFT": 55.799999,
  "ORCL": 41.07,
  "FB": 120.610001,
  "TWTR": 18.389999,
  "AMZN": 744.429993,
  "EBAY": 29.93,
  "YHOO": 38.849998
}, {
  "date": "2016-07-22",
  "APPL": 98.660004,
  "MSFT": 56.57,
  "ORCL": 41.080002,
  "FB": 121,
  "TWTR": 18.370001,
  "AMZN": 744.859985,
  "EBAY": 30.49,
  "YHOO": 39.380001
}, {
  "date": "2016-07-25",
  "APPL": 97.339996,
  "MSFT": 56.73,
  "ORCL": 41.16,
  "FB": 121.629997,
  "TWTR": 18.65,
  "AMZN": 739.609985,
  "EBAY": 30.68,
  "YHOO": 38.32
}, {
  "date": "2016-07-26",
  "APPL": 96.669998,
  "MSFT": 56.759998,
  "ORCL": 40.939999,
  "FB": 121.220001,
  "TWTR": 18.450001,
  "AMZN": 735.590027,
  "EBAY": 31.4,
  "YHOO": 38.759998
}, {
  "date": "2016-07-27",
  "APPL": 102.949997,
  "MSFT": 56.189999,
  "ORCL": 40.93,
  "FB": 123.339996,
  "TWTR": 15.77,
  "AMZN": 736.669983,
  "EBAY": 31.309999,
  "YHOO": 38.66
}, {
  "date": "2016-07-28",
  "APPL": 104.339996,
  "MSFT": 56.209999,
  "ORCL": 41.189999,
  "FB": 125,
  "TWTR": 16.309999,
  "AMZN": 752.609985,
  "EBAY": 31.17,
  "YHOO": 38.52
}, {
  "date": "2016-07-29",
  "APPL": 104.209999,
  "MSFT": 56.68,
  "ORCL": 41.040001,
  "FB": 123.940002,
  "TWTR": 16.639999,
  "AMZN": 758.809998,
  "EBAY": 31.16,
  "YHOO": 38.189999
}, {
  "date": "2016-08-01",
  "APPL": 106.050003,
  "MSFT": 56.580002,
  "ORCL": 41.150002,
  "FB": 124.309998,
  "TWTR": 16.639999,
  "AMZN": 767.73999,
  "EBAY": 31.25,
  "YHOO": 38.799999
}, {
  "date": "2016-08-02",
  "APPL": 104.480003,
  "MSFT": 56.580002,
  "ORCL": 40.709999,
  "FB": 123.089996,
  "TWTR": 16.42,
  "AMZN": 760.580017,
  "EBAY": 30.790001,
  "YHOO": 38.57
}, {
  "date": "2016-08-03",
  "APPL": 105.790001,
  "MSFT": 56.970001,
  "ORCL": 40.709999,
  "FB": 122.510002,
  "TWTR": 17.610001,
  "AMZN": 754.640015,
  "EBAY": 30.950001,
  "YHOO": 38.389999
}, {
  "date": "2016-08-04",
  "APPL": 105.870003,
  "MSFT": 57.389999,
  "ORCL": 40.900002,
  "FB": 124.360001,
  "TWTR": 18.129999,
  "AMZN": 760.77002,
  "EBAY": 31.059999,
  "YHOO": 38.919998
}, {
  "date": "2016-08-05",
  "APPL": 107.480003,
  "MSFT": 57.959999,
  "ORCL": 41.130001,
  "FB": 125.150002,
  "TWTR": 18.26,
  "AMZN": 765.97998,
  "EBAY": 31.389999,
  "YHOO": 38.990002
}, {
  "date": "2016-08-08",
  "APPL": 108.370003,
  "MSFT": 58.060001,
  "ORCL": 41.16,
  "FB": 125.260002,
  "TWTR": 18.200001,
  "AMZN": 766.559998,
  "EBAY": 31.15,
  "YHOO": 39.240002
}, {
  "date": "2016-08-09",
  "APPL": 108.809998,
  "MSFT": 58.200001,
  "ORCL": 41.099998,
  "FB": 125.059998,
  "TWTR": 18.68,
  "AMZN": 768.309998,
  "EBAY": 31.110001,
  "YHOO": 39.240002
}, {
  "date": "2016-08-10",
  "APPL": 108,
  "MSFT": 58.02,
  "ORCL": 41.09,
  "FB": 124.879997,
  "TWTR": 19.040001,
  "AMZN": 768.559998,
  "EBAY": 31.120001,
  "YHOO": 39.93
}, {
  "date": "2016-08-11",
  "APPL": 107.93,
  "MSFT": 58.299999,
  "ORCL": 41.279999,
  "FB": 124.900002,
  "TWTR": 19.780001,
  "AMZN": 771.23999,
  "EBAY": 31.200001,
  "YHOO": 41.27
}, {
  "date": "2016-08-12",
  "APPL": 108.18,
  "MSFT": 57.939999,
  "ORCL": 41.09,
  "FB": 124.879997,
  "TWTR": 19.540001,
  "AMZN": 772.559998,
  "EBAY": 30.889999,
  "YHOO": 42.939999
}, {
  "date": "2016-08-15",
  "APPL": 109.480003,
  "MSFT": 58.119999,
  "ORCL": 41.389999,
  "FB": 123.900002,
  "TWTR": 20.860001,
  "AMZN": 768.48999,
  "EBAY": 31.049999,
  "YHOO": 42.669998
}, {
  "date": "2016-08-16",
  "APPL": 109.379997,
  "MSFT": 57.439999,
  "ORCL": 41.32,
  "FB": 123.300003,
  "TWTR": 20.4,
  "AMZN": 764.039978,
  "EBAY": 30.83,
  "YHOO": 42.490002
}, {
  "date": "2016-08-17",
  "APPL": 109.220001,
  "MSFT": 57.560001,
  "ORCL": 41.209999,
  "FB": 124.370003,
  "TWTR": 20.17,
  "AMZN": 764.630005,
  "EBAY": 30.610001,
  "YHOO": 42.700001
}, {
  "date": "2016-08-18",
  "APPL": 109.080002,
  "MSFT": 57.599998,
  "ORCL": 41.139999,
  "FB": 123.910004,
  "TWTR": 19,
  "AMZN": 764.460022,
  "EBAY": 30.52,
  "YHOO": 42.900002
}, {
  "date": "2016-08-19",
  "APPL": 109.360001,
  "MSFT": 57.619999,
  "ORCL": 41.32,
  "FB": 123.559998,
  "TWTR": 18.98,
  "AMZN": 757.309998,
  "EBAY": 30.629999,
  "YHOO": 43.02
}, {
  "date": "2016-08-22",
  "APPL": 108.510002,
  "MSFT": 57.669998,
  "ORCL": 41.220001,
  "FB": 124.150002,
  "TWTR": 18.549999,
  "AMZN": 759.47998,
  "EBAY": 30.620001,
  "YHOO": 42.52
}, {
  "date": "2016-08-23",
  "APPL": 108.849998,
  "MSFT": 57.889999,
  "ORCL": 41.5,
  "FB": 124.370003,
  "TWTR": 18.690001,
  "AMZN": 762.450012,
  "EBAY": 30.67,
  "YHOO": 42.599998
}, {
  "date": "2016-08-24",
  "APPL": 108.029999,
  "MSFT": 57.950001,
  "ORCL": 41.07,
  "FB": 123.480003,
  "TWTR": 18.25,
  "AMZN": 757.25,
  "EBAY": 31.25,
  "YHOO": 41.91
}, {
  "date": "2016-08-25",
  "APPL": 107.57,
  "MSFT": 58.169998,
  "ORCL": 41.099998,
  "FB": 123.889999,
  "TWTR": 18.32,
  "AMZN": 759.219971,
  "EBAY": 31.34,
  "YHOO": 42.029999
}, {
  "date": "2016-08-26",
  "APPL": 106.940002,
  "MSFT": 58.029999,
  "ORCL": 41.259998,
  "FB": 124.959999,
  "TWTR": 18.299999,
  "AMZN": 769,
  "EBAY": 31.309999,
  "YHOO": 42.27
}, {
  "date": "2016-08-29",
  "APPL": 106.82,
  "MSFT": 58.099998,
  "ORCL": 41.310001,
  "FB": 126.540001,
  "TWTR": 18.469999,
  "AMZN": 771.289978,
  "EBAY": 31.4,
  "YHOO": 42.259998
}, {
  "date": "2016-08-30",
  "APPL": 106,
  "MSFT": 57.889999,
  "ORCL": 41.310001,
  "FB": 125.839996,
  "TWTR": 18.379999,
  "AMZN": 767.580017,
  "EBAY": 31.77,
  "YHOO": 42.580002
}, {
  "date": "2016-08-31",
  "APPL": 106.099998,
  "MSFT": 57.459999,
  "ORCL": 41.220001,
  "FB": 126.120003,
  "TWTR": 19.209999,
  "AMZN": 769.159973,
  "EBAY": 32.16,
  "YHOO": 42.75
}, {
  "date": "2016-09-01",
  "APPL": 106.730003,
  "MSFT": 57.59,
  "ORCL": 41.16,
  "FB": 126.169998,
  "TWTR": 19.5,
  "AMZN": 770.619995,
  "EBAY": 32.130001,
  "YHOO": 42.93
}, {
  "date": "2016-09-02",
  "APPL": 107.730003,
  "MSFT": 57.669998,
  "ORCL": 41.25,
  "FB": 126.510002,
  "TWTR": 19.549999,
  "AMZN": 772.440002,
  "EBAY": 32.279999,
  "YHOO": 43.279999
}, {
  "date": "2016-09-06",
  "APPL": 107.699997,
  "MSFT": 57.610001,
  "ORCL": 41.25,
  "FB": 129.729996,
  "TWTR": 19.93,
  "AMZN": 788.869995,
  "EBAY": 32.41,
  "YHOO": 44.709999
}, {
  "date": "2016-09-07",
  "APPL": 108.360001,
  "MSFT": 57.66,
  "ORCL": 41.25,
  "FB": 131.050003,
  "TWTR": 19.870001,
  "AMZN": 784.47998,
  "EBAY": 32.509998,
  "YHOO": 44.349998
}, {
  "date": "2016-09-08",
  "APPL": 105.519997,
  "MSFT": 57.43,
  "ORCL": 40.720001,
  "FB": 130.270004,
  "TWTR": 18.700001,
  "AMZN": 784.059998,
  "EBAY": 32.700001,
  "YHOO": 44.360001
}, {
  "date": "2016-09-09",
  "APPL": 103.129997,
  "MSFT": 56.209999,
  "ORCL": 40.029999,
  "FB": 127.099998,
  "TWTR": 18.110001,
  "AMZN": 760.140015,
  "EBAY": 31.889999,
  "YHOO": 42.919998
}, {
  "date": "2016-09-12",
  "APPL": 105.440002,
  "MSFT": 57.049999,
  "ORCL": 40.68,
  "FB": 128.690002,
  "TWTR": 18.15,
  "AMZN": 771.48999,
  "EBAY": 32.490002,
  "YHOO": 43.459999
}, {
  "date": "2016-09-13",
  "APPL": 107.949997,
  "MSFT": 56.529999,
  "ORCL": 40.18,
  "FB": 127.209999,
  "TWTR": 17.76,
  "AMZN": 761.01001,
  "EBAY": 31.91,
  "YHOO": 43.040001
}, {
  "date": "2016-09-14",
  "APPL": 111.769997,
  "MSFT": 56.259998,
  "ORCL": 40.25,
  "FB": 127.769997,
  "TWTR": 18.08,
  "AMZN": 761.090027,
  "EBAY": 31.799999,
  "YHOO": 43.459999
}, {
  "date": "2016-09-15",
  "APPL": 115.57,
  "MSFT": 57.189999,
  "ORCL": 40.860001,
  "FB": 128.350006,
  "TWTR": 18.299999,
  "AMZN": 769.690002,
  "EBAY": 31.98,
  "YHOO": 43.990002
}, {
  "date": "2016-09-16",
  "APPL": 114.919998,
  "MSFT": 57.25,
  "ORCL": 38.919998,
  "FB": 129.070007,
  "TWTR": 19.110001,
  "AMZN": 778.52002,
  "EBAY": 31.77,
  "YHOO": 43.669998
}, {
  "date": "2016-09-19",
  "APPL": 113.580002,
  "MSFT": 56.93,
  "ORCL": 39.23,
  "FB": 128.649994,
  "TWTR": 18.360001,
  "AMZN": 775.099976,
  "EBAY": 31.57,
  "YHOO": 43.189999
}, {
  "date": "2016-09-20",
  "APPL": 113.57,
  "MSFT": 56.810001,
  "ORCL": 39.07,
  "FB": 128.639999,
  "TWTR": 18.389999,
  "AMZN": 780.219971,
  "EBAY": 31.360001,
  "YHOO": 42.790001
}, {
  "date": "2016-09-21",
  "APPL": 113.550003,
  "MSFT": 57.759998,
  "ORCL": 39.509998,
  "FB": 129.940002,
  "TWTR": 18.49,
  "AMZN": 789.73999,
  "EBAY": 31.969999,
  "YHOO": 44.139999
}, {
  "date": "2016-09-22",
  "APPL": 114.620003,
  "MSFT": 57.82,
  "ORCL": 39.509998,
  "FB": 130.080002,
  "TWTR": 18.629999,
  "AMZN": 804.700012,
  "EBAY": 32.279999,
  "YHOO": 44.150002
}, {
  "date": "2016-09-23",
  "APPL": 112.709999,
  "MSFT": 57.43,
  "ORCL": 39.23,
  "FB": 127.959999,
  "TWTR": 22.620001,
  "AMZN": 805.75,
  "EBAY": 32.07,
  "YHOO": 42.799999
}, {
  "date": "2016-09-26",
  "APPL": 112.879997,
  "MSFT": 56.900002,
  "ORCL": 39.029999,
  "FB": 127.309998,
  "TWTR": 23.370001,
  "AMZN": 799.159973,
  "EBAY": 31.67,
  "YHOO": 42.290001
}, {
  "date": "2016-09-27",
  "APPL": 113.089996,
  "MSFT": 57.950001,
  "ORCL": 39.299999,
  "FB": 128.690002,
  "TWTR": 23.719999,
  "AMZN": 816.109985,
  "EBAY": 31.940001,
  "YHOO": 43.369999
}, {
  "date": "2016-09-28",
  "APPL": 113.949997,
  "MSFT": 58.029999,
  "ORCL": 39.439999,
  "FB": 129.229996,
  "TWTR": 22.959999,
  "AMZN": 828.719971,
  "EBAY": 31.85,
  "YHOO": 43.689999
}, {
  "date": "2016-09-29",
  "APPL": 112.18,
  "MSFT": 57.400002,
  "ORCL": 39.119999,
  "FB": 128.089996,
  "TWTR": 23.01,
  "AMZN": 829.049988,
  "EBAY": 32.299999,
  "YHOO": 42.57
}, {
  "date": "2016-09-30",
  "APPL": 113.050003,
  "MSFT": 57.599998,
  "ORCL": 39.279999,
  "FB": 128.270004,
  "TWTR": 23.049999,
  "AMZN": 837.309998,
  "EBAY": 32.900002,
  "YHOO": 43.099998
}, {
  "date": "2016-10-03",
  "APPL": 112.519997,
  "MSFT": 57.419998,
  "ORCL": 38.990002,
  "FB": 128.770004,
  "TWTR": 24,
  "AMZN": 836.73999,
  "EBAY": 32.549999,
  "YHOO": 43.130001
}, {
  "date": "2016-10-04",
  "APPL": 113,
  "MSFT": 57.240002,
  "ORCL": 38.869999,
  "FB": 128.190002,
  "TWTR": 23.52,
  "AMZN": 834.030029,
  "EBAY": 32.560001,
  "YHOO": 43.18
}, {
  "date": "2016-10-05",
  "APPL": 113.050003,
  "MSFT": 57.639999,
  "ORCL": 39.150002,
  "FB": 128.470001,
  "TWTR": 24.870001,
  "AMZN": 844.359985,
  "EBAY": 32.150002,
  "YHOO": 43.709999
}, {
  "date": "2016-10-06",
  "APPL": 113.889999,
  "MSFT": 57.740002,
  "ORCL": 38.869999,
  "FB": 128.740005,
  "TWTR": 19.870001,
  "AMZN": 841.659973,
  "EBAY": 32.130001,
  "YHOO": 43.68
}, {
  "date": "2016-10-07",
  "APPL": 114.059998,
  "MSFT": 57.799999,
  "ORCL": 38.709999,
  "FB": 128.990005,
  "TWTR": 19.85,
  "AMZN": 839.429993,
  "EBAY": 31.620001,
  "YHOO": 43.220001
}, {
  "date": "2016-10-10",
  "APPL": 116.050003,
  "MSFT": 58.040001,
  "ORCL": 38.619999,
  "FB": 130.240005,
  "TWTR": 17.559999,
  "AMZN": 841.710022,
  "EBAY": 31.950001,
  "YHOO": 43.919998
}, {
  "date": "2016-10-11",
  "APPL": 116.300003,
  "MSFT": 57.189999,
  "ORCL": 38.009998,
  "FB": 128.880005,
  "TWTR": 18,
  "AMZN": 831,
  "EBAY": 31.459999,
  "YHOO": 42.68
}, {
  "date": "2016-10-12",
  "APPL": 117.339996,
  "MSFT": 57.110001,
  "ORCL": 38.049999,
  "FB": 129.050003,
  "TWTR": 18.049999,
  "AMZN": 834.090027,
  "EBAY": 31.5,
  "YHOO": 42.360001
}, {
  "date": "2016-10-13",
  "APPL": 116.980003,
  "MSFT": 56.919998,
  "ORCL": 38.029999,
  "FB": 127.82,
  "TWTR": 17.790001,
  "AMZN": 829.280029,
  "EBAY": 31.51,
  "YHOO": 41.619999
}, {
  "date": "2016-10-14",
  "APPL": 117.629997,
  "MSFT": 57.419998,
  "ORCL": 38.41,
  "FB": 127.879997,
  "TWTR": 16.879999,
  "AMZN": 822.960022,
  "EBAY": 31.889999,
  "YHOO": 41.439999
}, {
  "date": "2016-10-17",
  "APPL": 117.550003,
  "MSFT": 57.220001,
  "ORCL": 38.290001,
  "FB": 127.540001,
  "TWTR": 16.73,
  "AMZN": 812.950012,
  "EBAY": 31.809999,
  "YHOO": 41.790001
}, {
  "date": "2016-10-18",
  "APPL": 117.470001,
  "MSFT": 57.66,
  "ORCL": 38.419998,
  "FB": 128.570007,
  "TWTR": 16.83,
  "AMZN": 817.650024,
  "EBAY": 31.639999,
  "YHOO": 41.68
}, {
  "date": "2016-10-19",
  "APPL": 117.120003,
  "MSFT": 57.529999,
  "ORCL": 38.349998,
  "FB": 130.110001,
  "TWTR": 17.07,
  "AMZN": 817.690002,
  "EBAY": 32.52,
  "YHOO": 42.73
}, {
  "date": "2016-10-20",
  "APPL": 117.059998,
  "MSFT": 57.25,
  "ORCL": 38.09,
  "FB": 130,
  "TWTR": 16.9,
  "AMZN": 810.320007,
  "EBAY": 29.02,
  "YHOO": 42.380001
}, {
  "date": "2016-10-21",
  "APPL": 116.599998,
  "MSFT": 59.66,
  "ORCL": 37.93,
  "FB": 132.070007,
  "TWTR": 18.09,
  "AMZN": 818.98999,
  "EBAY": 29.059999,
  "YHOO": 42.169998
}, {
  "date": "2016-10-24",
  "APPL": 117.650002,
  "MSFT": 61,
  "ORCL": 38.27,
  "FB": 133.279999,
  "TWTR": 18.030001,
  "AMZN": 838.090027,
  "EBAY": 29.219999,
  "YHOO": 42.59
}, {
  "date": "2016-10-25",
  "APPL": 118.25,
  "MSFT": 60.990002,
  "ORCL": 38.360001,
  "FB": 132.289993,
  "TWTR": 17.26,
  "AMZN": 835.179993,
  "EBAY": 29.049999,
  "YHOO": 42.549999
}, {
  "date": "2016-10-26",
  "APPL": 115.589996,
  "MSFT": 60.630001,
  "ORCL": 38.310001,
  "FB": 131.039993,
  "TWTR": 17.290001,
  "AMZN": 822.590027,
  "EBAY": 28.82,
  "YHOO": 42.080002
}, {
  "date": "2016-10-27",
  "APPL": 114.480003,
  "MSFT": 60.099998,
  "ORCL": 38.220001,
  "FB": 129.690002,
  "TWTR": 17.4,
  "AMZN": 818.359985,
  "EBAY": 28.809999,
  "YHOO": 41.869999
}, {
  "date": "2016-10-28",
  "APPL": 113.720001,
  "MSFT": 59.869999,
  "ORCL": 38.169998,
  "FB": 131.289993,
  "TWTR": 17.66,
  "AMZN": 776.320007,
  "EBAY": 28.6,
  "YHOO": 41.779999
}, {
  "date": "2016-10-31",
  "APPL": 113.540001,
  "MSFT": 59.919998,
  "ORCL": 38.419998,
  "FB": 130.990005,
  "TWTR": 17.950001,
  "AMZN": 789.820007,
  "EBAY": 28.51,
  "YHOO": 41.549999
}, {
  "date": "2016-11-01",
  "APPL": 111.489998,
  "MSFT": 59.799999,
  "ORCL": 38.459999,
  "FB": 129.5,
  "TWTR": 17.49,
  "AMZN": 785.409973,
  "EBAY": 28.379999,
  "YHOO": 41.330002
}, {
  "date": "2016-11-02",
  "APPL": 111.589996,
  "MSFT": 59.43,
  "ORCL": 38.029999,
  "FB": 127.169998,
  "TWTR": 17.610001,
  "AMZN": 765.559998,
  "EBAY": 28.26,
  "YHOO": 40.68
}, {
  "date": "2016-11-03",
  "APPL": 109.830002,
  "MSFT": 59.209999,
  "ORCL": 38.310001,
  "FB": 120,
  "TWTR": 17.58,
  "AMZN": 767.030029,
  "EBAY": 28.059999,
  "YHOO": 40.23
}, {
  "date": "2016-11-04",
  "APPL": 108.839996,
  "MSFT": 58.709999,
  "ORCL": 38.279999,
  "FB": 120.75,
  "TWTR": 18.02,
  "AMZN": 755.049988,
  "EBAY": 27.950001,
  "YHOO": 40.279999
}, {
  "date": "2016-11-07",
  "APPL": 110.410004,
  "MSFT": 60.419998,
  "ORCL": 39.09,
  "FB": 122.150002,
  "TWTR": 18.41,
  "AMZN": 784.929993,
  "EBAY": 28.24,
  "YHOO": 41.049999
}, {
  "date": "2016-11-08",
  "APPL": 111.059998,
  "MSFT": 60.470001,
  "ORCL": 39.130001,
  "FB": 124.220001,
  "TWTR": 18.379999,
  "AMZN": 787.75,
  "EBAY": 28.030001,
  "YHOO": 41.16
}, {
  "date": "2016-11-09",
  "APPL": 110.879997,
  "MSFT": 60.169998,
  "ORCL": 39.549999,
  "FB": 123.18,
  "TWTR": 19.129999,
  "AMZN": 771.880005,
  "EBAY": 28.290001,
  "YHOO": 41.209999
}, {
  "date": "2016-11-10",
  "APPL": 107.790001,
  "MSFT": 58.700001,
  "ORCL": 39.580002,
  "FB": 120.800003,
  "TWTR": 18.370001,
  "AMZN": 742.380005,
  "EBAY": 28.16,
  "YHOO": 40.16
}, {
  "date": "2016-11-11",
  "APPL": 108.43,
  "MSFT": 59.02,
  "ORCL": 39.450001,
  "FB": 119.019997,
  "TWTR": 18.549999,
  "AMZN": 739.01001,
  "EBAY": 28.639999,
  "YHOO": 40.419998
}, {
  "date": "2016-11-14",
  "APPL": 105.709999,
  "MSFT": 58.119999,
  "ORCL": 39.299999,
  "FB": 115.080002,
  "TWTR": 19.139999,
  "AMZN": 719.070007,
  "EBAY": 27.889999,
  "YHOO": 39.299999
}, {
  "date": "2016-11-15",
  "APPL": 107.110001,
  "MSFT": 58.869999,
  "ORCL": 39.169998,
  "FB": 117.199997,
  "TWTR": 18.98,
  "AMZN": 743.23999,
  "EBAY": 28.49,
  "YHOO": 40.209999
}, {
  "date": "2016-11-16",
  "APPL": 109.989998,
  "MSFT": 59.650002,
  "ORCL": 39.700001,
  "FB": 116.339996,
  "TWTR": 18.629999,
  "AMZN": 746.48999,
  "EBAY": 28.33,
  "YHOO": 40.98
}, {
  "date": "2016-11-17",
  "APPL": 109.949997,
  "MSFT": 60.639999,
  "ORCL": 40.25,
  "FB": 117.790001,
  "TWTR": 18.549999,
  "AMZN": 756.400024,
  "EBAY": 28.870001,
  "YHOO": 41.450001
}, {
  "date": "2016-11-18",
  "APPL": 110.059998,
  "MSFT": 60.349998,
  "ORCL": 39.860001,
  "FB": 117.019997,
  "TWTR": 18.73,
  "AMZN": 760.159973,
  "EBAY": 28.690001,
  "YHOO": 41.189999
}, {
  "date": "2016-11-21",
  "APPL": 111.730003,
  "MSFT": 60.860001,
  "ORCL": 39.889999,
  "FB": 121.769997,
  "TWTR": 18.6,
  "AMZN": 780,
  "EBAY": 29,
  "YHOO": 41.110001
}, {
  "date": "2016-11-22",
  "APPL": 111.800003,
  "MSFT": 61.119999,
  "ORCL": 40.09,
  "FB": 121.470001,
  "TWTR": 18.629999,
  "AMZN": 785.330017,
  "EBAY": 29.059999,
  "YHOO": 41.009998
}, {
  "date": "2016-11-23",
  "APPL": 111.230003,
  "MSFT": 60.400002,
  "ORCL": 40.099998,
  "FB": 120.839996,
  "TWTR": 18.219999,
  "AMZN": 780.119995,
  "EBAY": 28.9,
  "YHOO": 40.959999
}, {
  "date": "2016-11-25",
  "APPL": 111.790001,
  "MSFT": 60.529999,
  "ORCL": 40.27,
  "FB": 120.379997,
  "TWTR": 18.059999,
  "AMZN": 780.369995,
  "EBAY": 28.950001,
  "YHOO": 40.869999
}, {
  "date": "2016-11-28",
  "APPL": 111.57,
  "MSFT": 60.610001,
  "ORCL": 40.299999,
  "FB": 120.410004,
  "TWTR": 18.299999,
  "AMZN": 766.77002,
  "EBAY": 28.57,
  "YHOO": 41.450001
}, {
  "date": "2016-11-29",
  "APPL": 111.459999,
  "MSFT": 61.09,
  "ORCL": 40.549999,
  "FB": 120.870003,
  "TWTR": 18.190001,
  "AMZN": 762.52002,
  "EBAY": 28.51,
  "YHOO": 41.599998
}, {
  "date": "2016-11-30",
  "APPL": 110.519997,
  "MSFT": 60.259998,
  "ORCL": 40.189999,
  "FB": 118.419998,
  "TWTR": 18.49,
  "AMZN": 750.570007,
  "EBAY": 27.809999,
  "YHOO": 41.02
}, {
  "date": "2016-12-01",
  "APPL": 109.489998,
  "MSFT": 59.200001,
  "ORCL": 38.700001,
  "FB": 115.099998,
  "TWTR": 18.030001,
  "AMZN": 743.650024,
  "EBAY": 27.389999,
  "YHOO": 39.630001
}, {
  "date": "2016-12-02",
  "APPL": 109.900002,
  "MSFT": 59.25,
  "ORCL": 38.5,
  "FB": 115.400002,
  "TWTR": 17.93,
  "AMZN": 740.340027,
  "EBAY": 28.42,
  "YHOO": 40.07
}, {
  "date": "2016-12-05",
  "APPL": 109.110001,
  "MSFT": 60.220001,
  "ORCL": 38.970001,
  "FB": 117.43,
  "TWTR": 18.23,
  "AMZN": 759.359985,
  "EBAY": 28.35,
  "YHOO": 40.200001
}, {
  "date": "2016-12-06",
  "APPL": 109.949997,
  "MSFT": 59.950001,
  "ORCL": 39.470001,
  "FB": 117.309998,
  "TWTR": 18.23,
  "AMZN": 764.719971,
  "EBAY": 28.209999,
  "YHOO": 39.970001
}, {
  "date": "2016-12-07",
  "APPL": 111.029999,
  "MSFT": 61.369999,
  "ORCL": 40.32,
  "FB": 117.949997,
  "TWTR": 19.48,
  "AMZN": 770.419983,
  "EBAY": 28.91,
  "YHOO": 40.52
}, {
  "date": "2016-12-08",
  "APPL": 112.120003,
  "MSFT": 61.009998,
  "ORCL": 40.349998,
  "FB": 118.910004,
  "TWTR": 19.639999,
  "AMZN": 767.330017,
  "EBAY": 29.42,
  "YHOO": 41.41
}, {
  "date": "2016-12-09",
  "APPL": 113.949997,
  "MSFT": 61.970001,
  "ORCL": 40.52,
  "FB": 119.68,
  "TWTR": 19.65,
  "AMZN": 768.659973,
  "EBAY": 29.969999,
  "YHOO": 41.759998
}, {
  "date": "2016-12-12",
  "APPL": 113.300003,
  "MSFT": 62.169998,
  "ORCL": 40.509998,
  "FB": 117.769997,
  "TWTR": 18.93,
  "AMZN": 760.119995,
  "EBAY": 30.209999,
  "YHOO": 41.299999
}, {
  "date": "2016-12-13",
  "APPL": 115.190002,
  "MSFT": 62.98,
  "ORCL": 40.759998,
  "FB": 120.309998,
  "TWTR": 19.370001,
  "AMZN": 774.340027,
  "EBAY": 29.82,
  "YHOO": 41.470001
}, {
  "date": "2016-12-14",
  "APPL": 115.190002,
  "MSFT": 62.68,
  "ORCL": 40.880001,
  "FB": 120.209999,
  "TWTR": 18.93,
  "AMZN": 768.820007,
  "EBAY": 29.82,
  "YHOO": 40.91
}, {
  "date": "2016-12-15",
  "APPL": 115.82,
  "MSFT": 62.580002,
  "ORCL": 40.860001,
  "FB": 120.57,
  "TWTR": 18.790001,
  "AMZN": 761,
  "EBAY": 29.73,
  "YHOO": 38.41
}, {
  "date": "2016-12-16",
  "APPL": 115.970001,
  "MSFT": 62.299999,
  "ORCL": 39.099998,
  "FB": 119.870003,
  "TWTR": 18.629999,
  "AMZN": 757.77002,
  "EBAY": 29.610001,
  "YHOO": 38.610001
}, {
  "date": "2016-12-19",
  "APPL": 116.639999,
  "MSFT": 63.619999,
  "ORCL": 38.900002,
  "FB": 119.239998,
  "TWTR": 18.24,
  "AMZN": 766,
  "EBAY": 29.379999,
  "YHOO": 38.419998
}, {
  "date": "2016-12-20",
  "APPL": 116.949997,
  "MSFT": 63.540001,
  "ORCL": 39,
  "FB": 119.089996,
  "TWTR": 17.92,
  "AMZN": 771.219971,
  "EBAY": 29.26,
  "YHOO": 39.16
}, {
  "date": "2016-12-21",
  "APPL": 117.059998,
  "MSFT": 63.540001,
  "ORCL": 38.830002,
  "FB": 119.040001,
  "TWTR": 17.08,
  "AMZN": 770.599976,
  "EBAY": 29.360001,
  "YHOO": 39.150002
}, {
  "date": "2016-12-22",
  "APPL": 116.290001,
  "MSFT": 63.549999,
  "ORCL": 38.959999,
  "FB": 117.400002,
  "TWTR": 16.41,
  "AMZN": 766.340027,
  "EBAY": 29.540001,
  "YHOO": 38.5
}, {
  "date": "2016-12-23",
  "APPL": 116.519997,
  "MSFT": 63.240002,
  "ORCL": 38.779999,
  "FB": 117.269997,
  "TWTR": 16.5,
  "AMZN": 760.590027,
  "EBAY": 29.790001,
  "YHOO": 38.66
}, {
  "date": "2016-12-27",
  "APPL": 117.260002,
  "MSFT": 63.279999,
  "ORCL": 38.82,
  "FB": 118.010002,
  "TWTR": 16.610001,
  "AMZN": 771.400024,
  "EBAY": 30.24,
  "YHOO": 38.919998
}, {
  "date": "2016-12-28",
  "APPL": 116.760002,
  "MSFT": 62.990002,
  "ORCL": 38.68,
  "FB": 116.919998,
  "TWTR": 16.389999,
  "AMZN": 772.130005,
  "EBAY": 30.01,
  "YHOO": 38.73
}, {
  "date": "2016-12-29",
  "APPL": 116.730003,
  "MSFT": 62.900002,
  "ORCL": 38.689999,
  "FB": 116.349998,
  "TWTR": 16.389999,
  "AMZN": 765.150024,
  "EBAY": 29.98,
  "YHOO": 38.639999
}, {
  "date": "2016-12-30",
  "APPL": 115.82,
  "MSFT": 62.139999,
  "ORCL": 38.450001,
  "FB": 115.050003,
  "TWTR": 16.299999,
  "AMZN": 749.869995,
  "EBAY": 29.690001,
  "YHOO": 38.669998
}, {
  "date": "2017-01-03",
  "APPL": 116.150002,
  "MSFT": 62.580002,
  "ORCL": 38.549999,
  "FB": 116.860001,
  "TWTR": 16.440001,
  "AMZN": 753.669983,
  "EBAY": 29.84,
  "YHOO": 38.900002
}, {
  "date": "2017-01-04",
  "APPL": 116.019997,
  "MSFT": 62.299999,
  "ORCL": 38.740002,
  "FB": 118.690002,
  "TWTR": 16.860001,
  "AMZN": 757.179993,
  "EBAY": 29.76,
  "YHOO": 40.060001
}, {
  "date": "2017-01-05",
  "APPL": 116.610001,
  "MSFT": 62.299999,
  "ORCL": 38.639999,
  "FB": 120.669998,
  "TWTR": 17.09,
  "AMZN": 780.450012,
  "EBAY": 30.01,
  "YHOO": 41.34
}, {
  "date": "2017-01-06",
  "APPL": 117.910004,
  "MSFT": 62.84,
  "ORCL": 38.450001,
  "FB": 123.410004,
  "TWTR": 17.17,
  "AMZN": 795.98999,
  "EBAY": 31.049999,
  "YHOO": 41.23
}, {
  "date": "2017-01-09",
  "APPL": 118.989998,
  "MSFT": 62.639999,
  "ORCL": 39.029999,
  "FB": 124.900002,
  "TWTR": 17.5,
  "AMZN": 796.919983,
  "EBAY": 30.75,
  "YHOO": 41.34
}, {
  "date": "2017-01-10",
  "APPL": 119.110001,
  "MSFT": 62.619999,
  "ORCL": 38.66,
  "FB": 124.349998,
  "TWTR": 17.370001,
  "AMZN": 795.900024,
  "EBAY": 30.25,
  "YHOO": 42.299999
}, {
  "date": "2017-01-11",
  "APPL": 119.75,
  "MSFT": 63.189999,
  "ORCL": 39.110001,
  "FB": 126.089996,
  "TWTR": 17.299999,
  "AMZN": 799.02002,
  "EBAY": 30.41,
  "YHOO": 42.59
}, {
  "date": "2017-01-12",
  "APPL": 119.25,
  "MSFT": 62.610001,
  "ORCL": 39.200001,
  "FB": 126.620003,
  "TWTR": 17.379999,
  "AMZN": 813.640015,
  "EBAY": 30.35,
  "YHOO": 42.110001
}, {
  "date": "2017-01-13",
  "APPL": 119.040001,
  "MSFT": 62.700001,
  "ORCL": 39.259998,
  "FB": 128.339996,
  "TWTR": 17.25,
  "AMZN": 817.140015,
  "EBAY": 30.290001,
  "YHOO": 42.27
}, {
  "date": "2017-01-17",
  "APPL": 120,
  "MSFT": 62.529999,
  "ORCL": 39.099998,
  "FB": 127.870003,
  "TWTR": 16.959999,
  "AMZN": 809.719971,
  "EBAY": 30.290001,
  "YHOO": 41.990002
}, {
  "date": "2017-01-18",
  "APPL": 119.989998,
  "MSFT": 62.5,
  "ORCL": 39.189999,
  "FB": 127.919998,
  "TWTR": 17.110001,
  "AMZN": 807.47998,
  "EBAY": 30.389999,
  "YHOO": 42.029999
}, {
  "date": "2017-01-19",
  "APPL": 119.779999,
  "MSFT": 62.299999,
  "ORCL": 39.209999,
  "FB": 127.550003,
  "TWTR": 16.790001,
  "AMZN": 809.039978,
  "EBAY": 30.719999,
  "YHOO": 42.09
}, {
  "date": "2017-01-20",
  "APPL": 120,
  "MSFT": 62.740002,
  "ORCL": 39.869999,
  "FB": 127.040001,
  "TWTR": 16.58,
  "AMZN": 808.330017,
  "EBAY": 30.639999,
  "YHOO": 42.049999
}, {
  "date": "2017-01-23",
  "APPL": 120.080002,
  "MSFT": 62.959999,
  "ORCL": 39.68,
  "FB": 128.929993,
  "TWTR": 16.610001,
  "AMZN": 817.880005,
  "EBAY": 30.27,
  "YHOO": 42.400002
}, {
  "date": "2017-01-24",
  "APPL": 119.970001,
  "MSFT": 63.52,
  "ORCL": 40.099998,
  "FB": 129.369995,
  "TWTR": 16.52,
  "AMZN": 822.440002,
  "EBAY": 29.99,
  "YHOO": 43.900002
}, {
  "date": "2017-01-25",
  "APPL": 121.879997,
  "MSFT": 63.68,
  "ORCL": 40.150002,
  "FB": 131.479996,
  "TWTR": 16.73,
  "AMZN": 836.52002,
  "EBAY": 30.23,
  "YHOO": 44.939999
}, {
  "date": "2017-01-26",
  "APPL": 121.940002,
  "MSFT": 64.269997,
  "ORCL": 40.130001,
  "FB": 132.779999,
  "TWTR": 16.809999,
  "AMZN": 839.150024,
  "EBAY": 31.74,
  "YHOO": 44.549999
}, {
  "date": "2017-01-27",
  "APPL": 121.949997,
  "MSFT": 65.779999,
  "ORCL": 40.23,
  "FB": 132.179993,
  "TWTR": 16.57,
  "AMZN": 835.77002,
  "EBAY": 32.509998,
  "YHOO": 44.419998
}, {
  "date": "2017-01-30",
  "APPL": 121.629997,
  "MSFT": 65.129997,
  "ORCL": 40.23,
  "FB": 130.979996,
  "TWTR": 16.940001,
  "AMZN": 830.380005,
  "EBAY": 32.169998,
  "YHOO": 43.93
}, {
  "date": "2017-01-31",
  "APPL": 121.349998,
  "MSFT": 64.650002,
  "ORCL": 40.110001,
  "FB": 130.320007,
  "TWTR": 17.620001,
  "AMZN": 823.47998,
  "EBAY": 31.83,
  "YHOO": 44.07
}, {
  "date": "2017-02-01",
  "APPL": 128.75,
  "MSFT": 63.580002,
  "ORCL": 39.84,
  "FB": 133.229996,
  "TWTR": 17.24,
  "AMZN": 832.349976,
  "EBAY": 32.18,
  "YHOO": 43.779999
}, {
  "date": "2017-02-02",
  "APPL": 128.529999,
  "MSFT": 63.169998,
  "ORCL": 39.98,
  "FB": 130.839996,
  "TWTR": 17.780001,
  "AMZN": 839.950012,
  "EBAY": 31.969999,
  "YHOO": 43.689999
}, {
  "date": "2017-02-03",
  "APPL": 129.080002,
  "MSFT": 63.68,
  "ORCL": 40.43,
  "FB": 130.979996,
  "TWTR": 17.610001,
  "AMZN": 810.200012,
  "EBAY": 32.07,
  "YHOO": 43.709999
}, {
  "date": "2017-02-06",
  "APPL": 130.289993,
  "MSFT": 63.639999,
  "ORCL": 40.099998,
  "FB": 132.059998,
  "TWTR": 17.93,
  "AMZN": 807.640015,
  "EBAY": 32.029999,
  "YHOO": 44.419998
}, {
  "date": "2017-02-07",
  "APPL": 131.529999,
  "MSFT": 63.43,
  "ORCL": 40.07,
  "FB": 131.839996,
  "TWTR": 18.26,
  "AMZN": 812.5,
  "EBAY": 32.43,
  "YHOO": 44.369999
}, {
  "date": "2017-02-08",
  "APPL": 132.039993,
  "MSFT": 63.34,
  "ORCL": 40.02,
  "FB": 134.199997,
  "TWTR": 18.719999,
  "AMZN": 819.710022,
  "EBAY": 33.25,
  "YHOO": 45.07
}, {
  "date": "2017-02-09",
  "APPL": 132.419998,
  "MSFT": 64.059998,
  "ORCL": 40.23,
  "FB": 134.139999,
  "TWTR": 16.41,
  "AMZN": 821.359985,
  "EBAY": 33.119999,
  "YHOO": 45.080002
}, {
  "date": "2017-02-10",
  "APPL": 132.119995,
  "MSFT": 64,
  "ORCL": 40.790001,
  "FB": 134.190002,
  "TWTR": 15.58,
  "AMZN": 827.460022,
  "EBAY": 33.630001,
  "YHOO": 45.029999
}, {
  "date": "2017-02-13",
  "APPL": 133.289993,
  "MSFT": 64.720001,
  "ORCL": 41.09,
  "FB": 134.050003,
  "TWTR": 15.81,
  "AMZN": 836.530029,
  "EBAY": 33.790001,
  "YHOO": 45.459999
}, {
  "date": "2017-02-14",
  "APPL": 135.020004,
  "MSFT": 64.57,
  "ORCL": 41.099998,
  "FB": 133.850006,
  "TWTR": 16.52,
  "AMZN": 836.390015,
  "EBAY": 33.630001,
  "YHOO": 45.02
}, {
  "date": "2017-02-15",
  "APPL": 135.509995,
  "MSFT": 64.529999,
  "ORCL": 41.41,
  "FB": 133.440002,
  "TWTR": 16.74,
  "AMZN": 842.700012,
  "EBAY": 34.009998,
  "YHOO": 45.650002
}, {
  "date": "2017-02-16",
  "APPL": 135.350006,
  "MSFT": 64.519997,
  "ORCL": 41.59,
  "FB": 133.839996,
  "TWTR": 16.35,
  "AMZN": 844.140015,
  "EBAY": 33.540001,
  "YHOO": 45.16
}, {
  "date": "2017-02-17",
  "APPL": 135.720001,
  "MSFT": 64.620003,
  "ORCL": 42.060001,
  "FB": 133.529999,
  "TWTR": 16.620001,
  "AMZN": 845.070007,
  "EBAY": 33.759998,
  "YHOO": 45.099998
}, {
  "date": "2017-02-21",
  "APPL": 136.699997,
  "MSFT": 64.489998,
  "ORCL": 42.27,
  "FB": 133.720001,
  "TWTR": 16.42,
  "AMZN": 856.440002,
  "EBAY": 33.919998,
  "YHOO": 45.5
}, {
  "date": "2017-02-22",
  "APPL": 137.110001,
  "MSFT": 64.360001,
  "ORCL": 42.509998,
  "FB": 136.119995,
  "TWTR": 16.08,
  "AMZN": 855.609985,
  "EBAY": 33.82,
  "YHOO": 45.98
}, {
  "date": "2017-02-23",
  "APPL": 136.529999,
  "MSFT": 64.620003,
  "ORCL": 42.959999,
  "FB": 135.360001,
  "TWTR": 16.030001,
  "AMZN": 852.190002,
  "EBAY": 33.599998,
  "YHOO": 45.41
}, {
  "date": "2017-02-24",
  "APPL": 136.660004,
  "MSFT": 64.620003,
  "ORCL": 43.169998,
  "FB": 135.440002,
  "TWTR": 15.98,
  "AMZN": 845.23999,
  "EBAY": 34.060001,
  "YHOO": 45.549999
}, {
  "date": "2017-02-27",
  "APPL": 136.929993,
  "MSFT": 64.230003,
  "ORCL": 42.700001,
  "FB": 136.410004,
  "TWTR": 16.059999,
  "AMZN": 848.640015,
  "EBAY": 34.279999,
  "YHOO": 45.709999
}, {
  "date": "2017-02-28",
  "APPL": 136.990005,
  "MSFT": 63.98,
  "ORCL": 42.59,
  "FB": 135.539993,
  "TWTR": 15.77,
  "AMZN": 845.039978,
  "EBAY": 33.900002,
  "YHOO": 45.66
}, {
  "date": "2017-03-01",
  "APPL": 139.789993,
  "MSFT": 64.940002,
  "ORCL": 42.919998,
  "FB": 137.419998,
  "TWTR": 15.79,
  "AMZN": 853.080017,
  "EBAY": 34.27,
  "YHOO": 46.240002
}, {
  "date": "2017-03-02",
  "APPL": 138.960007,
  "MSFT": 64.010002,
  "ORCL": 42.889999,
  "FB": 136.759995,
  "TWTR": 15.79,
  "AMZN": 848.909973,
  "EBAY": 33.91,
  "YHOO": 45.939999
}, {
  "date": "2017-03-03",
  "APPL": 139.779999,
  "MSFT": 64.25,
  "ORCL": 42.689999,
  "FB": 137.169998,
  "TWTR": 15.75,
  "AMZN": 849.880005,
  "EBAY": 33.740002,
  "YHOO": 45.91
}, {
  "date": "2017-03-06",
  "APPL": 139.339996,
  "MSFT": 64.269997,
  "ORCL": 42.57,
  "FB": 137.419998,
  "TWTR": 15.56,
  "AMZN": 846.609985,
  "EBAY": 33.639999,
  "YHOO": 45.639999
}, {
  "date": "2017-03-07",
  "APPL": 139.520004,
  "MSFT": 64.400002,
  "ORCL": 42.599998,
  "FB": 137.300003,
  "TWTR": 15.18,
  "AMZN": 846.02002,
  "EBAY": 33.470001,
  "YHOO": 45.73
}, {
  "date": "2017-03-08",
  "APPL": 139,
  "MSFT": 64.989998,
  "ORCL": 42.610001,
  "FB": 137.720001,
  "TWTR": 15.24,
  "AMZN": 850.5,
  "EBAY": 33.32,
  "YHOO": 45.98
}];

/**
 * Assume the graph scale goes only from 0 to 1.
 * Thus, the maximum allowed height is 1 for the valueAxis,
 * and the middle value for the balloon is 0.5.
 */

/*
function calcBandPos1( val, baseline, bandOpts ) {
  var break_u_1 = baseline + ( baseline * bandOpts.band1_inc_perc );

  if ( val <= baseline ) {
    return 0;
  } else if ( ( val > baseline ) && ( ( val - baseline ) > ( break_u_1 - baseline ) ) ) {
    return 1;
  } else {
    return ( val - baseline ) / ( break_u_1 - baseline );
  }
}

function calcBandPos2( val, baseline, bandOpts ) {
  var break_u_1 = baseline + ( baseline * bandOpts.band1_inc_perc );
  var break_u_2 = baseline + ( baseline * bandOpts.band2_inc_perc );

  if ( val <= baseline ) {
    return 0;
  } else if ( ( val > baseline ) && ( ( val - baseline ) <= ( break_u_1 - baseline ) ) ) {
    return 0;
  } else if ( ( val > baseline ) && ( ( val - baseline ) > ( break_u_2 - baseline ) ) ) {
    return 1;
  } else {
    return ( val - break_u_1 ) / ( break_u_2 - break_u_1 );
  }
}

function calcBandPos3( val, baseline, bandOpts ) {
  var break_u_2 = baseline + ( baseline * bandOpts.band2_inc_perc );
  var break_u_3 = baseline + ( baseline * bandOpts.band3_inc_perc );

  if ( val <= baseline ) {
    return 0;
  } else if ( ( val > baseline ) && ( ( val - baseline ) <= ( break_u_2 - baseline ) ) ) {
    return 0;
  } else if ( ( val > baseline ) && ( ( val - baseline ) > ( break_u_3 - baseline ) ) ) {
    return 1;
  } else {
    return ( val - break_u_2 ) / ( break_u_3 - break_u_2 );
  }
}

function calcBandNeg1( val, baseline, bandOpts ) {
  var break_d_1 = baseline - ( baseline * bandOpts.band1_dec_perc );

  if ( val >= baseline ) {
    return 0;
  } else if ( ( val < baseline ) && ( ( baseline - val ) > ( baseline - break_d_1 ) ) ) {
    return 1;
  } else {
    return ( baseline - val ) / ( baseline - break_d_1 );
  }
}

function calcBandNeg2( val, baseline, bandOpts ) {
  var break_d_1 = baseline - ( baseline * bandOpts.band1_dec_perc );
  var break_d_2 = baseline - ( baseline * bandOpts.band2_dec_perc );

  if ( val >= baseline ) {
    return 0;
  } else if ( ( val < baseline ) && ( Math.abs( val - baseline ) <= Math.abs( break_d_1 - baseline ) ) ) {
    return 0;
  } else if ( ( val < baseline ) && ( Math.abs( val - baseline ) > Math.abs( break_d_2 - baseline ) ) ) {
    return 1;
  } else {
    return 1 - ( Math.abs( break_d_2 - val ) / Math.abs( break_d_2 - break_d_1 ) );
  }
}

function calcBandNeg3( val, baseline, bandOpts ) {
  var break_d_2 = baseline - ( baseline * bandOpts.band2_dec_perc );
  var break_d_3 = baseline - ( baseline * bandOpts.band3_dec_perc );

  if ( val >= baseline ) {
    return 0;
  } else if ( ( val < baseline ) && ( Math.abs( val - baseline ) <= Math.abs( break_d_2 - baseline ) ) ) {
    return 0;
  } else if ( ( val < baseline ) && ( Math.abs( val - baseline ) > Math.abs( break_d_3 - baseline ) ) ) {
    return 1;
  } else {
    return 1 - ( Math.abs( break_d_3 - val ) / Math.abs( break_d_3 - break_d_2 ) );
  }
}

function buildFieldMappings( dim ) {
  return [ {
    "fromField": "val" + dim,
    "toField": "val" + dim
  }, {
    "fromField": "pos_1u" + dim,
    "toField": "pos_1u" + dim
  }, {
    "fromField": "pos_2u" + dim,
    "toField": "pos_2u" + dim
  }, {
    "fromField": "pos_3u" + dim,
    "toField": "pos_3u" + dim
  }, {
    "fromField": "neg_1u" + dim,
    "toField": "neg_1u" + dim
  }, {
    "fromField": "neg_2u" + dim,
    "toField": "neg_2u" + dim
  }, {
    "fromField": "neg_3u" + dim,
    "toField": "neg_3u" + dim
  } ];
}

function buildPanel( dim ) {
  return {
    "allLabels": [ {
      "text": undefined,
      "align": "left",
      "x": "1%",
      "size": 14
    } ],
    "valueAxes": [ {
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left",
      "gridCount": 2,
      "labelsEnabled": false,
      "labelFrequency": 1,
      "strictMinMax": true,
      "minimum": 0,
      "maximum": 1
    }, {
      "id": "actual",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left",
      "gridCount": 2,
      "labelsEnabled": false
    } ],
    "fontFamily": "Arial, sans-serif",
    "showCategoryAxis": false,
    "stockGraphs": [ {
      "id": "pos_band1" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "pos_1d",
      "fillAlphas": 0,
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "fillAlphas": 1,
      "lineColor": "#c6dbef",
      "fillToGraph": "pos_band1" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "pos_1u" + dim,
      "type": "smoothedLine",
"theme": "light",
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "id": "pos_band2" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "pos_2d",
      "fillAlphas": 0,
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "fillAlphas": 1,
      "lineColor": "#6baed6",
      "fillToGraph": "pos_band2" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "pos_2u" + dim,
      "type": "smoothedLine",
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "id": "pos_band3" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "pos_3d",
      "fillAlphas": 0,
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "fillAlphas": 1,
      "lineColor": "#2171b5",
      "fillToGraph": "pos_band3" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "pos_3u" + dim,
      "type": "smoothedLine",
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "id": "neg_band1" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "neg_1d",
      "fillAlphas": 0,
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "fillAlphas": 1,
      "lineColor": "#fcbba1",
      "fillToGraph": "neg_band1" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "neg_1u" + dim,
      "type": "smoothedLine",
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "id": "neg_band2" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "neg_2d",
      "fillAlphas": 0,
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "fillAlphas": 1,
      "lineColor": "#fb6a4a",
      "fillToGraph": "neg_band2" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "neg_2u" + dim,
      "type": "smoothedLine",
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "id": "neg_band3" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "neg_3d",
      "fillAlphas": 0,
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "fillAlphas": 1,
      "lineColor": "#cb181d",
      "fillToGraph": "neg_band3" + dim,
      "lineAlpha": 0,
      "showBalloon": false,
      "valueField": "neg_3u" + dim,
      "type": "smoothedLine",
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "fillAlphas": 0,
      "lineAlpha": 0,
      "lineColor": "#eee",
      "showBalloon": true,
      "showBalloonAt": "open",
      "valueField": "val" + dim,
      "openField": "mid",
      "type": "smoothedLine",
      "useDataSetColors": false,
      "visibleInLegend": false
    }, {
      "lineAlpha": 1,
      "lineColor": "#2171b5",
      "lineThickness": 2,
      "showBalloon": true,
      "showBalloonAt": "open",
      "valueField": "actual" + dim,
      "type": "smoothedLine",
      "useDataSetColors": false,
      "visibleInLegend": false,
      "valueAxis": "actual"
    } ]
  };
}

var dimensions = [ {
  "dimension": "AMZN",
  "dataSet": undefined,
  "panel": undefined
}, {
  "dimension": "APPL",
  "dataSet": undefined,
  "panel": undefined
}, {
  "dimension": "EBAY",
  "dataSet": undefined,
  "panel": undefined
}, {
  "dimension": "FB",
  "dataSet": undefined,
  "panel": undefined
}, {
  "dimension": "MSFT",
  "dataSet": undefined,
  "panel": undefined
}, {
  "dimension": "ORCL",
  "dataSet": undefined,
  "panel": undefined
}, {
  "dimension": "TWTR",
  "dataSet": undefined,
  "panel": undefined
}, {
  "dimension": "YHOO",
  "dataSet": undefined,
  "panel": undefined
} ];

var chartPanels = [];

AmCharts.addInitHandler( function( chart ) {

  // set the bandOpts percentages
  var bandOpts = {
    'band1_inc_perc': .1,
    'band2_inc_perc': .2,
    'band3_inc_perc': .3,
    'band1_dec_perc': .1,
    'band2_dec_perc': .2,
    'band3_dec_perc': .3
  };

  var newDataSet = [ {
    "title": "horizon",
    "categoryField": "date",
    "dataProvider": undefined,
    "showInCompare": false,
    "fieldMappings": [ {
      "fromField": "pos_1d",
      "toField": "pos_1d"
    }, {
      "fromField": "pos_2d",
      "toField": "pos_2d"
    }, {
      "fromField": "pos_3d",
      "toField": "pos_3d"
    }, {
      "fromField": "neg_1d",
      "toField": "neg_1d"
    }, {
      "fromField": "neg_2d",
      "toField": "neg_2d"
    }, {
      "fromField": "mid",
      "toField": "mid"
    } ]
  }, {
    "title": "actual",
    "categoryField": "date",
    "dataProvider": actualValues,
    "showInCompare": false,
    "fieldMappings": [ {
      "fromField": "APPL",
      "toField": "actual_APPL"
    }, {
      "fromField": "AMZN",
      "toField": "actual_AMZN"
    }, {
      "fromField": "EBAY",
      "toField": "actual_EBAY"
    }, {
      "fromField": "FB",
      "toField": "actual_FB"
    }, {
      "fromField": "MSFT",
      "toField": "actual_MSFT"
    }, {
      "fromField": "ORCL",
      "toField": "actual_ORCL"
    }, {
      "fromField": "TWTR",
      "toField": "actual_TWTR"
    }, {
      "fromField": "YHOO",
      "toField": "actual_YHOO"
    } ]
  } ];

  // transform base data
  // to prepare for graphs
  var newDataProvider = [];

  var baseline_APPL = actualValues[ 0 ][ 'APPL' ],
    baseline_AMZN = actualValues[ 0 ][ 'AMZN' ],
    baseline_EBAY = actualValues[ 0 ][ 'EBAY' ],
    baseline_FB = actualValues[ 0 ][ 'FB' ],
    baseline_MSFT = actualValues[ 0 ][ 'MSFT' ],
    baseline_ORCL = actualValues[ 0 ][ 'ORCL' ],
    baseline_TWTR = actualValues[ 0 ][ 'TWTR' ],
    baseline_YHOO = actualValues[ 0 ][ 'YHOO' ];

  for ( var i = 0; i < actualValues.length; i++ ) {
    var av = actualValues[ i ];
    newDataProvider.push( {
      'date': av.date,

      'val_APPL': parseFloat( av[ 'APPL' ].toFixed( 2 ) ),
      'val_AMZN': parseFloat( av[ 'AMZN' ].toFixed( 2 ) ),
      'val_EBAY': parseFloat( av[ 'EBAY' ].toFixed( 2 ) ),
      'val_FB': parseFloat( av[ 'FB' ].toFixed( 2 ) ),
      'val_MSFT': parseFloat( av[ 'MSFT' ].toFixed( 2 ) ),
      'val_ORCL': parseFloat( av[ 'ORCL' ].toFixed( 2 ) ),
      'val_TWTR': parseFloat( av[ 'TWTR' ].toFixed( 2 ) ),
      'val_YHOO': parseFloat( av[ 'YHOO' ].toFixed( 2 ) ),


      'val_APPL': parseFloat( av[ 'APPL' ].toFixed( 2 ) ),
      'val_AMZN': parseFloat( av[ 'AMZN' ].toFixed( 2 ) ),
      'val_EBAY': parseFloat( av[ 'EBAY' ].toFixed( 2 ) ),
      'val_FB': parseFloat( av[ 'FB' ].toFixed( 2 ) ),
      'val_MSFT': parseFloat( av[ 'MSFT' ].toFixed( 2 ) ),
      'val_ORCL': parseFloat( av[ 'ORCL' ].toFixed( 2 ) ),
      'val_TWTR': parseFloat( av[ 'TWTR' ].toFixed( 2 ) ),
      'val_YHOO': parseFloat( av[ 'YHOO' ].toFixed( 2 ) ),
      'mid': 0.5,
      'pos_1d': 0,
      'pos_2d': 0,
      'pos_3d': 0,
      'neg_1d': 0,
      'neg_2d': 0,
      'neg_3d': 0,

      'pos_1u_APPL': calcBandPos1( av[ 'APPL' ], baseline_APPL, bandOpts ),
      'pos_2u_APPL': calcBandPos2( av[ 'APPL' ], baseline_APPL, bandOpts ),
      'pos_3u_APPL': calcBandPos3( av[ 'APPL' ], baseline_APPL, bandOpts ),
      'neg_1u_APPL': calcBandNeg1( av[ 'APPL' ], baseline_APPL, bandOpts ),
      'neg_2u_APPL': calcBandNeg2( av[ 'APPL' ], baseline_APPL, bandOpts ),
      'neg_3u_APPL': calcBandNeg3( av[ 'APPL' ], baseline_APPL, bandOpts ),

      'pos_1u_AMZN': calcBandPos1( av[ 'AMZN' ], baseline_AMZN, bandOpts ),
      'pos_2u_AMZN': calcBandPos2( av[ 'AMZN' ], baseline_AMZN, bandOpts ),
      'pos_3u_AMZN': calcBandPos3( av[ 'AMZN' ], baseline_AMZN, bandOpts ),
      'neg_1u_AMZN': calcBandNeg1( av[ 'AMZN' ], baseline_AMZN, bandOpts ),
      'neg_2u_AMZN': calcBandNeg2( av[ 'AMZN' ], baseline_AMZN, bandOpts ),
      'neg_3u_AMZN': calcBandNeg3( av[ 'AMZN' ], baseline_AMZN, bandOpts ),

      'pos_1u_EBAY': calcBandPos1( av[ 'EBAY' ], baseline_EBAY, bandOpts ),
      'pos_2u_EBAY': calcBandPos2( av[ 'EBAY' ], baseline_EBAY, bandOpts ),
      'pos_3u_EBAY': calcBandPos3( av[ 'EBAY' ], baseline_EBAY, bandOpts ),
      'neg_1u_EBAY': calcBandNeg1( av[ 'EBAY' ], baseline_EBAY, bandOpts ),
      'neg_2u_EBAY': calcBandNeg2( av[ 'EBAY' ], baseline_EBAY, bandOpts ),
      'neg_3u_EBAY': calcBandNeg3( av[ 'EBAY' ], baseline_EBAY, bandOpts ),

      'pos_1u_FB': calcBandPos1( av[ 'FB' ], baseline_FB, bandOpts ),
      'pos_2u_FB': calcBandPos2( av[ 'FB' ], baseline_FB, bandOpts ),
      'pos_3u_FB': calcBandPos3( av[ 'FB' ], baseline_FB, bandOpts ),
      'neg_1u_FB': calcBandNeg1( av[ 'FB' ], baseline_FB, bandOpts ),
      'neg_2u_FB': calcBandNeg2( av[ 'FB' ], baseline_FB, bandOpts ),
      'neg_3u_FB': calcBandNeg3( av[ 'FB' ], baseline_FB, bandOpts ),

      'pos_1u_MSFT': calcBandPos1( av[ 'MSFT' ], baseline_MSFT, bandOpts ),
      'pos_2u_MSFT': calcBandPos2( av[ 'MSFT' ], baseline_MSFT, bandOpts ),
      'pos_3u_MSFT': calcBandPos3( av[ 'MSFT' ], baseline_MSFT, bandOpts ),
      'neg_1u_MSFT': calcBandNeg1( av[ 'MSFT' ], baseline_MSFT, bandOpts ),
      'neg_2u_MSFT': calcBandNeg2( av[ 'MSFT' ], baseline_MSFT, bandOpts ),
      'neg_3u_MSFT': calcBandNeg3( av[ 'MSFT' ], baseline_MSFT, bandOpts ),

      'pos_1u_ORCL': calcBandPos1( av[ 'ORCL' ], baseline_ORCL, bandOpts ),
      'pos_2u_ORCL': calcBandPos2( av[ 'ORCL' ], baseline_ORCL, bandOpts ),
      'pos_3u_ORCL': calcBandPos3( av[ 'ORCL' ], baseline_ORCL, bandOpts ),
      'neg_1u_ORCL': calcBandNeg1( av[ 'ORCL' ], baseline_ORCL, bandOpts ),
      'neg_2u_ORCL': calcBandNeg2( av[ 'ORCL' ], baseline_ORCL, bandOpts ),
      'neg_3u_ORCL': calcBandNeg3( av[ 'ORCL' ], baseline_ORCL, bandOpts ),

      'pos_1u_TWTR': calcBandPos1( av[ 'TWTR' ], baseline_TWTR, bandOpts ),
      'pos_2u_TWTR': calcBandPos2( av[ 'TWTR' ], baseline_TWTR, bandOpts ),
      'pos_3u_TWTR': calcBandPos3( av[ 'TWTR' ], baseline_TWTR, bandOpts ),
      'neg_1u_TWTR': calcBandNeg1( av[ 'TWTR' ], baseline_TWTR, bandOpts ),
      'neg_2u_TWTR': calcBandNeg2( av[ 'TWTR' ], baseline_TWTR, bandOpts ),
      'neg_3u_TWTR': calcBandNeg3( av[ 'TWTR' ], baseline_TWTR, bandOpts ),

      'pos_1u_YHOO': calcBandPos1( av[ 'YHOO' ], baseline_YHOO, bandOpts ),
      'pos_2u_YHOO': calcBandPos2( av[ 'YHOO' ], baseline_YHOO, bandOpts ),
      'pos_3u_YHOO': calcBandPos3( av[ 'YHOO' ], baseline_YHOO, bandOpts ),
      'neg_1u_YHOO': calcBandNeg1( av[ 'YHOO' ], baseline_YHOO, bandOpts ),
      'neg_2u_YHOO': calcBandNeg2( av[ 'YHOO' ], baseline_YHOO, bandOpts ),
      'neg_3u_YHOO': calcBandNeg3( av[ 'YHOO' ], baseline_YHOO, bandOpts )
    } );
  }

  newDataSet[ 0 ].dataProvider = newDataProvider;

  for ( var i = 0; i < dimensions.length; i++ ) {
    var dim = dimensions[ i ];
    var dimHandle = "_" + dim.dimension;

    var newFieldMappings = buildFieldMappings( dimHandle );

    for ( var x = 0; x < newFieldMappings.length; x++ ) {
      var fm = newFieldMappings[ x ];
      newDataSet[ 0 ].fieldMappings.push( fm );
    }

    var newPanel = buildPanel( dimHandle );
    newPanel.allLabels[ 0 ].text = dim.dimension;
    chartPanels.push( newPanel );
  }

  chart.panels = chartPanels;
  chart.dataSets = newDataSet;

}, [ "stock" ] );

var chart = AmCharts.makeChart( "chartdiv1", {
  "type": "stock",
  "dataDateFormat": "YYYY-MM-DD",

  "chartScrollbarSettings": {
    "graph": "g1",
    "scrollbarHeight": 40,

    "dragIcon": "dragIconRectSmall",
    "dragIconWidth": 20,
    "dragIconHeight": 40,

    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "color": "#AAAAAA"
  },

  "balloon": {
    "fontSize": 13
  },

  "panelsSettings": {
    "fontFamily": "Arial",
    "creditsPosition": "bottom-right",
    "panelSpacing": 1,
    "marginLeft": 15,
    "marginRight": 15
  },

  "chartCursorSettings": {
    "cursorAlpha": 0.5,
    "cursorColor": '#444444',
    "valueLineAlpha": 0,
    "valueBalloonsEnabled": true,
    "oneBalloonOnly": true
  },

  "categoryAxesSettings": {
    "minPeriod": "hh",
    "parseDates": true,
    "equalSpacing": false,
    "gridAlpha": 0,
    "axisAlpha": 0,
    "inside": true,
    "maxSeries": 0
  },

  "periodSelector": {
    "position": "bottom",
    "inputFieldsEnabled": false,
    "periods": [ {
      "period": "DD",
      "selected": true,
      "count": 1,
      "label": "1d"
    }, {
      "period": "DD",
      "selected": true,
      "count": 10,
      "label": "10d"
    }, {
      "period": "MM",
      "selected": true,
      "count": 1,
      "label": "1m"
    }, {
      "period": "MM",
      "selected": true,
      "count": 6,
      "label": "6m"
    }, {
      "period": "YYYY",
      "selected": true,
      "count": 6,
      "label": "1y"
    }, {
      "period": "MAX",
      "label": "MAX"
    } ]
  },
  "dataSetSelector": {
    "position": "bottom"
  },
  "export": {
    "enabled": true
  }
} );
*/
