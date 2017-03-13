  const app = require('loopback-app');

  const User = app.models.User;

  User.login({
    email: 'user@example.com',
    password: 'secret'
  }, (error, response) => {
    if (error) {
      console.error(error);
      document.write(error);
      return false;
    }

    console.log(response);
    document.write(response.id);
  });
