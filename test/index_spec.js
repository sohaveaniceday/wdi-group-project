/* globals api, expect, describe, it, beforeEach, afterEach */

require('./spec_helper')

const Category = require('../models/category')
const User = require('../models/user')
const { secret } = require('../config/environment')

const jwt = require('jsonwebtoken')

const categoryData = { name: 'Vegetarian' }

const categoryDataPost = { name: 'Meaty' }


let token

describe('Category tests(GET /api/category)', () => {

  beforeEach(done => {
    Category.create(categoryData)
      .then(() => done())
      .catch(() => done())
  })

  afterEach(done => {
    Category.collection.remove()
    done()
  })

  it('should return a 200 response', done => {
    api
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect(200, done)
  })

  it('should respond with a JSON object', done => {
    api
      .get('/api/categories')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.header['content-type'])
          .to.be.eq('application/json; charset=utf-8')
        done()
      })
  })

  it('should return an array of categories', done => {
    api
      .get('/api/categories')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of category objects', done => {
    api
      .get('/api/categories')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body)
          .and.be.an('array')
          .and.have.property(0)
          .and.have.all.keys([
            '__v',
            '_id',
            'name'
          ])
        done()
      })
  })

  it('category objects should have properties: _id, name', done => {
    api
      .get('/api/categories')
      .set('Accept', 'application/json')
      .end((err, res) => {
        const firstCategory = res.body[0]

        expect(firstCategory)
          .to.have.property('_id')
          .and.to.be.a('string')

        expect(firstCategory)
          .to.have.property('name')
          .and.to.be.a('string')

        done()
      })
  })

  describe('Make more than one category', () => {

    beforeEach(done => {
      Category.create([
        {
          name: 'Indian'
        },
        {
          name: 'Chinese'
        }
      ])
        .then(() => done())
        .catch(done)
    })

    it('should return three categories', done => {
      api
        .get('/api/categories')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body.length).to.equal(3)
          done()
        })
    })
  })


  describe('POST /api/categories', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/categories')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(categoryDataPost)
        .end((err, res) => {
          expect(res.status).to.eq(201)
          done()
        })
    })

    it('should create a category', done => {
      api
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send({ name: 'Beansy' })
        .end((err, res) => {
          console.log(res)
          const category = res.body
          expect(category)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(category)
            .to.have.property('name')
            .and.to.be.a('string')

          done()
        })
    })
  })

  describe('GET /api/categories/:id', () => {

    let category

    beforeEach(done => {
      Category.create({
        name: 'Vegan'
      })
        .then(categoryData => {
          category = categoryData
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get(`/api/categories/${category.id}`)
        .set('Accept', 'application/json')
        .expect(200, done)
    })
  })

  describe('DELETE /api/categories/:id', () => {

    let category

    beforeEach(done => {
      Category.create({
        name: 'Pescatarian'
      })
        .then(categoryData => {
          category = categoryData
          done()
        })
        .catch(done)
    })

    it('should return a 204 response', done => {
      api
        .delete(`/api/categories/${category.id}`)
        .set('Accept', 'application/json')
        .expect(204, done)
    })
  })
})
