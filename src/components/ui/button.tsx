import React from 'react';
import {Pressable, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

type Variant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';
type Size = 'default' | 'sm' | 'lg' | 'icon';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const variantStyles: Record<Variant, ViewStyle> = {
  default: {
    backgroundColor: '#3b82f6', // primary
  },
  destructive: {
    backgroundColor: '#ef4444', // red-500
  },
  outline: {
    borderWidth: 1,
    borderColor: '#d1d5db', // gray-300
    backgroundColor: '#ffffff',
  },
  secondary: {
    backgroundColor: '#e5e7eb', // gray-200
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
};

const sizeStyles: Record<Size, ViewStyle> = {
  default: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  lg: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  icon: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
};

const textStyles: Record<Variant, TextStyle> = {
  default: {color: '#ffffff'},
  destructive: {color: '#ffffff'},
  outline: {color: '#111827'},
  secondary: {color: '#111827'},
  ghost: {color: '#111827'},
  link: {color: '#3b82f6', textDecorationLine: 'underline'},
};

export const CustomButton: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  children,
  disabled = false,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        variantStyles[variant],
        sizeStyles[size],
        disabled && styles.disabled,
        style,
      ]}>
      <Text style={[styles.textBase, textStyles[variant], textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    fontSize: 14,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
});
