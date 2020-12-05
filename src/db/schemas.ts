import mongoose, { Schema } from "mongoose";

type modelNames = "Article";

const articleSchema = new mongoose.Schema({
  cover: String,
  title: String,
  description: String,
  slug: String,
  text: String,
  original: String,
  ttr: Number,
  source: String,
  marked: Boolean,
});

const initializeModel = (modelName: modelNames, schema: Schema) =>
  mongoose.connection.models[modelName]
    ? mongoose.connection.models[modelName]
    : mongoose.model(modelName, schema);

const Article = initializeModel("Article", articleSchema);

export default Article;
