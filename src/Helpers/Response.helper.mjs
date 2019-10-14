const responseHandler = (res, status, code, message, data) => {
  if ( !res ) return console.error("RESPOND_ERR: 'res' function is missing.")
  if ( !status ) return res.status(401).send("RESPOND_ERR: 'status' param is missing.")
  if ( !code ) return res.status(401).send("RESPOND_ERR: 'code' param is missing.")
  if ( !message ) return res.status(401).send("RESPOND_ERR: 'message' param is missing.")
  if ( !data ) data = ""

  return res.status(status).send({status, code, message, data})
}

export { responseHandler as Respond }