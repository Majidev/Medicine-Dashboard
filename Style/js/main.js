


am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    /**
     * Chart design taken from Samsung health app
     */

    var chart = am4core.create("activitychart", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [{
        "date": "2018-01-23",
        "steps": 40
    }, {
        "date": "2018-01-24",
        "steps": 60
    },
    {
        "date": "2018-01-25",
        "steps": 40
    }, {
        "date": "2018-01-26",
        "steps": 80
    }, {
        "date": "2018-01-27",
        "steps": 40
    }, {
        "date": "2018-01-28",
        "steps": 80
    }, {
        "date": "2018-01-29",
        "steps": 40
    }, {
        "date": "2018-01-30",
        "steps": 80
    }, {
        "date": "2018-01-31",
        "steps": 40
    }

    ];

    chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
    chart.zoomOutButton.disabled = true;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.strokeOpacity = 0;
    dateAxis.renderer.minGridDistance = 10;
    dateAxis.dateFormats.setKey("day", "d");
    dateAxis.tooltip.hiddenState.properties.opacity = 1;
    dateAxis.tooltip.hiddenState.properties.visible = true;


    dateAxis.tooltip.adapter.add("x", function (x, target) {
        return am4core.utils.spritePointToSvg({ x: chart.plotContainer.pixelX, y: 0 }, chart.plotContainer).x + chart.plotContainer.pixelWidth / 2;
    })
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());


    // var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.min = 0;
    valueAxis.max =100;
    
    valueAxis.renderer.labels.template.fillOpacity = 0.3;
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    
    valueAxis.cursorTooltipEnabled = false;

    // goal guides


    valueAxis.renderer.gridContainer.zIndex = 1;



    var series = chart.series.push(new am4charts.ColumnSeries);
    series.dataFields.valueY = "steps";
    series.dataFields.dateX = "date";
    series.tooltipText = "{valueY.value}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.hiddenState.properties.opacity = 1;
    series.tooltip.hiddenState.properties.visible = true;
    series.tooltip.adapter.add("x", function (x, target) {
        return am4core.utils.spritePointToSvg({ x: chart.plotContainer.pixelX, y: 0 }, chart.plotContainer).x + chart.plotContainer.pixelWidth / 2;
    })

    var columnTemplate = series.columns.template;
    columnTemplate.width = 12;
    columnTemplate.column.cornerRadiusTopLeft = 10;
    columnTemplate.column.cornerRadiusTopRight = 10;
    columnTemplate.strokeOpacity = 0;

    columnTemplate.adapter.add("fill", function (fill, target) {
        var dataItem = target.dataItem;
        if (dataItem.valueY > 41) {
            return am4core.color("#ff9900");
        }
        else {
            return am4core.color("#ffc266");
        }
    })

    var cursor = new am4charts.XYCursor();
    cursor.behavior = "panX";
    chart.cursor = cursor;
    cursor.lineX.disabled = true;

    chart.events.on("datavalidated", function () {
        let d = new Date();
        dateAxis.zoomToDates(new Date(2018, 0, 21), new Date(2018, 1, 1), false, true);
    });


    // middleLine.adapter.add("y2", function (y2, target) {
    //     return target.parent.pixelHeight;
    // })

    cursor.events.on("cursorpositionchanged", updateTooltip);
    dateAxis.events.on("datarangechanged", updateTooltip);

    function updateTooltip() {
        dateAxis.showTooltipAtPosition(0.5);
        series.showTooltipAtPosition(0.5, 0);
        series.tooltip.validate(); // otherwise will show other columns values for a second
    }




});



var options = {
    chart: {
      height: 125,
      type: "radialBar",
      color:"FF0000",
      
    },
    
    series: [75],colors: ["#FF0000"], 
    
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "50%",
          
        },
       
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -100,
            show: false,
            color: "#FF0000",
            fontSize: "0px"
          },
          value: {
              offsetY:8,
            color: "#A1A0A0",
            fontSize: "18px",
            show: true
          }
        }
      }
    },
  
    stroke: {
      lineCap: "round",
    },
   
  };
  
  var chart = new ApexCharts(document.querySelector("#generalhchart"), options);
  
  chart.render();
           

  var options2 = {
    chart: {
      height: 125,
      type: "radialBar",
      color:"FF0000"
    },
    
    series: [83],colors: ["#0017FF"],
    
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "50%"
        },
       
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: false,
            color: "#FF0000",
            fontSize: "0px"
          },
          value: {
            offsetY:8,
            color: "#A1A0A0",
            fontSize: "18px",
            show: true
          }
        }
      }
    },
  
    stroke: {
      lineCap: "round",
    },
   
  };
  
  var chart = new ApexCharts(document.querySelector("#waterchart"), options2);
  
  chart.render();
  
  
// DatePicker

  $('#calendar').datepicker({
    language: "en",
    startDate: '-9d',
    todayHighlight: true
});



// HealthConditionChart
am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_kelly);
  // Themes end
  
  
  
  // Create chart instance
  var chart = am4core.create("healthcondition-chart", am4charts.XYChart);
  
  // Add data
  chart.data = [{
    "date": "2012-03-01",
    "price": 400
  }, {
    "date": "2012-03-02",
    "price": 23
  }, {
    "date": "2012-03-03",
    "price": 70
  }, {
    "date": "2012-03-04",
    "price": 50
  }, {
    "date": "2012-03-05",
    "price": 250
  }, {
    "date": "2012-03-06",
    "price": 50
  }, {
    "date": "2012-03-07",
    "price": 240
  }, {
    "date": "2012-03-08",
    "price": 20
  }, {
    "date": "2012-03-09",
    "price": 300
  }, {
    "date": "2012-03-10",
    "price": 400
  }, {
    "date": "2012-03-11",
    "price": 600
  }, ];
  
  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.renderer.minGridDistance = 50;
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.logarithmic = true;
  valueAxis.renderer.minGridDistance = 20;
  
  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "price";
  series.dataFields.dateX = "date";
  series.tensionX = 0.8;
  series.strokeWidth = 3;
  
  
  
  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.fullWidthLineX = true;
  chart.cursor.xAxis = dateAxis;
  chart.cursor.lineX.strokeWidth = 0;
  chart.cursor.lineX.fill = am4core.color("#000");
  chart.cursor.lineX.fillOpacity = 0.1;
  
  // Add scrollbar
  
  
  // Add a guide

  
  }); // end am4core.ready()
  function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();
 console.log(width)
    if(width>817){
      $("#content").removeClass("collapse");
    $("#content").addClass("collapsed");
    $("#collapse-icon1").addClass("d-none");
    }
  
    if(width<817){
      $("#content").removeClass("collapsed");
      $("#content").addClass("collapse");
      $("#collapse-icon1").removeClass("d-none");
  
    }

    console.log(width)    // Display the height
};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size

  var w = window.innerWidth;
  var h = window.innerHeight;
 