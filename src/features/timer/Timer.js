import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Countdown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";
import { fontSize, spacing } from "../../utils/sizes";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Countdown isPaused={!isStarted} />
      </View>
      <View>
        <Text style={styles.titleText}>Focusing on:</Text>
        <Text style={styles.taskText}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton
          title="start"
          size={50}
          onPress={() => {
            setIsStarted(true);
          }}
        />
        <RoundedButton
          title="stop"
          size={50}
          onPress={() => {
            setIsStarted(false);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.xxl,
  },
  titleText: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSize.md,
  },
  taskText: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSize.md,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.lg,
  },
});
