import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 验证手机号格式
  const validatePhone = (phoneNumber: string) => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  // 验证密码格式
  const validatePassword = (pwd: string) => {
    return pwd.length >= 6;
  };

  // 处理登录逻辑
  const handleLogin = async () => {
    try {
      // 重置错误状态
      setError('');

      // 表单验证
      if (!phone || !password) {
        Alert.alert('提示', '请输入手机号和密码');
        return;
      }

      if (!validatePhone(phone)) {
        Alert.alert('提示', '请输入正确的手机号');
        return;
      }

      if (!validatePassword(password)) {
        Alert.alert('提示', '密码至少需要6个字符');
        return;
      }

      // 设置加载状态
      setIsLoading(true);

      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 这里添加实际的登录API调用
      // const response = await loginAPI(phone, password);
      
      // 模拟登录成功
      Alert.alert('成功', '登录成功！');
      
      // 这里可以添加登录成功后的导航逻辑
      // navigation.navigate('Home');

    } catch (err) {
      setError(err instanceof Error ? err.message : '登录失败，请重试');
      Alert.alert('错误', error || '登录失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ThemedView style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/fit-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="手机号"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="密码"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ThemedText style={styles.loginButtonText}>登录</ThemedText>
          )}
        </TouchableOpacity>

        {/* Additional Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <ThemedText style={styles.optionText}>手机号登录</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedText style={styles.optionText}>找回密码</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Alternative Login Methods */}
        <View style={styles.alternativeContainer}>
          <TouchableOpacity style={styles.alternativeButton}>
            <Image
              source={require('@/assets/images/fit-logo.png')}
              style={styles.alternativeIcon}
            />
            <ThemedText style={styles.alternativeText}>微信扫码登录</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    paddingHorizontal: 30,
    gap: 20,
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#07C160',
    marginHorizontal: 30,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
  optionText: {
    color: '#576B95',
    fontSize: 14,
  },
  alternativeContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  alternativeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  alternativeIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  alternativeText: {
    color: '#576B95',
    fontSize: 14,
  },
  loginButtonDisabled: {
    backgroundColor: '#92c7a9',
  },
});