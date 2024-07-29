import React from 'react';
import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';

type QuestionCardProps = {
  question: Question;
  title: string;
  options: string[];
  showAnswer: boolean;
};

export default function QuestionCard({ question, showAnswer }: QuestionCardProps) {
  const correctAnswer = question.correctAnswer;

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            correctAnswer={correctAnswer}
            showAnswer={showAnswer}
          />
        ))}
      </View>
    </Card>
  );
}