import React from 'react';
import { View } from 'react-native';
import { G, Circle, Svg } from 'react-native-svg';

export default function Feed() {
  const sera = 2 * Math.PI * 45;
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Svg height="100" width="100">
        <G rotation={-90} origin={[50, 50]}>
          <Circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            strokeWidth="5"
            stroke="pink"
            strokeOpacity={0.2}
          />
          <Circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            strokeWidth="5"
            stroke="blue"
            strokeDasharray={sera}
            strokeDashoffset={sera * 0.50}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
}