$(document).ready(function(){ 
// welcome modal
document.getElementById("wlcm").click();
imgAdd = "ADDRESS"
// loss fold1
var loss1 = document.getElementById('ls1').getContext('2d');
var chartLS1 = new Chart(loss1, {
    // The type of chart we want to create 
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            data: [4.4182,0.6185,0.3587,0.2873,0.2594,0.2368,0.2144,0.2051,0.1931,0.1899,0.1793,0.1724,0.1702,0.1658,0.1559,0.1591]

        },
        {
            label: 'Validation Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(50, 150, 100)',
            data: [3.7524,0.5097,0.3232,0.283,0.2681,0.2595,0.2547,0.2531,0.2501,0.2507,0.2497,0.2485,0.2498,0.2503,0.2498,0.2495]

        }
        
        ]
        
        
    },

    // Configuration options go here
options: {

		 legend: {
            labels: {
                fontColor: "white"
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
               scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Loss',
									fontStyle: "bold",

					fontSize:13                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					//stepSize: 1
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
									fontStyle: "bold",

					fontSize:13
                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                   // beginAtZero: true,
                    stepSize: 10
                }
            }]
        }
    }
});




// acc fold1
var acc1 = document.getElementById('ac1').getContext('2d');
var chartAC1 = new Chart(acc1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(35, 99, 35)',
            data: [26.156,88.095,91.051,92.238,92.663,93.024,93.514,93.643,94.034,93.704,94.31,94.398,94.551,94.622,95.044,94.694]
        },
        {
            label: 'Validation Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(20, 200, 240)',
            data: [77.248,90.221,91.466,92.075,92.241,92.351,92.545,92.683,92.628,92.545,92.434,92.6,92.351,92.49,92.462,92.628]
        }
        
        ]
        
        
    },

    // Configuration options go here
options: {
		 legend: {
            labels: {
				 display: true,
                fontColor: "white",
				fontSize:11
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Accuracy',
					//fontSize:16
                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					stepSize: 50
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
					fontSize:12

                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                    beginAtZero: true,
                    stepSize: 2
                }
            }]
        }
    }
});


// loss fold2
var loss2 = document.getElementById('ls2').getContext('2d');
var chartLS2 = new Chart(loss2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            data: [4.4158,0.6225,0.3628,0.296,0.2535,0.2345,0.2179,0.2012,0.1852,0.1892,0.1827,0.1765,0.1675,0.1637,0.1598,0.1622]

        },
        {
            label: 'Validation Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(50, 150, 100)',
            data: [3.7466,0.4906,0.3062,0.2667,0.2501,0.2412,0.2375,0.2328,0.2306,0.23,0.2281,0.2268,0.2264,0.2264,0.2269,0.2264]

        }
        
        ]
        
        
    },

    // Configuration options go here
options: {

		 legend: {
            labels: {
                fontColor: "white"
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
               scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Loss',
									fontStyle: "bold",

					fontSize:13                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					//stepSize: 1
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
									fontStyle: "bold",

					fontSize:13
                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                   // beginAtZero: true,
                    stepSize: 10
                }
            }]
        }
    }
});

// acc fold2
var acc2 = document.getElementById('ac2').getContext('2d');
var chartAC2 = new Chart(acc2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(35, 99, 35)',
            data: [26.633,88.224,91.34,92.007,92.847,93.269,93.469,94.037,94.347,94.116,94.357,94.32,94.741,94.748,94.85,94.653]
        },
        {
            label: 'Validation Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(20, 200, 240)',
            data: [77.704,90.318,91.563,91.95,92.006,92.282,92.337,92.448,92.227,92.448,92.365,92.365,92.531,92.448,92.31,92.337]
        }
        
        ]
        
        
    },

    // Configuration options go here
options: {
		 legend: {
            labels: {
				 display: true,
                fontColor: "white",
				fontSize:11
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Accuracy',
					//fontSize:16
                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					stepSize: 50
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
					fontSize:12

                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                    beginAtZero: true,
                    stepSize: 2
                }
            }]
        }
    }
});











