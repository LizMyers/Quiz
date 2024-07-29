import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import FontAwesome6 from '@expo/vector-icons/build/FontAwesome6';
import { useQuizContext } from '../providers/QuizProvider';

export default function QuizScreen() {
  const {
    question, 
    questionIndex, 
    onNext, 
    onPrevious, 
    score, 
    totalQuestions,
    passedQuiz,
    isFinished,
    bestscore,
    showAnswer,
    setShowAnswer,
  } = useQuizContext();

 

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          {questionIndex <= totalQuestions - 1 && (
            <>
              <Text style={styles.title}>Question {questionIndex + " of " + totalQuestions}</Text>
              {/* <Text style={styles.score}>{"Correct Answers: " + score}</Text> */}
            </>
          )}
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard 
              title={question.title} 
              options={question.options} 
              question={question} 
              showAnswer={showAnswer}
            />
            <Pressable
              onPress={() => setShowAnswer(true)}
              style={styles.checkAnswerButton}
            >
              <Text style={styles.buttonText}>Check Answer</Text>
            </Pressable>
          </View>
        ) : (
          <Card title="Quiz Complete">
            {passedQuiz ? (
              <>
                <Text>Congratulations! You passed the quiz!</Text>
                <Text>You got {score} out of {totalQuestions} right!</Text>
                <Text style={{color: 'black'}}>Best Score: {bestscore}</Text>
              </>
            ) : (
              <>
                <Text>Sorry! You failed the quiz!</Text>
                <Text>You got {score} out of {totalQuestions} right!</Text>
                <Text>Best Score: {bestscore}</Text>
              </>
            )}
          </Card>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <CustomButton 
            title="back" 
            onPress={onPrevious}
            disabled={questionIndex <= 0}
            leftArrowIcon={
              <FontAwesome6 
                name="arrow-left" 
                size={24} 
                color={questionIndex > 0 ? "white" : "darkgray"} 
              />
            }
          />
          <CustomButton 
            title={questionIndex >= totalQuestions - 1 ? "restart" : "next"}
            onPress={onNext} // Use onNext directly as it now handles reset logic
            rightArrowIcon={
              <FontAwesome6 
                name="arrow-right" 
                size={24} 
                color="white"  
              />
            }  
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { 
    flex: 1, 
  },
  container: {
    flex: 1, 
    justifyContent: 'space-between', 
    padding: 20,
    backgroundColor: '#FDFEF4',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#005055'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#005055'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkAnswerButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});