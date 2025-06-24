import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, spacing, typography} from '../../theme';
import {ArrowLeft} from 'lucide-react-native';
import MaxWidthContainer from '../../layout/max-width-container';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/ui/input';
import CustomButton from '../../components/ui/button';
import {AuthNavigationProp} from '../../types/navigation.types';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema, TLoginSchema} from '../../schemas/auth/login.schema';

const Login = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const {handleSubmit, control} = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: TLoginSchema) => {
    console.log(data, 'This  is data');
  };

  return (
    <SafeAreaView style={styles.container}>
      <MaxWidthContainer>
        <ArrowLeft onPress={() => navigation.goBack()} />
        <View style={{marginTop: '30%', gap: spacing.md}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/icons/logo.png')}
          />

          <Text style={styles.loginText}>Login To Kalachhetra</Text>

          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}, fieldState: {error}}) => {
              return (
                <CustomInput
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                  error={error?.message}
                />
              );
            }}
          />

          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value}}) => {
              return (
                <View style={{gap: spacing.sm}}>
                  <Text>Password</Text>
                  <CustomInput
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry
                    placeholder="Password"
                  />
                </View>
              );
            }}
          />

          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text>Don't have an account ? </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}>
              <Text>Register</Text>
            </Pressable>
          </View>

          <CustomButton onPress={handleSubmit(onSubmit)} title="Login" />
        </View>
      </MaxWidthContainer>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loginText: {
    fontSize: typography.fontSizes['2xl'],
    fontWeight: typography.fontWeight.bold,
  },
});
