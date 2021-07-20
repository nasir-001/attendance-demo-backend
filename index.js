const { request, response } = require('express')
const cors = require('cors')
const express = require('express')
const app = express()
app.use('/img', express.static('static/img'))

app.use(cors())

let attendance = [
  {
    id: 1,    
    title: "Senator",
    first_name: "Johns",    
    last_name: "andrew",    
    email: "johna@gmail.com",
    phone: "08109342356",
    gender: "male",    
    visit: {
      date: '2021/07/21',
      status: 'finished',
    }
  },
  {
    id: 2,    
    title: "Mrs",
    first_name: "Khar",    
    last_name: "Ruxury",    
    email: "khalury@gmail.com",
    phone: "08109342356",
    gender: "female",    
    visit: {
      date: '2021/07/20',
      status: "pending",
    }
  },
  {
    id: 3,    
    title: "Engineer",
    first_name: "Katie",    
    last_name: "Joshua",    
    email: "marrylang@gmail.com",
    phone: "08109342356",
    gender: "female",
    visit: {
      date: '2021/07/20',
      status: 'admitted',
    }
  },
  {
    id: 4,    
    title: "Mrs",
    first_name: "Matues",    
    last_name: "Suza",    
    email: "suzeeymat@gmail.com",
    phone: "08109342356",
    gender: "female",
    visit: {
      date: '2021/07/20',
      status: 'finished',
    }
  },
  {
    id: 5,    
    title: "Rep",
    first_name: "Tuan",    
    last_name: "Keit",    
    email: "kietuan@gmail.com",
    phone: "08109342356",
    gender: "female",
    visit: {
      date: '2021/07/20',
      status: 'cancelled',
    }
  },
  {
    id: 6,    
    title: "Mrs",
    first_name: "Marry",    
    last_name: "Ilan",    
    email: "marrylan@gmail.com",
    phone: "08109342356",
    gender: "female",
    visit: {
      date: '2021/07/20',
      status: "pending",
    }
  },
  {
    id: 7,    
    title: "Developer",
    first_name: "Kiet",    
    last_name: "Tuan",    
    email: "kietuan@gmail.com",
    phone: "08109342356",
    gender: "female",
    visit: {
      date: '2021/07/20',
      status: 'admitted',
    }
  }
]

const loginCred = [
  {
    username: "admin1",
    password: "secretpassword1"
  },
  {
    username: "admin2",
    password: "secretpassword2"
  }
]

app.post('/', (request, response) => {
  response.json(loginCred)
})

app.post('/api/attendance', (request, response) => {
  const body = request.body

  response.json(body)
})

app.get('/api/attendance', (request, response) => {
  response.json(attendance)
})

app.patch('/api/attendance/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = attendance.find(visitor => visitor.id === id)
  if(!person){
    return response.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    })
  }
  console.log(request.body);
  // person = JSON.stringify(request.body)
  response.status(201).json({
    status: "success",
  })
})

app.delete('/api/attendance/:id', (request, response) => {
  const id = Number(request.params.id)
  attendance = attendance.filter(visitor => visitor.id !== id)

  response.status(204).end()
})

app.get('/api/attendance/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = attendance.find(visit => visit.id === id)
  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