// loss fold3
var loss3 = document.getElementById('ls3').getContext('2d');
var chartLS3 = new Chart(loss3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            data: [4.4170,0.6143,0.36,0.2884,0.2511,0.2328,0.2161,0.1978,0.1927,0.1828,0.1805,0.1704,0.1644,0.1667,0.1607,0.1546]
        },
        {
            label: 'Validation Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(50, 150, 100)',
            data: [3.7539,0.5097,0.3232,0.284,0.2693,0.2614,0.2561,0.2542,0.2522,0.251,0.2507,0.2494,0.2509,0.2502,0.25,0.2493]

        }
        
        ]
        
        
    },

    // Configuration options go here
options: {

		 legend: {
            labels: {
                fontColor: "white"
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
               scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Loss',
									fontStyle: "bold",

					fontSize:13                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					//stepSize: 1
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
									fontStyle: "bold",

					fontSize:13
                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                   // beginAtZero: true,
                    stepSize: 10
                }
            }]
        }
    }
});


// acc fold3
var acc3 = document.getElementById('ac3').getContext('2d');
var chartAC3 = new Chart(acc3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        // labels: [1],
        datasets: [{
            label: 'Train Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(35, 99, 35)',
            data: [26.153,88.517,90.925,92.588,93.102,93.163,93.316,94.071,94.068,94.384,94.224,94.531,94.582,94.517,94.857,95.197]
        },
        {
            label: 'Validation Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(20, 200, 240)',
            data: [76.763,89.931,91.314,91.231,91.452,91.397,91.618,91.591,91.618,91.508,91.425,91.729,91.701,91.618,91.535,91.674]
        }
        
        ]
        
        
    },

    // Configuration options go here
    options: {
		 legend: {
            labels: {
				 display: true,
                fontColor: "white",
				fontSize:11
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Accuracy',
					//fontSize:16
                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					stepSize: 50
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
					fontSize:12

                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                    beginAtZero: true,
                    stepSize: 2
                }
            }]
        }
    }
});






// loss fold4
var loss4 = document.getElementById('ls4').getContext('2d');
var chartLS4 = new Chart(loss4, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            data:[4.4185,0.6128,0.3508,0.2861,0.2599,0.2317,0.2117,0.2047,0.1881,0.1833,0.1822,0.173,0.1697,0.1645,0.1618,0.1534]

        },
        {
            label: 'Validation Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(50, 150, 100)',
            data: [3.7555,0.5197,0.3366,0.2993,0.2834,0.276,0.2707,0.268,0.267,0.2649,0.2649,0.2647,0.2646,0.2634,0.2633,0.2651]

        }
        
        ]
        
        
    },

    // Configuration options go here
  options: {

		 legend: {
            labels: {
                fontColor: "white"
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
               scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Loss',
									fontStyle: "bold",

					fontSize:13                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					//stepSize: 1
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
									fontStyle: "bold",

					fontSize:13
                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                   // beginAtZero: true,
                    stepSize: 10
                }
            }]
        }
    }
});


// acc fold4
var acc4 = document.getElementById('ac4').getContext('2d');
var chartAC4 = new Chart(acc4, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        // labels: [1],
        datasets: [{
            label: 'Train Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(35, 99, 35)',
            data: [26.031,88.548,91.323,92.276,92.435,93.143,93.939,93.81,94.197,94.122,94.228,94.347,94.446,94.612,94.68,94.878]
        },
        {
            label: 'Validation Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(20, 200, 240)',
            data: [76.777,89.587,90.744,91.074,91.46,91.488,91.598,91.763,91.57,91.598,91.515,91.543,91.543,91.625,92.149,91.515]



        }
        
        ]
        
        
    },

    // Configuration options go here
   options: {
		 legend: {
            labels: {
				 display: true,
                fontColor: "white",
				fontSize:11
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Accuracy',
					//fontSize:16
                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					stepSize: 50
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
					fontSize:12

                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                    beginAtZero: true,
                    stepSize: 2
                }
            }]
        }
    }
});











// loss fold5
var loss5 = document.getElementById('ls5').getContext('2d');
var chartLS5 = new Chart(loss5, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            data: [4.4378,0.6247,0.363,0.2909,0.2576,0.2309,0.2164,0.2037,0.196,0.1844,0.1793,0.1775,0.1672,0.1621,0.1634,0.1574]
        },
        {
            label: 'Validation Loss',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(50, 150, 100)',
            data: [3.7890,0.5186,0.3213,0.2801,0.2644,0.2552,0.2495,0.247,0.2461,0.2452,0.244,0.2439,0.2436,0.2439,0.2432,0.2438]



        }
        
        ]
        
        
    },

    // Configuration options go here
    options: {

		 legend: {
            labels: {
                fontColor: "white"
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
               scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Loss',
									fontStyle: "bold",

					fontSize:13                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					//stepSize: 1
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
									fontStyle: "bold",

					fontSize:13
                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                   // beginAtZero: true,
                    stepSize: 10
                }
            }]
        }
    }
});

