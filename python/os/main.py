# Operational System (os)

import os

# Directories
os.chdir('libs/os')  # Change the cwd
os.getcwd()  # Get the cwd
os.listdir()  # Returns a list of everything inside cwd
os.makedirs('auto-2/auto-3')  # Creates many directories
os.mkdir('auto-1')  # Creates a directory
os.rmdir('auto-1')  # Remove a directory

# Files
os.remove('sets.py')  # Remove a file
os.rename('lists.py', 'arrays.py')  # Rename a file
os.startfile('strings.py')  # Open a file
