// src/presentation/components/ErrorBoundary.tsx
import React from "react";
import { Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <View style={{ padding: 20 }}>
            <Text style={{ color: "red" }}>Ocurrió un error inesperado.</Text>
            <Text>{this.state.error?.message}</Text>
          </View>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
