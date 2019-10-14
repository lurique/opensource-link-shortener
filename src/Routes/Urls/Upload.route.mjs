import { Model, Validate } from '../../Models/Url.model'
import { Hash, Respond } from '../../Helpers'

const Upload = (router) => {  
  router.post('/upload', async(req, res) => {
    let url = req.body.url;
    if ( !url ) return Respond(res, 404, 5, "URL is missing.")

    let obj = {
      url,
      hash: Hash(5)
    }

    const { error } = Validate(obj)
    if ( error ) return Respond(res, 400, 7, "Something went wrong, see data for more details.", error)

    const urlExists = await Model.findOne({url})
    if ( urlExists ) return Respond(res, 200, 4, "This URL has already been shortened by other user.", {url: urlExists.url, hash: urlExists.hash, short: `${process.env.APP_URL}/u/${urlExists.hash}`})

    url = new Model(obj)
    await url.save(async err => {
      if ( err ) return Respond(res, 400, 9, "Something went wrong while trying to shorten your URL and store in database.", err)
      return Respond(res, 200, 6, "URL has been shortened!", {url: obj.url, hash: obj.hash, short: `${process.env.APP_URL}/u/${obj.hash}`});
    })
  })
}

export default Upload