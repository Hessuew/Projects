 $(document).ready(function () {
 $("#lisaysD").dialog({
     autoOpen: false,
     width: 240,
     height: 350,
     modal: true
 });
 $('#add').click(function () {
     $("#lisaysD").dialog("open");
 });
})