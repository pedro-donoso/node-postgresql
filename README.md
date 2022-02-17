#### Steps:

1. Download code

2. In terminal:

```
npm install express pg pg-hstore nodemon sequelize morgan @babel/polyfill
```

3. Babel:

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

* in case of problem, solution in stack overflow

4. in PSQL -> password: password

![psql](https://user-images.githubusercontent.com/68760595/154311166-1d0888ea-8b0e-4a3f-9617-3b25194eca82.PNG)


5. In terminal, run server:

```
npm run dev
```

6. ### POST

In extension "Thunder Client", vsCode:

```
http://localhost:3000/api/projects
```

![Captura](https://user-images.githubusercontent.com/68760595/154333935-15a0367a-2924-46e4-af56-5cf18a71ec5a.PNG)

7. ### GET (All Projects)

In PSQL -> SELECT * FROM projects;

![postgres](https://user-images.githubusercontent.com/68760595/154334909-f3e07dc0-bce5-4764-bf24-82554b168f5a.PNG)

8. ### GET (Project by ID)

In extension "Thunder Client":

```
http://localhost:3000/api/projects/12
```
![id](https://user-images.githubusercontent.com/68760595/154336511-960cabfa-e848-49ac-aa01-343bd098e6df.PNG)

9. ### PUT

Update project

```
http://localhost:3000/api/projects/2
```

![put](https://user-images.githubusercontent.com/68760595/154337464-e953d22e-2c84-4427-b466-80d06b811314.PNG)

10. ### DELETE

![delete](https://user-images.githubusercontent.com/68760595/154503192-7b2ec90f-12e7-4f9a-8949-9041cfbbfb09.PNG)

