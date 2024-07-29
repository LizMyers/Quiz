import React, { useEffect } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { useQuizContext } from '../providers/QuizProvider';

type AnswerOptionProps = {
  option: string;
  correctAnswer: string;
  showAnswer: boolean;
};

export default function AnswerOption({ option, correctAnswer, showAnswer }: AnswerOptionProps) {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = option === selectedOption;
 
  useEffect(() => {
  }, [showAnswer]);

  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
      style={[
        styles.container,
        isSelected && {
          backgroundColor: 'gold',
          borderColor: 'yellow',
          borderWidth: 3,
        },
        showAnswer && option === correctAnswer && {
          borderColor: 'orange',
          borderWidth: 3,
          backgroundColor: 'orange',
        },
      ]}
    >
      <Text style={styles.answerOption}>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
    padding: 20,
  },
  answerOption: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
  },
});