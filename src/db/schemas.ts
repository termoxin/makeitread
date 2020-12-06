import mongoose, { Schema } from "mongoose";

type modelNames = "Article" | "Note";

const initializeModel = (modelName: modelNames, schema: Schema) =>
  mongoose.connection.models[modelName]
    ? mongoose.connection.models[modelName]
    : mongoose.model(modelName, schema);

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

const noteSchema = new mongoose.Schema({
  text: String,
  url: String,
});

export const Article = initializeModel("Article", articleSchema);
export const Note = initializeModel("Note", noteSchema);
