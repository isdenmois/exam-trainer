export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Schema = {
  query?: Maybe<Query>;
  mutation?: Maybe<Mutation>;
};

export type Query = {
  exam?: Maybe<Exam>;
  exams?: Maybe<Array<Maybe<Exam>>>;
  topic?: Maybe<Topic>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};


export type QueryExamArgs = {
  id: Scalars['ID'];
};


export type QueryTopicArgs = {
  id: Scalars['ID'];
};


export type QueryTopicsArgs = {
  examId: Scalars['ID'];
};

export type Mutation = {
  addExam: Exam;
  addTopic: Topic;
};


export type MutationAddExamArgs = {
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type MutationAddTopicArgs = {
  examId: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  questions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Exam = {
  id: Scalars['ID'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Topic = {
  id: Scalars['ID'];
  examId: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  questions?: Maybe<Array<Maybe<Scalars['String']>>>;
};