// acc fold5
var acc5 = document.getElementById('ac5').getContext('2d');
var chartAC5 = new Chart(acc5, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
        datasets: [{
            label: 'Train Accuracy',
			
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(35, 99, 35)',
            data: [25.484,88.284,91.023,92.43,92.776,93.192,93.581,93.678,93.802,94.516,94.315,94.211,94.6,94.669,94.718,94.78]

        },
        {
            label: 'Validation Accuracy',
            // backgroundColor: 'rgb(255, 255, 255)',
            fill: false,
            borderColor: 'rgb(20, 200, 240)',
            data: [75.804,90.124,91.549,91.858,92.038,92.338,92.364,92.39,92.261,92.312,92.467,92.415,92.492,92.415,92.544,92.544]

        }
        
        ]
        
        
    },

    // Configuration options go here
    options: {
		 legend: {
            labels: {
				 display: true,
                fontColor: "white",
				fontSize:11
				}
        },
		responsive: false,
        scales: {
            yAxes: [{
				gridLines: {
				  drawBorder: true,
                        display: false,
						
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true,                                
					fontColor: 'white',
                    labelString: 'Accuracy',
					//fontSize:16
                },
                ticks: {
					fontColor: 'white',
                    beginAtZero: true,
					stepSize: 50
                }
            }],
            xAxes: [{
				gridLines: {
				   drawBorder: true,
                        display: false,
				  color: "#FFFFFF"
				},
                scaleLabel: {
                    display: true, 
					fontColor: 'white',
                    labelString: 'Epoch',
					fontSize:12

                },
                ticks: {
                    max: 150,
					fontColor: 'white',
                    beginAtZero: true,
                    stepSize: 2
                }
            }]
        }
    }
});




