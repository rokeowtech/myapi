const express = require('express')
const app = express()
const port = 3000
const body_parser = require('body-parser')
const db = require('./db')
const data = require('./data')


//connect to mongodb
const dbURI = 'mongodb+srv://rokeow:<password>@cluster0.m2cip.mongodb.net/<dbname>?retryWrites=true&w=majority'

// let db

app.use(body_parser.json())

const dbName = 'data'
const collectionName = 'users'
const customers =[
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
		"_id":"p01",
		"slug":"P1",
		"name":"project1",
		"customerId":"333",
		"userId":"khffsnslji4r",
		"description":"Project 1 description",
		"status":"closed",
		"startDate":"9/1/2021",
		"endDate":"9/3/2021"
	},
	{
		"_id":"p02",
		"slug":"P2",
		"name":"project2",
		"customerId":"222",
		"userId":"khffbhkkkffvh",
		"description":"Project 2 description",
		"status":"wip",
		"startDate":"10/3/2021",
		"endDate":"12/4/2021"
	},
	{
		"_id":"p03",
		"slug":"P3",
		"name":"project3",
		"customerId":"111",
		"userId":"khffhi43r3i4r",
		"description":"Project 3 description",
		"status":"todo",
		"startDate":"12/4/2021",
		"endDate":"30/12/2021"
	}

]
const users = [
		{
			"_id":"khffbhkkkffvh",
			"email":"rokeow@gmail.com",
			"key":"kdnkjnf24yr89y892",
			"usertype":"user"
		},
		{
			"_id":"khisjjdj3r3i4r",
			"email":"owakokelly@gmail.com",
			"key":"mmoofowrjonwc",
			"usertype":"admin"
		},
		{
			"_id":"khffsnslji4r",
			"email":"rokeowcode@gmail.com",
			"key":"wif8r36frfr",
			"usertype":"user"
		}
	]

const invoices = [
	{
		"_id":"i01",
		"invoiceNumber":"in001",
		"customerId":"111",
		"projectId":"p03",
		"amount":"1000",
		"description":"invoice 1 description",
		"title":"invoice 1 title",
		"status":"prep"
	},
	{
		"_id":"i02",
		"invoiceNumber":"in002",
		"customerId":"222",
		"projectId":"p01",
		"amount":"2000",
		"description":"invoice 2 description",
		"title":"invoice 2 title",
		"status":"sent"
	},
	{
		"_id":"i03",
		"invoiceNumber":"on003",
		"customerId":"333",
		"projectId":"p02",
		"amount":"3000",
		"description":"invoice 3 description",
		"title":"invoice 3 title",
		"status":"paid"
	}


]
// const user = users[Math.random(0,3)]
app.get('/users', (req, res) => {
	
  res.send(users)
})
app.get('/users/:email', (req, res) => {
	var user=""
	email = req.params.email
	for(user in users){
		if(user.email == email){
			user = user
		}
	}
  res.send(user+email)
})
app.get('/users/:email/projects', (req, res) => {
	var projects=[]
	email = req.params.email
	for(user in users){
		if(user.email == email){
			for(project in projects){
				if(project.userId = user._id){
					projects.push(project)
				}
			}
		}
	}
  res.send(projects)
})
app.get('/customers', (req, res) => {
  res.send(customers)
})
app.get('/customers/:slug', (req, res) => {
	var cust = ""
	var slug = req.params.slug
	for(customer in customers){
		if (customer.slug = slug) {
			cust = customer
		}
	}
  res.send(cust + slug)
})
app.get('/customers/:slug/projects', (req, res) => {
  res.send('Customers slug: '+ req.params.slug)
})
app.get('/customers/:slug/invoices', (req, res) => {
  res.send('Hello World!')
})
app.get('/projects', (req, res) => {
  res.send(projects)
})
app.get('/projects/status/:status', (req, res) => {
  res.send('Projects status: '+ req.params.status)
})
app.get('/invoices', (req, res) => {
  res.send(invoices)
})
app.get('/invoices/status/:status', (req, res) => {
	var invoice = ""
	var status = req.params.status
	for(invoice in invoices){
		if(invoice.status = status){
			invoice = invoice
		}
	}
  res.send(invoice.invoiceNumber)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})