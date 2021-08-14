const { request, response } = require('express')
const cors = require('cors')
const express = require('express')
const app = express()
app.use('/img', express.static('static/img'))

app.use(cors())

let attendance = [
  {
    id: 1,
    date: '2021/07/21',
    status: 'finished',
    admitted_time: '17:34-pm',
    depart_time: '17:35-pm',
    visitor: {
      title: "Senator",
      first_name: "Johns",    
      last_name: "andrew",    
      email: "johna@gmail.com",
      phone: "08109342356",
      gender: "male"    
    }
  },
  {
    id: 2,   
    date: '2021/07/20',
    status: "pending",
    admitted_time: '',
    depart_time: '',
    visitor: {
      title: "Mrs",
      first_name: "Khar",    
      last_name: "Ruxury",    
      email: "khalury@gmail.com",
      phone: "08109342356",
      gender: "female"
    }
  },
  {
    id: 3,
    date: '2021/07/20',
    status: 'admitted',
    admitted_time: '17:34-pm',
    depart_time: '',
    visitor: {
      title: "Engineer",
      first_name: "Katie",    
      last_name: "Joshua",    
      email: "marrylang@gmail.com",
      phone: "08109342356",
      gender: "female"
    }
  },
  {
    id: 4,
    date: '2021/07/20',
    status: 'finished',
    admitted_time: '17:34-pm',
    depart_time: '17:35-pm',
    visitor: {
      title: "Mrs",
      first_name: "Matues",    
      last_name: "Suza",    
      email: "suzeeymat@gmail.com",
      phone: "08109342356",
      gender: "female"
    }
  },
  {
    id: 5,
    date: '2021/07/20',
    status: 'cancelled',
    admitted_time: '',
    depart_time: '',
    visitor: {
      title: "Rep",
      first_name: "Tuan",    
      last_name: "Keit",    
      email: "kietuan@gmail.com",
      phone: "08109342356",
      gender: "female"
    }
  },
  {
    id: 6,
    date: '2021/07/20',
    status: "pending",
    admitted_time: '',
    depart_time: '',
    visitor: {
      title: "Mrs",
      first_name: "Marry",    
      last_name: "Ilan",    
      email: "marrylan@gmail.com",
      phone: "08109342356",
      gender: "female"
    }
  },
  {
    id: 7,
    date: '2021/07/20',
    status: 'admitted',
    admitted_time: '17:34-pm',
    depart_time: '',
    visitor: {
      title: "Developer",
      first_name: "Kiet",    
      last_name: "Tuan",    
      email: "kietuan@gmail.com",
      phone: "08109342356",
      gender: "female"
    }
  }
]

let groupList = [
  {
    uuid: 1,
    name: 'super_admin_group',
    description: '',
    roles: [
      {
        id: 1,
        name: 'permission_admin',
        description: '',
        permissions: [
          {
            id: 1,
            name: 'can_create_visitor',
            description: ''
          },
          {
            id: 2,
            name: 'can_edit_visitor',
            description: ''
          },
          {
            id: 3,
            name: 'can_admit_visitor',
            description: ''
          },
          {
            id: 4,
            name: 'can_depart_visitor',
            description: ''
          }
        ]
      },
      {
        id: 2,
        name: 'managing_admin',
        description: '',
        permissions: [
          {
            id: 1,
            name: 'can_create_visitor',
            description: ''
          }
        ]
      },
      {
        id: 3,
        name: 'monitoring_admin',
        description: '',
        permissions: [
          {
            id: 1,
            name: 'can_create_visitor',
            description: ''
          },
          {
            id: 2,
            name: 'can_edit_visitor',
            description: ''
          }
        ]
      }
    ]
  },
  {
    uuid: 2,
    name: 'admin_test_group',
    description: '',
    roles: [
      {
        id: 2,
        name: 'managing_admin',
        description: '',
        permissions: [
          {
            id: 2,
            name: 'can_view_visitor',
            description: ''
          },
          {
            id: 3,
            name: 'can_admit_visitor',
            description: ''
          },
          {
            id: 4,
            name: 'can_depart_visitor',
            description: ''
          }
        ]
      }
    ]
  },
  {
    uuid: 3,
    name: 'visitor_admin_group',
    description: '',
    roles: [
      {
        id: 3,
        name: 'monitoring_admin',
        description: '',
        permissions: [
          {
            id: 3,
            name: 'can_admit_visitor',
            description: ''
          }
        ]
      }
    ]
  },
  {
    uuid: 4,
    name: 'test_user_group',
    description: '',
    roles: [
      {
        id: 4,
        name: 'creating_admin',
        description: '',
        permissions: [
          {
            id: 4,
            name: 'can_cancel_visitor',
            description: ''
          }
        ]
      }
    ]
  },
  {
    uuid: 5,
    name: 'visitor_manage_group',
    description: '',
    roles: [
      {
        id: 5,
        name: 'security_man',
        description: '',
        permissions: [
          {
            id: 5,
            name: 'can_edit_visitor',
            description: ''
          }
        ]
      }
    ]
  },
  {
    uuid : 6,
    name: 'user_group_test',
    description: '',
    roles: [
      {
        id: 6,
        name: 'admitting_admin',
        description: '',
        permissions: [
          {
            id: 6,
            name: 'can_delete_visitor',
            description: ''
          }
        ]
      }
    ]
  }
]

