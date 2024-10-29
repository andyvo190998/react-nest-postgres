* Installation
    root: npm install
    root/backend: npm install
    root/frontend: npm install

* Run both frontend and backend
    root: npm run dev

* How to use API
    BASE_URL: http://localhost:3333/
    - Get all experiences {
        endpoint: /experience;
        method: GET;
    }

    - Get slot by filtering {
        endpoint: /experience/:experienceId/?locationId=&from=&to=
        method: GET;
        require: experienceId
    }

* Feel free to visit "relational-database.drawio" to see how the database looks like
* I've written some unit tests in "experience.controller.spec.ts" and "experience.service.spec.ts"
