// Copyright (c) 2023, mahmoud_test and contributors
// For license information, please see license.txt

frappe.ui.form.on("for_test_call", {
	refresh(frm) {        
        },
full_name:function(frm){

   // alert(frm.doc.full_name);
    frappe.call({
        method:'test1.test1.doctype.for_test.for_test.send_data',
         args:{
             'doctype': 'for_test',
             'filter': {'full_name':frm.doc.full_name},
             'fieldname':[
                 'first_name', 'last_name' , 'email' , 'mobile_number' , 'dob']
                 },
         callback: function(r){
            //alert(r); 
            console.log(r);
            if (r.message){
                frm.doc.first_name = r.message[0].first_name ;
                frm.doc.last_name = r.message[0].last_name ; 
                frm.doc.email = r.message[0].email ; 
                frm.doc.mobile_number = r.message[0].mobile_number ; 
                frm.doc.date_of_brith = r.message[0].dob;
            
            }
            frm.set_value( "firstname" , frm.doc.first_name );
            frm.set_value( "lastname" , frm.doc.last_name );
            frm.set_value( "mail" , frm.doc.email );
            frm.set_value( "mobilenumber" , frm.doc.mobile_number); 
            frm.set_value( 'dateofbrith' , frm.doc.date_of_brith);
        }
    });
},
email:function(frm){
frappe.call({
    method:'test1.test1.doctype.for_test.for_test.test_me',
    args: {
         'doctype' : 'for_test'
    },
    callback: function(r){
            alert(r.message)
        }
    });
}
 });
