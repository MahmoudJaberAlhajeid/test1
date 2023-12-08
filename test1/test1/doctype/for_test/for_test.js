// Copyright (c) 2023, mahmoud_test and contributors
// For license information, please see license.txt

frappe.ui.form.on("for_test", {
	refresh(frm) {

},  
    validate: function(frm){
        //alert(frm.doc.first_name + " " + frm.doc.last_name);
        //frappe.msgprint(frm.doc.first_name + " " + frm.doc.last_name);
        frm.set_value('full_name', frm.doc.first_name + " " + frm.doc.last_name);    
        /* if (validateEmail(frm.doc.email) == true){
            frappe.msgprint("valid email");
        }else{
            frappe.msgprint("not valid email");
        }*/
        //frappe.utils.validate_type(frm.doc.email, “email”);

        if (validate_fileds(frm.doc.email,frm.doc.mobile_number) == false){
          //  frappe.msgprint("not valid fileds");
             frappe.validated = false ; // stop validate (dont save data )
      }


    },
    first_name: function(frm){
        //alert(frm.doc.first_name + " " + frm.doc.last_name);
        //frappe.msgprint(frm.doc.first_name + " " + frm.doc.last_name);
        frappe.call({
            method:"test1.test1.doctype.for_test.for_test.test_reply",
            // arg:{
            //     "doctype": "",
            //     "filters": {"":frm.doc.},
            //     "fieldname":[
            //         "first_name",  ]
            // },
            callback: function(r){
                //alert(r); 
                console.log(r);
                if (r.message){
                    //alert(r.message);
                }
            }
        });
    }
});


function validate_fileds(email, Pnum){ 
    var re = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    var regex = /[0-9]{6}/;
    var msg = [];
    if (re.test(email)== false){
     msg += "\r\n "+"bad email address";
    }
    
    if (regex.test(Pnum)== false){
        msg += "\r\n"+" bad mobile number";
       }
    var testvalues = re.test(email) && regex.test(Pnum);
    alert("Error:" + msg); 
    return testvalues
}
