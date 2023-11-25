const request = require('supertest');
const express = require('express');
const app = express();
const session = require('express-session');
const { login, register } = require('./LoginController');

app.use(express.json());
app.use(session({ secret: 'test', resave: false, saveUninitialized: true }));

app.get('/login', login);
app.get('/register', register);

describe('LoginController', () => {
    it('should render login page if not logged in', async () => {
        const res = await request(app).get('/login');
        expect(res.text).toBe('login/index');
    });

    it('should redirect if logged in', async () => {
        const req = request(app).get('/login');
        req.cookies = 'session=loggedin'; // Mock a logged in session
        const res = await req;
        expect(res.status).toBe(302);
        expect(res.headers.location).toBe('/');
    });

    it('should render register page', async () => {
        const res = await request(app).get('/register');
        expect(res.text).toBe('login/register');
    });
});