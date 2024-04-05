import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ir para Tela 1" onPress={() => navigation.navigate('Tela1')} />
      <Button title="Ir para Tela 2" onPress={() => navigation.navigate('Tela2')} />
    </View>
  );
}

// Componente MessageItem para renderizar cada mensagem
const MessageItem = ({ text, sender, time }) => (
  <View style={[styles.message, sender === 'me' ? styles.myMessage : styles.otherMessage]}>
    <Text style={styles.messageText}>{text}</Text>
    <Text style={styles.messageTime}>{time}</Text>
  </View>
);

// Componente Chat para exibir a conversa
const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: text,
        sender: 'me',
        time: new Date().toLocaleTimeString().slice(0, 5),
      };
      setMessages([...messages, newMessage]);
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer} ref={ref => (this.scrollView = ref)} onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
        {messages.map((msg) => (
          <MessageItem key={msg.id} text={msg.text} sender={msg.sender} time={msg.time} />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="Escreva sua mensagem..." />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    padding: 10,
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default Chat;