var ctx = document.getElementById('qer');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
    labels: ["First Prediction", "Second Prediction",["Other 148 Breeds","(sum of probabilities)"]],
    datasets: [{
                barThickness: 16,
                maxBarThickness: 18,
                minBarLength: 12,
                backgroundColor: ["white", "#999","#777"],
                data: [50,30,20]
                
            }]
            },
    options: options = {
                        legend: { display: false },
                        fontColor: 'white',

                        scales: {
                            yAxes: [{
                                scaleFontSize: 10,
                                scaleLabel: {

                                },
                                ticks: {
                                            beginAtZero: true,
                                                fontSize: 15,
                                                padding: 0,
                                                fontColor: '#fff'
                                        }
                            }],
                            
                            xAxes: [{
                                gridLines: {
                                   // offsetGridLines: true
                                } ,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Probability (%)',
                                    fontColor: 'white',
                                    // fontSize: '17'
                                },
                                ticks: {
                                max: 100,
                                min: 0,    
                                fontColor: 'white',
                                beginAtZero: true,
                                stepSize: 20
                               }
                            }]
                        },
                    title: {
                        display: true,
                        fontColor: 'white',
                        fontSize: 18,
                        text: 'The result'
                    }
                    }
});



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
    prevran=1
   var photographer = ["Photo by Gabrielle Costa on Unsplash",
   "Photo by Jamie Street on Unsplash",
   "Photo by Berkay Gumustekin on Unsplash", 
   "Photo by Victor Grabarczyk on Unsplash", 
   "Photo by Justin Aikin on Unsplash",
   "Photo by Jf Brou on Unsplash",
   "Photo by Jordan Whitt on Unsplash",
   "Photo by Marcus Wallis on Unsplash","Photo by JC Gellidon on Unsplash"];   
    $("#randomImage").on('click',function(){
        document.getElementById("ranButtonIcn").className = "fas fa-spinner fa-spin fa-lg ";
        ran=Math.floor(Math.random() * 9); 

        while (ran == prevran) {
        ran=Math.floor(Math.random() * 9); 
        }
        prevran=ran
        $("#textinImage").addClass("d-none");
        $("#ranImg").attr("src",'./static/randomImg/'  + String(ran+1)+"/"+ String(ran+1)+"/" +String(ran+1) +'.jpg');
                imgAdd = document.getElementById('ranImg').src

       // $("#ranImg").addClass("d-block");
       $("#ranImg").removeClass("d-none");
        $("#ranImg").on('load',function(){
                    $('#ranImg').css("width","100%");
                    $('#gryTxt').css("border-width","1px");
                    if(!$("#gryTxt").hasClass("bg-dark"))
                          $('#gryTxt').addClass("bg-dark");
              
        document.getElementById("ranButtonIcn").className = "fas fa-dog fa-lg";
        $("#ranImg").attr('data-original-title',(photographer[ran]));
        if(window.innerWidth> 639){
        $("#ranImg").tooltip('enable');
        $("#ranImg").tooltip('show');
        }
        }); 










        document.getElementById("run").className = "btn btn-primary  d-flex  justify-content-center align-items-center enabled";


    });


        $("#randomImage").on('click', function () {
                        $(this).tooltip('hide')
                    })

        $("#spanUpld").on('click', function () {
                        $(this).tooltip('hide')
                    })


    $("#fold5").css("display","none");
    $("#fold4").css("display","none");
    $("#fold3").css("display","none");
    $("#fold2").css("display","none");

    $("#fold3btn").on('click',function(){
        $("#fold1").css("display","none");
        $("#fold2").css("display","none");
        $("#fold4").css("display","none");
        $("#fold5").css("display","none");

        $("#fold3").fadeIn(1000);
    });
    $("#fold2btn").on('click',function(){
        $("#fold1").css("display","none");
        $("#fold3").css("display","none");
        $("#fold4").css("display","none");
        $("#fold5").css("display","none");

        $("#fold2").fadeIn(1000);
    });
    $("#fold1btn").on('click',function(){
        $("#fold3").css("display","none");
        $("#fold2").css("display","none");
        $("#fold4").css("display","none");
        $("#fold5").css("display","none");

        $("#fold1").fadeIn(1000);
    });
    $("#fold4btn").on('click',function(){
        $("#fold1").css("display","none");
        $("#fold2").css("display","none");
        $("#fold3").css("display","none");
        $("#fold5").css("display","none");

        $("#fold4").fadeIn(1000);
    });
    $("#fold5btn").on('click',function(){
        $("#fold1").css("display","none");
        $("#fold2").css("display","none");
        $("#fold3").css("display","none");
        $("#fold4").css("display","none");

        $("#fold5").fadeIn(1000);
    });
    // Get the current year for the copy right
    $('#year').text(new Date().getFullYear());
    $('body').scrollspy({target:"#main-nav"});  
    $('#main-nav a').on('click',function (e) {
            // check for hash value
            if(this.hash !== ''){
                // prevent defualt behavior
                e.preventDefault();
                const hash = this.hash;

                //smooth scroll 
                $('html,body').animate({
                    scrollTop: $(hash).offset().top
                },900,function (){
                        //add hash to url after the scroll
                        window.location.hash=hash;

                });
            }

        }); 


        $('#gofolds').on('click',function (e) {
            // check for hash value
            if(this.hash !== ''){
                // prevent defualt behavior
                e.preventDefault();
                const hash = this.hash;

                //smooth scroll 
                $('html,body').animate({
                    scrollTop: $(hash).offset().top
                },900,function (){
                        //add hash to url after the scroll
                        window.location.hash=hash;

                });
            }

        });
        $('.navbar-collapse').on('click',function(){
          



        });
        $('.navbar-toggler').on('click',function(){
           
        });
    $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});



$('#lossPlt1').on('click',function (e) {
	$('#lossPlt1').css('color','yellow');
	$('#lossPlt1 i').css('color','yellow');
	$('#accPlt1').css('color','white');
	$('#accPlt1 i').css('color','white');
	$("#ac1").parent().hide();
	$("#ls1").parent().slideToggle();
	 chartLS1.resize();		
});
$('#accPlt1').on('click',function (e) {
	$('#lossPlt1').css('color','white');
	$('#lossPlt1 i').css('color','white');
	$('#accPlt1').css('color','yellow');
	$('#accPlt1 i').css('color','yellow');
	
	$("#ls1").parent().hide();
	$("#ac1").parent().slideToggle();
	 chartAC1.resize();		
});





