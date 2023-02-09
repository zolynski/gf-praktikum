/// <reference types="react-scripts" />

// ====================================================
// GraphQL query operation: ExampleData
// ====================================================

export interface ExampleData_questions_stream_latestByTag_questions_questionTags_tag {
  id: number;
  name: string;
  slug: string;
  questionFrequency: number;
}

export interface ExampleData_questions_stream_latestByTag_questions_questionTags {
  tag: ExampleData_questions_stream_latestByTag_questions_questionTags_tag | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_stats_impressions {
  total: number | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_stats {
  impressions: ExampleData_questions_stream_latestByTag_questions_stats_impressions;
}

export interface ExampleData_questions_stream_latestByTag_questions_poll_choices {
  id: number;
  index: number;
  text: string;
  voteCount: number;
}

export interface ExampleData_questions_stream_latestByTag_questions_poll {
  choices: ExampleData_questions_stream_latestByTag_questions_poll_choices[];
}

export interface ExampleData_questions_stream_latestByTag_questions_author_avatar_urls {
  /**
   * 120x120 size
   */
  nmmslarge: string;
}

export interface ExampleData_questions_stream_latestByTag_questions_author_avatar {
  urls: ExampleData_questions_stream_latestByTag_questions_author_avatar_urls;
}

export interface ExampleData_questions_stream_latestByTag_questions_author {
  id: number;
  displayedName: string;
  slug: string;
  avatar: ExampleData_questions_stream_latestByTag_questions_author_avatar | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_author_avatar_urls {
  /**
   * 120x120 size
   */
  nmmslarge: string;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_author_avatar {
  urls: ExampleData_questions_stream_latestByTag_questions_answers_author_avatar_urls;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_author {
  id: number;
  displayedName: string;
  slug: string;
  avatar: ExampleData_questions_stream_latestByTag_questions_answers_author_avatar | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_userSatisfaction_counts {
  positive: number;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_userSatisfaction {
  counts: ExampleData_questions_stream_latestByTag_questions_answers_userSatisfaction_counts;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_comments_author_avatar_urls {
  /**
   * 120x120 size
   */
  nmmslarge: string;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_comments_author_avatar {
  urls: ExampleData_questions_stream_latestByTag_questions_answers_comments_author_avatar_urls;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_comments_author {
  id: number;
  displayedName: string;
  slug: string;
  avatar: ExampleData_questions_stream_latestByTag_questions_answers_comments_author_avatar | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers_comments {
  id: number;
  htmlBody: string;
  voteCount: number;
  author: ExampleData_questions_stream_latestByTag_questions_answers_comments_author | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_answers {
  id: number;
  htmlBody: string;
  author: ExampleData_questions_stream_latestByTag_questions_answers_author | null;
  userSatisfaction: ExampleData_questions_stream_latestByTag_questions_answers_userSatisfaction;
  comments: ExampleData_questions_stream_latestByTag_questions_answers_comments[];
}

export interface ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question_author_avatar_urls {
  /**
   * 120x120 size
   */
  nmmslarge: string;
}

export interface ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question_author_avatar {
  urls: ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question_author_avatar_urls;
}

export interface ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question_author {
  id: number;
  displayedName: string;
  slug: string;
  avatar: ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question_author_avatar | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question {
  id: number;
  title: string;
  htmlBody: string;
  author: ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question_author | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_recommendedQuestions {
  question: ExampleData_questions_stream_latestByTag_questions_recommendedQuestions_question | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_category_category {
  id: number;
  name: string;
  slug: string;
  color: string | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_category_parentCategories {
  id: number;
  name: string;
  slug: string;
  color: string | null;
}

export interface ExampleData_questions_stream_latestByTag_questions_category {
  category: ExampleData_questions_stream_latestByTag_questions_category_category;
  /**
   * Ancestors ordered closest to furthest away from the category itself.
   */
  parentCategories: ExampleData_questions_stream_latestByTag_questions_category_parentCategories[];
}

export interface ExampleData_questions_stream_latestByTag_questions {
  id: number;
  slug: string;
  title: string;
  htmlBody: string;
  questionTags: ExampleData_questions_stream_latestByTag_questions_questionTags[];
  stats: ExampleData_questions_stream_latestByTag_questions_stats | null;
  createdAt: OffsetDateTime;
  latestActivityAt: OffsetDateTime;
  upvotes: number | null;
  resubmissionCount: number | null;
  poll: ExampleData_questions_stream_latestByTag_questions_poll | null;
  author: ExampleData_questions_stream_latestByTag_questions_author | null;
  /**
   * Amount of answers this question has. Count does depend on user permissions but does *not* consider answer quality.
   */
  answerCount: number;
  answers: ExampleData_questions_stream_latestByTag_questions_answers[];
  seoRelevancy: SeoRelevancy;
  /**
   * Question recommendations, former known as related questions
   */
  recommendedQuestions: ExampleData_questions_stream_latestByTag_questions_recommendedQuestions[] | null;
  /**
   * Category assigned to this question
   */
  category: ExampleData_questions_stream_latestByTag_questions_category | null;
}

export interface ExampleData_questions_stream_latestByTag {
  totalCount: number;
  questions: ExampleData_questions_stream_latestByTag_questions[];
}

export interface ExampleData_questions_stream {
  /**
   * Returns the latest questions for the tag
   */
  latestByTag: ExampleData_questions_stream_latestByTag;
}

export interface ExampleData_questions {
  /**
   * Namespace for all question streams (listings that use cursors)
   */
  stream: ExampleData_questions_stream;
}

export interface ExampleData {
  /**
   * Namespace for questions queries
   */
  questions: ExampleData_questions;
}