let roleList = [
  {
    id: 1,
    name: "role_num_one",
    description: "",
    permissions: [
      {
        id: 1,
        name: 'can_create_visitor',
        description: ''
      },
      {
        id: 2,
        name: 'can_delete_visitor',
        description: ''
      },
      {
        id: 3,
        name: 'can_view_visitor',
        description: ''
      },
      {
        id: 4,
        name: 'can_edit_visitor',
        description: ''
      }
    ]
  },
  {
    id: 2,
    name: "role_num_two",
    description: "",
    permissions: []
  },
  {
    id: 3,
    name: "role_num_three",
    description: ""
  },
  {
    id: 4,
    name: "role_num_four",
    description: ""
  },
  {
    id: 5,
    name: "role_num_five",
    description: ""
  },
  {
    id: 6,
    name: "role_num_six",
    description: ""
  },
  {
    id: 7,
    name: "role_num_seven",
    description: ""
  },
  {
    id: 8,
    name: "role_num_eight",
    description: ""
  },
  {
    id: 9,
    name: "role_num_nine",
    description: ""
  },
  {
    id: 10,
    name: "role_num_ten",
    description: ""
  },
  {
    id: 13,
    name: "role_num_eleven",
    description: ""
  }
]

let permissionsList = [
  {
    id: 1,
    name: "can_create_visitor",
    description: ""
  },
  {
    id: 2,
    name: "can_delete_visitor",
    description: ""
  },
  {
    id: 3,
    name: "can_view_visitor",
    description: ""
  },
  {
    id: 4,
    name: "can_edit_visitor",
    description: ""
  },
  {
    id: 5,
    name: "can_admit_visitor",
    description: ""
  },
  {
    id: 6,
    name: "can_depart_visitor",
    description: ""
  },
  {
    id: 7,
    name: "can_cancel_visitor",
    description: ""
  },
  {
    id: 8,
    name: "can_view-admin-dashboard",
    description: ""
  },
  {
    id: 9,
    name: "can_view-security-dashboard",
    description: ""
  }
]

