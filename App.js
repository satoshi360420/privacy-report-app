import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
// Ensure WebBrowser is correctly imported or defined
import WebBrowser from './WebBrowser'; // Make sure './WebBrowser' exists and exports a valid component
import i18n from './i18n';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.locale = 'en'; // Change this to 'th' for Thai

// Define translations
i18n.translations = {
  en: {
    invalid: 'Invalid',
    enterValidAge: 'Please enter a valid age',
    notice: 'Notice',
    blocked: 'Access blocked',
    welcome: 'Welcome',
    enterAge: 'Enter your age',
    continue: 'Continue',
  },
  th: {
    invalid: 'ไม่ถูกต้อง',
    enterValidAge: 'กรุณากรอกอายุที่ถูกต้อง',
    notice: 'แจ้งเตือน',
    blocked: 'การเข้าถูกบล็อก',
    welcome: 'ยินดีต้อนรับ',
    enterAge: 'กรุณากรอกอายุของคุณ',
    continue: 'ดำเนินการต่อ',
  },
};

export default function App() {
  const [age, setAge] = useState(null);
  const [input, setInput] = useState('');

  const handleStart = () => {
    const num = parseInt(input, 10);
    if (isNaN(num)) {
      Alert.alert(i18n.t('invalid'), i18n.t('enterValidAge'));
    } else {
      if (num < 20) {
        Alert.alert(i18n.t('notice'), i18n.t('blocked'));
      }
      setAge(num);
    }
  };

  if (age !== null) {
    return <WebBrowser age={age} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('welcome')}</Text>
      <TextInput
        style={styles.input}
        placeholder={i18n.t('enterAge')}
        keyboardType="numeric"
        onChangeText={setInput}
      />
      <Button title={i18n.t('continue')} onPress={handleStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

import React from 'react';
import { View, Text } from 'react-native';

export default function WebBrowser({ age }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Access granted for age: {age}</Text>
    </View>
  );
}