$('#lossPlt2').on('click',function (e) {
	$('#lossPlt2').css('color','yellow');
	$('#lossPlt2 i').css('color','yellow');
	$('#accPlt2').css('color','white');
	$('#accPlt2 i').css('color','white');
	$("#ac2").parent().hide();
	$("#ls2").parent().slideToggle();
	 chartLS2.resize();		
});
$('#accPlt2').on('click',function (e) {
	$('#lossPlt2').css('color','white');
	$('#lossPlt2 i').css('color','white');
	$('#accPlt2').css('color','yellow');
	$('#accPlt2 i').css('color','yellow');
	
	$("#ls2").parent().hide();
	$("#ac2").parent().slideToggle();
	 chartAC2.resize();		
});



$('#lossPlt3').on('click',function (e) {
	$('#lossPlt3').css('color','yellow');
	$('#lossPlt3 i').css('color','yellow');
	$('#accPlt3').css('color','white');
	$('#accPlt3 i').css('color','white');
	$("#ac3").parent().hide();
	$("#ls3").parent().slideToggle();
	 chartLS3.resize();		
});
$('#accPlt3').on('click',function (e) {
	$('#lossPlt3').css('color','white');
	$('#lossPlt3 i').css('color','white');
	$('#accPlt3').css('color','yellow');
	$('#accPlt3 i').css('color','yellow');
	
	$("#ls3").parent().hide();
	$("#ac3").parent().slideToggle();
	 chartAC3.resize();		
});


$('#lossPlt4').on('click',function (e) {
	$('#lossPlt4').css('color','yellow');
	$('#lossPlt4 i').css('color','yellow');
	$('#accPlt4').css('color','white');
	$('#accPlt4 i').css('color','white');
	$("#ac4").parent().hide();
	$("#ls4").parent().slideToggle();
	 chartLS4.resize();		
});
$('#accPlt4').on('click',function (e) {
	$('#lossPlt4').css('color','white');
	$('#lossPlt4 i').css('color','white');
	$('#accPlt4').css('color','yellow');
	$('#accPlt4 i').css('color','yellow');
	
	$("#ls4").parent().hide();
	$("#ac4").parent().slideToggle();
	 chartAC4.resize();		
});



$('#lossPlt5').on('click',function (e) {
	$('#lossPlt5').css('color','yellow');
	$('#lossPlt5 i').css('color','yellow');
	$('#accPlt5').css('color','white');
	$('#accPlt5 i').css('color','white');
	$("#ac5").parent().hide();
	$("#ls5").parent().slideToggle();
	 chartLS5.resize();		
});
$('#accPlt5').on('click',function (e) {
	$('#lossPlt5').css('color','white');
	$('#lossPlt5 i').css('color','white');
	$('#accPlt5').css('color','yellow');
	$('#accPlt5 i').css('color','yellow');
	
	$("#ls5").parent().hide();
	$("#ac5").parent().slideToggle();
	 chartAC5.resize();		
});

        $('#accPlt1,#accPlt2,#accPlt3,#accPlt4,#accPlt5,#lossPlt1,#lossPlt2,#lossPlt3,#lossPlt4,#lossPlt5').on('click',function (e) {
            // check for hash value
			 if(window.innerWidth< 992){
            if(this.hash !== ''){
                // prevent defualt behavior
                e.preventDefault();
                const hash = this.hash;

                //smooth scroll 
                $('html,body').animate({
                    scrollTop: $(hash).offset().top
                },900,function (){
                        //add hash to url after the scroll
                        window.location.hash=hash;

                });
            }
			 }
			 else{
				 e.preventDefault();
			 }

        });


$("#buttonModalSearch2").click(function (e) {
	$('#notCorrectModal').modal('toggle');
	e.preventDefault();
    setTimeout(myFunction, 500);
	function myFunction() {
	 $(".buttonModalSearch").click();
	}
});

var newUrl = "https://www.google.com/search?tbm=isch&q="
$("#chck").click(function (e) {
     res = document.getElementById("boxRes").innerHTML 
	 console.log(document.getElementById("boxRes").innerHTML )
	$(this).attr("href", newUrl+res+" breed"); 
});


/*
$("#chck").click(function (e) {
https://www.google.com/search?tbm=isch&q=findSomeI
	Logger.log(response.getContentText());
});
*/
  //          document.getElementById("searchContent").innerHTML='<object type="type/html" data="http://www.isna.ir" ></object>';
      $("#searchContent").html('<object data="https://www.w3schools.com/">');



//AJAX image upload


