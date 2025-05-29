// Core types for the Robux Tax Calculator

export interface CalculatorState {
  sellingPrice: string;
  netEarnings: string;
  desiredEarnings: string;
  requiredPrice: string;
}

export interface CalculationResult {
  value: number;
  formatted: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface CalculatorInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helpText?: string;
}

export interface CalculatorResultProps {
  label: string;
  value: string;
  className?: string;
}
