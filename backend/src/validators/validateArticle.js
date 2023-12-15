const Joi = require("joi");

const getArticleSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    title: Joi.string().max(255).presence("required"),
    summary: Joi.string().presence("required"),
    content: Joi.string().presence("required"),
    stars: Joi.number().presence("required"),
    is_published: Joi.number().presence("required"),
    created_at: Joi.date().presence("optional"),
  });
};

const validateArticle = (req, res, next) => {
  const schema = getArticleSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateArticle;
