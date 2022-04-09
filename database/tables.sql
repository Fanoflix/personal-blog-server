CREATE DATABASE personal-blog;

-- Only show suggestions for postgresql syntax

/*
.
.
    USERS
.
.
*/
CREATE TABLE IF NOT EXISTS users (
  _id serial PRIMARY,
  username varchar(255) NOT NULL,
  password_hash varchar(255) NOT NULL,
  email varchar(255) NOT NULL,

  -- TODO: Add current timestamp trigger (have to manually write the trigger in PostgresQL that MySQL handles automatically)
);


/*
.
.
    SURVEYS
.
.
*/

CREATE TABLE IF NOT EXISTS surveys (
  _id serial PRIMARY,
  survey_title varchar(255) UNIQUE NOT NULL,
  instructions varchar(500) NOT NULL,
  other_info varchar(255),
);


/*
.
.
    QUESTIONS
.
.
*/

CREATE TABLE IF NOT EXISTS questions (
  _id serial PRIMARY,
  survey_id int, -- // can be null, for e.g a random question that you wish to add but you are unable to associate it with a survey yet
  type varchar(50) NOT NULL, -- text, textarea, number, multiple
  title varchar(255) NOT NULL,
  subtext varchar(255),
  required boolean NOT NULL,

  ------ Question Quirks ------ (tentative)
  -- opinion_based boolean NOT NULL,
  -- long_answer boolean NOT NULL, -- // for time estimation


  FOREIGN KEY (survey_id) REFERENCES surveys(_id)
);


/*
.
.
    QUESTIONS_CHOICES
.
.
*/

CREATE TABLE IF NOT EXISTS questions_choices (
  _id serial PRIMARY,
  question_id int NOT NULL, -- // not null, because questions_choices cannot exist without the question
  choice_text varchar(255) NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(_id)
);


/*
.
.
    SURVEY_RESPONSES
.
.
*/
CREATE TABLE survey_responses (
  _id serial PRIMARY,
  survey_id int NOT NULL,
  user_id int NOT NULL,

  FOREIGN KEY (survey_id) REFERENCES surveys(_id),
  FOREIGN KEY (user_id) REFERENCES users(_id)
);