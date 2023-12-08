# Copyright (c) 2023, mahmoud_test and contributors
# For license information, please see license.txt

import frappe
import json
from frappe.model.document import Document

class for_test(Document):
	pass


@frappe.whitelist()
def test_reply():
	return  "hello"

@frappe.whitelist()
def send_data(doctype , fieldname , filter ):
#def send_data( ):
	 data = frappe.get_all(doctype, fieldname , filters =filter )
	 print(data)
	 return data


@frappe.whitelist()
def test_me(doctype):
	return "hello"
