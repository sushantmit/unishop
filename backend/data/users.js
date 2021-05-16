import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin1234', 10),
    isAdmin: true
  },
  {
    name: 'Sushant Prasad',
    email: 'sushant@example.com',
    password: bcrypt.hashSync('sushant1234', 10),
  },
  {
    name: 'Anurag Prasad',
    email: 'anurag@example.com',
    password: bcrypt.hashSync('anurag1234', 10),
  }
]

export default users;