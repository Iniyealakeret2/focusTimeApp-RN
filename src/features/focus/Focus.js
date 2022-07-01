import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";
import { fontSize, spacing } from "../../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}>What would you like to focus on?</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputStyle}
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="Add"
            onPress={() => {
              addSubject(tempItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: "center",
    padding: spacing.md,
  },
  textStyle: {
    color: colors.white,
    fontSize: fontSize.lg,
    fontWeight: "bold",
  },
  textInputContainer: {
    flexDirection: "row",
    paddingTop: spacing.md,
    alignItems: "center",
  },
  textInputStyle: {
    flex: 1,
    marginRight: spacing.md,
  },
});