let userList = [
  {
    uuid: 1,
    firstname: 'Johns',
    lastname: 'Andrew',
    middlename: '',
    email: 'johndrew@gmail.com',
    groups: [
      {
        uuid: 1,
        name: 'user_group_test',
        description: '',
        roles: [
          {
            id: 1,
            name: 'admitting_admin',
            description: '',
            permissions: [
              {
                id: 1,
                name: 'can_delete_visitor',
                description: ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    uuid: 2,
    firstname: 'Khar',
    lastname: 'Ruxury',
    middlename: '',
    email: 'khalury@gmail.com',
    groups: [
      {
        uuid: 2,
        name: 'visitor_admin_group',
        description: '',
        roles: [
          {
            id: 2,
            name: 'admitting_admin',
            description: '',
            permissions: [
              {
                id: 2,
                name: 'can_delete_visitor',
                description: ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    uuid: 3,
    firstname: 'Katie',
    lastname: 'Joshua',
    middlename: '',
    email: 'marrylang@gmail.com',
    groups: [
      {
        uuid: 3,
        name: 'test_user_group',
        description: '',
        roles: [
          {
            id: 3,
            name: 'admitting_admin',
            description: '',
            permissions: [
              {
                id: 3,
                name: 'can_delete_visitor',
                description: ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    uuid: 4,
    firstname: 'Marry',
    lastname: 'Ilan',
    middlename: '',
    email: 'marrylan@gmail.com',
    groups: [
      {
        uuid: 4,
        name: 'test_visitor_group',
        description: '',
        roles: [
          {
            id: 4,
            name: 'admitting_admin',
            description: '',
            permissions: [
              {
                id: 4,
                name: 'can_delete_visitor',
                description: ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    uuid: 5,
    firstname: 'Mateus',
    lastname: 'Suza',
    middlename: '',
    email: 'suzeeymat@gmail.com',
    groups: [
      {
        uuid: 5,
        name: 'user_group_test',
        description: '',
        roles: [
          {
            id: 5,
            name: 'admitting_admin',
            description: '',
            permissions: [
              {
                id: 5,
                name: 'can_delete_visitor',
                description: ''
              }
            ]
          }
        ]
      }
    ]
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

app.post('/api/permissions', (request, response) => {
  const body = request.body
  console.log(body);
  
  response.json(body)
})

app.get('/api/permissions', (request, response) => {
  response.json(permissionsList)
})

app.get('/api/groups', (request, response) => {
  response.json(groupList)
})

app.get('/api/users', (request, response) => {
  response.json(userList)
})

app.put('/api/users/:uuid', (request, response) => {
  const body = request.params.body
  console.log(body);

  response.json(body)
})

app.post('/api/users/:uuid/groups', (request, response) => {
  const body = request.params.body
  console.log(body);

  response.json(body)
})

app.post('/api/users', (request, response) => {
  const body = request.body
  console.log(body);
  
  response.json(body)
})

app.get('/api/users/:uuid', (request, response) => {
  const id = Number(request.params.uuid)
  const userToFind = userList.find(user => user.uuid === id)
  response.json(userToFind)
})

app.get('/api/roles', (request, response) => {
  response.json(roleList)
})

app.post('/api/roles', (request, response) => {
  const body = request.params.body
  console.log(body);

  response.json(body)
})

app.post('/api/groups', (request, response) => {
  const body = request.params.body
  console.log(body);

  response.json(body)
})


app.put('/api/groups/:name', (request, response) => {
  const body = request.params.body
  console.log(body);

  response.json(body)
})

app.put('/api/roles/:name', (request, response) => {
  const body = request.params.body
  console.log(body);

  response.json(body)
})

app.get('/api/groups/:name', (request, response) => {
  const name = request.params.name
  const groupToFind = groupList.find(group => group.name === name)
  response.json(groupToFind)
})

app.get('/api/roles/:name', (request, response) => {
  const name = request.params.name
  const roleToFind = roleList.find(role => role.name === name)
  response.json(roleToFind)
})

app.delete('/api/groups/:name/:role', (request, response) => {
  const id = Number(request.params.id)
  groupList = groupList.filter(role => role.id !== id)

  response.status(204).end()
})

app.delete('/api/roles/:name/:perm', (request, response) => {
  const id = Number(request.params.id)
  roleList = roleList.filter(perm => perm.id !== id)

  response.status(204).end()
})

app.delete('/api/groups/:id', (request, response) => {
  const id = Number(request.params.id)
  groupList = groupList.filter(perm => perm.id !== id)

  response.status(204).end()
})

app.delete('/api/roles/:id', (request, response) => {
  const id = Number(request.params.id)
  roleList = roleList.filter(perm => perm.id !== id)

  response.status(204).end()
})

app.delete('/api/permissions/:id', (request, response) => {
  const id = Number(request.params.id)
  permissionsList = permissionsList.filter(perm => perm.id !== id)

  response.status(204).end()
})

app.get('/api/attendance/', (request, response) => {
  response.json(attendance)
})

app.get('/api/attendance/today', (request, response) => {
  response.json(attendance)
})

// app.get('/api/attendance/:first_name', (request, response) => {
//   const first_name = request.query.first_name
//   console.log(request.params.first_name);
//   const visitors = attendance.find(visitor => visitor.first_name === first_name)
//   response.json(visitors)
// })

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
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
