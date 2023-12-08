# Copyright (c) 2023, mahmoud_test and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class for_test_auto(Document):
	pass

@frappe.whitelist()
def test_reply():
	return  "hey"





