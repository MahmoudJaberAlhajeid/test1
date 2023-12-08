// Copyright (c) 2023, mahmoud_test and contributors
// For license information, please see license.txt

 frappe.ui.form.on("for_test_auto", {
	refresh(frm) {   
        frm.add_fetch('full_name','first_name' ,'first_name' );

        frm.add_fetch('full_name','last_name' ,'last_name' );

        frm.add_fetch('full_name','email' ,'email');

        frm.add_fetch('full_name','mobile_number' ,'mobile_number');
        
        frm.add_fetch('full_name','dob' ,'dob');
    },
   
});
 
    
