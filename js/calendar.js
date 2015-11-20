	
    var app=angular.module("Calendar", [])
         app.controller("calController", function($scope) {
             
         });	
		 
	var dateNow = new Date();
	var m = dateNow.getMonth();
	var year = dateNow.getFullYear();
	var date= dateNow.getDate();
	var day= dateNow.getDay();
	var mNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
	
	var currentMonth;
	var currentYear;
	
	saveCurr();
	
	function saveCurr(){
		 currentMonth=m;
		 currentYear=year;
	}
	
	fillTable();
	
	
	function next(){
		dateNow.setMonth(dateNow.getMonth() + 1);
		fillTable();

	}
	function pre(){
		dateNow.setMonth(dateNow.getMonth() - 1);
		fillTable();
			
	}
	
	function FebDays(){
		 	
					year = dateNow.getFullYear();
					if (( (year%100!=0) && (year%4==0)) || (year%400==0)){
					 return  29;
					}else{
					  return 28;
					}
				 
	}

	function getFirstDay(){
	
			var day= dateNow.getDay();
			var first=dateNow.getDate();
			
			
			 //get day on first of month
				for(;first!=1;){
				day--;
						first--;
					if(day<0){
						day=6;
						}			
				}
				//if(day==-1){day=6;}
				
			return day;	
		}
	
	
	function fillTable(){
	
		        m = dateNow.getMonth();

				var dayPerMonth = ["31", ""+FebDays()+"","31","30","31","30","31","31","30","31","30","31"];
				var firstDay=getFirstDay();
				
				var prevMonth=dateNow.getMonth()-1;
				
				if(prevMonth==-1){prevMonth=11;}
				var prevDays=dayPerMonth[prevMonth];
				
				$("#mhead").html(setMhead());
		
				var body="";
				
				var pre=firstDay-1;
				var temp=prevDays-pre;
				body+="<tr>";
				
				if(pre==0){
						body+="<td class='otherMonth'>"+temp+"</td>";
				}
				else{
				while( temp<prevDays){
					temp=prevDays-pre;
					body+="<td class='otherMonth'>"+temp+"</td>";
					pre--;
					}
				}	
					
			    var count=1;
				temp=firstDay;
				
				while(count<=dayPerMonth[m]){
				
					if(temp>6){
						temp=0;
						body+="</tr><tr>";
					}
					if(count==date && m==currentMonth && year==currentYear){
						body+="<td class='today'>"+count+"</td>";
					}
					else{
						body+="<td class='thisMonth'>"+count+"</td>";
					}
					count++;
					temp++;
				}
				
				count=1;
				while(temp<=6){
					body+="<td class='otherMonth'>"+count+"</td>";
					count++;
					temp++;		
				}
					body+="</tr>";
	//			console.log(body);
				$("#cal").html(body);
			}
		function setMhead() {

					 var mNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];	 
					 return mNames[dateNow.getMonth()]+", "+dateNow.getFullYear();
			  }
				