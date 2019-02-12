const { dev } = require('./env')

module.exports = {

  plugins: ['~/plugins/auth'],

  strategies: {

    local: !dev ? ({

      endpoints: {
        
        login: { url: `/auth`, method: 'get', propertyName: 'token' },

        logout: { url: `/auth`, method: 'delete' },

        user: { url: '/users?action=get-current', method: 'post', propertyName: 'user' }

      },

      tokenType: false

    }) : ({

      endpoints: {

        login: { url: `/api/auth/token.json`, method: 'get', propertyName: 'token' },

        logout: { url: `/`, method: 'get' },

        user: { url: `/api/auth/user.json`, method: 'get', propertyName: 'user' }

      }

    })

  },

  redirect: {

    login: 'auth/sign'

  }

}