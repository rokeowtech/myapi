const cutomers =[
	{
		"_id": "111",
		"slug":"C1",
		"name":"Rokeow",
		"address":"123",
		"phone":"071234567",
		"invoiceEmail":"rokeow@gmail.com"
	},
	{
		"_id": "222",
		"slug":"C2",
		"name":"Kelly",
		"address":"456",
		"phone":"071234567",
		"invoiceEmail":"kelly@gmail.com"
	},
	{
		"_id": "333",
		"slug":"C3",
		"name":"Robert",
		"address":"789",
		"phone":"071234567",
		"invoiceEmail":"robert@gmail.com"
	}

]
const projects = [
	{
		"_id":"",
		"slug":"",
		"name":"",
		"customerId":"",
		"userId":"",
		"description":"",
		"status":"",
		"startDate":"",
		"endDate":""
	},
	{
		"_id":"",
		"slug":"",
		"name":"",
		"customerId":"",
		"userId":"",
		"description":"",
		"status":"",
		"startDate":"",
		"endDate":""
	},
	{
		"_id":"",
		"slug":"",
		"name":"",
		"customerId":"",
		"userId":"",
		"description":"",
		"status":"",
		"startDate":"",
		"endDate":""
	}

]
const users = [
		{
			"_id":"khffhi43r3i4r",
			"email":"rokeow@gmail.com",
			"key":"kdnkjnf24yr89y892",
			"usertype":"user"
		},
		{
			"_id":"khffhi43r3i4r",
			"email":"owakokelly@gmail.com",
			"key":"mmoofowrjonwc",
			"usertype":"admin"
		},
		{
			"_id":"khffhi43r3i4r",
			"email":"rokeowcode@gmail.com",
			"key":"wif8r36frfr",
			"usertype":"user"
		}
	]

const invoices = [
	{
		"_id":"",
		"invoiceNumber":"",
		"customerId":"",
		"projectId":"",
		"amount":"",
		"description":"",
		"title":"",
		"status":""
	},
	{
		"_id":"",
		"invoiceNumber":"",
		"customerId":"",
		"projectId":"",
		"amount":"",
		"description":"",
		"title":"",
		"status":""
	},
	{
		"_id":"",
		"invoiceNumber":"",
		"customerId":"",
		"projectId":"",
		"amount":"",
		"description":"",
		"title":"",
		"status":""
	}


]
module.exports = { 
	users: "users",
	customers: "customers",
	projects: "projects",
	invoices: "invoices"
};