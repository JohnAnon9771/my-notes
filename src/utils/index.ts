function isValidEmail(email: string): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
}

function isValidPassword(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)
}

// is valid input (password and email)
export function isValidInput(input: string, type: string): boolean {
  if (input) {
    switch (type) {
      case 'email':
        return isValidEmail(input)
      case 'password':
        return isValidPassword(input)
      default:
        return true
    }
  }
  return true
}