$("#upld").on('change',function (e) {

    var isImage = false;
    var form_data = new FormData($('#form_upld')[0]);
    document.getElementById("upldIcn").className = "fas fa-spinner fa-spin fa-lg mr-2 ";
    var reader = new FileReader();

    reader.onload = function(e) {
		$('#ranImg').attr('src', e.target.result);
        }
    if(this.files[0]!= undefined) 
	if(this.files[0].type == 'image/jpeg' || this.files[0].type == 'image/jpg' || this.files[0].type == 'image/png'){
   		 reader.readAsDataURL(this.files[0]);
		 isImage = true;
		}

   

    $.ajax({
    xhr: function() {
			var xhr = new window.XMLHttpRequest();
			xhr.upload.addEventListener("progress", function(evt) {
			  if (evt.lengthComputable && isImage  ) {
				var percentComplete = evt.loaded / evt.total;
				percentComplete = parseInt(percentComplete * 100);
				$('#spanUpldInner').html(percentComplete + " % uploaded")
				if (percentComplete === 100) {
				$('#spanUpldInner').html(" Waiting ...")

				}
				
			  }
			}, false); 
 
			return xhr;
		  },
      method: "POST",
      url: "/",
      data: form_data,
      contentType: false,
      contentType: false,
      cache: false,
      processData: false
    }).done(function(data) {
    if (data['img'] == "ERROR_extention"){
        document.getElementById("upldIcn").className = "fas fa-upload fa-lg mr-2";
        document.getElementById("run").className = "btn btn-primary  d-flex  justify-content-center align-items-center disabled";
        document.getElementById("buttonModalUpld").click();
	$('#spanUpld').html('<i id="upldIcn" class="fas fa-upload fa-lg mr-1"></i><span id="spanUpldInner">Upload image</span>');
           
    }
    if (data['img'] != "ERROR_extention"){
    $('#ranImg').attr('data-original-title',"");
        if(data['h'] >=  data['w']){
            $('#ranImg').css("width","50%");
            $('#gryTxt').css("border-width","0px");
            $('#gryTxt').removeClass("bg-dark");        
        }
        else {
            $('#ranImg').css("width","100%");
            $('#gryTxt').css("border-width","1px");
             if(!$("#gryTxt").hasClass("bg-dark"))
                  $('#gryTxt').addClass("bg-dark");
             }

        $('#ranImg').tooltip('disable');
        $('#ranImg').tooltip('hide');
        document.getElementById("ranImg").className = "";
        document.getElementById("run").className = "btn btn-primary  d-flex  justify-content-center align-items-center enabled";
	imgAdd = data['img']
        $('#textinImage').addClass("d-none"); 
        document.getElementById("upldIcn").className = "fas fa-upload fa-lg mr-2";
	$('#spanUpld').html('<i id="upldIcn" class="fas fa-upload fa-lg mr-1"></i><span id="spanUpldInner">Upload image</span>');


       
    }

  });
});

