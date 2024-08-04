import { StyleSheet, Text, View, Button,Image } from "react-native";
import React, { useState, useEffect } from "react";
import flashcardsData from "./QA";
import Test from '../assets/Test.png';

//const Permit_Test = () => {
//   const [ExamDisplay, setExamDisplay] = useState([]);
//   const [ShowAnswer, setShowAnswer] = useState(False);
//   return (
//     <View>
//       <Text>{ExamDisplay}</Text>
//     </View>
//   )
// }

const Permit_Test = () => {
  const [flashcards, setFlashcards] = useState(flashcardsData);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const flashcardKeys = Object.keys(flashcards);
  const currentCardKey = flashcardKeys[currentCardIndex];
  const currentCard = currentCardKey; // Change this line
  const currentAnswer = flashcards[currentCardKey]; // New line

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcardKeys.length);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) =>
        (prevIndex - 1 + flashcardKeys.length) % flashcardKeys.length
    );
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle}source={Test}></Image>
      {!showAnswer && (<Text style={styles.headerText}>Question</Text>)}
      {showAnswer && (<Text style={styles.headerText}>Answer</Text>)}
      <View style={styles.Card}>
        {!showAnswer && (
          <View style={styles.QuestionCard}>
            <Text style={styles.QuestionText}>{currentCard}</Text>
          </View>
        )}
        {showAnswer && (
          <View style={styles.AnswerCard}>
            <Text style={styles.answerText}>{currentAnswer}</Text>
          </View>
        )}
      </View>

      <Button
        title={showAnswer ? "Hide Answer" : "Show Answer"}
        onPress={toggleAnswer}
      />
      <Button title="Next Card" onPress={nextCard} />
      <Button title="Previous Card" onPress={prevCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: '20',

  },
  QuestionCard: {
    backgroundColor: "#E0D7FF",
    padding: '3%',
    margin: '1%'
  },

  imageStyle: {
    resizeMode: 'fill',
    height: '30%',
    width: '50%',
  },

  Card: {
    justifyContent: 'center',
    height: '20%',
  },

  AnswerCard: {
    backgroundColor: "#FAFFC7",
    padding: '3%',
    margin: '1%'
  },

  QuestionText: {
    fontWeight: 'bold',
    fontWeight: "bold",
  },

  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  answerText: {
    fontStyle: "italic",
    color: "green",
    fontWeight: "bold",
  },
});

export default Permit_Test;
