def capitalize_words(input_string):
    # Convert the string to a list of words
    words = input_string.split()
    
    # Using a dictionary to hold the words and their capitalized versions
    capitalized_words = {word: word.capitalize() for word in words}
    
    # Join the capitalized words back into a single string
    return ' '.join(capitalized_words.values())

# Example usage
input_string = input("Enter a string: ")
result = capitalize_words(input_string)
print(result)