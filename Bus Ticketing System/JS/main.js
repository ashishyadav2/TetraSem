var subtmitBtn = document.querySelector(".submit");
var inputBox = document.querySelector(".textBox");

var sourceSelect = document.querySelector("#source-select");
var destSelect = document.querySelector("#dest-select");

var dateBox = document.querySelector(".date-box #date");
var timeBox = document.querySelector(".departure #time-select");

var ticketType = document.querySelector("#ticket-select");
var classType = document.querySelector("#class-select");

var summaryDiv = document.querySelector(".summary .table");
var printBtn = document.querySelector(".print");

function setAmount() {
    let sourceDistance = sourceSelect.value.slice(-2);
    let destDistance = destSelect.value.slice(-2);
    let colabaDist = sourceSelect[0].value.slice(-2);
    let distance;
    if(colabaDist == sourceDistance) {
        distance = destDistance;
    }
    else if(colabaDist == destDistance) {
        distance = sourceDistance;
    }
    else {
        distance = sourceDistance-destDistance;
    }
    if(getTicketType()=="Round Trip"&&getClassType()=="Economy Class") {
        distance *=2;
    }
    if(getTicketType()=="One Way" && getClassType()=="Premium Class") {
        distance = distance*2.5;
    }
    if(getTicketType()=="Round Trip" && getClassType()=="Premium Class") {
        distance = (distance*2)+(distance*2.5);
    }
    else {
        return Math.ceil(distance);

    }
    return Math.ceil(distance);
}
function getRouteData() {
    let source = sourceSelect.value.slice(0,-2);
    let destination = destSelect.value.slice(0,-2);
    if(source==destination) {
        alert("Source and destination cannot be same");
    }
    return source;
}
function getRouteData2() {
    let source = sourceSelect.value.slice(0,-2);
    let destination = destSelect.value.slice(0,-2);
    if(source==destination) {
        alert("Source and destination cannot be same");
    }
    return destination;
}
function getDateofJourney() {
    var journeyDate = dateBox.value;
    var journeyDateYear = journeyDate.slice(0,4);
    var journeyDateMon = journeyDate.slice(5,7);
    var journeyDateDay = journeyDate.slice(8,10);
    journeyDate = `${journeyDateDay}-${journeyDateMon}-${journeyDateYear}`;
    return journeyDate;
}
function getTime() {
    var time = timeBox.value;
    var timeFormatStart = time.slice(0,2);
    var timeFormatLast = time.slice(2,4);
    var finalTime = `${timeFormatStart}:${timeFormatLast} Hours`;
    return finalTime;
}
function getTicketType() {
    let ticket = ticketType.value;
    return ticket;
}
function getClassType() {
    let classt = classType.value;
    return classt;
}
var nameArray= [];
function getPassengerList() {
    var passengerInput = document.querySelectorAll('.passinput');
    for(let i=0;i<passengerInput.length;i++) {
        nameArray.push(passengerInput[i].value);
        console.log(nameArray[i]);
    }
}
function displaySummary() {
    summaryDiv.innerHTML = `<div class=WordSection1>

    <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width="100%"
     style='width:100.0%;border-collapse:collapse;border:none'>
     <tr style='height:19.25pt'>
      <td width="25%" style='width:25.0%;border:solid windowtext 1.0pt;padding:
      0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>Source: </span></p>
      </td>
      <td width="25%" style='width:25.0%;border:solid windowtext 1.0pt;border-left:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>${getRouteData()}</span></p>
      </td>
      <td width="25%" style='width:25.0%;border:solid windowtext 1.0pt;border-left:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>Destination: </span></p>
      </td>
      <td width="25%" valign=top style='width:25.0%;border:solid windowtext 1.0pt;
      border-left:none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>${getRouteData2()}</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="25%" style='width:25.0%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>Date Of Journey: </span></p>
      </td>
      <td width="25%" style='width:25.0%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>${getDateofJourney()}</span></p>
      </td>
      <td width="25%" style='width:25.0%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>Departure Time: </span></p>
      </td>
      <td width="25%" valign=top style='width:25.0%;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>${getTime()}</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="25%" style='width:25.0%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>Ticket Type: </span></p>
      </td>
      <td width="25%" style='width:25.0%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>${getTicketType()}</span></p>
      </td>
      <td width="25%" style='width:25.0%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>Class: </span></p>
      </td>
      <td width="25%" valign=top style='width:25.0%;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      lang=EN-GB style='font-family:Outfit'>${getClassType()}</span></p>
      </td>
     </tr>
    </table>
    
    <p class=MsoNormal><span lang=EN-GB style='font-family:Outfit'>&nbsp;</span></p>
    
    <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width="100%"
     style='width:100.0%;border-collapse:collapse;border:none'>
     <tr style='height:19.25pt'>
      <td width="100%" colspan=2 style='width:100.0%;border:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>Passenger
      Details</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>Sr. No.</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>Passenger
      Name</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>1</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>${nameArray[0]}</span></p>
      </td>
     </tr>
     <!--<tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>2</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>${nameArray[1]}</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>3</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>${nameArray[2]}</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>4</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>${nameArray[3]}</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>5</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>${nameArray[4]}</span></p>
      </td>
     </tr>-->
    </table>
    
    <p class=MsoNormal><span lang=EN-GB style='font-family:Outfit'>&nbsp;</span></p>
    
    <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width="100%"
     style='width:100.0%;border-collapse:collapse;border:none'>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;padding:
      0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>Sub Total</span></p>
      </td>
      <td width="49%" style='width:49.88%;border:solid windowtext 1.0pt;border-left:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:"Times New Roman",serif'>₹ </span><span
      lang=EN-GB style='font-family:Outfit'>${Math.ceil(setAmount()*2.6)}</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>Taxes</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:"Times New Roman",serif'>₹ </span><span
      lang=EN-GB style='font-family:Outfit'> </span><span lang=EN-GB
      style='font-family:Outfit'>${Math.ceil((0.18*setAmount()*2.6))}</span></p>
      </td>
     </tr>
     <tr style='height:19.25pt'>
      <td width="50%" style='width:50.12%;border:solid windowtext 1.0pt;border-top:
      none;padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:Outfit'>Total</span></p>
      </td>
      <td width="49%" style='width:49.88%;border-top:none;border-left:none;
      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:19.25pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><span lang=EN-GB style='font-family:"Times New Roman",serif'>₹ </span><span
      lang=EN-GB style='font-family:Outfit'> </span><span lang=EN-GB
      style='font-family:Outfit'>${Math.ceil((setAmount()*2.6)+(0.18*setAmount()*2.6))}</span></p>
      </td>
     </tr>
    </table>
    
    <p class=MsoNormal><span lang=EN-GB style='font-family:Outfit'>&nbsp;</span></p>
    
    </div>`;
    printBtn.style.display = "block";
}
function masterFunction() {
    getRouteData();
    getDateofJourney();
    getTime();
    getTicketType();
    getClassType();
    getPassengerList();
    displaySummary();
}