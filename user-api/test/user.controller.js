const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')

describe('User', () => {
  
  beforeEach(() => {
    // Clean DB before each test
    db.flushdb()
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'AdriCode123',
        firstname: 'Adrien',
        lastname: 'Mezzarobba'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Adrien',
        lastname: 'Mezzarobba'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    // it('avoid creating an existing user', (done)=> {
    //   // TODO create this test
    //   // Warning: the user already exists
    //   done()
    // })
  })

  // Create test for the get method
  describe('Get', ()=> {
     
    it('get a user by username', (done) => {
      const user = {
        username: 'AdriCode123',
        firstname: 'Adrien',
        lastname: 'Mezzarobba'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('cannot get a user when it does not exist', (done) => {
    const user = {
      firstname: 'Adrien',
      lastname: 'Mezzarobba'
    }
    userController.create(user, (err, result) => {
      expect(err).to.not.be.equal(null)
      expect(result).to.be.equal(null)
      done()
    })
    })
  
  })
})
