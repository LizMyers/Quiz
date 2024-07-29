import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import QuizScreen from './src/app/QuizScreen';
import QuizContextProvider from './src/providers/QuizProvider';
import questions from './src/questions';

export default function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  return (
    <>
      <QuizContextProvider>
        <QuizScreen />
      </QuizContextProvider>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
