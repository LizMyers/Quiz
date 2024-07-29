import { ComponentProps, ReactNode } from 'react';
import { Text, View, StyleSheet, Pressable} from 'react-native'

type CustomButton = {
    title: string;
    rightArrowIcon?: ReactNode;
    leftArrowIcon?: ReactNode;
    disabled?: boolean;
} & ComponentProps<typeof Pressable>;

const CustomButton = ({ 
    title, 
    rightArrowIcon, 
    leftArrowIcon,
    disabled,
    ...pressableProps
}: CustomButton) => {
    return (
        <Pressable { ...pressableProps } style={[styles.button, { backgroundColor: disabled ? 'gray' : '#005505'}]}>
            <Text style={[styles.buttonText, { color: disabled ? 'darkgray' : 'white' } ]}>{title}</Text>
            {leftArrowIcon && 
                <View style={styles.leftArrowIcon}>
                    {leftArrowIcon}
                </View>
            }
            {rightArrowIcon && 
                <View style={styles.rightArrowIcon}>
                    {rightArrowIcon}
                </View>
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#005055',
        padding: 20,
        borderRadius: 100,
        marginTop: -10,
        justifyContent: 'center',
        width: '48%',
        //drop shadow for ios and android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

      },
      buttonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        letterSpacing: 1.5,
      },
      rightArrowIcon: {
        position: 'absolute',
        right: 30,
      },
      leftArrowIcon: {
        position: 'absolute',
        left: 30,
      },
})

export default CustomButton