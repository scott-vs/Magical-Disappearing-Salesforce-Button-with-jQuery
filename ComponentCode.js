<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript">

   /* Set your sidebar component, button, and picklist field labels here */
   var customComponentName = 'Disappearing Button';
   var buttonLabel = 'Do Something Cool';
   var picklistLabel = 'My Picklist';
   
   $(document).ready(function(){ 
        /* hide the sidebar component from user */
        $('.htmlAreaComponentModule').find('h2:contains("'+customComponentName+'")').parent().parent().hide();
        
   		/* only hide button if picklist value is "High" */
   		var picklistValue = $('td.labelCol:contains("'+picklistLabel+'")').next().find('div').html();
   		var btn = $('input[value="'+buttonLabel+'"]');
   		if (picklistValue == 'High')
   			btn.hide();
   	    else
   	    	btn.show();
   		
   }); 
</script>