// ajax run
$("#run").on('click',function (e) {
	if($("#best").hasClass("pleaseShake")){
		$('#best').removeClass("pleaseShake");
	}
    
    document.getElementById("runLogo").className ="fas fa-cog  fa-spin fa-lg mr-2";
        $("#run").addClass("btn-info");
    $("#run").removeClass("btn-primary ");
   
    var request = $.ajax({
      method: "POST",
      url: "/",
      data: {'image' : imgAdd}
          });
   request.fail( function(){
          document.getElementById("runLogo").className ="fas fa-arrow-alt-circle-right fa-lg mr-2";
          document.getElementById("buttonModalSrvr").click();

      });
  request.done(function(data) {
	/*
	onnx test
	async function run(){
		const sess = new onnx.InferenceSession({ backendHint: 'webgl' });
        await sess.loadModel("./static/model.onnx");
		const input = new onnx.Tensor(new Float32Array(10*3*240	*240), 'float32',[10,3,240,240]);
		const outputMap = await sess.run([input]);
		const outputTensor = outputMap.values().next().value;
		
	}
	run();
	*/
		
	$('#best').addClass("pleaseShake");
    document.getElementById("runLogo").className ="fas fa-arrow-alt-circle-right fa-lg mr-2";
    $('#fistChoice').html('<i class="fas fa-check-double mr-2 fa-lg"></i>'+data['o1']);
    $('#secondChoice').html('<i class="fas fa-check mr-2 fa-lg"></i>'+ data['o2']);
    $('#fistProb').html('<b>' + (data['p1']*100).toFixed(5) + "%" + '</b>');
    $('#secondProb').html('<b>' + (data['p2']*100).toFixed(5) + "%" + '</b>');
    $('#thirdProb').html('<b>' + ((1-data['p1']-data['p2'])*100).toFixed(5)+ "%" + '</b>');
    document.getElementById("boxRes").innerHTML = data['o1'];
    

        a = data['o1'].split(" ");
	b = a.slice(2)


    if (a.length > 2 ){
        newo1=[];
        temp= [];
        temp.push(a[0]);
        temp.push(a[1]);
        a.splice(0, 1); 
        a.splice(1, 1); 
        newo1.push(temp.join(" "));
		temp = []
		for (x in b) {
			  temp.push(b[x]);
			}
        newo1.push(temp.join(" "));

        data['o1']=newo1;
        
    }
    a = data['o2'].split(" ");
	b = a.slice(2)
    if (a.length > 2 ){
        newo2=[];
        temp= [];
        temp.push(a[0]);
        temp.push(a[1]);
        a.splice(0, 1); 
        a.splice(1, 1); 
		
        newo2.push(temp.join(" "));
        temp = []
		for (x in b) {
			  temp.push(b[x]);
			}
		newo2.push(temp.join(" "));

        data['o2']=newo2;
        
    }
    
    
    
   
    
    
    
    myBarChart.data.datasets[0].data = [data['p1']*100,data['p2']*100,(1-data['p1']-data['p2'])*100];
    myBarChart.data.labels = [data['o1'],data['o2'],["Other 148 Breeds","(sum of probabilities)"]];
    myBarChart.update();
	myBarChart.resize();
	$("#chck").css("display","inline");
    $("#NC").css("display","inline");
    document.getElementById("run").className = "btn btn-info  d-flex  justify-content-center align-items-center disabled";
    $(".yel").css('color','yellow');



    // scroll down in small windows
    if(window.innerWidth< 992){
              //  console.log(window.innerWidth );
                $("header").stop();
                // prevent defualt behavior
                e.preventDefault();
               // const hash = this.hash;
                //console.log(hash);
                //smooth scroll 
                $('html,body').animate({
                    scrollTop: 570
                },1000);
           
           
        }
		
	

    
    
    
    
      });
  
 });

//Ajax feedback
$("#form-feedback").on('submit',function (e) {
    e.preventDefault();
    var form_data = { 'nameForm': $('#theName').val(), 'emailForm': $('#theMail').val(), 'textForm': $('#textMessage').val()  };
    $.ajax({
      method: "POST",
      url: "/",
      data: form_data
    }).done(function() {    
      document.getElementById("buttonModal").click();

      });
  
});


//Ajax Search
$("#searchInpt").keyup(function (e) {/*
    e.preventDefault();*/
    var search_data = { 'searchValue': this.value };
    $.ajax({
      method: "POST",
      url: "/",
      data: search_data
    }).done(function(data) {    
		
		$('p#breedResPar').html("")
		if (data['res'].length==0 ){
			$('p#breedResPar').append("<p id='notFnd' style='text-align:center!important'><i class='fas fa-times-circle mr-2 fa-lg'></i>" + "Not found" +" </p>" );
		    console.log(data['res'].length);
		}
		$('p#breedResPar').append(	data['res'][0] )
        dt = data['res']
		dt.shift();
        for (i in dt){
						 $('p#breedResPar').append(	"<span class='delimiter  d-none d-sm-inline ' style='color:#DDD; opacity:0.3;'> | </span> <br class='d-sm-none d-xs-block'>"
						+dt[i] );
		}
		
      });
  
});







//AJAx get the full search
$(".buttonModalSearch").click(function (e) {

    var full_search = { 'fullSearchValue': "full" };
    $.ajax({
      method: "POST",
      url: "/",
      data: full_search
    }).done(function(data) {    
	$('p#breedResPar').html("")
		$('p#breedResPar').append(	data['res'][0] )
        data['res'].shift();
        for (i in data['res']){
						 $('p#breedResPar').append(	"<span class='delimiter d-none d-sm-inline '   style='color:#DDD; opacity:0.3;'> | </span> <br class='d-sm-none d-xs-block'>"+data['res'][i] )

		}
      });
  
});






})
