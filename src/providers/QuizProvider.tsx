import { 
    PropsWithChildren, 
    useState, 
    useEffect, 
    createContext, 
    useContext 
} from 'react';
import questions from '../questions60';
import { Question } from '../types';

type QuizContext = {
    question?: Question;
    questionIndex: number;
    onNext: () => void;
    onPrevious: () => void;
    selectedOption?: string;
    setSelectedOption: (option: string) => void;
    score: number;
    totalQuestions: number;
    passedQuiz?: boolean;
    isFinished?: boolean;
    bestscore?: number;
    showAnswer: boolean;
    setShowAnswer: (value: boolean) => void;
}

const QuizContext = createContext<QuizContext>({
    questionIndex: 0,
    onNext: () => {},
    onPrevious: () => {},
    setSelectedOption: () => {},
    score: 0,
    totalQuestions: 0,
    passedQuiz: false,
    isFinished: false,
    showAnswer: false,
    setShowAnswer: () => {},
});

export default function QuizProvider({ children }: PropsWithChildren<{}>) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const [score, setScore] = useState(0);
    const [passedQuiz, setPassedQuiz] = useState(false);
    const [usedQuestions, setUsedQuestions] = useState<Question[]>([]);
    const [showAnswer, setShowAnswer] = useState(false); // Add showAnswer state

    const question = selectedQuestions[questionIndex];
    const isFinished = questionIndex >= selectedQuestions.length;
    const [bestscore, setBestScore] = useState(0);

    const getRandomQuestions = (questions: Question[], numQuestions: number, exclude: Question[]): Question[] => {
        const filteredQuestions = questions.filter(q => !exclude.some(eq => eq.title === q.title));
        const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    }

    const calculateScore = () => {
        if ((score / selectedQuestions.length) >= 0.7) {
            setPassedQuiz(true);
        } else {
            setPassedQuiz(false);
        }
    };

    useEffect(() => {
        if (isFinished === true && score > bestscore) {
            setBestScore(score);
        }
    }, [isFinished]);

    const restart = () => {
        const newQuestions = getRandomQuestions(questions, 5, usedQuestions);
        setSelectedQuestions(newQuestions);
        setUsedQuestions((prevUsed) => [...prevUsed, ...newQuestions]);
        setQuestionIndex(0);
        setScore(0);
        setPassedQuiz(false);
        setShowAnswer(false); // Reset showAnswer
    }

    useEffect(() => {
        const newQuestions = getRandomQuestions(questions, 5, usedQuestions);
        setSelectedQuestions(newQuestions);
        setUsedQuestions((prevUsed) => [...prevUsed, ...newQuestions]);

        return () => {
            console.log('cleanup new questions');
        }
    }, []);

    useEffect(() => {
        console.log('showAnswer from Qprovider:', showAnswer);
    }, [showAnswer]);

    useEffect(() => {
        if (questionIndex >= selectedQuestions.length) {
            calculateScore();
        }

        return () => {
            console.log('cleanup up scoring');
        }

    }, [questionIndex, selectedQuestions.length, score, setBestScore]);

    const onNext = () => {
        if (selectedOption === question?.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        if (questionIndex < selectedQuestions.length - 1) {
            setQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            if (isFinished) {
                restart();
            } else {
                setQuestionIndex((prevIndex) => prevIndex + 1);
            }
        }

        // Reset showAnswer and selectedOption when moving to the next question
        setShowAnswer(false);
        setSelectedOption(undefined);
    };

    const onPrevious = () => {
        if (questionIndex > 0) {
            setQuestionIndex((prevIndex) => prevIndex - 1);
            setShowAnswer(false); // Reset showAnswer
            setSelectedOption(undefined); // Clear the selected option
        }
    };

    return (
        <QuizContext.Provider 
            value={{ 
                question, 
                questionIndex, 
                onNext, 
                onPrevious, 
                selectedOption,
                setSelectedOption,
                score,
                totalQuestions: selectedQuestions.length,
                passedQuiz,
                isFinished: isFinished,
                bestscore,
                showAnswer, // Add showAnswer to the context
                setShowAnswer, // Add setShowAnswer to the context
            }}
        >
            {children}
        </QuizContext.Provider>
    );   
}

export const useQuizContext = () => useContext(QuizContext);