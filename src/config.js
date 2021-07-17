const PORT = process.env.PORT || 4004;

const DB_NAME = "workout";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

module.exports = {
  PORT,
  DB_URL,
  MONGOOSE_OPTIONS,
};
