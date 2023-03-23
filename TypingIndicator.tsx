import * as React from "react";
import { Animated, StyleSheet } from "react-native";
import { TypingAnimation } from "react-native-typing-animation";
import { useUpdateLayoutEffect } from "react-native-gifted-chat/lib/hooks/useUpdateLayoutEffect";
import Variable from "../utils/Variable";

interface Props {
  isTyping?: boolean;
}

const TypingIndicator = ({ isTyping }: Props) => {
  const { yCoords, heightScale, marginScale } = React.useMemo(
    () => ({
      yCoords: new Animated.Value(200),
      heightScale: new Animated.Value(0),
      marginScale: new Animated.Value(0),
    }),
    []
  );

  // on isTyping fire side effect
  useUpdateLayoutEffect(() => {
    if (isTyping) {
      slideIn();
    } else {
      slideOut();
    }
  }, [isTyping]);

  // side effect
  const slideIn = () => {
    Animated.parallel([
      Animated.spring(yCoords, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(heightScale, {
        toValue: 35,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(marginScale, {
        toValue: 8,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  // side effect
  const slideOut = () => {
    Animated.parallel([
      Animated.spring(yCoords, {
        toValue: 200,
        useNativeDriver: false,
      }),
      Animated.timing(heightScale, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(marginScale, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: yCoords,
            },
          ],
          height: heightScale,
          marginBottom: marginScale,
        },
      ]}
    >
      {isTyping ? (
        <TypingAnimation
          style={styles.dotStyle}
          dotRadius={4}
          dotMargin={5.5}
          dotColor={"rgba(0, 0, 0, 0.38)"}
        />
      ) : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: Variable.horizontalScale(70),
    paddingHorizontal: Variable.horizontalScale(10),
    borderTopLeftRadius: Variable.verticalScale(20),
    borderTopRightRadius: Variable.verticalScale(20),
    borderBottomLeftRadius: Variable.verticalScale(0),
    borderBottomRightRadius: Variable.verticalScale(20),
    backgroundColor: Variable.colors.chatInputColor,
  },
  dotStyle: {
    marginLeft: 6,
    marginTop: 6,
  },
});

export default TypingIndicator;
