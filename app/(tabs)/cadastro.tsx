import Button from "@/components/Button";
import Input from "@/components/Input";
import { Switch, Text, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import useCadastro from "@/hooks/useCadastro";

const Cadastro = () => {
  const { isChecked, togglePasswordVisibility } = useCadastro();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Cadastre-se!</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input placeholder="Nome" keyboardType="default" />
          <Input placeholder="E-mail" keyboardType="default" />
          <Input 
            placeholder="Senha" 
            secureTextEntry={!isChecked}
            keyboardType="default" 
          />
          <Input 
            placeholder="Confirmar senha" 
            secureTextEntry={!isChecked}
            keyboardType="default" 
          />
          <View style={styles.showPasswordContainer}>
            <Text style={styles.showPasswordLabel}>Mostrar senha</Text>
            <Switch
              value={isChecked}
              onValueChange={togglePasswordVisibility}
              thumbColor={isChecked ? Colors.green : "#767577"}
              trackColor={{ false: Colors.white, true: Colors.white }}
            />
          </View>
          <Button text="Cadastrar" />
        </View>
        <Text style={styles.textGoToLogin}>
          Já tem uma conta? <Link href="/" style={styles.link}>Entre</Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    color: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  inputContainer: {
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  showPasswordContainer: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  showPasswordLabel: {
    color: Colors.white,
  },
  textGoToLogin: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  link: {
    color: Colors.green,
  },
});

export default Cadastro;
