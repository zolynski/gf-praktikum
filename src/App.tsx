import React from 'react';
import './App.css';

import exampleData from './data/sample.json';
import {Header} from "./components/header/header";
import {Content} from "./components/content/content";
import {ExampleData, ExampleData_questions_stream_latestByTag_questions} from "./react-app-env";

/**
 * Type alias for generated question type.
 */
type Question = ExampleData_questions_stream_latestByTag_questions;

/**
 * List of 100 example questions including answers and comments.
 */
const questions: Question[] = ((exampleData as unknown) as ExampleData).questions.stream.latestByTag.questions;

/**
 * Component showing a list of questions
 */
export const Listing: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header/>
      <Content>
        Füll mich mit Inhalt!<br/>
        Anzahl an Fragen: {questions.length}
      </Content>
    </div>
  );
}
