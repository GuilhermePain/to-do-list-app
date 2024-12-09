import Button from "@/components/Button";
import Input from "@/components/Input";
import { View, Text, StyleSheet, Switch } from "react-native"
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import useLogin from "@/hooks/useLogin";

const index = () => {
  const { isChecked, togglePasswordVisibility } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem-vindo!</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="E-mail"
            keyboardType="default"
          />
          <Input
            placeholder="Senha"
            secureTextEntry={!isChecked}
            keyboardType="default"
          />
          <View style={styles.showPasswordContainer}>
            <Text style={styles.showPasswordLabel}>Mostrar senha</Text>
            <Switch
              value={isChecked}
              onValueChange={togglePasswordVisibility}
              thumbColor={isChecked ? Colors.green : Colors.darkGreen}
              trackColor={{ false: Colors.white, true: Colors.white }}
            />
          </View>
          <Button text="Entrar" />
        </View>
        <Text style={styles.textGoToSignup}>
          Não tem uma conta ainda? <Link href="/(tabs)/cadastro" style={styles.link}>Cadastre-se</Link>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    color: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  title: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold"
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
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
  textGoToSignup: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    marginTop: 20
  },
  link: {
    color: Colors.green
  }
});
export default index 