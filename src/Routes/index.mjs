import Urls from './Urls'

const Routes = (app) => {
  app.use('/api/v1/urls', Urls)
}

export default Routes