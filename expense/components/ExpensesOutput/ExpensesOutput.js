import { View, Text, FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-01-20"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 79.99,
    date: new Date("2023-01-21"),
  },
  {
    id: "e3",
    description: "A pair of hat",
    amount: 29.99,
    date: new Date("2022-12-20"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 19.99,
    date: new Date("2023-01-07"),
  },
  {
    id: "e5",
    description: "A mouse",
    amount: 29.99,
    date: new Date("2023-01-23"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
