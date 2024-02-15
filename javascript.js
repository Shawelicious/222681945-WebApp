function generateUniqueCode() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  // Call this function to generate a unique code and set it to a form field
  document.getElementById('yourFormFieldId').value = generateUniqueCode();