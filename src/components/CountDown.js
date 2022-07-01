import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import { fontSize, spacing } from "../utils/sizes";

const minutesToMills = (minutes) => minutes * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, isPaused }) => {
  const interval = React.useRef(null);

  const timeCountDownFunction = () => {
    setMilliSeconds((time) => {
      if (time === 0) {
        //do more stuff here
        return time;
      }
      const timeLeft = time - 1000;
      // update timer progress
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(timeCountDownFunction, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [milliSeconds, setMilliSeconds] = useState(minutesToMills(minutes));

  const minute = Math.floor(milliSeconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliSeconds / 1000) % 60;

  return (
    <View>
      <Text style={styles.textStyle}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontSize.xxxl,
    padding: spacing.lg,
    fontWeight: "bold",
    color: colors.white,
    backgroundColor: "rgba(94,132,226,0.3)",
  },
});
