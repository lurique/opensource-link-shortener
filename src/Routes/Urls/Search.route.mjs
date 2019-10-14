import { Model } from '../../Models/Url.model'
import { Respond } from '../../Helpers'

const Search = (router) => {
  router.get('/search', async(req, res) => {
    if ( !req.query.hash ) return Respond(res, 400, 1, "Hash is missing.")

    await Model.find({hash: req.query.hash}, (err, url) => {
      if ( err ) throw err
      if ( !url[0] || !url ) return Respond(res, 404, 3, "No matches found.")

      return Respond(res, 200, 2, "URL has been found!", url[0].url)
    })
  })
}

export default Search