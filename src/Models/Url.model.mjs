import mongoose from 'mongoose';
import Joi from 'joi';

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true,
    unique: true,
    min: 10,
    max: 10
  }
}, { timestamps: { createdAt: 'created_at' } })

const urlState = mongoose.model('Url', urlSchema)

const validateUrlModel = (url) => {
  const schema = {
    url: Joi.string().required(),
    hash: Joi.string().required()
  }

  return Joi.validate(url, schema)
}

export default urlSchema
export default urlState
export default validateUrlModel